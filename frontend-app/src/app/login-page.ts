import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  protected isRegister = false;
  protected showPassword = false;
  protected loading = false;
  protected consent = false;
  protected username = '';
  protected email = '';
  protected password = '';
  protected error = '';
  protected notice = '';

  protected setMode(register: boolean): void {
    this.isRegister = register;
    this.error = '';
    this.notice = '';
  }

  protected submit(): void {
    this.error = '';
    this.notice = '';
    this.loading = true;

    if (this.isRegister) {
      this.http.post<{ message: string }>('/api/auth/register', {
        username: this.username,
        email: this.email,
        password: this.password,
      }).subscribe({
        next: (response) => {
          this.notice = response.message || 'Kayıt başarıyla tamamlandı. Şimdi giriş yapabilirsin.';
          this.setMode(false);
          this.notice = response.message || 'Kayıt başarıyla tamamlandı. Şimdi giriş yapabilirsin.';
          this.password = '';
          this.loading = false;
        },
        error: (response: HttpErrorResponse) => this.handleError(response),
      });
      return;
    }

    this.http.post<{ token: string }>('/api/auth/login', {
      email: this.email,
      password: this.password,
    }).subscribe({
      next: (response) => {
        if (response.token) localStorage.setItem('omernet_token', response.token);
        this.loading = false;
        void this.router.navigateByUrl('/home');
      },
      error: (response: HttpErrorResponse) => this.handleError(response),
    });
  }

  private handleError(response: HttpErrorResponse): void {
    this.loading = false;
    if (response.status === 0) this.error = 'Sunucuya ulaşılamadı. API bağlantısını kontrol et.';
    else if (response.status === 401) this.error = 'E-posta veya şifre hatalı.';
    else if (Array.isArray(response.error)) this.error = response.error.map((item: { description?: string }) => item.description).filter(Boolean).join(' ');
    else this.error = response.error?.message || 'İşlem tamamlanamadı. Bilgilerini kontrol edip tekrar dene.';
  }
}

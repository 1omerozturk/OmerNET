import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  template: `
    <main class="home-shell">
      <header class="home-header">
        <a class="brand" href="/home"
          ><span class="brand-mark">O</span><span>omer<span class="brand-light">net</span></span></a
        >
        <button class="logout" type="button" (click)="logout()">Çıkış yap <span>↗</span></button>
      </header>
      <section class="home-content">
        <span class="home-kicker"><span></span> OMERNET’E HOŞ GELDİN</span>
        <h1>Güzel şeyler<br /><em>buradan</em> başlar.</h1>
        <p>Giriş yaptın. OmerNET’teki kişisel alanın hazır.</p>
        <div class="home-card">
          <span class="card-spark">✳</span>
          <div>
            <strong>Merhaba!</strong>
            <p>Hesabın başarıyla açıldı. Seni burada görmek güzel.</p>
          </div>
          <span class="card-arrow">↗</span>
        </div>
      </section>
      <footer>© 2026 OmerNET <span>Her adımda yanında.</span></footer>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        color: #292637;
      }
      .home-shell {
        min-height: 100vh;
        padding: 34px clamp(24px, 7vw, 100px) 24px;
        display: flex;
        flex-direction: column;
        background: radial-gradient(ellipse at 78% 20%, #f7e6dd 0, transparent 32%), #fbf7f2;
      }
      .home-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #292637;
        text-decoration: none;
        font-size: 20px;
        font-weight: 750;
        letter-spacing: -0.7px;
      }
      .brand-mark {
        display: grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 12px 12px 12px 4px;
        background: #edb39e;
        color: #542f39;
        font:
          700 23px Georgia,
          serif;
      }
      .brand-light {
        color: #a17a7a;
        font-weight: 450;
      }
      .logout {
        border: 1px solid #e9ddd7;
        border-radius: 8px;
        padding: 10px 14px;
        background: #fff9;
        color: #625862;
        font-size: 11px;
        cursor: pointer;
      }
      .logout span {
        margin-left: 10px;
        color: #ae615a;
      }
      .home-content {
        width: min(100%, 620px);
        margin: auto;
        padding: 90px 0;
      }
      .home-kicker {
        display: flex;
        align-items: center;
        gap: 9px;
        color: #a46c67;
        font-size: 10px;
        font-weight: 750;
        letter-spacing: 1.5px;
      }
      .home-kicker span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #d97967;
      }
      h1 {
        margin: 25px 0 17px;
        color: #302c3d;
        font:
          400 clamp(52px, 8vw, 82px)/0.98 Georgia,
          serif;
        letter-spacing: -3px;
      }
      h1 em {
        color: #c66e61;
        font-weight: 400;
      }
      .home-content > p {
        color: #827c80;
        font-size: 14px;
        line-height: 1.7;
      }
      .home-card {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 47px;
        padding: 21px;
        border: 1px solid #f0e4dc;
        border-radius: 13px;
        background: #fff;
        box-shadow: 0 15px 45px #60403a0d;
      }
      .card-spark {
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: #f9e9df;
        color: #be6d60;
        font-size: 22px;
      }
      .home-card strong {
        color: #3c3541;
        font-size: 13px;
      }
      .home-card p {
        margin: 5px 0 0;
        color: #928b8d;
        font-size: 11px;
      }
      .card-arrow {
        margin-left: auto;
        color: #bd7468;
        font-size: 20px;
      }
      footer {
        display: flex;
        justify-content: space-between;
        color: #aaa0a0;
        font-size: 10px;
      }
      @media (max-width: 520px) {
        .home-content {
          padding: 70px 0;
        }
        footer span {
          display: none;
        }
      }
    `,
  ],
})
export class HomePage {
  constructor(private readonly router: Router) {}

  logout(): void {
    localStorage.removeItem('omernet_token');
    void this.router.navigateByUrl('/login');
  }
}

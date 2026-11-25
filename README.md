# OmerNET (.NET 10 Web API & Angular 22)

Bu proje, **ASP.NET Core 10 Web API** (Backend) ve **Angular 22** (Frontend) teknolojileri kullanılarak oluşturulmuş Full-Stack bir web uygulaması şablonudur.

## 🛠 Teknoloji Yığını

* **Backend:** .NET 10.0 (ASP.NET Core Web API)
* **Frontend:** Angular 22.3.0, TypeScript, SCSS
* **Çalışma Ortamı:** Node.js v24.19.0, npm 12.2.3
* **Geliştirme Aracı:** Visual Studio Code

---

## 📋 Ön Gereksinimler

Projeyi farklı bir bilgisayarda çalıştırmadan önce sisteminizde aşağıdaki araçların kurulu olduğundan emin olun:

1. [.NET 10 SDK](https://microsoft.com)
2. [Node.js (v24+)](https://nodejs.org)
3. [Angular CLI](https://angular.dev) (`npm install -g @angular/cli`)
4. [Git](https://git-scm.com)

---

## 🚀 Kurulum (Yeni Bir Cihazda Başlatma)

1. **Projeyi GitHub'dan klonlayın:**
   ```bash
   git clone https://github.com/1omerozturk/OmerNET.git
   cd OmerNET
   ```

2. **Backend (.NET) bağımlılıklarını yükleyin:**
   ```bash
   cd BackendApi
   dotnet restore
   cd ..
   ```

3. **Frontend (Angular) paketlerini yükleyin:**
   ```bash
   cd frontend-app
   npm install
   cd ..
   ```

---

## ▶️ Projeyi Çalıştırma

Uygulamayı geliştirme ortamında ayağa kaldırmak için iki ayrı terminal açarak Backend ve Frontend servislerini eşzamanlı çalıştırın:

### 1. Backend API'yi Başlatma
```bash
cd BackendApi
dotnet watch run
```
*API varsayılan olarak `http://localhost:5123` (veya `launchSettings.json` içinde tanımlı port) üzerinden çalışacaktır.*

### 2. Frontend Uygulamasını Başlatma
```bash
cd frontend-app
ng serve -o
```
*Tarayıcınızda otomatik olarak `http://localhost:4200` adresi açılacaktır. `/api` istekleri `src/proxy.conf.json` üzerinden otomatik olarak Backend'e yönlendirilir.*

---

## 📁 Proje Yapısı

```text
FullStackProje/
├── BackendApi/             # ASP.NET Core 10 Web API projesi
├── frontend-app/           # Angular 22 istemci uygulaması
│   └── src/
│       └── proxy.conf.json # API yönlendirme (CORS bypass) ayarları
├── FullStackProje.sln      # .NET Solution dosyası
├── .gitignore              # Git tarafından yoksayılan dosyalar
└── README.md               # Proje dokümantasyonu
```

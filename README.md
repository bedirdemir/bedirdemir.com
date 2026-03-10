# bedirdemir.com

Kişisel web sitesi. `Nuxt 4 + Nuxt Content + Nuxt Studio` ile çalışır.

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Varsayılan local adres: `http://localhost:3002`

## Nuxt Studio

Studio arayüzü: `/_studio`

### Local kullanım

Localde editör otomatik çalışır. Markdown dosyalarını ve medyaları görsel olarak düzenleyebilirsin.

### Production yayınlama (GitHub OAuth)

`/.env` veya hosting environment değişkenlerine şunları ekle:

```bash
STUDIO_GITHUB_CLIENT_ID=...
STUDIO_GITHUB_CLIENT_SECRET=...
```

Opsiyonel:

```bash
STUDIO_GITHUB_REDIRECT_URL=https://your-domain.com/__nuxt_studio/auth/github
STUDIO_GITHUB_MODERATORS=you@example.com
```

GitHub OAuth App callback URL için önerilen değer:

`https://your-domain.com/__nuxt_studio/auth/github`

## Build

```bash
npm run build
```


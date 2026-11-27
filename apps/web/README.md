# Web Dinus Aspiration

Frontend berbasis [TanStack Start](https://tanstack.com/start) dengan React, TanStack Router (file-based routing), dan Tailwind CSS.

## Menjalankan Secara Lokal

Dari root repo:

```bash
bun install
bun run dev:web
```

Atau dari folder ini:

```bash
bun run dev
```

Web berjalan di http://localhost:3000.

Salin `.env.example` menjadi `.env` lalu isi `API_URL` dengan URL API (contoh: `http://localhost:3001` saat lokal). Build akan gagal jika variabel ini belum diisi.

Di Netlify, tambahkan `API_URL` di Site configuration > Environment variables.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `bun run dev` | Jalankan dev server (port 3000) |
| `bun run build` | Build untuk production |
| `bun run start` | Jalankan hasil build |
| `bun run lint` | Lint dengan Biome |
| `bun run format` | Format dengan Biome |
| `bun run check` | Lint dan format check dengan Biome |
| `bun run typecheck` | Cek tipe TypeScript |

## Struktur Routing

Route ada di `src/routes`. Menambah file baru di folder ini otomatis membuat route baru. Layout utama ada di `src/routes/__root.tsx`.

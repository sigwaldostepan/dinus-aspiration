# API Dinus Aspiration

Backend berbasis [Elysia](https://elysiajs.com) di atas runtime [Bun](https://bun.sh).

## Menjalankan Secara Lokal

Dari root repo:

```bash
bun install
bun run dev:api
```

Atau dari folder ini:

```bash
bun run dev
```

API berjalan di http://localhost:3001 (bisa diubah lewat variabel `PORT`).

Salin `.env.example` menjadi `.env` lalu isi nilainya. Endpoint yang tersedia:

- `GET /`: pengecekan sederhana.
- `GET /health`: cek koneksi database dan S3. Mengembalikan `200` jika keduanya `ok`, atau `503` jika ada yang gagal.

## Deploy ke Netlify

Site Netlify terpisah dengan base directory `apps/api`. Konfigurasi build ada di `netlify.toml` (Node 24).

Atur variabel berikut di Netlify UI (Site configuration > Environment variables). Variabel di `netlify.toml` tidak diteruskan ke function, jadi nilai rahasia tidak boleh ditaruh di file itu:

- `DATABASE_URL`
- `S3_ENDPOINT`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_BUCKET`
- `CORS_ORIGIN`: origin web, dipisah koma atau JSON array (contoh: `["http://localhost:3000","http://localhost:3002"]`).
- `LOG_LEVEL` (opsional)

Migrasi database tidak dijalankan saat deploy. Jalankan manual dengan `drizzle-kit` dari folder ini.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `bun run dev` | Jalankan server dengan watch mode |
| `bun run typecheck` | Cek tipe TypeScript |
| `bun test` | Jalankan test |

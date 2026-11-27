# Dinus Aspiration

Platform digital berbasis web untuk menyampaikan, mengelola, dan memantau aspirasi civitas akademika UDINUS. Fitur utamanya mengelompokkan aspirasi dengan AI (Gemini) menjadi topik, lalu menampilkan Top 10 Topics mingguan dan bulanan.

Detail konteks, role pengguna, fitur, status aspirasi, dan alur bisnis ada di folder [`docs/`](./docs).

## Struktur Repo

- `apps/api`: backend (Elysia di atas Bun), berjalan di port 3001.
- `apps/web`: frontend (TanStack Start + React + Tailwind), berjalan di port 3000.

## Setup Lokal

### Prasyarat

- [Bun](https://bun.sh) versi 1.4.5 (sesuai `packageManager` di `package.json`)
- Git

### Langkah

1. Clone repo dan masuk ke folder proyek:

   ```bash
   git clone <url-repo>
   cd dinus-aspiration
   ```

2. Install dependensi dari root:

   ```bash
   bun install
   ```

3. Jalankan API dan web sekaligus:

   ```bash
   bun run dev
   ```

4. Buka:
   - Web: http://localhost:3000
   - API: http://localhost:3001

### Perintah Lain

| Perintah | Fungsi |
| --- | --- |
| `bun run build` | Build aplikasi web |
| `bun run typecheck` | Cek tipe TypeScript di semua app |
| `bun run check` | Lint dan format check (Biome) untuk web |

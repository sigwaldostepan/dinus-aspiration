# Alur Bisnis dan Prinsip Pengelolaan Sistem

## H. Alur Bisnis Sistem

Proses bisnis utama Dinus Aspiration dapat dijelaskan sebagai berikut:

1. Pengguna melakukan login ke dalam sistem.
2. Pengguna membuat dan mengirimkan aspirasi dengan mengisi judul, deskripsi, kategori, dan lampiran apabila diperlukan.
3. Sistem menyimpan aspirasi dengan status awal "Menunggu Moderasi".
4. Pihak Kampus memeriksa aspirasi yang masuk.
5. Pihak Kampus memutuskan untuk menyetujui, menolak, atau meminta pemeriksaan lebih lanjut.
6. Jika disetujui, aspirasi dipublikasikan sehingga dapat dilihat, didukung, dan dikomentari oleh pengguna lain.
7. Jika ditolak, aspirasi tidak dipublikasikan dan pengirim menerima keterangan penolakan.
8. Jika memerlukan pemeriksaan lebih lanjut, aspirasi tetap menunggu keputusan akhir sampai pihak kampus menyelesaikan pemeriksaan.
9. Aspirasi yang telah dipublikasikan masuk ke dalam proses tindak lanjut pihak kampus.
10. Pihak Kampus memberikan tanggapan resmi dan memperbarui status penanganan.
11. Pengguna dapat memantau perkembangan aspirasi melalui halaman My Aspirations.
12. Secara berkala, sistem mengolah aspirasi yang telah dipublikasikan menggunakan Gemini untuk menghasilkan pengelompokan topik dan Top 10 Topics mingguan maupun bulanan.

## I. Prinsip Pengelolaan Sistem

Agar sistem berjalan dengan baik, Dinus Aspiration menerapkan beberapa prinsip:

- **Sentralisasi:** Aspirasi dikumpulkan melalui satu platform digital.
- **Transparansi:** Pengguna dapat mengetahui status dan perkembangan aspirasi yang mereka kirimkan.
- **Akuntabilitas:** Keputusan penolakan dan tanggapan resmi memiliki keterangan yang dapat ditelusuri.
- **Partisipasi:** Pengguna dapat mendukung dan memberikan komentar terhadap aspirasi yang dipublikasikan.
- **Pengelolaan Terstruktur:** Aspirasi dikelola melalui kategori, status moderasi, dan status penanganan.
- **Pemanfaatan AI:** Pengelompokan aspirasi membantu mengidentifikasi isu yang memiliki kesamaan konteks.
- **Keamanan dan Pembatasan Akses:** Hak akses dibedakan berdasarkan role User dan Pihak Kampus.

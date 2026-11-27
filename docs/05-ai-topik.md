# AI dan Pengelompokan Topik Aspirasi

AI merupakan salah satu komponen utama yang membedakan Dinus Aspiration dari platform pengumpulan aspirasi biasa.

Sistem memanfaatkan LLM Gemini untuk membantu memahami isi teks aspirasi dan mengelompokkan aspirasi berdasarkan kemiripan makna, konteks, atau permasalahan yang dibahas.

Secara umum, prosesnya meliputi:

1. Sistem mengambil data aspirasi yang telah disetujui dan dipublikasikan.
2. Teks aspirasi dipersiapkan dan dikirimkan ke proses analisis AI.
3. Gemini membantu mengidentifikasi kesamaan konteks dan mengelompokkan aspirasi yang memiliki pembahasan serupa.
4. Sistem menghasilkan nama atau label topik yang merepresentasikan kelompok aspirasi.
5. Sistem menghitung jumlah aspirasi dalam setiap kelompok berdasarkan periode mingguan dan bulanan.
6. Sistem mengurutkan kelompok berdasarkan jumlah aspirasi untuk menghasilkan Top 10 Topics.
7. Hasil pengelompokan ditampilkan pada dashboard, halaman Top 10 Topics, dan Topic Detail.

## Contoh Pengelompokan

- "Wi-Fi di Gedung G sangat lambat."
- "Koneksi internet di ruang kelas sering terputus."
- "Jaringan kampus kurang stabil."

Ketiga aspirasi tersebut dapat dikelompokkan ke dalam topik "Kualitas Jaringan Internet Kampus".

Hasil analisis AI berfungsi sebagai informasi pendukung untuk memahami kecenderungan isu yang disampaikan pengguna. AI tidak menggantikan kewenangan pihak kampus dalam memutuskan apakah sebuah aspirasi disetujui, ditolak, atau ditindaklanjuti.

## Perbedaan Kategori Aspirasi dan Topik AI

Kategori aspirasi dan topik hasil pengelompokan AI merupakan dua komponen yang berbeda.

**Kategori Aspirasi** merupakan klasifikasi yang telah disediakan dan dikelola oleh pihak kampus. Kategori digunakan untuk mengelompokkan jenis aspirasi sejak proses pengajuan.

Contoh kategori:

- Akademik.
- Fasilitas Kampus.
- Layanan Administrasi.
- Teknologi dan Sistem Informasi.
- Kegiatan Mahasiswa.
- Lingkungan Kampus.
- Lainnya.

**Topik AI** merupakan kelompok pembahasan yang dihasilkan secara otomatis berdasarkan kemiripan isi atau konteks aspirasi.

Contoh topik AI:

- Kualitas Jaringan Internet Kampus.
- Kenyamanan Ruang Kelas.
- Ketersediaan Fasilitas Perpustakaan.
- Pelayanan Administrasi Akademik.

Dengan demikian, beberapa aspirasi yang memiliki kategori sama belum tentu memiliki topik AI yang sama. Sebaliknya, topik AI dapat mengidentifikasi permasalahan yang serupa dari berbagai aspirasi yang memiliki redaksi berbeda.

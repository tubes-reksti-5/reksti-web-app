# Web App dan API OfficeNexus
## Dibuat oleh:
- Fakhri Putra Mahardika	- 18221080
- Salman Ma'arif Achsien 	- 18221102
- Muhammad Rafi Haidar	    - 18221134
- Kean Nafis Santang		- 18221148
- Raditya Azka Prabaswara	- 18221152

# Deskripsi 
Repositori ini berisi sumber kode program untuk komponen Web App dan API dari sistem OfficeNexus yang telah dikembangkan oleh kelompok 5 K2 II3240 Rekayasa Sistem dan Teknologi Informasi.

# Cara Menjalankan
## Bagian 1: Persiapan dan Instalasi
1. Clone repositori ini ke perangkat komputer Anda.
2. Buatlah sebuah _virtual environment_ baru dengan menjalankan kode berikut terminal CLI Windows:
    > py -m venv venv
    - Pastikan terlebih dahulu Anda sudah memiliki _Python_ yang terinstal. Jika belum, Anda dapat melihat panduan [berikut ini](https://docs.python.org/3/using/windows.html#using-on-windows).
    - Pastikan juga Anda berada pada _root_ dari folder repositori ini sebelum membuat _virtual environment_.
3. Jalankan _virtual environment_ yang baru saja dibuat dengan menggunakan kode berikut:
    > venv/Scripts/activate
4. Lakukan instalasi modul yang diperlukan untuk aplikasi ini dengan menjalankan kode ini:
    > pip install fastapi uvicorn python-multipart Jinja2
    - Modul **fastapi** digunakan untuk mengatur API antara server dan klien.
    - Modul **uvicorn** digunakan untuk menginisiasi server.
    - Modul **python-multipart** digunakan untuk menangani permintaan POST berbentuk form-data dari klien.
    - Modul **Jinja2** digunakan untuk mempermudah routing antara laman-laman HTML.
## Bagian 2: Eksekusi dan Penggunaan
1. Jalankan file main.py dengan menggunakan kode berikut:
    > py main.py
2. Modul uvicorn akan menginisiasi server. Jika tertulis "Application startup complete." ini berarti server telah siap digunakan.
3. Akses IP Address yang muncul pada layar terminal (dalam hal ini bagian 0.0.0.0 dapat digantikan dengan localhost menjadi http://localhost:8000).
4. Anda sudah bisa menggunakan algoritma yang tersedia dan selamat mencoba algoritma RC4 yang sudah kami modifikasi.

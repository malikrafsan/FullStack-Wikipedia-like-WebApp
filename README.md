# Wiki-ARC Networking
Wikipedia-like web app yang minimalis dengan semua orang dapat mengedit tulisan di dalamnya.

# How to Install and Run Web App
Prekondisi:
  * Telah mengintsall NodeJS
  * Telah menginstall XAMPP
  * Telah menginstall Git

Step:
1. Start Apache dan MySQL pada XAMPP
2. Buat folder baru dan buka folder tersebut
3. Klik kanan dan pilih Git Bash here
4. Clone repository
```bash
git clone https://github.com/malikrafsan/TugasDay5-ARC.git
```
5. Arahkan pada folder server
```bash
cd TugasDay5-ARC/server
```
6. Install modul yang diperlukan
```bash
npm install
```
7. Buat database dan tabel baru pada MySQL
Lakukan hanya sekali saja, bila error mungkin file .env pada folder server perlu disesuaikan dengan setting PC Anda
(file .env menggunakan setting default)
```bash
node createDB.js
node createTable.js
```
8. Jalankan program
```bash
npx nodemon app
```

# Fiture
  * Create -> Menambahkan tulisan pada Wiki-ARC
  * Read -> Melihat tulisan yang telah dibuat
  * Update -> Mengubah tulisan yang telah dibuat
  * Delete -> Menghapus tulisan yang telah dibuat

# Creator
| Nama               | NIM     | Job Desc  |
|--------------------|---------|-----------|
| Malik Akbar Hashemi Rafsanjani | 16520299 | Full Stack |

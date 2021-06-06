# Wiki-ARC Networking
---
## Table of Contents
- [Deskripsi](#deskripsi)
- [How to Install and Run Web App](#how-to-install-and-run-web-app)
- [Features](#features)
- [Author](#author)
---
## Deskripsi
- Wiki-ARC merupakan Wikipedia-like web app yang minimalis yang dibuat dengan menggunakan framework NodeJS. Program ini mengusung konsep di mana semua orang dapat membaca, menulis, mengedit, dan menghapus tulisan di dalamnya, sehingga mengimplementasikan seluruh fungsionalitas CRUD. Program ini juga menyediakan tab pencarian untuk mencari tulisan yang ada pada program ini. Program ini ditujukan untuk menampung tulisan mengenai "Networking", layaknya wikipedia. Web app ini menggunakan MySQL sebagai  database management system-nya. 
---
## How to Install and Run Web App
Prekondisi:
  * Telah mengintsall NodeJS
  * Telah menginstall XAMPP
  * Telah menginstall Git

Langkah-langkah:
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
9. Buka localhost:5000 pada browser
10. Web app telah dijalankan dan selamat menikmati program ini :D
---
## Features
  * Create -> Menambahkan tulisan pada Wiki-ARC
  * Read -> Melihat tulisan yang telah dibuat
  * Update -> Mengubah tulisan yang telah dibuat
  * Delete -> Menghapus tulisan yang telah dibuat
---
## Author
| Nama               | NIM     | Job Desc  |
|--------------------|---------|-----------|
| Malik Akbar Hashemi Rafsanjani | 16520299 | Full Stack |

# Exchange Student Website

Internship project for managing exchange student information and discussions.

## Tech Stack

-   Laravel
-   PHP 8.3
-   SQLite / MySQL
-   Vite

## Setup Instructions (หลัง Clone โปรเจกต์)

```bash
# 1. ติดตั้ง dependencies
npm install
composer install


# 2. สร้างไฟล์ .env
copy .env.example .env

# 3. สร้าง Application Key
php artisan key:generate

# 4. สร้างไฟล์ฐานข้อมูล SQLite (ถ้าใช้ SQLite)
type nul > database/database.sqlite

# 5. รัน migrations และ seeders
php artisan migrate --seed

# 6. สร้าง storage link สำหรับรูปภาพ
php artisan storage:link

# 7. รันเซิร์ฟเวอร์
php artisan serve
```

## Default Users (หลังรัน Seeder)

| Name      | Email             | Password |
| --------- | ----------------- | -------- |
| Admin     | admin@example.com | password |
| Test User | test@example.com  | password |

## Run Server (เลือก port)

```bash
# Default port (8000)
php artisan serve

# Custom port
php artisan serve --port=8080
php artisan serve --port=8081
```

## Git Commands

```bash
git add .
git commit -m "update project (latest local version)"
git push origin Indev
```

### รูปภาพข่าวไม่แสดง

```bash
php artisan storage:link
```

### ตรวจสอบโฟลเดอร์รูปภาพ

```bash
dir storage\app\public\news-images
dir public\storage
```

### อัปเดต APP_URL

```powershell
(Get-Content .env) -replace 'APP_URL=http://localhost', 'APP_URL=http://127.0.0.1:8000' | Set-Content .env
```

#FIX
add php.ini

+post_max_size = 256M
+upload_max_filesize = 200M
+max_execution_time = 300
+memory_limit = 512M
+max_input_time = 300
variables_order = EGPCS
pcov.directory = .

open extension del;
extension=fileinfo



# 1. ไปที่ branch ปลายทาง
git checkout InDevMod
# 2. ดึงของล่าสุด
git pull origin InDevMod
# 3. รวมร่าง (Merge)
git merge DevKorn
# 4. เอาขึ้น Server
git push origin InDevMod
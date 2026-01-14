# NestJS + Directus + Casdoor – Tóm tắt hệ thống

## OverView
Xây dựng backend CRUD bài viết với:
- **NestJS**: API Gateway
- **Directus**: CMS + Database 
- **Casdoor**: Đăng nhập & cấp token
-**Dapr**: microservice

## Các chức năng đang có

### Authentication (Casdoor)
- Đăng nhập bằng Casdoor
- Lấy `access_token` sau khi login
### Posts (CRUD)
- Lấy danh sách bài viết (Public)
- Lấy chi tiết bài viết theo ID
- Thêm bài viết (cần token)
- Sửa bài viết (cần token)
- Xóa bài viết (cần token)



##  Quy trình chạy hệ thống

### Bước 1: Chạy Directus
docker run -d --name directus -p 8055:8055 directus/directus

→ Truy cập `http://localhost:8055`
→ Tạo collection `posts`


### Bước 2: Chạy Casdoor
docker run -d --name casdoor -p 8000:8000 casbin/casdoor

→ Truy cập `http://localhost:8000`
→ Tạo Application, lấy clientId, secret

### Bước 3: Chạy NestJS
npm run start:dev



####  Các file chính và chức năng

### src/app.module.ts
- Khai báo module chính
- Import `PostsModule`, `AuthModule`

###  src/posts
# posts.controller.ts
- API:
  - GET /posts
  - GET /posts/:id
  - POST /posts
  - PATCH /posts/:id
  - DELETE /posts/:id
# posts.service.ts
- Gọi Directus API:
  - GET /items/posts
  - GET /items/posts/:id
  - POST /items/posts
  - PATCH /items/posts/:id
  - DELETE /items/posts/:id

### src/auth
# auth.controller.ts
- GET /auth/login → redirect Casdoor
- GET /auth/callback → nhận `code`
# casdoor.service.ts
- Tạo URL đăng nhập Casdoor
- Đổi `code` lấy `access_token`


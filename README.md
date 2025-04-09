# Сайт рецептов

Это fullstack-приложение с бэкендом на Django и фронтендом на React. Всё разворачивается через Docker Compose с использованием Nginx в качестве веб-сервера.

---

## 🚀 Стек технологий

- **Frontend**: React (собирается и сервируется через Nginx)
- **Backend**: Django + Django REST Framework
- **Web Server**: Nginx (проксирует API и отдаёт статику)
- **Containerization**: Docker & Docker Compose

---

## ⚙️ Как запустить проект локально

### 1. Собери и запусти проект

В корне проекта:

```bash

docker-compose up --build

```

---

### 2. Открой в браузере

Перейди в:

```

http://localhost:8000

```

- React SPA отдаётся через Nginx
- API-запросы (`/api/...`) проксируются на Django backend

---

## 📦 API

Все backend-запросы идут через префикс `/api/`.

---

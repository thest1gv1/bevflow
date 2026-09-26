# BevFlow

BevFlow — веб-приложение для управления ассортиментом, ценами и складскими остатками в B2B-дистрибуции напитков.

## Возможности

- просмотр каталога товаров;
- поиск по названию и бренду;
- фильтрация по статусу товара;
- сортировка по названию, остатку, закупочной цене и цене продажи;
- добавление товаров с проверкой введённых данных;
- табличное представление на больших экранах;
- карточное представление на небольших экранах;
- отдельное отображение статуса товара и складского остатка.

## Технологии

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- PostgreSQL 18
- Docker Compose

## Текущее состояние данных

Каталог использует локальные тестовые данные и клиентское состояние React. Добавленные через интерфейс товары сохраняются до перезагрузки страницы.

PostgreSQL подготовлен для локального запуска через Docker Compose, но пока не подключён к Products-модулю.

## Требования

- Node.js
- npm
- Docker Desktop с Docker Compose

## Локальный запуск

### 1. Клонирование репозитория

```bash
git clone https://github.com/thest1gv1/bevflow.git
cd bevflow
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Настройка переменных окружения

Создайте локальный `.env` на основе шаблона:

```powershell
Copy-Item .env.example .env
```

Заполните пароль PostgreSQL и укажите тот же пароль в `DATABASE_URL`:

```env
POSTGRES_USER=bevflow
POSTGRES_PASSWORD=your_random_password
POSTGRES_DB=bevflow

DATABASE_URL=postgresql://bevflow:your_random_password@localhost:5433/bevflow
```

Файл `.env` содержит локальные секреты и не должен добавляться в Git.

### 4. Запуск PostgreSQL

```bash
docker compose up -d
```

Проверить состояние контейнера:

```bash
docker compose ps
```

PostgreSQL будет доступен локально по адресу `127.0.0.1:5433`.

### 5. Запуск приложения

```bash
npm run dev
```

Откройте [http://localhost:3000/products](http://localhost:3000/products).

## Основные команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запустить сервер разработки |
| `npm run lint` | Проверить код с помощью ESLint |
| `npm run build` | Создать production-сборку |
| `npm run start` | Запустить production-сборку |
| `docker compose up -d` | Запустить PostgreSQL в фоне |
| `docker compose stop` | Остановить PostgreSQL |
| `docker compose down` | Удалить контейнер, сохранив данные в volume |

## Структура проекта

```text
src/
├── app/                  # маршруты и страницы
├── components/
│   ├── products/         # компоненты Products-модуля
│   └── ui/               # универсальные UI-компоненты
├── data/                 # тестовые данные
└── types/                # TypeScript-типы

compose.yaml              # локальная конфигурация PostgreSQL
.env.example              # шаблон переменных окружения
```

## Модель товара

Товар содержит следующие данные:

- название;
- бренд;
- категория;
- объём;
- статус (`active` или `inactive`);
- складской остаток;
- закупочная цена;
- цена продажи.

Статус и остаток независимы друг от друга: активный товар может временно отсутствовать на складе.

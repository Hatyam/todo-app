# 📝 ToDo List (React)

Небольшое SPA-приложение для управления задачами 

---

## 🚀 Функционал

* Добавление и удаление задач
* Автоматическая сортировка задач по времени
* Разделение задач по страницам: **Сегодня** и **Выполнено**
* Навигация между страницами с помощью **React Router**
* Сохранение данных в **localStorage**, чтобы задачи не пропадали после перезагрузки

---

## 🧠 Использованные технологии

* **React** — основа фронтенда
* **React Router DOM** — маршрутизация между страницами
* **CSS Modules** — стилизация компонентов
* **LocalStorage API** — хранение данных на стороне клиента

---

## 🏗️ Структура проекта

```
src/
├── components/
│   ├── Header.jsx
│   ├── MyNav.jsx
│   ├── Note.jsx
│   ├── NoteList.jsx
│   └── NewNote.jsx
│
├── pages/
│   ├── Today/
│   │   └── Today.jsx
│   └── Complete/
│       └── Complete.jsx
│
├── Layout/
│   └── Layout.jsx
│
├── router/
│   └── AppRouter.jsx
│
├── App.jsx
└── index.js
```

---

## ⚙️ Установка и запуск

1. Клонируй репозиторий:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```
2. Перейди в папку проекта:

   ```bash
   cd todo-app
   ```
3. Установи зависимости:

   ```bash
   npm install
   ```
4. Запусти проект:

   ```bash
   npm start
   ```

После запуска проект будет доступен по адресу:
👉 `http://localhost:3000`

---

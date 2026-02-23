# Веб-Ларек

Приложение на React + TypeScript для добавления товаров в корзину и оформления заказов. Для валидации форм используется Zod.


## Структура проекта
```
src
├── app
│   ├── providers      # контексты и провайдеры
│   ├── routing        # маршрутизация приложения
│   ├── store          # глобальное состояние (Redux Toolkit)
│   ├── styles         # глобальные стили
│   └── App.tsx        # главный компонент
├── entities
│   ├── basket
│   │   └── model      # модели корзины
│   ├── modal
│   │   └── model      # модели модальных окон
│   ├── order
│   │   └── model      # модели заказов
│   ├── product
│   │   └── model      # модели продуктов
│   ├── theme          # темы и стилизация
│   ├── pages          # страницы приложения
│   ├── shared         # общие компоненты и утилиты
│   └── widgets        # небольшие виджеты
└── main.tsx           # точка входа
```
## Технологии

![React](https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=white&style=flat)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white&style=flat)
![Redux Toolkit](https://img.shields.io/badge/-Redux%20Toolkit-764ABC?logo=Redux&logoColor=white&style=flat)
![Zod](https://img.shields.io/badge/-Zod-3E67B1?logo=zod&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3&logoColor=white&style=flat)

---

## Функционал

- Просмотр списка товаров в модальном окне  
- Добавление товаров в корзину  
- Оформление заказа в два этапа с проверкой данных через Zod
- Переключение темы  

---

## Установка и запуск

```bash
git clone <URL репозитория>
cd <папка проекта>
npm install
npm run dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

ВЕРСИЯ NODE: v21.4.0
ВЕРСИЯ NPM: v10.2.4

Исходя из поставленных задач, я выбрал Next.js для продвинутого контроля кэша и генерации статических компонентов.
Next позволяет генерировать статические компоненты с данными от бэкенда, которые он перегенерирует каждую минуту (грубо говоря происходит запрос на бэк, подтягиваются данные, статическая страница создается заново и отдается пользователю, что позволяет открыть практически мгновенно)

Еще несомненный плюс в том, что через настройки можно проксировать запросы и выставлять нужные хэдеры Cache-Control. В данный момент в этом тестовом проекте хэдер контролируется через эмулятор бэкенд сервера (папка /server)

Учитывая выбор Next.js для SSR, чтобы использовать UI-kits по типу Material UI потребуется дальнейшее исследование, поэтому я пока что ограничился самым "базовым" дизайном, сделав только небольшую разметку. Стиль написания можно посмотреть в styles.module.scss модулях

Сессия корзины покупок сбрасывается каждые 2 минуты. Однако, сессия будет жить пока страница не будет перезагружена

Для запуска production-билда:

```bash
yarn server (эмуляция backend-сервера)
#
(в другом терминале)
yarn build
#
yarn start
```

Бэк необходимо запускать перед билдом для генерации статических компонентов на основной странице.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

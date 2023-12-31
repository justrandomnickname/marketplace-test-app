export const PopupNext: React.FC = () => (
  <div style={{ color: "black", fontSize: "20px" }}>
    <p>ВЕРСИЯ NODE: v21.4.0</p>
    <p>ВЕРСИЯ NPM: v10.2.4</p>
    <p>
      Исходя из поставленных задач, я выбрал Next.js для продвинутого контроля
      кэша и генерации статических компонентов.
    </p>
    <p>
      Next позволяет генерировать статические компоненты с данными от бэкенда,
      которые он перегенерирует каждую минуту (грубо говоря происходит запрос на
      бэк, подтягиваются данные, статическая страница создается заново и
      отдается пользователю, что позволяет открыть практически мгновенно)
    </p>
    <p>
      основная страница / - статическая, данные стреляют с бэка каждую минуту и
      затем Next.js пересобирает статическую страницу с обновленными данными
    </p>
    <p>
      страница /marketplace/[page] - динамическая, данные только на клиенте.
      Кэшируются тольeко картинки с бэка
    </p>
    <p>
      Еще несомненный плюс в том, что через настройки можно проксировать запросы
      и выставлять нужные хэдеры Cache-Control. В данный момент в этом тестовом
      проекте хэдер контролируется через эмулятор бэкенд сервера (папка /server)
    </p>
    <p>
      Учитывая выбор Next.js для SSR, чтобы использовать UI-kits по типу
      Material UI потребуется дальнейшее исследование, поэтому я пока что
      ограничился самым базовым дизайном, сделав только небольшую разметку.
      Стиль написания можно посмотреть в styles.module.scss модулях. Без дизайна
      с фигмы я могу уйти на целые часы, двигая плашки туда-сюда и забыться ;)
    </p>
    <p>
      Сессия корзины покупок сбрасывается каждые 2 минуты. Однако, сессия будет
      жить пока страница не будет перезагружена. В каждой вкладке своя сессия
    </p>
    <p>Для запуска продакшен-билда:</p>
    <p>yarn server (эмуляция backend-сервера)</p>
    (в другом терминале)
    <p>yarn build</p>
    <p>yarn start</p>
  </div>
);

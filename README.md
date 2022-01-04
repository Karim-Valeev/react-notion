Notion clone application developed by a third year university team using React.js, Redux, Firebase and Firestore.

# React-Notion

```bash
# установка yarn
npm install -g yarn
# проверка версии
yarn --version
# добавление библиотек
yarn add <package> [--dev]
# установка всех зависимостей
yarn
yarn install
```
Ссылка для документации yarn: https://yarnpkg.com/getting-started/usage
```bash
# запуск приложения
yarn start
# запуск тестов
yarn test
# build проекта в build/
yarn build
# 
yarn eject
```

Полезная ссылка для доп. настройки create-react-app: https://create-react-app.dev/docs/getting-started

В папке **project_layout** хранится верстка проекта

В папке **project_layout/partDmitry** хранится одна из частей верстки

Описание
```bash
- В папке *dist* находятся готовые скомпилированные/собранные файлы
верстку можно/нужно брать оттуда.
- В папке *src* хранятся исходники.
- Если непонятна верстка из dist. Можно зайти в src/partials 
здесь *html разбит по компонентам
```

## Арихитектура проекта
assets - храним .css

components - здесь храним "stupid" компоненты, которые отвечают только
за рендер компонента, а также какие-то локальные функции которые не меняют  

containers - здесь компоненты отвечают за получение, взаимодействие 
c данными из store
Обязательно используем connect, связывает хранилище с компонентом
для connect прописываем самописные map functions.
Для состояний соответсвенно mapStateProps, для действий mapDispatchToProps 


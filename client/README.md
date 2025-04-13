# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

1. npm i
2. npm run dev


### Использованные библиотеки

1. React: Основная библиотека для построения пользовательских интерфейсов. React позволяет создавать компоненты и управлять состоянием, что идеально подходит для создания динамических и отзывчивых интерфейсов.

2. TypeScript: Надстройка над JavaScript, которая добавляет статическую типизацию. TypeScript помогает предотвратить ошибки времени выполнения, улучшает читаемость кода и обеспечивает автозаполнение в редакторах кода.

3. Vite: Современный сборщик для разработки, который предоставляет быструю перезагрузку и минимизацию времени ожидания. Vite значительно ускоряет время сборки по сравнению с другими инструментами, такими как Webpack.

4. React Query: Библиотека для управления состоянием, основанным на серверах. Она упрощает получение, кэширование и синхронизацию серверных данных, что особенно полезно для работы с API.

5. Axios: Библиотека для выполнения HTTP-запросов. Она предоставляет простой и интуитивно понятный интерфейс для работы с асинхронными запросами и поддерживает промисы.

6. SCSS: Препроцессор CSS, который позволяет использовать вложенность, переменные, модули и другие функции, упрощающие процесс стилизации приложения.

### Оптимизации

1. Кэширование данных: Использование react-query позволяет эффективно кэшировать данные от API, что значительно снижает количество запросов и улучшает производительность приложения. Данные могут храниться в кэше в течение определённого времени (cacheTime и staleTime), что позволяет использовать их повторно без необходимости нового запроса к серверу.

2. Динамическая загрузка (Code Splitting): Компоненты, которые не нужны сразу при загрузке приложения, могут быть загружены по мере необходимости. Это позволяет сократить начальное время загрузки и уменьшить размер бандла, улучшая общую производительность приложения.

3. Фильтрация и сортировка на стороне клиента: Логика фильтрации и сортировки пользователей осуществляется на стороне клиента с использованием состояния React. Это минимизирует обращения к API, что снижает нагрузку на сервер и увеличивает отзывчивость пользовательского интерфейса.

4. Разделение кода: Использование функциональных компонентов и хуков позволяет разделить логику приложения, что упрощает поддержку кода. Каждый компонент отвечает за свою функциональность, и их легче тестировать независимо.

5. Использование TypeScript: Типизация помогает находить ошибки на ранних этапах разработки, улучшая общее качество кода и повышая продуктивность команды разработчиков.

6. Стилевые оптимизации: Использование SCSS и модульных стилей помогает организовать стили более структурированно, облегчая работу с ними в будущем.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

export const projectDir = `
vue-ts-cms
├─ .browserslistrc
├─ .editorconfig
├─ .eslintrc.js
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ .gitignore
│     └─ husky.sh
├─ .prettierignore
├─ .prettierrc
├─ babel.config.js
├─ commitlint.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ .env.development
│  ├─ .env.production
│  ├─ .env.test
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ base.less
│  │  │  └─ index.css
│  │  └─ img
│  │     ├─ login-bg.svg
│  │     └─ logo.svg
│  ├─ base-ui
│  │  ├─ breadcrumb
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  └─ breadcrumb.vue
│  │  │  └─ types
│  │  │     └─ index.ts
│  │  ├─ card
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ card.vue
│  │  ├─ code
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ code.vue
│  │  ├─ count-up
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ countup.vue
│  │  ├─ descriptions
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  └─ descriptions.vue
│  │  │  └─ types
│  │  │     └─ types.ts
│  │  ├─ echart
│  │  │  ├─ data
│  │  │  │  └─ china.json
│  │  │  ├─ hooks
│  │  │  │  └─ useEcharts.ts
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ base-echart.vue
│  │  ├─ editor
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ index.vue
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  └─ form.vue
│  │  │  └─ types
│  │  │     └─ index.ts
│  │  ├─ table
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ table.vue
│  │  └─ text-link
│  │     ├─ index.ts
│  │     └─ src
│  │        └─ textlink.vue
│  ├─ components
│  │  ├─ nav-header
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ nav-header.vue
│  │  │     └─ user-info.vue
│  │  ├─ nav-menu
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ nav-menu.vue
│  │  ├─ page-content
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ page-content.vue
│  │  ├─ page-echarts
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  ├─ bar-echart.vue
│  │  │  │  ├─ line-echart.vue
│  │  │  │  ├─ map-echart.vue
│  │  │  │  ├─ pie-echart.vue
│  │  │  │  └─ rose-echart.vue
│  │  │  ├─ types
│  │  │  │  └─ index.ts
│  │  │  └─ utils
│  │  │     ├─ convert-data.ts
│  │  │     └─ coordinate-data.ts
│  │  ├─ page-modal
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ page-modal.vue
│  │  ├─ page-search
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ page-search.vue
│  │  └─ statistical-panel
│  │     ├─ index.ts
│  │     └─ src
│  │        └─ statistical-panel.vue
│  ├─ global
│  │  ├─ index.ts
│  │  ├─ register-element.ts
│  │  └─ register-properties.ts
│  ├─ hooks
│  │  ├─ use-page-modal.ts
│  │  ├─ use-page-search.ts
│  │  └─ use-permissions.ts
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ main
│  │     ├─ analysis
│  │     │  ├─ dashboard
│  │     │  │  └─ dashboard.ts
│  │     │  └─ overview
│  │     │     └─ overview.ts
│  │     ├─ product
│  │     │  ├─ category
│  │     │  │  └─ category.ts
│  │     │  └─ goods
│  │     │     └─ goods.ts
│  │     ├─ story
│  │     │  ├─ chat
│  │     │  │  └─ chat.ts
│  │     │  └─ list
│  │     │     └─ list.ts
│  │     └─ system
│  │        ├─ department
│  │        │  └─ department.ts
│  │        ├─ menu
│  │        │  └─ menu.ts
│  │        ├─ role
│  │        │  └─ role.ts
│  │        └─ user
│  │           └─ user.ts
│  ├─ service
│  │  ├─ index.ts
│  │  ├─ login
│  │  │  ├─ login.ts
│  │  │  └─ type.ts
│  │  ├─ main
│  │  │  ├─ analysis
│  │  │  │  └─ dashboard.ts
│  │  │  └─ system
│  │  │     └─ system.ts
│  │  ├─ request
│  │  │  ├─ config.ts
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  └─ types.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ login
│  │  │  ├─ login.ts
│  │  │  └─ type.ts
│  │  ├─ main
│  │  │  ├─ analysis
│  │  │  │  ├─ dashboard.ts
│  │  │  │  └─ types.ts
│  │  │  └─ system
│  │  │     ├─ system.ts
│  │  │     └─ types.ts
│  │  └─ type.ts
│  ├─ utils
│  │  ├─ cache.ts
│  │  ├─ date-format.ts
│  │  └─ map-menus.ts
│  └─ views
│     ├─ login
│     │  ├─ components
│     │  │  ├─ login-account.vue
│     │  │  ├─ login-panel.vue
│     │  │  └─ login-phone.vue
│     │  ├─ config
│     │  │  └─ account-config.ts
│     │  └─ login.vue
│     ├─ main
│     │  ├─ analysis
│     │  │  ├─ dashboard
│     │  │  │  └─ dashboard.vue
│     │  │  └─ overview
│     │  │     ├─ config
│     │  │     │  ├─ dependencies.ts
│     │  │     │  ├─ dev-dependencies.ts
│     │  │     │  ├─ index.ts
│     │  │     │  ├─ project-dir.ts
│     │  │     │  └─ technology-stacks.ts
│     │  │     └─ overview.vue
│     │  ├─ main.vue
│     │  ├─ product
│     │  │  ├─ category
│     │  │  │  ├─ category.vue
│     │  │  │  └─ config
│     │  │  │     ├─ content.config.ts
│     │  │  │     └─ search.config.ts
│     │  │  └─ goods
│     │  │     ├─ config
│     │  │     │  ├─ content.config.ts
│     │  │     │  └─ search.config.ts
│     │  │     └─ goods.vue
│     │  ├─ story
│     │  │  ├─ chat
│     │  │  │  └─ chat.vue
│     │  │  └─ list
│     │  │     ├─ config
│     │  │     │  └─ content.config.ts
│     │  │     └─ list.vue
│     │  └─ system
│     │     ├─ department
│     │     │  ├─ config
│     │     │  │  ├─ content.config.ts
│     │     │  │  ├─ modal.config.ts
│     │     │  │  └─ search.config.ts
│     │     │  └─ department.vue
│     │     ├─ menu
│     │     │  ├─ config
│     │     │  │  ├─ content.config.ts
│     │     │  │  └─ search.config.ts
│     │     │  └─ menu.vue
│     │     ├─ role
│     │     │  ├─ config
│     │     │  │  ├─ content.config.ts
│     │     │  │  ├─ modal.config.ts
│     │     │  │  └─ search.config.ts
│     │     │  └─ role.vue
│     │     └─ user
│     │        ├─ config
│     │        │  ├─ content.config.ts
│     │        │  ├─ modal.config.ts
│     │        │  └─ search.config.ts
│     │        └─ user.vue
│     └─ not-found
│        └─ not-found.vue
├─ tsconfig.json
└─ vue.config.js
`

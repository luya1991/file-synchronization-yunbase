# yun-base

> yun-base

### Components

*   container
*   theme (style)
*   menubar
*   sidebar
*   topbar

### Property
Attribute  | Usage
---        | ---
router     | `Object`, expose router after init
store      | `Object`, expose store after init

### How to use

Initialization
```js
import Vue from 'vue'
import YunBase from 'yun-base'

Vue.use(YunBase, {
  modules               //modules in webpack context
  pages                 //routers in webpack context
})
```

Get `router` or `store` via import
```js
import base from 'yun-base'

const router = base.router
const store = base.store
```

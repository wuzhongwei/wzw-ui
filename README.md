## wzw-ui
[![npm version](https://badge.fury.io/js/wzw-ui.svg)](https://badge.fury.io/js/wzw-ui)
## QuickStart
```base
npm install wzw-ui
```

## usage
```
import WzwUi from 'wzw-ui'
import 'wzw-ui/dist/wzw-ui.css'
Vue.use(WzwUi)
```

## 按需加载 
- 首先，安装 babel-plugin-component：  
npm install babel-plugin-component -D
```js
// .babelrc or babel-loader option
"plugins": [ [
    "component",
    {
      "libraryName": "wzw-ui",
      "styleLibrary": {
        "name": "style"
      }
    }
  ]]
```

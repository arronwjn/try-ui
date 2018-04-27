# lgj-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 项目结构说明
```
.
├── build                                       // webpack config file
├── config                                      // package path
├── src                                         // source directory
|   ├── assets                                  //静态文件
|   ├── base                                    //基础样式组件
|   ├── common                                  //公共样式字体
|   ├── config                                  //ajax二次封装文件
│   ├── components                              // 业务逻辑组件
│   │  
│   ├── config                                  // 配置文件
│   │   ├── axios.js                            // axios二次封装文件
│   │   ├── mUtils.js                           // 公共方法文件
│   │   └── rem.js                              // px transform rem
│   ├── images                                  // public picture
│   ├── page                                    // 路由页面文件
│   │  
│   ├── plugins                                 // plugins
│   ├── router
│   │   └── index.js                            // router configuration
│   ├── service                                 // data interaction and unified deployment
│   │   ├── ApiSetting.js                       // 接口服务文件
│   ├── store                                   // Vuex status management
│   │   ├── action.js                           // actions configuration
│   │   ├── getters.js                          // getters configuration
│   │   ├── index.js                            // use vuex，new store
│   │   ├── modules                             // store modules
│   │   ├── mutation-types.js                   // make const for muations
│   │   └── mutations.js                        // mutations configuration
│   ├── App.vue                                 // entry page js file
│   ├── main.js                                 // the main js for loading components
├── favicon.ico                                 // icon
├── index.html                                  // entry page html file
.

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

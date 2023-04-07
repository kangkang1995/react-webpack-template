支持一下配置
1. 图片/视频/字体
2. css/scss/less
3. excel/word
4. json
5. js/es6等语法
6. ts
8. react
9. eslint
10. 热更新（同时支持react+ts的热更新）
11. 支持多入口和单入口
12. 懒加载 
13. alias (区分打包时的环境变量及一些别名)
14. 多入口 过滤 (只针对start服务时，原因是防止忘记关闭，导致build忘记打包)
15. husky + .prettierrc + lint-staged
16. start 和 build性能调试
---

### 常见错误

#### *. 如果是多页面
> 新建的多页面，记得重启服务

#### *. webpack-config.js的更改
> 更改完 需要重启服务

### 启动
```
npm run start  //默认 8282

//可以这样
npm run start 8585  //后面端口随意
```

### 打包 
```
npm run build  //默认 beta

//可以这样
npm run build prod  //build后面随意
```

### 组成
由自己封装的webpack npm包（xiang-webpack） + 项目模板组成，
webpack-config.js 是暴露出来的配置，具体可以参考node_modules/xiang-webpack/readme

# zhang-http-request  
适用于前端的HTTP请求库，基于XHR  

# 调用方法
```js
// 请先引入zhr模块
zhr('https://www.zhangsoft.cf/','get').then((result) => {
    console.log(result)    // 控制台显示小张软件的主页
})
.catch((err) => {
    console.error(err)    // 捕获错误
})

// 也可以尝试使用POST请求
zhr('https://your.site.url','post','your data').then((result) => {
    console.log(result)
})
.catch((err) => {
    console.error(err)
})
```

# 许可证  
本仓库使用MIT许可证
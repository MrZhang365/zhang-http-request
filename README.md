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

// 还可以POST一个JSON数据
zhr.json('https://never.gonna.give.you.up', { user: 'Rick Astley' }).then((result) => {
    console.log(result)
})
.catch((err) => {
    console.error(err)
})
```
# 更多方法
```js
// 自定义请求头
zhr('https://never.gonna.give.you.up', 'get', undefined, {
    'X-Forwarded-For': '127.0.0.1',    // 自定义一个请求头
})
// 第三个参数如果是undefined，zhr会忽略他

// 这也适用于json方法
zhr.json('https://never.gonna.give.you.up', { user: 'Rick Astley' }, {
    'X-Forwarded-For': '127.0.0.1',    // 自定义一个请求头
})
```

# 许可证  
本仓库使用MIT许可证
// const fs = require('fs')
// 写文件
// fs.writeFileSync('./1.txt', 'abc')

// app.use(ctx => {
//     const { path = '/'} = ctx
//     if(path === '/user/123'){
//         ctx.body = '用户信息123'
//     }
//     // console.log(ctx.URL)
//     // console.log(ctx.path)
//     if(path === '/settings'){
//         ctx.body = '返回设置信息'
//     }
// })

// const request = (arg) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(arg * 3)
//         }, 2000)
//     })
// }

// request(3).then(res1 => {
//     console.log(res1)
//     return request(res1)
// }).then(res2 => {
//     console.log(res2)
//     return request(res2)
// }).then(res3 => {
//     console.log(res3)
// })

// 异步函数的返回值是一个Promise
// const fn = async() => {
//     return 1
// }

// console.log(fn())

// const fn1 = (arg) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(arg)
//             resolve(arg * 2)
//         }, 2000)
//     })
// }

// const fnx = async() => {
//     const res1 = await fn1(1)
//     const res2 = await fn1(res1)
//     const res3 = await fn1(res2)
//     console.log(res3)
// }

// fnx()

const Koa = require('koa')
const app = new Koa()


// 开启一个http服务，接收http请求并做处理-响应
app.listen(3000, () => {
    console.log('启动成功')
})
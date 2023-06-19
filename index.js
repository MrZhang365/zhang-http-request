/**
 * 使用ZHR向服务器发送HTTP请求，支持GET和POST
 * @param {String} url 请求地址
 * @param {String} method 请求方法
 * @param {any|undefined} data 请求体，可以不提供，提供undefined则忽略
 * @returns {Promise} 一个Promise
 */

window.zhr = (url, method, data) => {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = () => {
            if (xhr.status !== 200) {
                rej(`HTTP Status ${xhr.status} ${xhr.statusText}`)
            }else {
                res(xhr.responseText)
            }
        }
        if (typeof data !== 'undefined') {
            xhr.send(data)
        }else {
            xhr.send()
        }
    })
}
// 获取当前页面的URL
var currentUrl = window.location.href;

// 检查是否已经缓存了页面内容
var cachedContent = localStorage.getItem(currentUrl);

// 检查缓存是否过期
var cacheExpiration = localStorage.getItem(currentUrl + "_expiration");
if (cachedContent && cacheExpiration && new Date().getTime() < parseInt(cacheExpiration)) {
    // 如果缓存未过期，直接加载缓存的页面内容
    document.documentElement.innerHTML = cachedContent;
} else {
    // 如果缓存不存在或已过期，重新加载页面内容

    // 创建XMLHttpRequest对象
    var xhr = new XMLHttpRequest();

    // 监听请求状态变化
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // 请求成功，将页面内容缓存到localStorage中
                localStorage.setItem(currentUrl, xhr.responseText);

                // 设置缓存有效期为48小时
                var expirationTime = new Date().getTime() + 48 * 60 * 60 * 1000;
                localStorage.setItem(currentUrl + "_expiration", expirationTime);

                // 替换当前页面内容
                document.documentElement.innerHTML = xhr.responseText;
            }
        }
    };

    // 打开并发送请求
    xhr.open("GET", currentUrl, true);
    xhr.send();
}

// 禁止页面发生302重定向
window.onbeforeunload = function () {
    return "拦截一次转跳";
};
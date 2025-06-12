 try {
    // 你的弹窗代码
// 创建弹窗容器
var popupContainer = document.createElement('div');
popupContainer.id = 'network-popup';
popupContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 600px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    font-family: Arial, sans-serif;
    display: none;
`;

// 创建弹窗标题
var popupTitle = document.createElement('h2');
popupTitle.textContent = '文天玩官方权威域名延迟检测';
popupTitle.style.cssText = `
    margin-top: 0;
    color: #333;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`;
popupContainer.appendChild(popupTitle);

// 创建关闭按钮
var closeButton = document.createElement('button');
closeButton.textContent = '×';
closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #999;
`;
closeButton.onclick = function() {
    popupContainer.style.display = 'none';
};
popupContainer.appendChild(closeButton);

// 创建内容区域
var contentDiv = document.createElement('div');
contentDiv.id = 'ping-results';
contentDiv.style.cssText = `
    margin: 15px 0;
    max-height: 300px;
    overflow-y: auto;
`;
popupContainer.appendChild(contentDiv);

// 创建加载动画
var loadingDiv = document.createElement('div');
loadingDiv.textContent = '正在检测域名延迟...';
loadingDiv.style.cssText = `
    text-align: center;
    padding: 20px;
    color: #666;
`;
contentDiv.appendChild(loadingDiv);

// 添加到body
document.body.appendChild(popupContainer);

// 显示弹窗
popupContainer.style.display = 'block';

// 42秒后自动关闭
setTimeout(function() {
    popupContainer.style.display = 'none';
}, 42000);

// 检测域名延迟的函数
function pingDomain(domain) {
    return new Promise((resolve) => {
        var start = new Date().getTime();
        var img = new Image();
        
        img.onload = function() {
            var end = new Date().getTime();
            var latency = end - start;
            resolve({domain: domain, latency: latency, status: 'success'});
        };
        
        img.onerror = function() {
            var end = new Date().getTime();
            var latency = end - start;
            resolve({domain: domain, latency: latency, status: 'error'});
        };
        
        img.src = 'https://' + domain + '/favicon.ico?t=' + start;
        
        // 设置超时（28秒）
        setTimeout(() => {
            if (img.onload || img.onerror) return;
            resolve({domain: domain, latency: null, status: 'timeout'});
        }, 28000);
    });
}

// 检测所有域名的延迟
var domains = [
    'www.wentianplay.com',
    'www.wentianplay.cn',
    'www.wentianplay.net',
    'www.wentianplay.top',
    'www.wentianwan.com',
    'www.wentianwan.cn'
];

// 执行检测
Promise.all(domains.map(pingDomain)).then(results => {
    // 清除加载动画
    contentDiv.innerHTML = '';
    
    // 显示结果
    results.forEach(result => {
        var resultDiv = document.createElement('div');
        resultDiv.style.cssText = `
            padding: 10px;
            margin-bottom: 8px;
            border-radius: 4px;
            background: #f8f8f8;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        
        var domainSpan = document.createElement('span');
        domainSpan.textContent = result.domain;
        
        var statusSpan = document.createElement('span');
        
        if (result.status === 'success' && result.latency !== null) {
            statusSpan.textContent = result.latency + 'ms';
            statusSpan.style.color = result.latency < 300 ? '#4CAF50' : 
                                     result.latency < 600 ? '#FF9800' : '#F44336';
        } else if (result.status === 'timeout') {
            statusSpan.textContent = '超时';
            statusSpan.style.color = '#F44336';
        } else {
            statusSpan.textContent = '超时';
            statusSpan.style.color = '#F44336';
        }
        
        resultDiv.appendChild(domainSpan);
        resultDiv.appendChild(statusSpan);
        contentDiv.appendChild(resultDiv);
    });
    
    // 添加推荐信息
    var bestResult = results.reduce((min, curr) => 
        (curr.latency !== null && (min.latency === null || curr.latency < min.latency)) ? curr : min
    , {latency: null});
    
    if (bestResult.latency !== null) {
        var recommendation = document.createElement('div');
        recommendation.style.cssText = `
            margin-top: 15px;
            padding: 10px;
            background: #e8f5e9;
            border-radius: 4px;
            font-size: 14px;
        `;
        recommendation.textContent = `推荐使用: ${bestResult.domain} (延迟最低: ${bestResult.latency}ms)`;
        contentDiv.appendChild(recommendation);
    }
});

// 响应式设计
function adjustPopupForMobile() {
    if (window.innerWidth <= 600) {
        popupContainer.style.width = '90%';
        popupContainer.style.padding = '15px';
        popupTitle.style.fontSize = '18px';
    } else {
        popupContainer.style.width = '600px';
        popupContainer.style.padding = '20px';
        popupTitle.style.fontSize = '20px';
    }
}

// 初始调整
adjustPopupForMobile();

// 窗口大小变化时调整
window.addEventListener('resize', adjustPopupForMobile);
  

} catch (e) {
    console.error('OP.js error:', e);
}
 
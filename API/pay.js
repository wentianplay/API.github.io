try {
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
    popupTitle.textContent = '文天玩赞助捐款站';
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

    // 添加所需内容
    var contentText = document.createElement('p');
    contentText.innerHTML = `<br>网速无法加载二维码请前往<br><a href="https://www.wentianplay.com/pay" target="_blank">文天玩赞助捐款站</a>`;
    contentText.style.cssText = `color: #666; line-height: 1.6;`;
    contentDiv.appendChild(contentText);

    popupContainer.appendChild(contentDiv);


    // 添加到body
    document.body.appendChild(popupContainer);

    // 显示弹窗
    popupContainer.style.display = 'block';

    // 60秒后自动关闭
    setTimeout(function() {
        popupContainer.style.display = 'none';
    }, 60000);


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
    console.error('Pay.js error:', e);
}
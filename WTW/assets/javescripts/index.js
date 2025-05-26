// ----------- 添加安装文档内容 ---------------
const documentList = {
    chuangwei: `<div class="two-box_tab_content">
                  <div class="tab-title">1.准备工作</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                    <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘<span class="blur_text"> （图1）</span></div>
                  </div>
                  <div class="tab-title">2.安装教程</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">访问应用商店：打开创维电视的应用商店，搜索"应用调试"并下载。<span class="blur_text"> （图2）</span></div>
                    <div class="tab-content_item m-b-12">输入密码：打开“应用调试并输入密码69573028”<span class="blur_text"> （图3）</span></div>
                    <div class="tab-content_item m-b-12">下载并安装：在该应用中找到之前拷贝的APK文件，选中APK文件并点击安装。</div>
                    <div class="tab-content_item">打开应用：安装完成后，即可在电视上找到并打开应用。</div>
                  </div>
                  <div class="tab-title">3.注意事项</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                    <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                    <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                    <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
                  </div>
                  <div class="tab-img_list">
                    <div class="tab-img_item">
                      <div class="tab-img_number">1</div>
                      <div class="tab-img_parent">
                        <img class="tab-img_box fixed-width_img" src="/assets/images/download-img.png" />
                      </div>
                    </div>
                    <div class="tab-img_item">
                      <div class="tab-img_number">2</div>
                      <div class="tab-img_parent">
                        <img class="tab-img_box fixed-width_img" src="/assets/images/chuangwei-two.png" />
                      </div>
                    </div>
                    <div class="tab-img_item">
                      <div class="tab-img_number">3</div>
                      <div class="tab-img_parent">
                        <img class="tab-img_box fixed-width_img" src="/assets/images/chuangwei_three.png" />
                      </div>
                    </div>
                  </div>
                </div>`,
    sanxing: `<div class="two-box_tab_content">
                <div class="tab-tip">
                  <div class="blur_text">说明：</div>
                  <div>三星电视的Tizen系统不支持直接安装APK文件，但可以直接在系统自带浏览器直接搜索我们的下载地址，即可立即使用</div>
                </div>
                <div class="tab-title">下面是开发者模式的安装方法：</div>
                <div class="tab-title">1. 准备工作：</div>
                 <div class="tab-content">
                  <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                  <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘</div>
                </div>
                <div class="tab-title">2.开启开发者模式：</div>
                <div class="tab-content">
                  <div class="tab-content_item m-b-12">进入电视设置，找到“关于电视”或“系统信息”。</div>
                  <div class="tab-content_item">连续点击“软件版本”或“型号名称”多次（通常是7次），直到出现“开发者模式已启用”的提示。</div>
                </div>
                <div class="tab-title">3.允许未知来源应用：</div>
                <div class="tab-content">
                  <div class="tab-content_item m-b-12">返回设置主菜单，找到“开发者选项”。</div>
                  <div class="tab-content_item">在其中开启“允许未知来源应用”的权限。</div>
                </div>
                <div class="tab-title">4.使用U盘安装：</div>
                <div class="tab-content">
                  <div class="tab-content_item m-b-12">插入包含APK文件的U盘。</div>
                  <div class="tab-content_item">通过“文件管理器”或“媒体中心”找到APK文件并进行安装。</div>
                </div>
              </div>`,
    xiaomi: `<div class="two-box_tab_content">
              <div class="tab-title">1.准备工作</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                <div class="tab-content_item m-b-12">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘<span class="blur_text"> （图1）</span></div>
              </div>
              <div class="tab-title">2.安装教程</div>
              <div class="tab-title_blur">方式一：</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12 ">连接U盘：将包含APK文件的U盘插入小米电视的USB接口。<span class="blur_text"> （图2）</span</div>
                <div class="tab-content_item m-b-12 m-t-12">访问文件管理：打开电视，在主界面找到“文件管理器”。导航到U盘，找到APK文件。</div>
                <div class="tab-content_item">安装应用：点击APK文件，按照电视提示完成安装。</div>
              </div>
              <div class="tab-title_blur">方式二：</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">访问高清播放器：如果没有弹出移动储存设备的提示，遥控器找到我的应用程序下的【高清播放器】<span class="blur_text"> （图3） </span>；</div>
                <div class="tab-content_item m-b-12">遥控选择【设备】标签，找到【移动存储设备】；</div>
                <div class="tab-content_item">安装应用：打开移动存储设备，找到安装包完成安装。</div>
              </div>
              <div class="tab-title">3.注意事项</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
              </div>
              <div class="tab-img_list">
                <div class="tab-img_item">
                  <div class="tab-img_number">1</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/download-img.png" />
                  </div>
                </div>
                <div class="tab-img_item">
                  <div class="tab-img_number">2</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/xiaomi-two.png" />
                  </div>
                </div>
                <div class="tab-img_item">
                  <div class="tab-img_number">3</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/xiaomi-three.png" />
                  </div>
                </div>
              </div>
            </div>`,
    haixin: `<div class="two-box_tab_content">
              <div class="tab-title">1.准备工作</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘，<span class="red_text">并删除.apk后缀（重要步骤）。</span></div>
              </div>
              <div class="tab-title">2.安装教程</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">连接U盘：将U盘插入电视USB口；</div>
                <div class="tab-content_item">安装应用：在电视应用中找到U盘助手，点开并找到需要安装的软件，按照电视提示完成安装。</div>
              </div>
              <div class="tab-title">3.注意事项</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
              </div>
            </div>`,
    changhong: `<div class="two-box_tab_content">
                  <div class="tab-title">1.准备工作</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                    <div class="tab-content_item">请准备一个U盘（<span class="red_text">一定要USB3.0以上的U盘</span>），点击上方【下载】按钮，下载APK文件至U盘。<span class="blur_text"> （图1）</span></div>
                  </div>
                  <div class="tab-title">2.安装教程</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">连接U盘：将U盘插入电视USB口；</div>
                    <div class="tab-content_item m-b-12">
                      <div>安装应用：</div>
                      <div class="tab-content_item m-b-12 m-t-12">找到【我的】-【媒体中心】，进入媒体中心U盘，进入U盘选择我们要装的软件。<span class="blur_text"> （图2）</span></div>
                      <div class="tab-content_item">可以看到apk文件正确读出来后点击安装即可。<span class="blur_text"> （图3）</span></div>
                    </div>
                  </div>
                  <div class="tab-title">3.注意事项</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                    <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                    <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                    <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
                  </div>
                  <div class="tab-img_list">
                    <div class="tab-img_item">
                      <div class="tab-img_number">1</div>
                      <div class="tab-img_parent">
                        <img class="tab-img_box fixed-width_img" src="/assets/images/download-img.png" />
                      </div>
                    </div>
                    <div class="tab-img_item">
                      <div class="tab-img_number">2</div>
                      <div class="tab-img_parent">
                        <img class="tab-img_box fixed-height_img" src="/assets/images/changhong.two.png" />
                      </div>
                    </div>
                    <div class="tab-img_item">
                      <div class="tab-img_number">3</div>
                      <div class="tab-img_parent">
                        <img class="tab-img_box fixed-width_img" src="/assets/images/changhong-three.png" />
                      </div>
                    </div>
                  </div>
                </div>`,
    kukai: `<div class="two-box_tab_content">
              <div class="tab-title">1.准备工作</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘。<span class="blur_text"> （图1）</span></div>
              </div>
              <div class="tab-title">2.安装教程</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">连接U盘：将U盘插入电视USB口；</div>
                <div class="tab-content_item">
                  <div>安装应用：</div>
                  <div class="tab-content_item m-b-12 m-t-12">在电视主界面选择【应用】——【应用搜索】，然后输入“小程序”的首字母XCX，将小程序下载安装到电视上。<span class="blur_text"> （图2）</span><span class="blur_text"> （图3）</span></div>
                  <div class="tab-content_item m-b-12">安装完成后把U盘插到电视上面(忽略电视自动的弹窗)，然后打开小程序app，需要输入密码，密码是55559510(此时需要外接个键盘)</div>
                  <div class="tab-content_item m-b-12">成功输入密码后，选择左上角【U盘安装】，系统自动扫描U盘上的安装包</div>
                  <div class="tab-content_item m-b-12">扫描出文件后直接打开并安装。</div>
                </div>
              </div>
              <div class="tab-title">3.注意事项</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
              </div>
              <div class="tab-img_list">
                <div class="tab-img_item">
                  <div class="tab-img_number">1</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-width_img" src="/assets/images/download-img.png" />
                  </div>
                </div>
                <div class="tab-img_item">
                  <div class="tab-img_number">2</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/kukai-two.png" />
                  </div>
                </div>
                <div class="tab-img_item">
                  <div class="tab-img_number">3</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/kukai-three.png" />
                  </div>
                </div>
              </div>
            </div>`,
    kangjia: `<div class="two-box_tab_content">
                <div class="tab-title">1.准备工作</div>
                <div class="tab-content">
                  <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                  <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘。<span class="blur_text"> （图1）</span></div>
                </div>
                <div class="tab-title">2.安装教程</div>
                <div class="tab-content">
                  <div class="tab-content_item m-b-12">连接U盘：将U盘插入电视USB口；</div>
                  <div class="tab-content_item">
                    <div>安装应用：</div>
                    <div class="tab-content_item m-b-12 m-t-12">将U盘插到电视的USB接口。在【我的应用】里找到【文件管理】。<span class="blur_text"> （图2）</span></div>
                    <div class="tab-content_item m-b-12">选择打开General U盘，点击右上角的三条杠，展开该设置菜单。<span class="red_text">遥控器连续按五下菜单键</span>，会弹窗提示【APK#####】。此时，U盘安装的限制已被解除。</div>
                    <div class="tab-content_item m-b-12">重新找到安装包进行安装</div>
                  </div>
                </div>
                <div class="tab-title">3.注意事项</div>
                <div class="tab-content">
                  <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                  <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                  <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                  <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
                </div>
                <div class="tab-img_list flex-start">
                  <div class="tab-img_item m-r-12">
                    <div class="tab-img_number">1</div>
                    <div class="tab-img_parent">
                      <img class="tab-img_box fixed-width_img" src="/assets/images/download-img.png" />
                    </div>
                  </div>
                  <div class="tab-img_item">
                    <div class="tab-img_number">2</div>
                    <div class="tab-img_parent">
                      <img class="tab-img_box fixed-height_img" src="/assets/images/kangjia-two.png" />
                    </div>
                  </div>
                </div>
              </div>`,
    suoni: `<div class="two-box_tab_content">
              <div class="tab-title">1.准备工作</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                <div class="tab-content_item m-b-12">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘。</div>
              </div>
              <div class="tab-title">2.安装教程</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">将U盘连接到索尼电视，显示“U盘已连接”后点击确定；</div>
                <div class="tab-content_item">在应用助手允许访问文件，找到apk文件后确认安装即可。</div>
              </div>
              <div class="tab-title">3.注意事项</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
              </div>
            </div>`,
    xiapu: `<div class="two-box_tab_content">
              <div class="tab-title">1.准备工作</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
                <div class="tab-content_item m-b-12">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘。<span class="blur_text"> （图1）</span></div>
                <div class="tab-content_item m-b-12">还需下载一个ARE.wpk文件：<a href="http://down.tvapk.com/data/1606/yunos_dspj.zip" class="link_text">http://down.tvapk.com/data/1606/yunos_dspj.zip</a></div>
              </div>
              <div class="tab-title">2.安装教程</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">将U盘连接到电视，打开电视的多媒体播放选择【装应用】<span class="blur_text"> （图2）</span></div>
                <div class="tab-content_item m-b-12">在U盘里找到下载好的ARE.wpk文件进行安装，之后会自动联网下载相关文件和安装安卓运行环境<span class="blur_text"> （图3）</span></div>
                <div class="tab-content_item">原本U盘中不支持安装的安卓apk就可以通过用【多媒体播放器】进行安装，</div>
              </div>
              <div class="tab-title">3.注意事项</div>
              <div class="tab-content">
                <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
                <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
                <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
                <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
              </div>
              <div class="tab-img_list">
                <div class="tab-img_item">
                  <div class="tab-img_number">1</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-width_img" src="/assets/images/download-img.png" />
                  </div>
                </div>
                <div class="tab-img_item">
                  <div class="tab-img_number">2</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/xiapu-one.png" />
                  </div>
                </div>
                <div class="tab-img_item">
                  <div class="tab-img_number">3</div>
                  <div class="tab-img_parent">
                    <img class="tab-img_box fixed-height_img" src="/assets/images/xiapu-two.png" />
                  </div>
                </div>
              </div>
            </div>`,
    touyingyi: `<div class="two-box_tab_content">
                  <div class="tab-tip">
                    <div class="blur_text">提示：</div>
                    <div>以下是一个通用的安装教程，适用于大多数智能投影仪品牌，包括极米、当贝、坚果、小米等。这个教程涵盖准备工作、安装APK文件以及注意事项，适用于大多数投影仪品牌和型号。</div>
                  </div>
                  <div class="tab-title">1.通用准备工作</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">确保您的投影仪已连接到Wi-Fi网络，以便后续操作和下载。</div>
                    <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘</div>
                  </div>
                  <div class="tab-title">2.安装教程：</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">连接U盘：将装有APK文件的U盘插入投影仪的USB接口。</div>
                    <div class="tab-content_item m-b-12">
                      <div>打开文件管理器：</div>
                      <div class="tab-content_item m-b-12 m-t-12">按遥控器上的“主页”按钮，进入主界面。</div>
                      <div class="tab-content_item m-b-12">选择并打开“文件管理器”或“多媒体中心”。具体选项名称可能有所不同，但通常在“应用”或“工具”菜单中能找到。</div>
                    </div>
                    <div class="tab-content_item m-b-12">查找并打开U盘： 在文件管理器中选择“外部设备”或“USB设备”，找到并打开U盘。</div>
                    <div class="tab-content_item">
                      <div>安装APK文件：</div>
                      <div class="tab-content_item m-b-12 m-t-12">在U盘中找到之前拷贝的APK文件并点击安装。</div>
                      <div class="tab-content_item m-b-12">安装完成后，可以选择“打开”直接启动应用，或者返回主界面在“应用”中找到并打开新安装的影视TV软件。</div>
                    </div>
                  </div>
                  <div class="tab-title">3.注意事项</div>
                  <div class="tab-content">
                    <div class="tab-content_item m-b-12">如果在安装过程中遇到任何问题，首先检查U盘和APK文件是否损坏，尝试重新下载APK文件并重新安装。</div>
                    <div class="tab-content_item">确认投影仪已启用“允许安装未知来源的应用”。</div>
                  </div>
                </div>`,
    qita: `<div class="two-box_tab_content">
            <div class="tab-title">1.准备工作</div>
            <div class="tab-content">
              <div class="tab-content_item m-b-12">确保您的电视已连接到Wi-Fi网络，以便后续操作和下载。</div>
              <div class="tab-content_item">请准备一个U盘，点击上方【下载】按钮，下载APK文件至U盘。</div>
            </div>
            <div class="tab-title">2.安装教程：</div>
            <div class="tab-content">
              <div class="tab-content_item m-b-12">连接U盘：将装有APK文件的U盘插入电视USB接口。</div>
              <div class="tab-content_item m-b-12">打开文件管理器：按“主页”按钮进入主界面，选择并打开“文件管理器”或“多媒体中心”。</div>
              <div class="tab-content_item m-b-12">查找并打开U盘：选择“外部设备”或“USB设备”，打开U盘。</div>
              <div class="tab-content_item m-b-12">安装APK文件：找到并选中APK文件，点击安装，在确认窗口中点击“安装”。</div>
              <div class="tab-content_item">完成安装：安装完成后选择“打开”启动应用，或在主界面“应用”中找到并打开新安装的软件。</div>
            </div>
            <div class="tab-title">3.注意事项</div>
            <div class="tab-content">
              <div class="tab-content_item m-b-12">确保电视与U盘之间的连接稳定。</div>
              <div class="tab-content_item m-b-12">在安装未知来源的应用之前，请确保电视已经允许安装未知来源的应用。</div>
              <div class="tab-content_item m-b-12">如果电视默认设置了“禁止外接设备接入”或“禁止安装第三方应用”，请在设置中修改相关选项。</div>
              <div class="tab-content_item">如果在安装过程中遇到问题，请参考电视的官方帮助文档或联系电视品牌的客服支持。</div>
            </div>
          </div>`
};
const documentDomList = document.getElementsByClassName('two-box_content_parent');
Array.from(documentDomList).forEach(item => {
    const name = item.getAttribute('data-id');
    item.innerHTML = documentList[name];
});

//--------------- 判断是否是微信或QQ或支付宝打开 ---------------
(function (doc, win) {
    var _UA = win.navigator.userAgent;
    // alert(_UA)
    var isThirdParty = false;
    if(/QQ\/d/i.test(_UA) || /micromessenger/i.test(_UA.match(/MicroMessenger/i)) || /AlipayClient/i.test(_UA)){
        isThirdParty = true;
    };
    if(isThirdParty){
        const guideBox = doc.getElementById('guidebox');
        guideBox.style.display = 'block';
    }
})(document, window)

// ------------ 切换安装教程tab ---------------
const tabParent = document.getElementById('two-box_content');
const tabList = tabParent.getElementsByClassName('two-box_item');
tabParent.addEventListener("click", function(event) {
  const dom = event.target;
  if(dom && (dom.className === 'two-box_tab' || dom.parentNode.className === 'two-box_tab')){
    const changeDom = dom.closest('.two-box_item');
    if(changeDom.classList.contains('active')) {
        changeDom.classList.remove('active');
        return;
    };
    Array.from(tabList).forEach(item => {
        item.classList.remove('active');
    });
    changeDom.classList.add('active');
  };
});

const tabParentOffline = document.getElementById('offline-box_content');
const tabListOffline = tabParentOffline.getElementsByClassName('offline-box_item');
tabParentOffline.addEventListener("click", function(event) {
  const dom = event.target;
  if(dom && (dom.className === 'offline-box_tab' || dom.parentNode.className === 'offline-box_tab')){
    const changeDom = dom.closest('.offline-box_item');
    if(changeDom.classList.contains('active')) {
        changeDom.classList.remove('active');
        return;
    };
    Array.from(tabListOffline).forEach(item => {
        item.classList.remove('active');
    });
    changeDom.classList.add('active');
  };
});

const tabParent1 = document.getElementById('zero-box_content');
const tabList1 = tabParent1.getElementsByClassName('zero-box_item');
tabParent1.addEventListener("click", function(event) {
  const dom = event.target;
  if(dom && (dom.className === 'zero-box_tab' || dom.parentNode.className === 'zero-box_tab')){
    const changeDom = dom.closest('.zero-box_item');
    if(changeDom.classList.contains('active')) {
        changeDom.classList.remove('active');
        return;
    };
    Array.from(tabList1).forEach(item => {
        item.classList.remove('active');
    });
    changeDom.classList.add('active');
  };
});

const tabParent2 = document.getElementById('zero1-box_content');
const tabList2 = tabParent2.getElementsByClassName('zero1-box_item');
tabParent2.addEventListener("click", function(event) {
  const dom = event.target;
  if(dom && (dom.className === 'zero1-box_tab' || dom.parentNode.className === 'zero1-box_tab')){
    const changeDom = dom.closest('.zero1-box_item');
    if(changeDom.classList.contains('active')) {
        changeDom.classList.remove('active');
        return;
    };
    Array.from(tabList2).forEach(item => {
        item.classList.remove('active');
    });
    changeDom.classList.add('active');
  };
});

// -------------- 打开下载弹窗 ------------------
const downloadBox = document.getElementById('download-box');
downloadBox.addEventListener("click", function(event) {
    const target = event.target;
    const dom = target.closest('.download-item');
    if(!dom) return;
    if(dom.classList.contains('wait-online')) return;
    const id = dom.getAttribute('data-id');
    if(!id) return;
    const showDom = document.getElementById(id);
    showDom.classList.add('dialog-show');
});

//--------------- 关闭下载弹窗 --------------------
const dialogBox = document.getElementById('dialog-list');
dialogBox.addEventListener("click", function(event) {
    const target = event.target;
    if (target && (target.className === 'dialog_bg' || target.className === 'close-icon')) {
        const dom = target.closest('.dialog-parent');
        dom.classList.remove('dialog-show');
    };
});
//--------------- 判断下载按钮是否有下载链接 -------------
(function (doc, win) {
  const downloadDomList = doc.getElementsByClassName('dialog-link');
  Array.from(downloadDomList).forEach(function(item){
    const hrefValue = item.getAttribute('href');
    if(!hrefValue || hrefValue == '') {
      item.classList.add('dialog-link_wait_online')
    }
  })
})(document, window)
// ==UserScript==
// @name         百度文库自动最大化
// @namespace    http://39.106.100.138/
// @version      0.1
// @description  百度文库文档页面自动触发最大化事件|这样看起来似乎就没有广告了|如果在配一个截图的功能就完美了
// @author       绿衣
// @match        *://wenku.baidu.com/view/*
// @grant        unsafeWindow
// @license      GPL-2.0
// @icon         https://cdn.jsdelivr.net/gh/mirai-mamori/web-img/img/avatar.jpg
// ==/UserScript==
(function() {
    'use strict';

    // Your code here...
    setTimeout(function() {
               // 展开评论的所有回复
               $('.ic.reader-fullScreen.xllDownloadLayerHit_left.top-right-fullScreen').click();
               $('.down-arrow.goBtn').click();
            }, 100);
    $(".bg-opacity").remove();
    $(".fix-searchbar-wrap").remove();
    $("###doc_bottom_wrap.hidden-doc-banner.complex.doc-bottom-wrap.\31 2");
    //$("#doc_buttom_wrap.19.doc-bottom-wrap.complex.hidden-doc-banner")
})();
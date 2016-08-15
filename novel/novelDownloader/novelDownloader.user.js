// ==UserScript==
// @name        novelDownloader
// @name:zh-CN  【小说】下载脚本
// @namespace   https://github.com/dodying/Dodying-UserJs
// @description novelDownloaderHelper，press key "shift+d" to show up.
// @description:zh-CN 按“Shift+D”来显示面板，现支持自定义规则
// @version     1.31.151
// @connect     files.qidian.com
// @connect     a.heiyan.com
// @connect     k2.kansha.cc
// @require     http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js
// @require     https://greasyfork.org/scripts/18532-filesaver/code/FileSaver.js?version=127839
// @require     http://cdn.bootcss.com/jszip/3.0.0/jszip.min.js
// @require     https://greasyfork.org/scripts/21541-chs2sht/code/chs2sht.js?version=137286
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// @author      Dodying
// @namespace   https://github.com/dodying/Dodying-UserJs
// @supportURL  https://github.com/dodying/Dodying-UserJs/issues
// @icon        https://raw.githubusercontent.com/dodying/UserJs/master/Logo.png
// @run-at      document-end
//              正版
// @include     http://read.qidian.com/BookReader/*.aspx
// @include     http://vipreader.qidian.com/BookReader/vip,*,*.aspx
// @include     http://free.qidian.com/Free/ChapterList.aspx?bookId=*
// @include     http://www.qdmm.com/BookReader/*.aspx
// @include     http://chuangshi.qq.com/bk/*/*-*.html
// @include     http://yunqi.qq.com/bk/*/*-*.html
// @include     http://dushu.qq.com/intro.html?bid=*
// @include     http://book.tianya.cn/html2/dir.aspx?bookid=*
// @include     http://book.tianya.cn/chapter-*-*
// @include     http://www.hbooker.com/book/book_detail?book_id=*
// @include     http://www.hbooker.com/chapter/get_chapter_list?book_id=*
// @include     http://www.hbooker.com/chapter/book_chapter_detail?chapter_id=*
// @include     http://www.3gsc.com.cn/bookreader/*
// @include     http://book.zongheng.com/showchapter/*
// @include     http://book.zongheng.com/chapter/*/*
// @include     http://huayu.baidu.com/showchapter/*
// @include     http://huayu.baidu.com/chapter/*/*
// @include     http://www.17k.com/list/*
// @include     http://www.17k.com/chapter/*/*
// @include     http://www.8kana.com/book/*
// @include     http://www.8kana.com/read/*
// @include     http://www.heiyan.com/book/*/*
// @include     http://b.faloo.com/f/*
// @include     http://b.faloo.com/p/*/*
// @include     http://www.jjwxc.net/onebook.php?novelid=*
// @include     http://www.xxsy.net/books/*/*
// @include     http://book.zhulang.com/*
// @include     http://novel.hongxiu.com/a/*/*.html
// @include     http://www.readnovel.com/book/*
// @include     http://www.readnovel.com/novel/*.html
// @include     http://www.xs8.cn/book/*.html
// @exclude     http://www.xs8.cn/book/*/index.html
// @include     http://book.hjsm.tom.com/*/c*.html
// @include     http://www.kanshu.com/files/article/html/*
// @include     http://book.weibo.com/weibobook/book/*
// @include     http://book.weibo.com/book/play/*-*.html
// @include     http://www.lcread.com/bookpage/*/*
// @include     http://www.motie.com/book/*
// @include     http://www.shuhai.com/read/*
// @include     http://www.xiang5.com/booklist/*
// @include     http://www.xiang5.com/content/*/*
// @include     http://read.fmx.cn/files/article/html/*
// @include     http://novel.feiku.com/*/*
// @include     http://www.abada.com/Book/*/*
// @exclude     http://www.abada.com/Book/*/index.html
// @include     http://www.kujiang.com/book/*/*
// @include     http://www.tadu.com/book/catalogue/*
// @include     http://www.tadu.com/book/*/*/
// @include     http://yuedu.163.com/newBookReader.do?operation=catalog&sourceUuid=*
// @include     http://yuedu.163.com/book_reader/*/*
// @include     http://ebook.longmabook.com/showbook*
// @include     http://ebook.longmabook.com/showpaperword*
//              轻小说
// @include     http://www.wenku8.com/novel/*/*/*
// @include     http://book.sfacg.com/Novel/*
// @include     http://xs.dmzj.com/*/index.shtml
// @include     http://xs.dmzj.com/*/*/*.shtml
// @include     http://www.yidm.com/article/html/*/*/*
//              盗贴
// @include     http://www.23wx.com/html/*
// @include     http://www.biquge.la/book/*
// @include     http://www.shumilou.co/*/
// @include     http://www.shumilou.co/*/*.html
// @include     http://www.quledu.com/wcxs-*/
// @include     http://www.mangg.com/id*
// @include     http://www.23zw.com/olread/*/*/*
// @include     http://www.31wxw.com/*/*/*
// @include     http://www.520xs.la/*/*
// @exclude     http://www.520xs.la/book/*.html
// @include     http://www.biquge.com/*_*/*
// @include     http://www.69shu.com/*
// @include     http://www.biquku.com/*
// @include     http://www.5ccc.net/xiaoshuo/*
// @include     http://www.aiquxs.com/read/*/*/*
// @include     http://www.2kxs.com/xiaoshuo/*
// @include     http://www.mianhuatang.la/*/*
// @include     http://www.23wx.in/*
// @include     http://www.suimeng.la/files/article/html/*
// @include     http://www.00ksw.com/html/*
// @include     http://www.wangshuge.com/books/*
// @include     http://tt.71wx.net/xiaoshuo/*/*
// @include     http://www.71wx.net/xiaoshuo/*/*
// @include     http://www.kuaidu.cc/*/
// @include     http://www.vodtw.com/Html/Book/*/*/*
// @include     http://www.sqsxs.com/book/*
// @include     http://www.dashubao.co/book/*/*/*
// @include     http://www.iqingdou.net/chapter_*.html
// @include     http://www.aszw520.com/book/*
// @include     http://www.abcsee.net/book/*/*/*
// @include     http://www.bxwx.cc/*/*/*
// @include     http://www.uecg.net/html/*/*/*
// @include     http://www.5du5.com/book/*
// @include     http://www.klxsw.com/files/article/html/*/*/*
// @include     http://www.3gxs.com/html/*/*/*
// @include     http://www.baoliny.com/*/*
// @include     http://www.dhzw.com/book/*
// @include     http://www.bxwx8.org/b/*/*/*
// @include     http://www.dajiadu.net/files/article/html/*/*/*
// @include     http://www.3dllc.com/html/*
// @include     http://www.llwx.net/*_*/*
// @include     http://www.paoshuba.cc/Partlist/*
// @include     http://www.qmshu.com/html/*
// @include     http://www.gdsanlian.com/html/*
// @include     http://www.xinsiluke.com/book/*
// @include     http://www.zhuzhudao.com/txt/*
// @include     http://www.fqxsw.com/book/*
// @include     http://www.baquge.com/files/article/html/*/*/*
// @include     http://www.bookabc.net/*
// @include     http://www.13xs.com/xs/*/*/*
// @include     http://www.1xiaoshuo.com/*
// @include     http://www.daomengren.com/*_*/*
// @include     http://www.xs84.me/*_*/
// @include     http://www.15cy.com/*/*/*
// @include     http://www.zhaifans.com/novel-*-*.html
// @include     http://www.ranwen.org/files/article/*
// @include     http://www.773buy.com/html/*
// @include     http://www.00sy.com/xiaoshuo/*
// @include     http://www.qingkan520.com/book/*
// @include     http://www.xiaoxiaoshuwu.com/read/*
// @include     http://www.xiaoxiaoshuwu.com/shtml/*/*/*
// @include     http://www.99shumeng.org/shu/*/*/*
// @include     http://www.bookbao.net/views/*/*/*
// @include     http://www.bookbao.net/book/*/*/*
// @include     http://www.sto.cc/*-*/
// @include     http://www.shouda8.com/*
// @include     http://www.shumilou.net/*/*/
// @include     http://www.64mi.com/book/*/*/
// @include     http://www.zhuzhudao.cc/*_*/*
// @include     http://www.wanshuba.com/Html/*
// @include     http://www.bqxs.com/book/*
// @include     http://www.6yzw.com/*_*/*
// @include     http://www.daomengren.com/*_*/*
// @include     http://www.muyuge.com/*_*/*
// @include     http://www.zaiduu.com/zaidu*/*
// @include     http://www.musemailsvr.com/*
// @include     http://www.lewenwu.com/books/*/*/*
// @include     http://www.50zw.co/book_*/*
// @include     http://www.xiangcunxiaoshuo.com/html/*
// @include     http://www.lwxs520.com/books/*
// @include     http://www.scwzw.net/SC/*
// @include     http://www.yunlaige.com/html/*
// @include     http://www.cfwx.net/files/article/html/*
// @include     http://www.qiuwu.net/html/*
// @include     http://www.33yq.com/read/*
// @include     http://www.du00.cc/read/*
// @include     http://www.xs74.com/novel/*
// @include     http://www.fhxiaoshuo.com/read/*
// @include     http://www.snwx.com/book/*
// @include     http://www.yawen8.com/dushi/*
// @include     http://www.7dsw.com/book/*
// @include     http://www.bookgew.com/Html/Book/*
// @include     http://www.79xs.com/Html/Book/*
// @include     http://www.shuhaha.com/Html/Book/*
// @include     http://www.xiaoshuo2016.com/*
// @include     http://www.ttzw.com/book/*
// @include     http://www.shenmabook.com/ml-*/
// @include     http://www.fkzww.com/Html/Book/*
// @include     http://www.151kan.com/kan/*
// @include     http://www.shuotxts.com/*
// @include     http://www.doulaidu.com/xs/*
// @include     http://www.kanshu.la/book/*
// @include     http://www.kanunu8.com/files/*
// @include     http://www.hkxs99.net/*
// @include     http://paitxt.com/*
// @include     http://www.shunong.com/*
// @include     http://xiaoshuokan.com/haokan/*
// @include     http://www.vv44.net/novel/*
// @include     http://www.chuanyue8.com/files/article/html/*
// @include     http://*kansha.cc/shuji*.aspx?w_nameno=*
//              18X
// @include     http://www.haiax.net/files/article/html/*
// @include     http://www.lewenxs.net/files/article/html/*
// @include     http://www.wodexiaoshuo.com/*
// @include     http://www.bashudu.com/book/*.html
// @include     http://www.bashudu.com/read/*.html
// @include     http://bbs.6park.com/bbs4/messages/*.html
// @include     http://bbs.6park.com/bbs4/gmessages/*.html
// @include     http://web.6park.com/classbk/md*.shtml
// @include     http://web.6park.com/classbk/messages/*.html
// @include     http://www.neixiong88.com/xiaoshuo/*
// @include     http://www.chenfenggm.com/quanwen/*.html
// @include     http://www.chenfenggm.com/txtbook/*.html
// @include     http://www.xncwxw.com/files/article/html/*.html
// include     http://18av.mm-cg.com/novel*
// include     http://18av.mm-cg.com/serch*
// ==/UserScript==
/*
var script = document.createElement('script');
script.src = 'http://libs.baidu.com/jquery/1.9.1/jquery.min.js';
document.head.appendChild(script);
*/
//var debug = true;
if (GM_getValue('firstRun', true)) {
  alert('使用说明，第一次使用时弹出\n在目录页或是章节页使用。\n按“Shift+D”来显示下载选项。');
  GM_setValue('firstRun', false);
}
var indexRule = new Object();
var chapterRule = new Object();
var reRule = new Object();
//////////////////////////////////////////////////正版
addIRule('read.qidian.com', '起点主站', '.booktitle>h1', '.box_cont>div.list>ul>li>a', '.box_title:contains(\'VIP\')+.box_cont>div.list>ul>li>a');
chapterRule['read.qidian.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        var name = jQuery('.story_title>h1,.title>h3', response.response).text();
        var content = jQuery('script[src$=".txt"]', response.response);
        if (content.length > 0) {
          chapterRule['read.qidian.com'].Deal2(num, name, content);
        } else {
          content = wordFormat(jQuery('#content', response.response).html());
          content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
          if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
            name = tranStr(name, true);
            content = tranStr(content, true);
          }
          thisDownloaded(num, name, content);
        }
      }
    });
  },
  'Deal2': function (num, name, content) {
    var url = content.attr('src');
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      overrideMimeType: 'text/html; charset=gb2312',
      onload: function (response) {
        content = wordFormat(response.response.replace(/document\.write\(\'(.*)\'\);/, '$1'));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('vipreader.qidian.com', '', '.booktitle>h1', '.box_cont>div.list>ul>li>a', '.box_title:contains(\'VIP\')+.box_cont>div.list>ul>li>a');
addCRule('vipreader.qidian.com', '.story_title>h1', '#chaptercontent', 0);
addIRule('free.qidian.com', '起点免费', '.book_title>h2>strong', '#book_box>div>div>ul>li>a');
chapterRule['free.qidian.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    chapterRule['read.qidian.com'].Deal(num, url)
  }
};
addIRule('www.qdmm.com', '起点女生', '.booktitle>h1', 'div.list a', '.box_title:contains(\'VIP\')+.box_cont>div.list>ul>li>a');
chapterRule['www.qdmm.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    chapterRule['read.qidian.com'].Deal(num, url)
  }
};
addIRule('chuangshi.qq.com', '创世中文网', '.title>a>b', 'div.list>ul>li>a', 'div.list:has(span.f900)>ul>li>a');
chapterRule['chuangshi.qq.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        var name = response.response.replace(/[\r\n]/g, '').replace(/.*\<title\>(.*)\<\/title\>.*/, '$1').replace(/.*_(.*)_.*/, '$1');
        var bid = response.response.replace(/[\r\n]/g, '').replace(/.*'bid' : '(\d+)'.*/g, '$1');
        var uuid = response.response.replace(/[\r\n]/g, '').replace(/.*'uuid' : '(\d+)'.*/g, '$1');
        var host = getHostName(url);
        chapterRule['chuangshi.qq.com'].Deal2(host, num, name, bid, uuid);
      }
    });
  },
  'Deal2': function (host, num, name, bid, uuid) {
    if (host === 'dushu.qq.com') {
      url = 'http://' + host + '/read/' + bid + '/' + uuid;
    } else {
      url = 'http://' + host + '/index.php/Bookreader/' + bid + '/' + uuid;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
    xhr.onload = function () {
      content = JSON.parse(xhr.response).Content;
      if (host === 'chuangshi.qq.com') {
        var base = 30;
        var arrStr = new Array();
        var arrText = content.split('\\');
        for (var i = 1, len = arrText.length; i < len; i++) {
          arrStr.push(String.fromCharCode(parseInt(arrText[i], base)));
        }
        content = arrStr.join('');
      }
      temp = wordFormat(jQuery('.bookreadercontent', content).html().replace('最新章节由云起书院首发，最新最火最快网络小说首发地！（本站提供：传统翻页、瀑布阅读两种模式，可在设置中选择）', '').replace('本作品腾讯文学发表，请登录', '').replace('dushu.qq.com', '').replace('浏览更多精彩作品。腾讯公司版权所有，未经允许不得复制', ''));
      content = temp;
      content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
      if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
        name = tranStr(name, true);
        content = tranStr(content, true);
      }
      thisDownloaded(num, name, content);
    }
    xhr.send('lang=zhs');
  }
};
addIRule('yunqi.qq.com', '云起书院', '.title>a>b', 'div.list>ul>li>a', 'div.list:has(span.f900)>ul>li>a');
chapterRule['yunqi.qq.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    chapterRule['chuangshi.qq.com'].Deal(num, url);
  }
};
addIRule('dushu.qq.com', '腾讯读书(只支持当前目录页)', 'h3>a', '#chapterList>div>ol>li>a', '#chapterList>div>ol>li:not(:has(span.free))>a');
chapterRule['dushu.qq.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    chapterRule['chuangshi.qq.com'].Deal(num, url);
  }
};
addIRule('book.tianya.cn', '天涯文学(只支持当前目录页)', 'h1>a', 'ul.dit-list>li>a', 'ul.dit-list>li:not(:has(.free))>a');
chapterRule['book.tianya.cn'] = {
  'lang': 0,
  'Deal': function (num, url) {
    if (!jQuery(window).data('firstRun')) {
      jQuery(window).data('firstRun', true);
      unsafeWindow.jQuery('head').append('<script type="text/javascript" src="http://static.tianyaui.com/global/ebook/web/static/js/dropdown_f10ac7c.js"></script>');
    }
    var urlArr = url.split('-');
    GM_xmlhttpRequest({
      method: 'POST',
      url: 'http://app.3g.tianya.cn/webservice/web/read_chapter.jsp',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'http://app.3g.tianya.cn/webservice/web/proxy.html',
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: 'bookid=' + urlArr[1] + '&chapterid=' + urlArr[2],
      onload: function (response) {
        var info = JSON.parse(response.response);
        var name = info.data.curChapterName;
        var content = wordFormat(unsafeWindow.bitcake.dec(info.data.chapterContent).replace(/Hi.*|来自IP:\d+\.\d+\.\d+\.\d+/g, ''));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('www.hbooker.com', '欢乐书客', '.book-title>h3', '.book-chapter-list>.clearfix>li>a', '.book-chapter-list>.clearfix>li>a:has(.icon-vip)', false, 1);
chapterRule['www.hbooker.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    if (!jQuery(window).data('firstRun')) {
      jQuery(window).data('firstRun', true);
      jQuery('head').append('<script type="text/javascript" src="http://www.hbooker.com/resources/js/enjs.min.js"></script>');
    }
    var chapterId = url.replace('http://www.hbooker.com/chapter/book_chapter_detail?chapter_id=', '');
    GM_xmlhttpRequest({
      method: 'POST',
      url: 'http://www.hbooker.com/chapter/ajax_get_session_code',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Referer': 'http://www.hbooker.com/chapter/book_chapter_detail?chapter_id=' + chapterId,
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: 'chapter_id=' + chapterId,
      onload: function (response) {
        var json = JSON.parse(response.response);
        var accessKey = json.chapter_access_key;
        chapterRule['www.hbooker.com'].Deal2(num, url, accessKey)
      }
    });
  },
  'Deal2': function (num, url, accessKey) {
    var chapterId = url.replace('http://www.hbooker.com/chapter/book_chapter_detail?chapter_id=', '');
    GM_xmlhttpRequest({
      method: 'POST',
      url: 'http://www.hbooker.com/chapter/get_book_chapter_detail_info',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Referer': 'http://www.hbooker.com/chapter/book_chapter_detail?chapter_id=' + chapterId,
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: 'chapter_id=' + chapterId + '&chapter_access_key=' + accessKey,
      onload: function (response) {
        var json = JSON.parse(response.response);
        /*以下代码来自http://www.hbooker.com/resources/js/myEncrytExtend-min.js*/
        var s = {
          content: json.chapter_content,
          keys: json.encryt_keys,
          accessKey: accessKey
        }
        var n = s.content;
        var r = s.keys;
        var t = s.keys.length;
        var q = s.accessKey;
        var o = q.split('');
        var m = o.length;
        var k = new Array();
        k.push(r[(o[m - 1].charCodeAt(0)) % t]);
        k.push(r[(o[0].charCodeAt(0)) % t]);
        for (i = 0; i < k.length; i++) {
          n = base64.decode(n);
          var p = k[i];
          var j = base64.encode(n.substr(0, 16));
          var f = base64.encode(n.substr(16));
          var h = CryptoJS.format.OpenSSL.parse(f);
          n = CryptoJS.AES.decrypt(h, CryptoJS.enc.Base64.parse(p), {
            iv: CryptoJS.enc.Base64.parse(j),
            format: CryptoJS.format.OpenSSL
          });
          if (i < k.length - 1) {
            n = n.toString(CryptoJS.enc.Base64);
            n = base64.decode(n);
          }
        }
        var content = n.toString(CryptoJS.enc.Utf8);
        var name = jQuery(window).data('dataDownload') [num].name;
        content = wordFormat(content);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('www.3gsc.com.cn', '3G书城', 'h1>a', '.menu-area>p>a', '.menu-area>p>a:has(span.vip)');
addCRule('www.3gsc.com.cn', 'h1', '.menu-area', 0);
addIRule('book.zongheng.com', '纵横', '.txt>h1', '.chapterBean>a', '.chapterBean>em+a');
addCRule('book.zongheng.com', 'h1>em', '#chapterContent', 0);
addIRule('huayu.baidu.com', '花语女生网', '.book_title>h1', '.chapname>a', '.chapname>a.normal,.chapname:has(em.vip)>a');
addCRule('huayu.baidu.com', '.tc>h2', '.book_con', 0);
addRRule('huayu.baidu.com', '<span class="watermark">.*?</span>');
addIRule('www.17k.com', '17K', 'h1.Title', 'dl.Volume>dd>a', 'dl.Volume>dd>a:has(img)');
addCRule('www.17k.com', 'h1', '#chapterContentWapper', 0);
addRRule('www.17k.com', '\\s+||| ', '本书首发来自17K小说网，第一时间看正版内容！.*');
addIRule('www.8kana.com', '不可能的世界', 'h2.left', 'li.nolooking>a', 'li.nolooking>a:has(.chapter_con_VIP)');
addCRule('www.8kana.com', 'h2', '.myContent', 0);
addRRule('www.8kana.com', '本书连载自免费原创小说网站.*');
addIRule('www.heiyan.com', '黑岩', 'h1.page-title', 'div.bd>ul>li>a', 'div.bd>ul>li>a.isvip');
chapterRule['www.heiyan.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    var urlTrue = 'http://a.heiyan.com/ajax/chapter/content/' + url.replace(/.*\//, '');
    GM_xmlhttpRequest({
      method: 'GET',
      url: urlTrue,
      onload: function (response) {
        var info = JSON.parse(response.response);
        var name = info.chapter.title;
        var content = wordFormat(info.chapter.htmlContent);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('b.faloo.com', '飞卢', 'h1.a_24b', '.td_0>a', '.td_0>a[href^="http://b.faloo.com/vip/"]');
addCRule('b.faloo.com', '#title>h1', '#content', 0);
addRRule('b.faloo.com', '\\s+||| ', '飞卢小说网.*');
addIRule('www.jjwxc.net', '晋江文学城', 'h1>span', '#oneboolt>tbody>tr>td>span>div>a', '#oneboolt>tbody>tr>td>span>div>a[id^="vip_"]');
addCRule('www.jjwxc.net', 'h2', '.noveltext', 0, 1);
addRRule('www.jjwxc.net', '<font color="#.*?>.*?晋江原创网.*?font>', '\\s+||| ', '<div.*<div style="clear:both;"></div>', '<span.*class="favorite_novel">插入书签</span>');
addIRule('www.xxsy.net', '潇湘书院', '#ct_title>h1', '#catalog_list>ul>li>a', '#catalog_list>ul>li:has(input)>a');
addCRule('www.xxsy.net', 'h1>a', '#zjcontentdiv', 0);
addRRule('www.xxsy.net', '本书由潇湘书院首发，请勿转载！');
addIRule('book.zhulang.com', '逐浪', '.crumbs>strong>a', '.chapter-list>ul>li>a', '.chapter-list>ul>li>a:has(span)');
addCRule('book.zhulang.com', 'h2>span', '#read-content', 0);
addRRule('book.zhulang.com', '\\s+||| ', '<h2>.*</h2>', '<div class="textinfo">.*</div>', '<p> <cite>.*</p>');
addIRule('novel.hongxiu.com', '红袖添香', '#htmltimu', '#htmlList>dl>dd>ul>li>strong>a', '#htmlList>dl>dd>ul>li>strong:has(.isvip)>a');
addCRule('novel.hongxiu.com', '#htmltimu', '#htmlContent', 0);
addRRule('novel.hongxiu.com', '红\\|袖\\|言\\|情\\|小\\|说', 'www.hongxiu.com');
addIRule('www.readnovel.com', '小说阅读网', '.nownav>a:nth-child(5)', '.ML_ul>li>a', '.ML_ul>li>a[id^="vip_"]');
addCRule('www.readnovel.com', 'h1', '.zhangjie', 0, 1);
addRRule('www.readnovel.com', '\\s+||| ', '<div class="miaoshu">.*');
addIRule('www.xs8.cn', '言情小说吧', 'h1>a', '.mod_container>ul>li>a', '.mod_container>ul>li:has(img)>a');
addCRule('www.xs8.cn', '.chapter_title>h2', '.chapter_content', 0);
addIRule('book.hjsm.tom.com', '幻剑书盟', '.title>h2', '.ocon>ul>li>a', '.ocon>ul>li:has(img)>a');
chapterRule['book.hjsm.tom.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    var urlArr = url.split(/\/|\./);
    urlTrue = 'http://book.hjsm.tom.com/' + urlArr[6].substring(0, 2) + '/' + urlArr[6] + '/' + urlArr[7] + '.js';
    GM_xmlhttpRequest({
      method: 'GET',
      url: urlTrue,
      onload: function (response) {
        var name = jQuery(window).data('dataDownload') [num].name;
        var content = response.response.replace('document.write("<p>', '').replace('");', '')
        content = wordFormat(eval('\'' + content + '\''));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
}
addIRule('www.kanshu.com', '看书网', '.mu_h1>h1', '.mulu_list>li>a', '.mulu_list>li:has(span)>a');
addCRule('www.kanshu.com', 'h1', '.yd_text2', 0, 1);
addRRule('www.kanshu.com', '\\s+||| ', '<span id="avg_link">.*');
addIRule('book.weibo.com', '微博读书-书城', 'h1.book_name', '.chapter>span>a', '.chapter>span:has(i)>a');
chapterRule['book.weibo.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        var name = jQuery('.sr-play-box-scroll-t-path>span', response.response).text();
        var content = response.response.replace(/\s+/g, ' ').replace(/.*chapterContent ="(.*?)";.*/, '$1');
        content = wordFormat(eval('\'' + content + '\''));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
}
addIRule('www.lcread.com', '连城读书', '.bri>table>tbody>tr>td>h1', '#abl4>table>tbody>tr>td>a', '#abl4>table>tbody>tr>td>a[href^="http://vipbook.lc1234.com/"]');
addCRule('www.lcread.com', 'h2', '#ccon', 0, 1);
addRRule('www.lcread.com', '\\s+||| ', '作者闲话：.*');
addIRule('www.motie.com', '磨铁中文网', 'h1>a', '.list>li>a:has(span.desc)', '.list>li>a:has(span.desc):has(img)');
addCRule('www.motie.com', 'h1', '.page-content', 0);
addIRule('www.shuhai.com', '书海小说网', 'h3', '.box_chap>ul>li>a', '.box_chap>ul>li:has(em)>a');
addCRule('www.shuhai.com', 'h1', '#readcon', 0);
addIRule('www.xiang5.com', '香网', '.lb>h2', '.lb>table>tbody>tr>td>a');
chapterRule['www.xiang5.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        if (jQuery('.vipdy', response.response).length > 0) {
          for (var i = num; i < jQuery(window).data('dataDownload').length; i++) {
            jQuery(window).data('dataDownload') [i].content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n此章节为Vip章节';
            jQuery(window).data('dataDownload') [i].ok = true;
          }
          jQuery(window).data('downloadList', new Array());
          return
        }
        var name = jQuery('h1', response.response).text();
        var content = jQuery('.xsDetail', response.response).html().replace(/\s+/g, ' ').replace(/作者有话说.*/, '');
        content = wordFormat(wordFormatSpecial('www.kujiang.com', content));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('read.fmx.cn', '凤鸣轩小说网', '.art_listmain_top>h1', '.art_fnlistbox>span>a,.art_fnlistbox_vip>ul>li>span>a', '.art_fnlistbox_vip>ul>li>span>a');
addCRule('read.fmx.cn', 'h1', '#content', 0, 1);
addRRule('read.fmx.cn', '\\s+||| ', '<p><a.*');
addIRule('novel.feiku.com', '飞库网', '.book_dirtit', '.book_dirbox>.clearfix>li>a', '.book_dirbox>.clearfix>li>a[href*="/vip/"]');
addCRule('novel.feiku.com', '.art_tit', '#artWrap', 0);
addIRule('www.abada.com', '阿巴达', '#booktitle>h1', '.list>ul>li>a', '.list>ul>li:has(font)>a');
addCRule('www.abada.com', 'h1', '#content', 0, 1);
addIRule('www.kujiang.com', '酷匠网', '.kjtitle.align-center.pad-bottom>a', '.third>a');
chapterRule['www.kujiang.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        if (response.finalUrl.indexOf('http://www.kujiang.com/login') === 0) {
          for (var i = num; i < jQuery(window).data('dataDownload').length; i++) {
            jQuery(window).data('dataDownload') [i].content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n此章节为Vip章节';
            jQuery(window).data('dataDownload') [i].ok = true;
          }
          jQuery(window).data('downloadList', new Array());
          return
        }
        var name = jQuery('.entry-title', response.response).text();
        var content = jQuery('#endText', response.response).html();
        content = wordFormat(wordFormatSpecial('www.kujiang.com', content));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addRRule('www.kujiang.com', '.*酷.*匠.*网.*首.*发', '\\s+||| ', '<span style="color:red">.*');
addIRule('www.tadu.com', '塔读文学', '.book-detail.catalog-tip>h3', '.detail-chapters>ul>li>h5>a', '.detail-chapters>ul>li>h5>a:has(span)');
chapterRule['www.tadu.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        var name = jQuery('div.title_>h2', response.response).text();
        var content = unescape(response.response.replace(/\s+/g, ' ').replace(/.*unescape\("(.*?)"\).*/, '$1'));
        content = wordFormat(content);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('yuedu.163.com', '网易云阅读', 'h2.title', '.item>a', '.vip>a', false);
chapterRule['yuedu.163.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    urlArr = url.split('/');
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'http://yuedu.163.com/getArticleContent.do?sourceUuid=' + urlArr[4] + '&articleUuid=' + urlArr[5],
      onload: function (response) {
        var content = JSON.parse(response.response).content;
        content = base64.decode(content);
        content = utf8to16(content);
        var name = content.replace(/\s+/g, ' ').replace(/.*<h1><span>(.*?)<\/span><\/h1>.*/, '$1');
        var content = content;
        content = wordFormat(content);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('ebook.longmabook.com', '龍馬文化線上文學城', '.css_td>b>a', '.uk-table>tbody>tr>td>a:nth-child(2)');
chapterRule['ebook.longmabook.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        var urlNext = response.response.replace(/\s+/g, ' ').replace(/.*iframe\.src="(.*?)";.*/, '$1');
        var name = jQuery('.uk-alert>b:nth-child(3)>font', response.response).text();
        chapterRule['ebook.longmabook.com'].Deal2(num, urlNext, url, name);
      }
    });
  },
  'Deal2': function (num, url, urlReferer, nameRaw) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'http://ebook.longmabook.com' + url,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Referer': urlReferer,
        'X-Requested-With': 'XMLHttpRequest'
      },
      onload: function (response) {
        var content = jQuery('#ebookcontent', response.response).html();
        content = wordFormat(content.replace(/<font class="OutStrRnds">.*?<\/font>/g, ''));
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        var name = nameRaw;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
//////////////////////////////////////////////////轻小说
addIRule('www.wenku8.com', '轻小说文库', '#title', '.css>tbody>tr>td>a');
addCRule('www.wenku8.com', '#title', '#content', 0, 1);
addIRule('book.sfacg.com', 'SF轻小说', 'h1', '.list_Content>volumeitem>li>a');
addCRule('book.sfacg.com', '.list_menu_title', '#ChapterBody', 0);
addIRule('xs.dmzj.com', '动漫之家', '.novel_cover_text>ol>li>a>h1', '.download_rtx>ul>li>a');
addCRule('xs.dmzj.com', 'h1', '#novel_contents', 0);
addIRule('www.yidm.com', '迷糊动漫', 'title', '.chapters.clearfix>a');
addCRule('www.yidm.com', '.bd>h4', '.bd', 0, 1);
//////////////////////////////////////////////////盗贴
addIRule('www.23wx.com', '顶点小说', '.bdsub>dl:nth-child(1)>dt:nth-child(1)>a:nth-child(4)', '#at>tbody>tr>td>a:lt(-1)');
addCRule('www.23wx.com', 'h1', '#contents', 0, 1);
addRRule('www.23wx.com', '\\s+||| ', '手机用户请到.*');
addIRule('www.biquge.la', '笔趣阁', 'h1', '#list>dl>dd>a');
addCRule('www.biquge.la', 'h1', '#content', 0, 1);
addIRule('www.shumilou.co', '书迷楼', '#mybook+.list>.tit>b', 'li.zl>a');
addCRule('www.shumilou.co', 'h2', '#content', 0);
addRRule('www.shumilou.co', '\\s+||| ', '<script.*?</a>.*?</script>', '书迷楼最快更新，无弹窗阅读请.*');
addIRule('www.quledu.com', '无错小说网', 'h1>.bigname', '.zjlist4>ol>li>a');
addCRule('www.quledu.com', '#htmltimu', '#htmlContent', 0);
addRRule('www.quledu.com', '<img src="(.*?)">|||$1', '/sss/da.jpg|||打', '/sss/maws.jpg|||吗？', '/sss/baw.jpg|||吧？', '/sss/wuc.jpg|||无', '/sss/maosu.jpg|||：“', '/sss/cuow.jpg|||错', '/sss/ziji.jpg|||自己', '/sss/shenme.jpg|||什么', '/sss/huiqub.jpg|||回去', '/sss/sjian.jpg|||时间', '/sss/zome.jpg|||怎么', '/sss/zhido.jpg|||知道', '/sss/xiaxin.jpg|||相信', '/sss/faxian.jpg|||发现', '/sss/shhua.jpg|||说话', '/sss/dajiex.jpg|||大姐', '/sss/dongxi.jpg|||东西', '/sss/erzib.jpg|||儿子', '/sss/guolair.jpg|||过来', '/sss/xiabang.jpg|||下班', '/sss/zangfl.jpg|||丈夫', '/sss/dianhua.jpg|||电话', '/sss/huilaim.jpg|||回来', '/sss/xiawu.jpg|||下午', '/sss/guoquu.jpg|||过去', '/sss/shangba.jpg|||上班', '/sss/mingtn.jpg|||明天', '/sss/nvrenjj.jpg|||女人', '/sss/shangwo.jpg|||上午', '/sss/shji.jpg|||手机', '/sss/xiaoxinyy.jpg|||小心', '/sss/furene.jpg|||夫人', '/sss/gongzih.jpg|||公子', '/sss/xiansg.jpg|||先生', '/sss/penyouxi.jpg|||朋友', '/sss/xiaoje.jpg|||小姐', '/sss/xifup.jpg|||媳妇', '/sss/nvxudjj.jpg|||女婿', '/sss/xondi.jpg|||兄弟', '/sss/lagong.jpg|||老公', '/sss/lapo.jpg|||老婆', '/sss/meimeid.jpg|||妹妹', '/sss/jiejiev.jpg|||姐姐', '/sss/jiemeiv.jpg|||姐妹', '/sss/xianggx.jpg|||相公', '/sss/6shenumev.jpg|||什么', '/sss/cuoaw.jpg|||错', '/sss/fpefnyoturxi.jpg|||朋友', '/sss/vfsjgigarn.jpg|||时间', '/sss/zzhiedo3.jpg|||知道', '/sss/zibjib.jpg|||自己', '/sss/qdonglxi.jpg|||东西', '/sss/hxiapxint.jpg|||相信', '/sss/fezrormre.jpg|||怎么', '/sss/nvdrfenfjfj.jpg|||女人', '/sss/jhiheejeieev.jpg|||姐姐', '/sss/xdifagojge.jpg|||小姐', '/sss/gggugolgair.jpg|||过来', '/sss/maoashu.jpg|||：“', '/sss/gnxnifawhu.jpg|||下午', '/sss/rgtugoqgugu.jpg|||过去', '/sss/khjukilkaim.jpg|||回来', '/sss/gxhigfadnoxihnyy.jpg|||小心', '/sss/bkbskhhuka.jpg|||说话', '/sss/xeieavnfsg.jpg|||先生', '/sss/yuhhfuiuqub.jpg|||回去', '/sss/pdianphua.jpg|||电话', '/sss/fabxianr.jpg|||发现', '/sss/feilrpto.jpg|||老婆', '/sss/gxronfdri.jpg|||兄弟', '/sss/flfaggofng.jpg|||老公', '/sss/tymyigngtyn.jpg|||明天', '/sss/dfshfhhfjfi.jpg|||手机', '/sss/gstjhranjgwjo.jpg|||上午', '/sss/fmgeyimehid.jpg|||妹妹', '/sss/gxgihftutp.jpg|||媳妇', '/sss/cerztifb.jpg|||儿子', '/sss/gfxgigagbfadng.jpg|||下班', '/sss/gstjhranjg.jpg|||下午', '/sss/hjeirerm6eihv.jpg|||姐妹', '/sss/edajihexr.jpg|||大姐', '/sss/wesfhranrrgba.jpg|||上班', '/sss/gfognggzigh.jpg|||公子', '/sss/frurtefne.jpg|||夫人', '/sss/fzagnggfbl.jpg|||丈夫', '/sss/nvdxfudfjfj.jpg|||女婿', '/sss/xdidafnggx.jpg|||相公', '/sss/zenme.jpg|||怎么', '/sss/gongzi.jpg|||公子', '/sss/ddefr.jpg', '.*ddefr\\.jpg.*|无(?:错|.*cuoa?w\\.jpg.*)小说网不[少跳]字|w[a-z\\.]*om?|.*由[【无*错】].*会员手打[\\s\\S]*', '无错不跳字|无广告看着就是爽!|一秒记住.*|全文免费阅读.*|8 9 阅阅 读 网|看小说最快更新|“小#说看本书无广告更新最快”', '[\\x20-\\x7e》]?无(?:.|&gt;)错.小说.{1,2}[Ｗw]+.*?[cＣ][oＯ][mＭ]', '<无-错>', '—无—错—小说', '\\+无\\+错\\+', '&amp;无&amp;错&amp;小说', '无错小说 www.quled[Ｕu].com');
addIRule('www.mangg.com', '追书网', 'h1', '#chapterlist>dd>a');
addCRule('www.mangg.com', '#bgdiv>dl>dt', '#booktext', 0);
addRRule('www.mangg.com', '纯文字在线阅读本站域名手机同步阅读请访问M.Shumilou.Com', '最快更新，无弹窗阅读请。');
addIRule('www.23zw.com', '傲世中文网', 'h1', '.chapter_list_chapter>a');
addCRule('www.23zw.com', '#chapter_title>h1', '#text_area', 0, 1);
addIRule('www.31wxw.com', '三易文学', 'h1', '#readerlist>ul>li>a');
addCRule('www.31wxw.com', 'h1', '#content', 0, 1);
addIRule('www.520xs.la', '520小说网', 'h1', '.list>dl>dd>a', '', true);
addCRule('www.520xs.la', 'h1', '.con_txt', 0, 1);
addRRule('www.520xs.la', '\\s+||| ', '推荐游戏.*');
addIRule('www.biquge.com', '笔趣阁', 'h1', '#list>dl>dd>a');
addCRule('www.biquge.com', 'h1', '#content', 0);
addIRule('www.69shu.com', '69书吧', '.weizhi>a:nth-child(3)', '.mulu_list>li>a:gt(5):lt(-1)');
addCRule('www.69shu.com', 'h1', '.yd_text2', 0, 1);
addIRule('www.biquku.com', '笔趣库', 'h1', '#list>dl>dd>a');
addCRule('www.biquku.com', 'h1', '#content', 0, 1);
addIRule('www.5ccc.net', '我看书斋', 'h1', 'table.acss>tbody>tr>td.ccss>a');
addCRule('www.5ccc.net', 'h1', '#content', 0, 1);
addIRule('www.aiquxs.com', '爱去小说网', '.con_top>a:nth-child(4)', '#list>dl>dd>a');
addCRule('www.aiquxs.com', 'h1', '#booktext', 0, 1);
addRRule('www.aiquxs.com', '手机用户请浏览.*');
addIRule('www.2kxs.com', '2K小说阅读网', 'h1', '.book>dd:gt(6)>a');
addCRule('www.2kxs.com', 'h2', 'p.Text', 0, 1);
addRRule('www.2kxs.com', '\\s+||| ', '<a href=.*</strong>', '2k小说阅读网');
addIRule('www.mianhuatang.la', '棉花糖小说网', 'h1', '.novel_list>dl>dd>a');
addCRule('www.mianhuatang.la', 'h1', '.content', 0, 1);
addRRule('www.mianhuatang.la', '\\s+||| ', '<div class="con_l">.*', '\\[看本书最新章节请到棉花糖小说网www.mianhuatang.cc\\]', '<strong>.*?</strong>');
addIRule('www.23wx.in', '随梦小说网', '.title>h2', '.list_box>ul>li>a');
addCRule('www.23wx.in', 'h2', '.box_box', 0, 1);
addIRule('www.suimeng.la', '随梦小说网', 'h2', 'table.acss>tbody>tr>td.ccss>a');
addCRule('www.suimeng.la', '.ctitle', '#ccontent', 0, 1);
addIRule('www.00ksw.com', '零点看书', 'h1', '#list>dl>dd>a');
addCRule('www.00ksw.com', 'h1', '#content', 0, 1);
addIRule('www.wangshuge.com', '望书阁', 'h1', '#at>tbody>tr>td.L>a');
addCRule('www.wangshuge.com', 'h1', '#contents', 0, 1);
addIRule('tt.71wx.net', '天天中文', 'h1', '.ml_main>dl>dd>a');
addCRule('tt.71wx.net', 'h2', '.yd_text2', 0, 1);
addIRule('www.71wx.net', '清逸文学网', 'h1', '.ml_main>dl>dd>a');
addCRule('www.71wx.net', 'h2', '.yd_text2', 0, 1);
addIRule('www.kuaidu.cc', '快读', '.xsname>a', '.mulu>ul>li>a');
addCRule('www.kuaidu.cc', '.h1title>h1', '.contentbox', 0);
addIRule('www.vodtw.com', '品书网', 'h1', '.insert_list>dl>dd>ul>li>a');
addCRule('www.vodtw.com', '#htmltimu', '.contentbox', 0, 1);
addRRule('www.vodtw.com', '手机阅读', '品书网', 'www.vodtw.com', '手机用户请.*', '请分享$');
addIRule('www.sqsxs.com', '手牵手小说', 'h1', '#list>dl>dd>a');
addCRule('www.sqsxs.com', 'h1', '#content', 0, 1);
addRRule('www.sqsxs.com', '.*更新快.*无弹窗.*纯文字.*');
addIRule('www.dashubao.co', '大书包小说网', 'h1', '.ml_main>dl>dd>a');
addCRule('www.dashubao.co', 'h2', '.yd_text2', 0, 1);
addIRule('www.iqingdou.net', '青豆小说', 'h1>a', '.dirconone>ul>li>a');
addCRule('www.iqingdou.net', 'h2>a', '#chapter_content', 0);
addIRule('www.aszw520.com', '爱上中文(作者现无法访问)', 'h1', '#at>tbody>tr>td.L>a');
addCRule('www.aszw520.com', 'h1', '#contents', 0, 1);
addIRule('www.abcsee.net', '北辰文学网', 'h1', '#at>tbody>tr>td.L>a');
addCRule('www.abcsee.net', 'h1', '#contents', 0, 1);
addIRule('www.bxwx.cc', '新笔下文学', '.novel_name', '.novel_list>ul>li>a');
addCRule('www.bxwx.cc', '.novel_title', '.novel_content', 0, 1);
addRRule('www.bxwx.cc', '【.*?新.*?笔.*?下.*?文.*?学.*?】');
addIRule('www.uecg.net', '优易小说网', '.novel_name', '.chapter>dd>a');
addCRule('www.uecg.net', '.novel_title', '.novel_content', 0, 1);
addRRule('www.uecg.net', '优易小说网 http://www.uecg.net 为您提供最好的免费小说在线阅读。');
addIRule('www.5du5.com', '吾读小说网', 'h1', '#list>li>a');
addCRule('www.5du5.com', 'h1', '#content', 0, 1);
addIRule('www.klxsw.com', '可乐小说网', 'h1>a', 'body>center>table>tbody>tr>td>div>a');
addCRule('www.klxsw.com', '.newstitle', '#r1c', 0, 1);
addIRule('www.3gxs.com', '00小说', '.book_news_title>ul:nth-child(1)>li:nth-child(1)>a:nth-child(3)', '.booklist>li>span>a');
addCRule('www.3gxs.com', '.vv', '#content', 0, 1);
addIRule('www.baoliny.com', '风云小说阅读网', 'h1', 'table.acss>tbody>tr>td.ccss>a');
addCRule('www.baoliny.com', 'h1', '#content', 0, 1);
addRRule('www.baoliny.com', '【.*?baoliny.*?】');
addIRule('www.dhzw.com', '大海中文', 'h1', '#list>dl>dd>a');
addCRule('www.dhzw.com', 'h1', '#BookText', 0, 1);
addIRule('www.bxwx8.org', '笔下文学', '#title', '#TabCss>dl>dd>a', '', true);
addCRule('www.bxwx8.org', '#title', '#content', 0, 1);
addIRule('www.dajiadu.net', '大家读书院', 'h1', '#booktext>ul>li>a');
addCRule('www.dajiadu.net', '#title', '#content1', 0, 1);
addRRule('www.dajiadu.net', '更多精彩小说.*');
addIRule('www.3dllc.com', '官术网', '.v-nav>p>a:nth-child(2)', '.pox>li>a');
addCRule('www.3dllc.com', 'h1', '.zhang-txt-nei-rong', 0);
addRRule('www.3dllc.com', '温馨提示：方向键左右.*');
addIRule('www.llwx.net', '啦啦文学网', 'h1', '#list>dl>dd>a');
addCRule('www.llwx.net', 'h1', '#content>p', 0, 1);
addIRule('www.paoshuba.cc', '泡书吧', '#info>h1', '#list>dl>dd>a');
addCRule('www.paoshuba.cc', '.zhangjieming>h1', '#TXT', 0, 1);
addIRule('www.qmshu.com', '启蒙书网', '.wrapper_list>h1>a', '#htmlList>dl>dd>ul>li>strong>a');
addCRule('www.qmshu.com', 'h1', '#htmlContent', 0, 1);
addRRule('www.qmshu.com', '无弹窗小说网.*', '看更新最快的.*');
addIRule('www.gdsanlian.com', '三联文学网', '.content>h1', '.dirbox>dl>dd>a');
addCRule('www.gdsanlian.com', 'h1', '#contents', 0, 1);
addIRule('www.xinsiluke.com', '思路客小说阅读网', '#title>h1', '#list>dl>dd>a');
addCRule('www.xinsiluke.com', 'h1', '#content', 0, 1);
addRRule('www.xinsiluke.com', '新思路客.*?com');
addIRule('www.zhuzhudao.com', '猪猪岛小说网', 'h1', '.list>dd>a');
addCRule('www.zhuzhudao.com', 'h1', '.content', 0, 1);
addIRule('www.fqxsw.com', '番茄小说', '#info>h1', '#list>dl>dd>a');
addCRule('www.fqxsw.com', 'h1', '#content', 0, 1);
addRRule('www.fqxsw.com', 'fqxsw.com');
addIRule('www.baquge.com', '新笔趣阁', 'h1', '#list>dl>dd>a');
addCRule('www.baquge.com', 'h1', '#content', 0, 1);
addIRule('www.bookabc.net', 'ABC小说', '.bookinfo>h1', '.chapter-list>li>a');
addCRule('www.bookabc.net', 'h1', '#content', 0);
addIRule('www.13xs.com', '13小说', '.con_top>a:nth-child(3)', '#list>dl>dd>a');
addCRule('www.13xs.com', 'h1', '#booktext', 0, 1);
addIRule('www.1xiaoshuo.com', 'E小说', '#info>h1', '#list>dl>dd>a');
addCRule('www.1xiaoshuo.com', 'h1', '#content', 0, 1);
addRRule('www.1xiaoshuo.com', 'E.*?小.*?说.*?\\.com');
addIRule('www.daomengren.com', '盗梦人小说网', '#info>h1', '#list>dl>dd>a');
addCRule('www.daomengren.com', 'h1', '#content>p', 0, 1);
addIRule('www.xs84.me', '小说巴士', '.info>ul>li>h1', '#list>dl>dd>a');
addCRule('www.xs84.me', 'h1', '#contentts', 0, 1);
addIRule('www.zhaifans.com', '宅范书斋', '.headname', '.contentlist>ul>li>a');
addCRule('www.zhaifans.com', '.headtitle', '#showcontent', 0, 1);
addIRule('www.ranwen.org', '燃文小说', '#info>h1', '#list>dl>dd>a');
addCRule('www.ranwen.org', 'h1', '#content', 0, 1);
addRRule('www.ranwen.org', '燃.*?文.*?小.*?说.*?org');
addIRule('www.773buy.com', '燃文小说', '.bname', '.dccss>a');
addCRule('www.773buy.com', '.bname_content', '#content', 0, 1);
addRRule('www.773buy.com', '更多精彩小说请访问.*?');
addIRule('www.00sy.com', '零点书院(作者现无法访问)', 'h1', '.TabCss>dl>dd>a');
addCRule('www.00sy.com', 'h1', '#content', 0, 1);
addIRule('www.qingkan520.com', '请看小说网', '.bigname>h1', '.zjbox>ul>li>a');
addCRule('www.qingkan520.com', 'h1', '#content', 0, 1);
addIRule('www.xiaoxiaoshuwu.com', '小小书屋', '.title>h3>a', '.td_con>a');
addCRule('www.xiaoxiaoshuwu.com', '.content>h3', '#chapterContent', 0, 1);
addIRule('www.99shumeng.org', '九九书盟', '.readerListHeader>h1', '.ccss>a');
addCRule('www.99shumeng.org', '#h1', '#content', 0, 1);
addIRule('www.bookbao.net', '书包网', '#info>h1,dd>h1', '#chapterlist>ul>li>a,.info_chapterlist>ul>li>a');
addCRule('www.bookbao.net', 'h1', '#contents', 0, 1);
addIRule('www.sto.cc', '思兔閱讀(请使用通配符模式)', 'h1', '');
addCRule('www.sto.cc', 'h1', '#BookContent', 1);
addRRule('www.sto.cc', '\\s+||| ', '<span.*?</span>');
addIRule('www.shouda8.com', '手打吧', '#info>h1', '#list>dl>dd>a');
addCRule('www.shouda8.com', 'h1', '#content', 0, 1);
addIRule('www.shumilou.net', '书迷楼', '.btitle>h1', '.chapterlist>dd>a');
addCRule('www.shumilou.net', 'h1', '#BookText', 0, 1);
addRRule('www.shumilou.net', 'www.shumilou.net');
addIRule('www.64mi.com', '爱尚小说网', 'h1', '#at>tbody>tr>td.L>a');
addCRule('www.64mi.com', 'h1', '#contents', 0, 1);
addIRule('www.zhuzhudao.cc', '猪猪岛小说网', 'h1', '#list>dl>dd>a');
addCRule('www.zhuzhudao.cc', 'h1', '#content', 0, 1);
addIRule('www.wanshuba.com', '万书吧', '.ml_title>h1', '.ml_main>dl>dd>a');
addCRule('www.wanshuba.com', 'h2', '.yd_text2', 0, 1);
addIRule('www.6yzw.com', '六月中文网', '#info>h1', '#list>dl>dd>a');
addCRule('www.6yzw.com', 'h1', '#content>p', 0, 1);
addIRule('www.daomengren.com', '盗梦人小说网', '#info>h1', '#list>dl>dd>a');
addCRule('www.daomengren.com', 'h1', '#content>p', 0, 1);
addIRule('www.muyuge.com', '木鱼哥', '.xsh1>h1>a', '#xslist>ul>li>a');
addCRule('www.muyuge.com', 'h1', '#content', 0, 1);
addIRule('www.zaiduu.com', '再读中文', '#info>h1', '#list>dl>dd>a');
addCRule('www.zaiduu.com', 'h1', '#TXT', 0);
addIRule('www.musemailsvr.com', 'MuseMail中文', '.wrapper>h1>a', '.nav>span>a');
addCRule('www.musemailsvr.com', '.title', '#content', 0, 1);
addIRule('www.lewenwu.com', '乐文屋', '.infot>h1', '.chapterlist>li>a');
addCRule('www.lewenwu.com', 'h1', '#content', 0, 1);
addIRule('www.50zw.co', '武林中文网', '#info>h1', '.chapterlist>li>a');
addCRule('www.50zw.co', 'h1', '#htmlContent', 0, 1);
addRRule('www.50zw.co', '\\s+||| ', '一秒记住.*?免费读！', '手机阅读本章.*');
addIRule('www.xiangcunxiaoshuo.com', '乡村小说网', '.ml_title>h1', '.ml_main>dl>dd>a');
addCRule('www.xiangcunxiaoshuo.com', 'h2', '.yd_text2', 0, 1);
addRRule('www.xiangcunxiaoshuo.com', '看最快章节就上（.*?）', '百度搜索（.*?）');
addIRule('www.lwxs520.com', '乐文小说网', '.infot>h1', '.dccss>a');
addCRule('www.lwxs520.com', 'h1', '#content>p', 0, 1);
addIRule('www.scwzw.net', '伤城文章网', '#info>h1', '.qq');
addCRule('www.scwzw.net', 'h1', '#content', 0, 1);
addIRule('www.yunlaige.com', '云来阁小说', '.title>h1', '#contenttable>tbody>tr>td>a');
addCRule('www.yunlaige.com', '.ctitle', '#content', 0, 1);
addIRule('www.cfwx.net', '长风文学', '.bdsub>dl>dd>h1', '.L>a');
addCRule('www.cfwx.net', 'h1', '#contents', 0, 1);
addRRule('www.cfwx.net', '长.*?风.*?文.*?学.*?w.*?.*?w.*?c.*?f.*?w.*?x.*?n.*?e.*?t');
addIRule('www.qiuwu.net', ' 凤舞文学网(作者现无法访问)', '.dir_main>h1', '.dir_main_section>ol>li>a');
addCRule('www.qiuwu.net', 'h1', '#content', 0, 1);
addIRule('www.33yq.com', '33言情', '#info>a>h1', '#list>dl>dd>a');
addCRule('www.33yq.com', 'h1', '#TXT', 0, 1);
addIRule('www.xs74.com', '小说骑士', '#info>h1', '#list>dl>dd>a');
addCRule('www.xs74.com', 'h1', '#content', 0, 1);
addIRule('www.fhxiaoshuo.com', '凤凰小说网', '#info>h1', '#list>dl>dd>a', '', true);
addCRule('www.fhxiaoshuo.com', 'h1', '#TXT', 0, 1);
addIRule('www.snwx.com', '少年文学', '.infotitle>h1', '#list>dl>dd>a');
addCRule('www.snwx.com', 'h1', '#BookText', 0, 1);
addIRule('www.yawen8.com', '雅文小说', '#list>dl>dd>a', '#list>dl>dd>a');
addCRule('www.yawen8.com', 'h1', '#content', 0, 1);
addIRule('www.7dsw.com', '7度书屋', '.infotitle>h1', '#list>dl>dd>a');
addCRule('www.7dsw.com', 'h1', '#BookText', 0, 1);
addIRule('www.bookgew.com', '书阁网', '.booktitle', 'html>body>table[bordercolordark="white"]>tbody>tr>td>div>a');
addCRule('www.bookgew.com', '.newstitle', '#booktext', 0, 1);
addIRule('www.79xs.com', '79小说网', '.wrapper_list>h1>a', '.insert_list>dl>dd>ul>li>strong>a');
addCRule('www.79xs.com', '#htmltimu', '#BookText', 0, 1);
addIRule('www.shuhaha.com', '79小说网', '.wrapper_list>h1>a', '.insert_list>dl>dd>ul>li>strong>a');
addCRule('www.shuhaha.com', '#htmltimu', '#BookText', 0, 1);
addIRule('www.xiaoshuo2016.com', '小说2016', '.introMid>h1', '.cate-List>ul>li>a', '', true);
addCRule('www.xiaoshuo2016.com', 'h1', '.articleDiv>p', 0, 1);
addIRule('www.ttzw.com', '天天中文网', '#info>h1', '#list>dl>dd>a');
addCRule('www.ttzw.com', 'h1', '#content', 0);
addIRule('www.shenmabook.com', '神马小说网', '.bigname', '.zjlist4>ol>li>a');
addCRule('www.shenmabook.com', '#htmltimu', '#htmlContent', 0, 1);
addRRule('www.shenmabook.com', '更多手打全文字章节请到.*?com');
addIRule('www.fkzww.com', '无敌龙书屋', '.booktitle', '#BookText>ul>li>a');
addCRule('www.fkzww.com', '.newstitle', '#BookTextt', 0, 1);
addIRule('www.151kan.com', '151看书网', '.title>ul>h1', '.chapter>ul>li>a');
addCRule('www.151kan.com', 'h1', '#readtext>p', 0, 1);
addRRule('www.151kan.com', 'www.151kan.com', '151看书网');
addIRule('www.shuotxts.com', '小说下载', '.uu_bkt', '.chaptertd>a');
addCRule('www.shuotxts.com', '#title', '#content', 0, 1);
addIRule('www.doulaidu.com', '都来读', '#info>h1', '#list>dl>dd>a');
addCRule('www.doulaidu.com', 'h1', '#content', 0);
addIRule('www.kanshu.la', '看书啦', '#focus_book_info>h1>a', '.box1.mulu>ul>li>a');
addCRule('www.kanshu.la', '.h1', '#contentTxt', 0);
addIRule('www.kanunu8.com', '努努书坊', '.l15', 'html>body>div>table>tbody>tr>td>table>tbody>tr>td>table[bgcolor="#d4d0c8"]>tbody>tr>td>a');
addCRule('www.kanunu8.com', 'font', 'p', 0, 1);
addIRule('www.hkxs99.net', '无弹窗小说网', '.book>h1', '.book>dl>dd>a');
addCRule('www.hkxs99.net', 'h1', '.book', 0);
addRRule('www.hkxs99.net', '上一篇：.*', '下一篇：.*');
addIRule('paitxt.com', '派小说网', '.book_news_style_text2>h1', '#chapterlist>dd>a');
addCRule('paitxt.com', '#bgdiv>dl>dt', '#booktext', 0, 1);
addIRule('www.shunong.com', '书农小说', '.infos>h1', '.book_list>ul>li>a');
addCRule('www.shunong.com', '.h1title>h1', '#htmlContent', 0);
addRRule('www.shunong.com', '\\s+||| ', '书农文学.*?下次阅读。', '如果觉得<a.*欣赏.*');
addIRule('xiaoshuokan.com', '好看小说网', 'h1', '.c1>a');
chapterRule['xiaoshuokan.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        var name = jQuery('center>h1', response.response).text();
        var bid = response.response.replace(/\s+/g, ' ').replace(/.*"bid":"(.*?)".*/, '$1');
        var cid = response.response.replace(/\s+/g, ' ').replace(/.*"cid":"(.*?)".*/, '$1');
        chapterRule['xiaoshuokan.com'].Deal2(num, name, bid, cid);
      }
    });
  },
  'Deal2': function (num, name, bid, cid) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'http://soso2.xiaoshuokan.com/call/chapreadajax.ashx?bid=' + bid + '&cid=' + cid + '&c=gbk',
      onload: function (response) {
        var content = wordFormat(response.response);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('www.vv44.net', '琦书屋', '#list>div.bt>h1', 'div.book>table>tbody>tr>td>li>a');
chapterRule['www.vv44.net'] = {
  'lang': 0,
  'Deal': function (num, url) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function (response) {
        if (!jQuery(window).data('firstRun')) {
          jQuery(window).data('firstRun', true);
          unsafeWindow.jQuery('head').append('<script type="text/javascript" src="/Public/Home/js/jquery.sha1.js"></script>');
        }
        var name = jQuery('h1', response.response).text();
        var fid = unsafeWindow.jQuery.sha1(eval(response.response.replace(/\s+/g, ' ').replace(/.*\$\.sha1\((.*?)\);.*/, '$1')));
        chapterRule['www.vv44.net'].Deal2(num, name, url, fid);
      }
    });
  },
  'Deal2': function (num, name, url, fid) {
    var urlArr = url.split('/');
    GM_xmlhttpRequest({
      method: 'POST',
      url: 'http://www.vv44.net/home/content/' + urlArr[4] + '/' + urlArr[5],
      data: 'bid=' + urlArr[4] + '&rid=' + urlArr[5] + '&fid=' + fid,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Referer': url,
        'X-Requested-With': 'XMLHttpRequest'
      },
      onload: function (response) {
        var content = wordFormat(response.response);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('www.chuanyue8.com', '穿越小说吧', '.bigname', '.zjlist4>ol>li>a');
chapterRule['www.chuanyue8.com'] = {
  'lang': 0,
  'Deal': function (num, url) {
    var urlArr = url.split(/\/|\./);
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'http://www.chuanyue8.com/modules/article/17mb_Content.php?aid=' + urlArr[9] + '&cid=' + urlArr[10],
      headers: {
        'Referer': url,
        'X-Requested-With': 'XMLHttpRequest'
      },
      onload: function (response) {
        var name = jQuery(window).data('dataDownload') [num].name;
        var content = wordFormat(response.response);
        content = '来源地址：' + jQuery(window).data('dataDownload') [num].url + '\r\n' + content;
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== 0) {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
        thisDownloaded(num, name, content);
      }
    });
  }
};
addIRule('kansha.cc', '看啥网', '.pad3.zb', '.pad5>a');
addCRule('kansha.cc', '.pad3.zb', '.breakword', 0);
addIRule('k2.kansha.cc', '', '.pad3.zb', '.pad5>a');
addCRule('k2.kansha.cc', '.pad3.zb', '.breakword', 0);
addRRule('k2.kansha.cc', '<span class="par0">仧</span>', '<img src="imafont/[a-z](.*?).gif".*?>|||$1');
//////////////////////////////////////////////////18X
addIRule('www.haiax.net', '青豆小说网', '.kui-left.kui-fs32', '.kui-item>a');
addCRule('www.haiax.net', 'h1.kui-ac', '#kui-page-read-txt', 0, 1);
addIRule('www.lewenxs.net', '青豆小说网', '.kui-left.kui-fs32', '.kui-item>a');
addCRule('www.lewenxs.net', 'h1.kui-ac', '#kui-page-read-txt', 0, 1);
addIRule('www.wodexiaoshuo.com', '我的小说网', 'h2>a', '.box_box>ul>li>a');
addCRule('www.wodexiaoshuo.com', '.box_con>h2', '.box_box', 0, 1);
addIRule('www.bashudu.com', '第二书包网', 'h1', '.list>ul>li>a:lt(-1)');
addCRule('www.bashudu.com', 'h1', '.chapter', 1, 1);
addIRule('bbs.6park.com', '禁忌书屋', 'font>b', 'body>table>tbody>tr>td>ul>li>a', '', true);
addCRule('bbs.6park.com', 'font>b', 'td:has(center)', 1, 1);
addIRule('web.6park.com', '留园', 'font>span', 'body>table>tbody>tr>td>li>a', '', true);
addCRule('web.6park.com', 'font>b', 'td', 1, 1);
addIRule('www.neixiong88.com', '内兄小说网', 'h2.bookName', '.bookUpdate>dl>dd>a');
addCRule('www.neixiong88.com', 'h2', '#content', 1, 1);
addIRule('www.chenfenggm.com', '辣文小说网', 'h1', '#read.chapter>.list>ul>li>a:lt(-1)');
addCRule('www.chenfenggm.com', 'h1', '.chapter', 0, 1);
addCRule('www.xncwxw.com', 'p.ctitle', '#content', 0, 1);
addIRule('www.xncwxw.com', '新暖才文学网', 'h1>a', '#Table1>tbody>tr>td>a');
addIRule('18av.mm-cg.com', '18H', '.label>div', '.novel_leftright>span>a:visible');
addCRule('18av.mm-cg.com', '#left>h1', '#novel_content_txtsize', 1);
//////////////////////////////////////////////////以上为站点规则
jQuery(document.body).append('<div id="bookDownloader"><div class="bookDownloaderMain bookDownloaderBoxCenter"><button class="bookDownloaderShowSupport">支持网站</button><div class="bookDownloaderSeparatorBlack"></div><span class="bookDownloaderInfo"></span><div class="bookDownloaderSeparatorBlack"></div>下载线程：<input class="bookDownloaderInput bookDownloaderThread"name="thread"placeholder="5"type="text">&nbsp;失败重试次数：<input class="bookDownloaderInput bookDownloaderError"title="0表示不重试"name="error"placeholder="0"type="text"><div class="bookDownloaderSeparatorWhite"></div>超时重试次数：<input class="bookDownloaderInput bookDownloaderTimeout"title="0表示不重试"name="timeout"placeholder="3"type="text">&nbsp;超时时间：<input class="bookDownloaderInput bookDownloaderTime"name="time"placeholder="20"type="text">秒<div class="bookDownloaderSeparatorWhite"></div><input id="boodDownloaderVip"type="checkbox"></input><label for="boodDownloaderVip">下载Vip章节</label>&nbsp;语言：<input id="bookDownloaderLangZhs"type="radio"name="lang"class="bookDownloaderLang"value="0"checked="true"></input><label for="bookDownloaderLangZhs">简体</label><input id="bookDownloaderLangZht"type="radio"name="lang"class="bookDownloaderLang"value="1"></input><label for="bookDownloaderLangZht">繁体</label><div class="bookDownloaderSeparatorBlack"></div>分次下载&nbsp;<select class="bookDownloaderSplit"name="type"><option value=""></option><option value="all-2">2次</option><option value="all-3">3次</option><option value="all-4">4次</option><option value="all-5">5次</option><option value="every-500">500章</option><option value="every-100">100章</option><option value="every-20">20章</option><option value="every-10">10章</option><option value="...">...</option></select>&nbsp;<button class="bookDownloaderSplitStart">开始下载</button><div class="bookDownloaderSeparatorWhite"></div>下载范围&nbsp;<input placeholder="0开头,例0-24,35,49"class="bookDownloaderSplitInput"><div class="bookDownloaderSeparatorBlack"></div><button class="bookDownloaderThis">下载本章(TXT)</button>&nbsp;<button class="bookDownloaderAll2Txt">下载目录页(TXT)</button><div class="bookDownloaderSeparatorWhite"></div><button class="bookDownloaderAll2Zip">下载目录页(ZIP)</button>&nbsp;<button class="bookDownloaderAll2Epub">下载目录页(Epub)</button><div class="bookDownloaderSeparatorBlack"></div><button class="bookDownloaderShowBatch">特定下载</button>&nbsp;<button class="bookDownloaderShowCustomize">自定义站点规则</button></div><div class="bookDownloaderSupport bookDownloaderBoxCenter"><button class="bookDownloaderShowSupport">隐藏</button><div class="bookDownloaderSeparatorWhite"></div></div><div class="bookDownloaderBatch bookDownloaderBoxCenter"><button class="bookDownloaderShowBatch">隐藏</button><div class="bookDownloaderSeparatorWhite"></div><button class="bookDownloaderBatchWildHelp">?</button>通配符模式：<input class="bookDownloaderBatchWild"placeholder="http://www.example.com/*"></input><div class="bookDownloaderSeparatorWhite"></div><textarea class="bookDownloaderBatchTextarea"></textarea><div class="bookDownloaderSeparatorWhite"></div><button class="bookDownloaderBatch2Txt">开始下载(TXT)</button>&nbsp;<button class="bookDownloaderBatch2Zip">开始下载(ZIP)</button>&nbsp;<button class="bookDownloaderBatch2Epub">开始下载(Epub)</button></div><div class="bookDownloaderCustomize bookDownloaderBoxCenter"><button class="bookDownloaderShowCustomize">隐藏</button><div class="bookDownloaderSeparatorWhite"></div><span>默认显示当前站点规则<br>双击后开始编写...<br>具体规则，详见<a href="https://github.com/dodying/UserJs/tree/master/novel/novelDownloader#自定义站点规则说明"target="_blank">自定义站点规则说明</a></span><div class="bookDownloaderSeparatorWhite"></div><p class="bookDownloaderCustomizeTextarea">双击后，这个地方可以编写...</p><div class="bookDownloaderSeparatorWhite"></div><button class="bookDownloaderCustomizeSave">保存</button>&nbsp;<button class="bookDownloaderCustomizeDelete">删除某站点的规则</button>&nbsp;<button class="bookDownloaderCustomizeClear">清空</button><div class="bookDownloaderSeparatorWhite"></div><button class="bookDownloaderCustomizeAll">显示所有规则</button>&nbsp;<button class="bookDownloaderCustomizeDownload">检查[项目]上的规则</button></div><div class="bookDownloaderUrl bookDownloaderBoxCenter2"><button class="bookDownloaderShowUrl">隐藏</button><div class="bookDownloaderUrlDiv"></div><button class="bookDownloaderUrlAll">全选</button>&nbsp;<button class="bookDownloaderUrlInverse">反选</button>&nbsp;<button class="bookDownloaderUrlUnsaved">选择未保存</button>&nbsp;<button class="bookDownloaderUrlSave">保存</button></div><div class="bookDownloaderLog"><div class="bookDownloaderLogNow"title="点击清除已完成"><div><progress class="bookDownladerProgress"value="0"max="0"></progress><span class="bookDownladerProgressSpan"><span class="bookDownladerChapter">0</span>/<span class="bookDownladerChapterAll">0</span></span></div></div><div class="bookDownloaderLogDiv"></div></div><div class="bookDownloaderFinder"></div></div>');
jQuery('head').append('<style>#bookDownloader{text-align:center;}#bookDownloader span{float:none;background:none}.bookDownloaderSeparatorBlack{border:1px solid #000}.bookDownloaderSeparatorWhite{border:1px none}.bookDownloaderSupport{height:500px;overflow:auto}.bookDownloaderInput{width:24px}.bookDownloaderBatchWild{width:330px}#bookDownloader textarea{resize:both;width:95%;height:108px;overflow:auto}.bookDownloaderCustomizeTextarea{border:1px solid #000;background-color:#e7f4fe;word-wrap:break-word;max-width:600px;max-height:400px;overflow-x:hidden;overflow-y:auto}.bookDownloaderUrl table{border-collapse:collapse;}.bookDownloaderUrl td{border:solid 1px gray}.bookDownloaderGreen{color:green;}.bookDownloaderBlue{color:blue;}.bookDownloaderHide{display:none;}.bookDownloaderUrlShow{float:left!important;cursor:pointer;}.bookDownloaderLogDiv{height:290px;overflow:auto}.bookDownladerProgressSpan{position:absolute;left:0;right:0}.bookDownloaderStatusOk{color:green;}.bookDownloaderStatusError{color:red;}.bookDownloaderStatusTimeout{color:yellow;}</style>');
(GM_getValue('lang', 0) === 0) ? jQuery('#bookDownloaderLangZhs') [0].checked = true : jQuery('#bookDownloaderLangZht') [0].checked = true;
if (GM_getValue('thread', false) !== false) jQuery('.bookDownloaderThread').val(GM_getValue('thread'));
if (GM_getValue('error', false) !== false) jQuery('.bookDownloaderError').val(GM_getValue('error'));
if (GM_getValue('timeout', false) !== false) jQuery('.bookDownloaderTimeout').val(GM_getValue('timeout'));
if (GM_getValue('time', false) !== false) jQuery('.bookDownloaderTime').val(GM_getValue('time'));
if (GM_getValue('split', false) !== false) {
  jQuery('.bookDownloaderSplit').val(GM_getValue('split'));
  if (jQuery('.bookDownloaderSplit').val() === null) {
    jQuery('.bookDownloaderSplit').prepend('<option value="' + GM_getValue('split') + '">' + GM_getValue('split') + '</option>');
    jQuery('.bookDownloaderSplit').val(GM_getValue('split'));
  }
}
if (GM_getValue('customizeRule', false)) {
  var savedValue = GM_listValues();
  var RE = new RegExp('^indexRule_|^chapterRule_|^reRule_', 'i');
  var host = new RegExp(location.host + '$');
  var nowCustomizeRule = '';
  var allCustomizeRule = '';
  for (i = 0; i < savedValue.length; i++) {
    if (RE.test(savedValue[i])) {
      allCustomizeRule += html2Escape(GM_getValue(savedValue[i])) + '<br>';
      if (host.test(savedValue[i])) {
        nowCustomizeRule += html2Escape(GM_getValue(savedValue[i])) + '<br>';
        eval(GM_getValue(savedValue[i]));
      }
    }
  }
  nowCustomizeRule = nowCustomizeRule.replace(/<br>$/, '');
  if (nowCustomizeRule === '') nowCustomizeRule = '双击后，这个地方可以编写...';
  if (allCustomizeRule === '') {
    GM_setValue('customizeRule', false);
    GM_setValue('savedUrl', new Array());
  }
  jQuery('.bookDownloaderCustomizeTextarea').html(nowCustomizeRule);
  jQuery('.bookDownloaderCustomizeAll').click(function () {
    if (confirm('请确定是否已保存规则')) jQuery('.bookDownloaderCustomizeTextarea').html(allCustomizeRule);
  });
}
var SupportedUrl = '';
var num = 0;
for (var i in indexRule) {
  if (indexRule[i].cn === '') continue;
  num++;
  SupportedUrl += num + '. ' + indexRule[i].cn + ' <a href="http://' + i + '" target="_blank">' + i + '</a><div class="bookDownloaderSeparatorWhite"></div>';
}
jQuery('.bookDownloaderSupport').append('总共支持网站' + num + '个。<div class="bookDownloaderSeparatorWhite"></div>网站基本排序：正版>轻小说>盗贴<span style="color:white;background-color:white;" title="好孩子不要看">>18X</span><div class="bookDownloaderSeparator"></div>' + SupportedUrl);
var nameThis = (indexRule[location.host]) ? indexRule[location.host].cn : '未命名的网址';
jQuery('.bookDownloaderInfo').html('当前网站：<a href="http://' + location.host + '/" target="_blank">' + nameThis + '</a>');
jQuery(indexRule[location.host].chapter).each(function (i) {
  jQuery(this).prepend('<span class="novelDownloaderChapter" style="color:black;float:none;display:inline;width:auto;">' + i + '-</span>');
});
jQuery(indexRule[location.host].vip).find('.novelDownloaderChapter').css('color', 'red');
//////////////////////////////////////////////////以下为CSS设置与事件
jQuery('.bookDownloaderBoxCenter,.bookDownloaderBoxCenter2').css({
  'display': 'none',
  'z-index': '999999',
  'background-color': 'white',
  'border': '1px solid black',
  'position': 'absolute',
  'left': function () {
    return String(jQuery(window).scrollLeft() + (window.screen.availWidth - jQuery(this).width()) / 2) + 'px';
  },
  'top': function () {
    return String(jQuery(window).scrollTop() + (window.screen.availHeight - jQuery(this).height()) / 2) + 'px';
  }
});
jQuery('.bookDownloaderLog').css({
  'display': 'none',
  'z-index': '999999',
  'background-color': 'white',
  'border': '1px solid black',
  'position': 'absolute',
  'width': '300px',
  'height': '350px',
  'overflow': 'auto',
  'left': function () {
    return String(jQuery(window).scrollLeft() + window.screen.availWidth - jQuery(this).width() - 20) + 'px';
  },
  'top': function () {
    return String(jQuery(window).scrollTop() + window.screen.availHeight - jQuery(this).height() - 90) + 'px';
  }
});
var textareaPlaceholder = '可拉伸大小，双击清空内容\n示例:\nhttp://www.example.com/1\nhttp://www.example.com/2\nhttp://www.example.com/3\n...';
jQuery('.bookDownloaderBatchTextarea').val(textareaPlaceholder).focus(function () {
  if (jQuery(this).val() == textareaPlaceholder) {
    jQuery(this).val('');
  }
}).blur(function () {
  if (jQuery(this).val() == '') {
    jQuery(this).val(textareaPlaceholder);
  }
}).dblclick(function () {
  jQuery(this).val('');
});
jQuery(window).scroll(function () {
  jQuery('.bookDownloaderBoxCenter').css({
    'left': function () {
      return String(jQuery(window).scrollLeft() + (window.screen.availWidth - jQuery(this).width()) / 2) + 'px';
    },
    'top': function () {
      return String(jQuery(window).scrollTop() + (window.screen.availHeight - jQuery(this).height()) / 2) + 'px';
    }
  });
  jQuery('.bookDownloaderBoxCenter2').css({
    'left': function () {
      return String(jQuery(window).scrollLeft() + (window.screen.availWidth - jQuery(this).width()) / 2) + 'px';
    }
  });
  jQuery('.bookDownloaderLog').css({
    'left': function () {
      return String(jQuery(window).scrollLeft() + window.screen.availWidth - jQuery(this).width() - 20) + 'px';
    },
    'top': function () {
      return String(jQuery(window).scrollTop() + window.screen.availHeight - jQuery(this).height() - 90) + 'px';
    }
  });
}).keydown(function (e) {
  if (e.shiftKey && e.keyCode === 68) { //Shift+D
    jQuery('.bookDownloaderMain').toggle();
  }
}).unload(function () {
  jQuery(window).removeData();
}).on('beforeunload', function () {
  jQuery(window).removeData();
});
jQuery('.bookDownloaderInput').change(function () {
  GM_setValue(this.name, parseInt(this.value) || parseInt(this.placeholder));
});
jQuery('.bookDownloaderLang').click(function () {
  GM_setValue(this.name, parseInt(this.value));
});
jQuery('.bookDownloaderSplit').change(function () {
  if (this.value === '...') {
    var input = prompt('请输入[类型-数字]\n类型：\n1、all表示总体分割\n2、every表示每几章分割\n\n例：\n1、[all-3]表示整个下载列表分成3个文件\n2、[every-100]表示每100章，生成一个文件\n输入值将会保存并默认');
    jQuery(this).prepend('<option value="' + input + '">' + input + '</option>');
    jQuery(this).val(input);
    GM_setValue('split', input);
  } else {
    GM_setValue('split', this.value);
  }
  jQuery(window).data('split', 0);
  jQuery('.bookDownloaderSplitStart').text('开始下载');
});
jQuery('.bookDownloaderSplitStart').click(function () {
  var split = (jQuery(window).data('split')) ? jQuery(window).data('split') + 1 : 1;
  jQuery(window).data('split', split);
  var arr = jQuery('.bookDownloaderSplit').val().split('-');
  if (arr[0] === 'all' || arr[0] === 'every') {
    jQuery(this).text('第' + split + '次下载');
    var len = jQuery(indexRule[location.host].chapter).length;
    var step = (arr[0] === 'all') ? Math.floor(len / arr[1]) + 1 : arr[1];
    var start = step * (split - 1);
    var end = step * (split) - 1;
    if (end >= len) {
      end = len - 1;
      jQuery(this).text('完成');
      jQuery(window).data('split', 0);
    }
    jQuery('.bookDownloaderSplitInput').val(start + '-' + end);
  } else {
    alert('请按照示例重新输入。');
    jQuery(window).data('split', 0);
  }
});
jQuery('.bookDownloaderBatchWildHelp').click(function () {
  alert('示例：\n我要下载如下章节\nhttp://www.example.com/1\nhttp://www.example.com/2\nhttp://www.example.com/3\nhttp://www.example.com/...\nhttp://www.example.com/100\n...\n请在输入框输入（不包括括号）\n[http://www.example.com/*]\n然后分别在消息框里输入\n开头[1]、结尾[100]、间隔[1]、是否补足开头0[取消]');
});
jQuery('#boodDownloaderVip').click(function () {
  if (this.checked && !confirm('起点测试成功，其它网站暂未测试。\n是否下载Vip章节，如未登录或未订阅，则只会下载章节预览。\n不会帮你把未订阅的章节订阅。\n如果不放心，请勿勾选。出事作者概不负责。')) this.checked = false;
});
jQuery('.bookDownloaderThis').click(function () {
  download([location.href], 'txt');
});
jQuery('.bookDownloaderAll2Txt').click(function () {
  download('index', 'txt');
});
jQuery('.bookDownloaderAll2Zip').click(function () {
  download('index', 'zip');
});
jQuery('.bookDownloaderAll2Epub').click(function () {
  download('index', 'epub');
});
jQuery('.bookDownloaderBatch2Txt').click(function () {
  downloadBatch('txt')
});
jQuery('.bookDownloaderBatch2Zip').click(function () {
  downloadBatch('zip')
});
jQuery('.bookDownloaderBatch2Epub').click(function () {
  downloadBatch('epub')
});
jQuery('.bookDownloaderShowSupport').click(function () {
  jQuery('.bookDownloaderSupport').toggle();
});
jQuery('.bookDownloaderShowBatch').click(function () {
  jQuery('.bookDownloaderBatch').toggle();
});
jQuery('.bookDownloaderShowCustomize').click(function () {
  jQuery('.bookDownloaderCustomize').toggle();
});
jQuery('.bookDownloaderShowUrl').click(function () {
  jQuery('.bookDownloaderUrl').toggle();
});
jQuery('.bookDownloaderCustomizeTextarea').dblclick(function () {
  this.contentEditable = true;
}).blur(function () {
  this.contentEditable = false;
});
jQuery('.bookDownloaderCustomizeSave').click(function () {
  if (jQuery('.bookDownloaderCustomizeTextarea').html() === '') {
    return;
  } else {
    GM_setValue('customizeRule', true);
  }
  var arr = jQuery('.bookDownloaderCustomizeTextarea').html().split('<br>');
  var savedUrl = GM_getValue('savedUrl', new Array());
  var host;
  var temp;
  for (var i = 0; i < arr.length; i++) {
    host = arr[i].split('\'') [1];
    if (jQuery.inArray(host, savedUrl) === - 1) savedUrl.push(host);
    GM_setValue('savedUrl', savedUrl);
    temp = escape2Html(arr[i]);
    if (/^\s+$/.test(arr[i]) || arr[i] === '') {
      continue;
    } else if (/^addIRule/.test(arr[i])) {
      GM_setValue('indexRule_' + host, temp);
    } else if (/^addCRule/.test(arr[i])) {
      GM_setValue('chapterRule_' + host, temp);
    } else if (/^chapterRule/.test(arr[i])) {
      GM_setValue('chapterRule_' + host, temp);
    } else if (/^addRRule/.test(arr[i])) {
      GM_setValue('reRule_' + host, temp);
    } else {
      var lineNow = i + 1;
      if (confirm('第' + lineNow + '行增加未知规则。\n此前的规则已经保存，后续操作已停止\n是否打开规则说明网址')) window.open('https://github.com/dodying/UserJs/tree/master/novel/novelDownloader#自定义站点规则说明');
      return;
    }
  }
});
jQuery('.bookDownloaderCustomizeDelete').click(function () {
  var host = prompt('请输入要删除的域名\n不分大小写...\n如：\nread.qidian.com');
  if (host === '') return;
  var savedUrl = GM_getValue('savedUrl', new Array());
  savedUrl.splice(jQuery.inArray(host, savedUrl), 1);
  var RE = new RegExp('_' + host + '$', 'i');
  var savedValue = GM_listValues();
  for (var i = 0; i < savedValue.length; i++) {
    if (RE.test(savedValue[i])) GM_deleteValue(savedValue[i]);
  }
});
jQuery('.bookDownloaderCustomizeClear').click(function () {
  if (confirm('谨慎操作\n你确定要清空自定义站点规则\n你确定要清空自定义站点规则\n你确定要清空自定义站点规则')) {
    GM_setValue('customizeRule', false);
    GM_setValue('savedUrl', new Array());
    var savedValue = GM_listValues();
    var RE = new RegExp('^indexRule_|^chapterRule_|^reRule_', 'i');
    for (var i = 0; i < savedValue.length; i++) {
      if (RE.test(savedValue[i])) GM_deleteValue(savedValue[i]);
    }
  }
});
jQuery('.bookDownloaderCustomizeDownload').on('click', function () {
  if (GM_getValue('updateTime', false) || confirm('此操作将获取\nhttps://raw.githubusercontent.com/dodying/UserJs/master/novel/novelDownloader/urlRuleTime.json\n的内容，是否继续')) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/dodying/UserJs/master/novel/novelDownloader/urlRuleTime.json',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01'
      },
      onload: function (response) {
        var updateTime = JSON.parse(response.response).updateTime;
        var lastUpdateTime = GM_getValue('updateTime', false);
        var notice = (updateTime !== lastUpdateTime) ? '已经' : '尚未';
        if (confirm('[项目]站点规则' + notice + '更新，是否继续下载？\n此操作将获取\nhttps://raw.githubusercontent.com/dodying/UserJs/master/novel/novelDownloader/urlRule.json\n的内容')) {
          GM_setValue('updateTime', updateTime);
          GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/dodying/UserJs/master/novel/novelDownloader/urlRule.json',
            onload: function (response) {
              var json = JSON.parse(response.response);
              jQuery(window).data('urlRule', json);
              if (GM_info.script.version !== json.updateInfo.latestVersion && confirm('脚本版本更新\n更新内容：' + json.updateInfo.changeInfo + '\n是否导出自定义站点规则')) {
                var meta = GM_info.scriptMetaStr.split('\n');
                var start = 0;
                var end = 0;
                for (var i = 0; i < meta.length; i++) {
                  if (meta[i] === '//开始-自定义站点规则') start = i;
                  if (meta[i] === '//结束-自定义站点规则') {
                    end = i;
                    break;
                  }
                }
                if (end === 0) {
                  alert('发生未知错误。\n或是不存在自定义站点规则');
                } else {
                  end = end - start + 1;
                  alert(meta.splice(start, end).join('\n'));
                }
              }
              var savedUrl = GM_getValue('savedUrl', new Array());
              var savedClass = '';
              var html = '';
              var html1 = '';
              var html2 = '';
              for (var i in json) {
                savedClass = (jQuery.inArray(i, savedUrl) === - 1) ? '' : 'bookDownloaderUrlSaved';
                html = '';
                html += '<div name="' + i + '"><input type="checkbox" id="bookDownloaderUrlCheck_' + i + '" class="' + savedClass + '"><label for="bookDownloaderUrlCheck_' + i + '" class="bookDownloaderGreen"> ' + i + '</label><span class="bookDownloaderUrlShow">+</span><div class="bookDownloaderHide"><table><tbody><tr><td>属性名称</td><td>属性值</td></tr>';
                for (var j in json[i]) {
                  html += '<tr><td><span class="bookDownloaderBlue">' + j + '</span></td><td>' + html2Escape(json[i][j]) + '</td></tr>';
                }
                html += '</tbody></table></div></div>';
                if (jQuery.inArray(i, savedUrl) === - 1) {
                  html1 += html;
                } else {
                  html2 += html;
                }
              }
              html = (html2 === '') ? html1 : html1 + '<div class="bookDownloaderSeparatorWhite">---以下已保存---</div>' + html2;
              jQuery('.bookDownloaderUrlDiv').html(html);
              jQuery('.bookDownloaderUrl').toggle();
              jQuery('.bookDownloaderUrlShow').click(function () {
                jQuery(this).next('div').toggle();
                jQuery(this).html(function (n, h) {
                  return (h === '+') ? '-' : '+';
                })
              });
              jQuery('.bookDownloaderCustomizeDownload').off('click');
              jQuery('.bookDownloaderCustomizeDownload').click(function () {
                jQuery('.bookDownloaderUrl').toggle();
              });
            }
          });
        }
      }
    });
  } else {
    return;
  }
});
jQuery('.bookDownloaderUrlAll').click(function () {
  if (jQuery(window).data('check') === undefined) {
    jQuery(window).data('check', 0);
    jQuery('.bookDownloaderUrlDiv>div>:checkbox').each(function () {
      this.checked = true;
    });
  } else {
    jQuery(window).data('check', jQuery(window).data('check') + 1);
    jQuery('.bookDownloaderUrlDiv>div>:checkbox').each(function () {
      this.checked = (jQuery(window).data('check') % 2 === 1) ? false : true;
    });
  }
});
jQuery('.bookDownloaderUrlInverse').click(function () {
  jQuery('.bookDownloaderUrlDiv>div>:checkbox').each(function () {
    this.checked = (this.checked) ? false : true;
  });
});
jQuery('.bookDownloaderUrlUnsaved').click(function () {
  jQuery('.bookDownloaderUrlDiv>div>:checkbox').each(function () {
    this.checked = (this.className === 'bookDownloaderUrlSaved') ? false : true;
  });
});
jQuery('.bookDownloaderUrlSave').click(function () {
  if (confirm('谨慎操作\n此操作将会将勾选的站点规则保存到本地数据库\n这可能将会覆盖本地的某些站点规则')) {
    GM_setValue('customizeRule', true);
    var savedUrl = GM_getValue('savedUrl', new Array());
    var include = '';
    jQuery('.bookDownloaderUrlDiv>div>:checked').parent().each(function () {
      var host = jQuery(this).attr('name');
      if (host === 'updateInfo') return;
      if (jQuery.inArray(host, savedUrl) === - 1) savedUrl.push(host);
      var temp = jQuery(window).data('urlRule') [host];
      for (var i in temp) {
        if (/Rule$/.test(i)) {
          GM_setValue(i + '_' + host, temp[i]);
        } else if (/^include|^match/.test(i)) {
          include += '\n// @include     ' + temp[i];
        } else if (/^exclude/.test(i)) {
          include += '\n// @exclude     ' + temp[i];
        }
      }
    });
    GM_setValue('savedUrl', savedUrl);
    alert('//请将以下内容保存到脚本（不包括这一行）\n//开始-自定义站点规则' + include + '\n//结束-自定义站点规则');
  }
});
jQuery('.bookDownloaderLogNow').click(function () {
  jQuery('.bookDownloaderLogDiv>span').remove('.bookDownloaderStatusOk');
});
//////////////////////////////////////////////////////
function addRRule(host, re) {
  var temp = new Array();
  for (var i = 1; i < arguments.length; i++) {
    temp.push(arguments[i]);
  }
  reRule[host] = temp;
}
function wordFormatSpecial(host, word) {
  var regexp;
  var str;
  var reStr;
  for (var i = 0; i < reRule[host].length; i++) {
    str = reRule[host][i].split('|||');
    reStr = (str.length === 1) ? '' : str[1];
    regexp = new RegExp(str[0], 'gi');
    word = word.replace(regexp, reStr);
  }
  return word;
}
function downloadBatch(fileType) {
  var arr = new Array();
  var temp;
  if (jQuery('.bookDownloaderBatchWild').val() !== '') {
    var wild = jQuery('.bookDownloaderBatchWild').val();
    var start = parseInt(prompt('请输入开头'));
    var end = prompt('请输入结尾');
    var step = parseInt(prompt('请输入间隔'));
    var zero = confirm('是否补足开头0');
    if (zero) var len = end.length;
    end = parseInt(end);
    for (var i = start; i <= end; i = i + step) {
      temp = (zero) ? preZeroFill(i, len)  : i;
      temp = wild.replace('*', temp)
      arr.push(temp);
    }
  }
  if (jQuery('.bookDownloaderBatchTextarea').val() !== '' && jQuery('.bookDownloaderBatchTextarea').val() !== textareaPlaceholder) {
    temp = jQuery('.bookDownloaderBatchTextarea').val().split('\n');
    for (var i = 0; i < temp.length; i++) {
      if (temp[i] === '') temp.splice(i, 1);
    }
  }
  arr = arr.concat(temp);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('http') !== 0) arr[i] = 'http://' + arr[i]
  }
  download(arr, fileType);
}
function addCRule(host, name, content, lang, MimeType) { //增加章节规则
  MimeType = (MimeType === 1) ? 'text/html; charset=gb2312' : '';
  chapterRule[host] = {
    name: name,
    content: content,
    lang: lang,
    MimeType: MimeType
  }
}
function addIRule(host, cn, name, chapter, vip, sort, thread) { //增加目录规则
  var cnT = cn || '';
  var vipT = vip || '';
  var sortT = sort || false;
  var threadT = thread | false;
  indexRule[host] = {
    cn: cnT,
    name: name,
    chapter: chapter,
    vip: vipT,
    sort: sortT,
    thread: threadT
  }
}
function downloadTo(bookName, fileType) {
  var name = bookName.replace('在线阅读', ''); //待续
  if (fileType === 'zip') {
    download2Zip(name);
  } else if (fileType === 'txt') {
    download2Txt(name);
  } else if (fileType === 'epub') {
    download2Epub(name);
  }
}
function download(chapterArray, fileType) { //下载
  var chapter = (chapterArray === 'index') ? jQuery(indexRule[location.host].chapter)  : chapterArray;
  var href = chapter[0].href || chapter[0];
  var bookName = (jQuery(indexRule[getHostName(href)].name).length === 0) ? '' : jQuery(indexRule[getHostName(href)].name) [0].innerText.replace(/^\s+|\s+$/g, '');
  if (jQuery('#boodDownloaderVip') [0].checked === false && indexRule[location.host].vip !== '' && chapterArray === 'index') chapter = jQuery(chapter).not(jQuery(indexRule[location.host].vip));
  if (jQuery('.bookDownloaderSplitInput').val() !== '' && chapterArray === 'index') {
    jQuery(chapter).each(function () {
      this.added = false;
    });
    var arr = jQuery('.bookDownloaderSplitInput').val().split(',');
    arr.sort();
    var chapterNew = new Array();
    for (var i = 0; i < arr.length; i++) {
      if (/^\d+\-\d+$/.test(arr[i])) {
        var start = arr[i].replace(/^(\d+)\-\d+$/, '$1');
        var end = arr[i].replace(/^\d+\-(\d+)$/, '$1');
        for (var j = start; j <= end; j++) {
          if (!chapter[j].added) {
            chapter[j].added = true;
            chapterNew.push(chapter[j]);
          }
        }
      } else if (/^\d+$/.test(arr[i])) {
        if (!chapter[arr[i]].added) {
          chapter[arr[i]].added = true;
          chapterNew.push(chapter[arr[i]]);
        }
      }
    }
    chapter = chapterNew;
  }
  if ((jQuery(window).data('chapter')) instanceof Array || (jQuery(window).data('chapter')) instanceof Object) {
    if (chapter instanceof Array && jQuery(window).data('chapter') instanceof Array && chapter.toString() === jQuery(window).data('chapter').toString) {
      downloadTo(bookName, fileType);
      return;
    } else if (chapter instanceof Object && jQuery(window).data('chapter') instanceof Object && objComp(chapter, jQuery(window).data('chapter'))) {
      downloadTo(bookName, fileType);
      return;
    }
  }
  jQuery('.bookDownloaderLog').css('display', 'block');
  jQuery('.bookDownloaderLogDiv').html('');
  jQuery(window).data('chapter', chapter);
  jQuery(window).data('dataDownload', new Array());
  jQuery(window).data('downloadList', new Array());
  jQuery(window).data('downloadNow', new Object());
  jQuery(window).data('downloadError', new Array());
  jQuery(window).data('downloadTimeout', new Array());
  jQuery(window).data('number', 0);
  jQuery(window).data('numberOk', 0);
  jQuery(window).data('downloadNow').length = 0;
  for (var i = 0; i < chapter.length; i++) {
    href = chapter[i].href || chapter[i];
    var name = (chapter[i].innerText) ? chapter[i].innerText.replace(/^\d+\-/, '')  : '';
    var host = getHostName(href);
    var dataDownload = new Object();
    dataDownload.url = href;
    dataDownload.name = name;
    dataDownload.ok = false;
    jQuery(window).data('dataDownload') [i] = dataDownload;
    jQuery(window).data('downloadList') [i] = href;
    jQuery(window).data('downloadError') [i] = 0;
    jQuery(window).data('downloadTimeout') [i] = 0;
  };
  jQuery('.bookDownladerProgress').val(0).attr('max', chapter.length);
  jQuery('.bookDownladerChapter').html('0');
  jQuery('.bookDownladerChapterAll').html(chapter.length);
  if (indexRule[location.host].sort) {
    jQuery(window).data('downloadList').sort();
    jQuery(window).data('dataDownload').sort(objArrSort('url'));
  }
  var addTask = setInterval(function () {
    if (chapterRule[host].Deal instanceof Function) {
      downloadTask(chapterRule[host].Deal);
    } else {
      downloadTask(xhr);
    }
  }, 200);
  var downloadCheck = setInterval(function () {
    if (downloadedCheck(jQuery(window).data('dataDownload'))) {
      clearInterval(addTask);
      clearInterval(downloadCheck);
      if (jQuery('#bookDownloaderBtn').length === 0) {
        jQuery('.bookDownloaderLog').append('<button id="bookDownloaderBtn">下载</button>');
      }
      downloadTo(bookName, fileType);
    }
  }, 200);
}
function downloadTask(fun) { //下载列队
  var thread = (indexRule[location.host].thread) ? indexRule[location.host].thread : parseInt($('.bookDownloaderThread').val()) || 10;
  for (var i in jQuery(window).data('downloadNow')) {
    if (!/^\d+$/.test(i)) continue;
    if (jQuery(window).data('downloadNow') [i].ok) {
      delete jQuery(window).data('downloadNow') [i];
      jQuery(window).data('downloadNow').length--;
      continue;
    }
    if (!jQuery(window).data('downloadNow') [i].downloading) {
      var href = jQuery(window).data('downloadNow') [i].href;
      jQuery(window).data('downloadNow') [i].downloading = true;
      addDownloadLogStart(parseInt(i) + 1, href, '开始');
      if (jQuery('.bookDownloaderLogDiv>.bookDownloaderStatusOk').length >= 30) jQuery('.bookDownloaderLogNow').click();
      fun(i, href);
    }
  }
  if (jQuery(window).data('downloadNow').length < thread && jQuery(window).data('downloadList').length !== 0) {
    var temp = new Object();
    temp.href = jQuery(window).data('downloadList') [0];
    temp.ok = false;
    temp.downloading = false;
    jQuery(window).data('downloadNow') [jQuery(window).data('number')] = temp;
    jQuery(window).data('downloadList').splice(0, 1);
    jQuery(window).data('downloadNow').length++;
    jQuery(window).data('number', jQuery(window).data('number') + 1);
    downloadTask(fun);
  } else {
    return;
  }
}
function removeData() { //移除数据
  jQuery(window).removeData('downloadNow');
  jQuery(window).removeData('downloadError');
  jQuery(window).removeData('downloadTimeout');
  jQuery(window).removeData('downloadList');
  jQuery(window).removeData('number');
  jQuery(window).removeData('check');
  jQuery(window).removeData('urlRule');
}
function xhr(num, url) { //xhr
  var host = getHostName(url);
  GM_xmlhttpRequest({
    method: 'GET',
    url: url,
    overrideMimeType: chapterRule[host].MimeType,
    timeout: parseFloat(jQuery('.bookDownloaderTime').val()) * 1000,
    onload: function (response) {
      var timeout = setTimeout(function () {
        jQuery(window).data('downloadTimeout') [num]++;
        if (parseInt(jQuery('.bookDownloaderTimeout').val()) > jQuery(window).data('downloadTimeout') [num]) {
          xhr(num, url);
        } else {
          var nameTrue = jQuery(window).data('dataDownload') [num].name || num;
          thisDownloaded(num, nameTrue, '很遗憾，下载超时。by novelDownloader');
          jQuery(window).data('dataDownload') [num].ok = 'timeout';
        }
      }, parseFloat(jQuery('.bookDownloaderTime').val()) * 1000);
      if (debug) console.log(response.response);
      if (jQuery(window).data('dataDownload') [num].name !== '') {
        var name = jQuery(window).data('dataDownload') [num].name;
      } else {
        var name = jQuery(chapterRule[host].name, response.response);
        if (name.length > 0) {
          name = name.text().replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
        } else {
          name = jQuery(window).data('dataDownload') [num].url;
          var _html = response.response.replace(/\s+/g, ' ').replace(/<!DOCTYPE.*?>|<html.*?>|<\/html>|<head>.*?<\/head>|<body>|<\/body>|<a.*?>.*?<\/a>|<script.*?>.*?<\/script>|<img.*?>.*?<\/img>/g, '');
          jQuery('.bookDownloaderFinder').append('<div class="findTitle' + num + '">' + _html + '</div>');
          name = jQuery('.findTitle' + num + ' ' + chapterRule[host].name).text();
          jQuery('.findTitle' + num).remove();
        }
      }
      var content = jQuery(chapterRule[host].content, response.response);
      if (content.length > 0) {
        content = content.html();
      } else {
        var _html = response.response.replace(/\s+/g, ' ').replace(/<!DOCTYPE.*?>|<html.*?>|<\/html>|<head>.*?<\/head>|<body>|<\/body>|<a.*?>.*?<\/a>|<script.*?>.*?<\/script>|<img.*?>.*?<\/img>/g, '');
        jQuery('.bookDownloaderFinder').append('<div class="findContent' + num + '">' + _html + '</div>');
        content = jQuery('.findContent' + num + ' ' + chapterRule[host].content).html();
        jQuery('.findContent' + num).remove();
      }
      if (reRule[host] instanceof Array) content = wordFormatSpecial(host, content);
      content = wordFormat(content);
      content = '来源地址：' + url + '\r\n' + content;
      if (parseInt(jQuery('.bookDownloaderLang:checked').val()) !== chapterRule[host].lang) {
        if (parseInt(jQuery('.bookDownloaderLang:checked').val()) === 0) {
          name = tranStr(name, false);
          content = tranStr(content, false);
        } else {
          name = tranStr(name, true);
          content = tranStr(content, true);
        }
      }
      clearTimeout(timeout);
      thisDownloaded(num, name, content);
    },
    ontimeout: function () {
      jQuery(window).data('downloadTimeout') [num]++;
      if (parseInt(jQuery('.bookDownloaderTimeout').val()) > jQuery(window).data('downloadTimeout') [num]) {
        xhr(num, url);
      } else {
        var nameTrue = jQuery(window).data('dataDownload') [num].name || num;
        thisDownloaded(num, nameTrue, '很遗憾，下载超时。by novelDownloader');
        jQuery(window).data('dataDownload') [num].ok = 'timeout';
      }
    },
    onerror: function () {
      jQuery(window).data('downloadError') [num]++;
      if (parseInt(jQuery('.bookDownloaderError').val()) > jQuery(window).data('downloadError') [num]) {
        xhr(num, url);
      } else {
        var nameTrue = jQuery(window).data('dataDownload') [num].name || num;
        thisDownloaded(num, nameTrue, '很遗憾，下载失败。by novelDownloader');
        jQuery(window).data('dataDownload') [num].ok = 'error';
      }
    }
  });
}
function thisDownloaded(num, name, content) {
  jQuery(window).data('dataDownload') [num].name = name;
  jQuery(window).data('dataDownload') [num].content = content;
  jQuery(window).data('dataDownload') [num].ok = true;
  jQuery(window).data('downloadNow') [num].ok = true;
  jQuery(window).data('numberOk', jQuery(window).data('numberOk') + 1);
  jQuery('.bookDownladerChapter').html(jQuery(window).data('numberOk'));
  jQuery('.bookDownladerProgress').val(jQuery(window).data('numberOk'));
}
function wordFormat(word) {
  word = escape2Html(word);
  var replaceLib = [
    /*替换前的文本|||替换后的文本*/
    /*换行符请先用【换行】二字代替，最后同一替代*/
    /*请在最前方插入*/
    '无弹窗广告',
    '天才壹秒記住.*?為您提供精彩小說閱讀。',
    '<HEAD>.*?</HEAD>',
    '<br.*?>|||换行',
    '<p.*?>|||换行',
    '</p>|||换行',
    '<!--.*?-->',
    '<span style="display:none">.*?</span>',
    '<a.*?>.*?</a>',
    '<center.*?>.*?</center>|||换行',
    '<style.*?>.*?</style>|||换行',
    '<script.*?>.*?</script>|||换行',
    '<ul.*?>.*?</ul>',
    '<(S*?)[^>]*>|<.*? />|||换行',
    '</\\w+>',
    '换行|||\r\n',
    '[\r\n]+|||\r\n　　',
    '[\r\n]+\\s+[\r\n]+|||\r\n',
    '[\r\n]+\\s+|||\r\n　　',
    '[\r\n]+\\s+。|||。',
    '^\\s+',
    '\\s+$'
  ];
  var regexp;
  var str;
  var reStr;
  for (var i = 0; i < replaceLib.length; i++) {
    str = replaceLib[i].split('|||');
    reStr = (str.length === 1) ? '' : str[1];
    regexp = new RegExp(str[0], 'gi');
    word = word.replace(regexp, reStr);
  }
  word = '　　' + word;
  return word;
}
function addDownloadLogStart(num, url, status) {
  jQuery('.bookDownloaderLogDiv').append('<span id="bookDownloaderLogDiv_' + num + '">' + num + ' <a href="' + url + '" target="_blank">' + num + '</a> ' + status + '<br/></span>');
}
function addDownloadLogEnd(num, name, url, status, addclass) {
  jQuery('#bookDownloaderLogDiv_' + num).html(num + ' <a href="' + url + '" target="_blank">' + name + '</a> ' + status + '<br/>').addClass('bookDownloaderStatus' + addclass);
  jQuery('.bookDownloaderLogDiv') [0].scrollBy(0, 10);
}
function download2Zip(bookName) { //下载到1个zip
  var name = (bookName === '') ? jQuery(window).data('dataDownload') [0].name : bookName;
  jQuery(window).data('blob', new JSZip());
  var leng = String(jQuery(window).data('dataDownload').length).length;
  for (var i = 0; i < jQuery(window).data('dataDownload').length; i++) {
    var num = i + 1;
    jQuery(window).data('blob').file(String(preZeroFill(num, leng)) + '-' + jQuery(window).data('dataDownload') [i].name + '.txt', jQuery(window).data('dataDownload') [i].name + '\r\n' + jQuery(window).data('dataDownload') [i].content);
  }
  jQuery(window).data('blob').file('###说明文件.txt', '本压缩包由用户脚本novelDownloader制作')
  jQuery(window).data('blob').generateAsync({
    type: 'blob'
  }).then(function (content) {
    jQuery('#bookDownloaderBtn').click(function () {
      saveAs(content, name + '.zip');
    })
    saveAs(content, name + '.zip');
  });
  removeData();
}
function download2Epub(bookName) {
  var name = (bookName === '') ? jQuery(window).data('dataDownload') [0].name : bookName;
  var leng = String(jQuery(window).data('dataDownload').length).length;
  jQuery(window).data('blob', new JSZip());
  jQuery(window).data('blob').file('mimetype', 'application/epub+zip');
  var META_INF = jQuery(window).data('blob').folder('META-INF');
  META_INF.file('container.xml', '<?xml version="1.0" encoding="UTF-8"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml" /></rootfiles></container>');
  var OEBPS = jQuery(window).data('blob').folder('OEBPS');
  OEBPS.file('stylesheet.css', 'body{padding:0%;margin-top:0%;margin-bottom:0%;margin-left:1%;margin-right:1%;line-height:130%;text-align:justify}div{margin:0px;padding:0px;line-height:130%;text-align:justify}p{text-align:justify;text-indent:2em;line-height:130%}h1{line-height:130%;text-align:center;font-weight:bold;font-size:xx-large}h2{line-height:130%;text-align:center;font-weight:bold;font-size:x-large}h3{line-height:130%;text-align:center;font-weight:bold;font-size:large}');
  var lang = (parseInt(jQuery('.bookDownloaderLang:checked').val()) === 0) ? 'zh-CN' : 'zh-TW';
  var content_opf = '<?xml version="1.0" encoding="UTF-8"?><package version="2.0" unique-identifier="' + location.href + '" xmlns="http://www.idpf.org/2007/opf"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf"><dc:title>' + bookName + '</dc:title><dc:creator>novelDownloader</dc:creator><dc:identifier id="bookid">urn:uuid:' + location.href + '</dc:identifier><dc:language>' + lang + '</dc:language></metadata><manifest>';
  var toc_ncx = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN" "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd"><ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta name="dtb:uid" content="urn:uuid:' + location.href + '"/><meta name="dtb:depth" content="1"/><meta name="dtb:totalPageCount" content="0"/><meta name="dtb:maxPageNumber" content="0"/></head><docTitle><text>' + bookName + '</text></docTitle><navMap><navPoint id="navpoint-1" playOrder="1"><navLabel><text>首页</text></navLabel><content src="title.html"/></navPoint>';
  var item = '<item id="ncx" href="toc.ncx" media-type="text/xml"/><item id="cover" href="title.html" media-type="application/xhtml+xml"/><item id="css" href="stylesheet.css" media-type="text/css"/>';
  var itemref = '<itemref idref="cover" linear="no"/>';
  for (var i = 0; i < jQuery(window).data('dataDownload').length; i++) {
    var _name = String(preZeroFill(i, leng));
    var playOrder = i + 2;
    toc_ncx += '<navPoint id="chapter' + _name + '" playOrder="' + playOrder + '"><navLabel><text>' + jQuery(window).data('dataDownload') [i].name + '</text></navLabel><content src="' + _name + '.html"/></navPoint>';
    item += '<item id="chapter' + _name + '" href="' + _name + '.html" media-type="application/xhtml+xml"/>';
    itemref += '<itemref idref="chapter' + _name + '"/>';
    OEBPS.file(_name + '.html', '<html xmlns="http://www.w3.org/1999/xhtml"><head><title>' + jQuery(window).data('dataDownload') [i].name + '</title><link type="text/css" rel="stylesheet" media="all" href="stylesheet.css" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><h3>' + jQuery(window).data('dataDownload') [i].name + '</h3><div><p>' + jQuery(window).data('dataDownload') [i].content.replace(/\r\n/g, '<p></p>') + '</p></div></body></html>');
  }
  content_opf = content_opf + item + '</manifest><spine toc="ncx">' + itemref + '</spine><guide><reference href="title.html" type="cover" title="Cover"/></guide></package>';
  toc_ncx += '</navMap></ncx>';
  OEBPS.file('content.opf', content_opf);
  OEBPS.file('toc.ncx', toc_ncx);
  OEBPS.file('title.html', '<html xmlns="http://www.w3.org/1999/xhtml"><head><title>' + bookName + '</title><link type="text/css" rel="stylesheet" href="stylesheet.css" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><h1>' + bookName + '</h1><h2>本电子书由用户脚本novelDownloader制作</h2></body></html>');
  jQuery(window).data('blob').generateAsync({
    type: 'blob'
  }).then(function (content) {
    jQuery('#bookDownloaderBtn').click(function () {
      saveAs(content, name + '.epub');
    })
    saveAs(content, name + '.epub');
  });
  removeData();
}
function download2Txt(bookName) { //下载到1个txt
  var name = (bookName === '') ? jQuery(window).data('dataDownload') [0].name : bookName;
  var all = '';
  for (var i = 0; i < jQuery(window).data('dataDownload').length; i++) {
    all += jQuery(window).data('dataDownload') [i].name + '\r\n' + jQuery(window).data('dataDownload') [i].content + '\r\n\r\n';
  }
  all = '阅读前说明：本书籍由用户脚本novelDownloader制作\r\n\r\n' + all;
  jQuery(window).data('blob', new Blob([all], {
    type: 'text/plain;charset=utf-8'
  }));
  jQuery('#bookDownloaderBtn').click(function () {
    saveAs(jQuery(window).data('blob'), name + '.txt');
  })
  saveAs(jQuery(window).data('blob'), name + '.txt');
  removeData();
}
function downloadedCheck(arr) { //检查下载是否完成
  var undownload = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].ok === true) {
      addDownloadLogEnd(parseInt(i) + 1, arr[i].name, arr[i].url, '成功', 'Ok');
    } else if (arr[i].ok === 'error') {
      addDownloadLogEnd(parseInt(i) + 1, arr[i].name, arr[i].url, '失败', 'Error');
    } else if (arr[i].ok === 'timeout') {
      addDownloadLogEnd(parseInt(i) + 1, arr[i].name, arr[i].url, '超时', 'Timeout');
    } else {
      undownload++;
    }
  }
  return (undownload === 0) ? true : false;
}
function getHostName(url) { //获取网址域名
  return (/^http(s|):\/\//.test(url)) ? url.split('/') [2] : url.split('/') [0];
}
function preZeroFill(num, size) { //用0补足指定位数，来自https://segmentfault.com/q/1010000002607221，作者：captainblue与solar
  if (num >= Math.pow(10, size)) { //如果num本身位数不小于size位
    return num.toString();
  } else {
    var _str = Array(size + 1).join('0') + num;
    return _str.slice(_str.length - size);
  }
}
function utf8to16(str) { //来自http://www1.tc711.com/tool/js/Base64.js
  var out,
  i,
  len,
  c;
  var char2,
  char3;
  out = '';
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4)
      {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1);
        break;
      case 12:
      case 13:
        // 110x xxxx   10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 31) << 6) | (char2 & 63));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 15) << 12) | ((char2 & 63) << 6) | ((char3 & 63) << 0));
        break;
    }
  }
  return out;
}
if (location.host === 'www.hbooker.com' || location.host === 'yuedu.163.com') {
  var base64 = { //来自http://www1.tc711.com/tool/js/Base64.js
    EncodeChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    DecodeChars: [
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      62,
      - 1,
      - 1,
      - 1,
      63,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1
    ],
    encode: function (str) {
      var out,
      i,
      len;
      var c1,
      c2,
      c3;
      len = str.length;
      i = 0;
      out = '';
      while (i < len) {
        c1 = str.charCodeAt(i++) & 255;
        if (i == len)
        {
          out += base64.EncodeChars.charAt(c1 >> 2);
          out += base64.EncodeChars.charAt((c1 & 3) << 4);
          out += '==';
          break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len)
        {
          out += base64.EncodeChars.charAt(c1 >> 2);
          out += base64.EncodeChars.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
          out += base64.EncodeChars.charAt((c2 & 15) << 2);
          out += '=';
          break;
        }
        c3 = str.charCodeAt(i++);
        out += base64.EncodeChars.charAt(c1 >> 2);
        out += base64.EncodeChars.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
        out += base64.EncodeChars.charAt(((c2 & 15) << 2) | ((c3 & 192) >> 6));
        out += base64.EncodeChars.charAt(c3 & 63);
      }
      return out;
    },
    decode: function (str) {
      var c1,
      c2,
      c3,
      c4;
      var i,
      len,
      out;
      len = str.length;
      i = 0;
      out = '';
      while (i < len) {
        do {
          c1 = base64.DecodeChars[str.charCodeAt(i++) & 255];
        } while (i < len && c1 == - 1);
        if (c1 == - 1)
        break;
        do {
          c2 = base64.DecodeChars[str.charCodeAt(i++) & 255];
        } while (i < len && c2 == - 1);
        if (c2 == - 1)
        break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 48) >> 4));
        do {
          c3 = str.charCodeAt(i++) & 255;
          if (c3 == 61)
          return out;
          c3 = base64.DecodeChars[c3];
        } while (i < len && c3 == - 1);
        if (c3 == - 1)
        break;
        out += String.fromCharCode(((c2 & 15) << 4) | ((c3 & 60) >> 2));
        do {
          c4 = str.charCodeAt(i++) & 255;
          if (c4 == 61)
          return out;
          c4 = base64.DecodeChars[c4];
        } while (i < len && c4 == - 1);
        if (c4 == - 1)
        break;
        out += String.fromCharCode(((c3 & 3) << 6) | c4);
      }
      return out;
    }
  };
}
function objComp(obj1, obj2) { //js对象的比较，来自http://www.jb51.net/article/26372.htm
  if (obj1 == obj2)
  return true;
  if (typeof (obj2) == 'undefined' || obj2 == null || typeof (obj2) != 'object')
  return false;
  var length = 0;
  var length1 = 0;
  for (var ele in obj1) {
    length++;
  }
  for (var ele in obj2) {
    length1++;
  }
  if (length != length1)
  return false;
  if (obj2.constructor == obj1.constructor) {
    for (var ele in obj1) {
      if (typeof (obj1[ele]) == 'object') {
        if (!objComp(obj1[ele], obj2[ele]))
        return false;
      } else if (typeof (obj1[ele]) == 'function') {
        if (!objComp(obj1[ele].toString(), obj2[ele].toString()))
        return false;
      } else if (obj1[ele] != obj2[ele])
      return false;
    }
    return true;
  }
  return false;
};
function objArrSort(propertyName) { //对象数组排序函数，从小到大排序，来自http://www.jb51.net/article/24536.htm
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 < value1) {
      return 1;
    } else if (value2 > value1) {
      return - 1;
    } else {
      return 0;
    }
  }
}
function html2Escape(sHtml) { //来自http://blog.csdn.net/win32fanex/article/details/11948659
  return sHtml.replace(/[<>&"]/g, function (c) {
    return {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;'
    }
    [
      c
    ];
  });
}
function escape2Html(str) { //来自http://blog.csdn.net/win32fanex/article/details/11948659
  var arrEntities = {
    'lt': '<',
    'gt': '>',
    'nbsp': ' ',
    'amp': '&',
    'quot': '"'
  };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t];
  });
}
f
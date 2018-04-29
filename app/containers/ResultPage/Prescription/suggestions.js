const googleSearch = 'https://www.google.com.tw/search?q=';

const BUY_BOOK = 'https://designlab.re/product/%E4%BA%BA%E4%BA%BA%E9%83%BD%E8%83%BD%E4%B8%8A%E6%89%8B%E7%9A%84%E8%B3%87%E8%A8%8A%E5%9C%96%E8%A1%A8%E8%A8%AD%E8%A8%88%E8%A1%93/';

export default {
  design: [
    { name: '看漫畫也能練圖像思考：漫畫原來要這樣看', url: `${googleSearch}漫畫原來要這樣看` },
    { name: '最實用的職場溝通繪圖技巧：繪文字的技術', url: `${googleSearch}繪文字的技術` },
    { name: '用餐巾紙就能解決商業問題：餐巾紙的背後', url: `${googleSearch}餐巾紙的背後` },
  ],
  story: [
    { name: '史上最會資料說故事的男人：Hans Rosling', url: 'https://goo.gl/LSo6fp' },
    { name: '免費電子書：如何用資料視覺化說服觀眾？', url: 'https://goo.gl/DwchhT' },
    { name: '實戰案例：人人都能上手的資訊圖表設計術', url: BUY_BOOK },
  ],
  info: [
    { name: '把資訊視覺化解決問題：圖解思考開會技術', url: `${googleSearch}圖解思考開會技術` },
    { name: '免費電子書：如何用資料視覺化說服觀眾？', url: 'https://goo.gl/DwchhT' },
    { name: '實戰案例：人人都能上手的資訊圖表設計術', url: BUY_BOOK },
  ],
};

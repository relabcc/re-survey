const googleSearch = 'https://www.google.com.tw/search?q=';

export default {
  design: {
    suggestion: `不懂設計沒關係，設計思考很容易。[「設計思考」](${googleSearch}設計思考)一書帶回去，搭配線上圖表工具[(google 搜尋)](${googleSearch}infographic+tools)，你的設計一定很可以！`,
    extension: [
      { name: '「打造圖像腦」', url: `${googleSearch}打造圖像腦` },
      { name: '「人人都能上手的資訊圖表設計術」', url: `${googleSearch}人人都能上手的資訊圖表設計術` },
    ],
  },
  story: {
    suggestion: '不愛看書沒關係，[這份秘笈](https://goo.gl/jzRbL6)帶回去。掌握資訊脈絡和鋪陳，一定很有說服力！',
    extension: [
      { name: 'Hans and Ola Rosling: How not to be ignorant about the world | TED', url: 'https://www.ted.com/talks/hans_and_ola_rosling_how_not_to_be_ignorant_about_the_world' },
      { name: '「人人都能上手的資訊圖表設計術」', url: `${googleSearch}人人都能上手的資訊圖表設計術` },
    ],
  },
  info: {
    suggestion: `看到數據就頭暈也沒關係，多用[「餐巾紙的背後」](${googleSearch}餐巾紙的背後)練習。你會發現運用視覺來思考，世界都變得不一樣！`,
    extension: [
      { name: '實用資訊圖表分類', url: 'https://www.facebook.com/ReLAB.cc/posts/1579498278775394' },
      { name: '「人人都能上手的資訊圖表設計術」', url: `${googleSearch}人人都能上手的資訊圖表設計術` },
    ],
  },
};

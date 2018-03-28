import confidence from './confidence.svg';
import nervous from './nervous.svg';
import love from './love.svg';

const scenes = [
  {
    label: '一對一講解',
  },
  {
    label: '多人會議討論',
  },
  {
    label: '多人演講/教學',
  },
  {
    label: '廣告/社群貼文發布',
  },
  {
    label: '海報文宣品發送',
  },
  {
    label: '線上文章曝光',
  },
];

export default [
  [{
    type: 'Clock',
    title: '一天有24小時，你大概花幾小時「吸收」資訊',
    description: '演講簡報/企劃報告/社群溝通/產品說明/理念推廣/服務介紹/教材',
    name: 'absorbTime',
  }, {
    type: 'Clock',
    variation: 2,
    title: '一天有24小時，你大概花幾小時「傳達」資訊',
    description: '演講簡報/企劃報告/社群溝通/產品說明/理念推廣/服務介紹/教材',
    name: 'deliveryTime',
  }],

  [{
    type: 'Checkbox',
    title: '你最有自信的溝通情境',
    description: '複選',
    name: 'confident',
    icon: confidence,
    options: scenes.map((v, i) => {
      if (i < 4) return v;
      return Object.assign(v, { scores: ['story'] });
    }),
  }, {
    type: 'Checkbox',
    title: '你最感焦慮的溝通情境',
    description: '複選',
    name: 'nervous',
    icon: nervous,
    options: scenes,
  }],

  [{
    type: 'Radar',
    title: '這些技能你目前為止分別點到多高？',
    name: 'skills',
    axes: [
      { label: '說故事', scores: ['story'] },
      { label: '視覺設計', scores: ['design'] },
      { label: '圖表製作', scores: ['info'] },
      { label: '資訊處理', scores: ['info'] },
      { label: '了解溝通對象', scores: ['story', 'design'] },
    ],
  }],

  [{
    type: 'Checkbox',
    variation: 2,
    title: '想像你就要做完一份資訊圖表了！你最在意什麼？',
    description: '複選',
    icon: love,
    options: [
      { label: '資料呈現的準確', scores: ['info'] },
      { label: '資訊重點的傳達', scores: ['info', 'design'] },
      { label: '資訊脈絡的邏輯', scores: ['info', 'story'] },
      { label: '視覺呈現的美感', scores: ['design'] },
      { label: '對溝通對象有幫助', scores: ['design', 'story'] },
      { label: '有趣的設計和創意', scores: ['design'] },
      { label: '溝通對象理解內容', scores: ['info', 'design'] },
      { label: '引發共鳴和思考', scores: ['design', 'story'] },
      { label: '說服認同和行動', scores: ['design', 'story'] },
      { label: '品牌概念的營造', scores: ['design', 'story'] },
    ],
  }],

  [{
    type: 'Pie',
    title: '做一份資訊圖表，你花在「資訊處理」、「故事文案」跟「視覺美化」的時間分別佔比多少？',
    options: [
      { label: '資訊處理', color: '#f3eee8' },
      { label: '故事文案', color: '#d1ccc7' },
      { label: '視覺美化', color: '#9b9a98' },
    ],
  }],

  [{
    type: 'Degree',
    title: '你最擅長的工具',
    options: [
      { label: '簡報軟體', ex: 'Powerpoint / Keynote', scores: ['design'] },
      { label: '試算表軟體', ex: 'Excel / Numbers', scores: ['info'] },
      { label: '繪圖軟體', ex: 'Photoshop / Illustrator', scores: ['design'] },
      { label: '圖表製作軟體', ex: 'Google Charts / Tableau / plot.ly / RAWgraphs', scores: ['info'] },
      { label: '資訊圖表模板製作工具', ex: 'piktocharts / easel.ly / canva', scores: ['design'] },
      { label: '開發者資料視覺化工具', ex: 'D3.js / FusionCharts / Chart.js', scores: ['info'] },
    ],
  }],
];

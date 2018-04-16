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
    label: '面對多人演講/教學',
  },
  {
    label: '線上社群貼文內容設計',
  },
  {
    label: '海報文宣品視覺設計',
  },
  {
    label: '撰寫線上文章、報導',
  },
];

export default [
  [{
    type: 'Clock',
    title: '你每天花幾小時「吸收」對工作或學習有幫助的資訊？',
    name: 'absorbTime',
  }, {
    type: 'Clock',
    variation: 2,
    title: '在工作或學習中，你每天花幾小時想辦法「傳達」資訊？',
    description: '演講簡報/企劃報告/社群溝通/產品說明/理念推廣/服務介紹/教材...',
    name: 'deliveryTime',
  }],

  [{
    type: 'Checkbox',
    title: '你認為自己做得較好的資訊溝通情境有哪些呢？',
    description: '複選',
    name: 'confident',
    icon: confidence,
    options: scenes.map((v, i) => {
      if (i < 4) return v;
      return Object.assign(v, { scores: ['story'] });
    }),
  }, {
    type: 'Checkbox',
    title: '你認為自己做得較差的資訊溝通情境有哪些呢？',
    description: '複選',
    name: 'nervous',
    icon: nervous,
    options: scenes,
  }],

  [{
    type: 'Radar',
    title: '資訊傳達的能力可以大致分為下列五項，你認為自己在這些技能分別點到多高呢？',
    name: 'skills',
    axes: [
      { label: '故事文案', scores: ['story'] },
      { label: '視覺設計', scores: ['design'] },
      { label: '圖表製作', scores: ['info'] },
      { label: '資訊處理', scores: ['info'] },
      { label: '了解溝通對象', scores: ['story', 'design'] },
    ],
  }],

  [{
    type: 'Checkbox',
    variation: 2,
    title: '吸收資訊時，你通常最容易注意到哪些項目？',
    description: '複選',
    icon: love,
    options: [
      { label: '資料的可信度', scores: ['info'] },
      { label: '資訊重點和脈絡', scores: ['info'] },
      { label: '資訊和自身的關係', scores: ['story'] },
      { label: '視覺呈現的美感', scores: ['design'] },
      { label: '有趣的設計和創意', scores: ['design'] },
      { label: '引發共鳴和思考', scores: ['story'] },
    ],
  }],

  // [{
  //   type: 'Pie',
  //   title: '做一份資訊圖表，你花在「資訊處理」、「故事文案」跟「視覺美化」的時間分別佔比多少？',
  //   options: [
  //     { label: '資訊處理', color: '#f3eee8' },
  //     { label: '故事文案', color: '#d1ccc7' },
  //     { label: '視覺美化', color: '#9b9a98' },
  //   ],
  // }],

  // [{
  //   type: 'Degree',
  //   title: '你最擅長的工具',
  //   options: [
  //     { label: '簡報軟體', ex: 'Powerpoint / Keynote', scores: ['design'] },
  //     { label: '試算表軟體', ex: 'Excel / Numbers', scores: ['info'] },
  //     { label: '繪圖軟體', ex: 'Photoshop / Illustrator', scores: ['design'] },
  //     { label: '圖表製作軟體', ex: 'Google Charts / Tableau / plot.ly / RAWgraphs', scores: ['info'] },
  //     { label: '資訊圖表模板製作工具', ex: 'piktocharts / easel.ly / canva', scores: ['design'] },
  //     { label: '開發者資料視覺化工具', ex: 'D3.js / FusionCharts / Chart.js', scores: ['info'] },
  //   ],
  // }],
];

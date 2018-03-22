import confidence from './confidence.svg';
import nervous from './nervous.svg';

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
  }],
  [{
    type: 'Clock',
    title: '一天有24小時，你大概花幾小時「傳達」資訊',
    description: '演講簡報/企劃報告/社群溝通/產品說明/理念推廣/服務介紹/教材',
  }],
  [{
    type: 'Checkbox',
    title: '你最有自信的溝通情境',
    description: '複選',
    icon: confidence,
    options: scenes.map((v, i) => {
      if (i < 4) return v;
      return Object.assign(v, { score: { story: 1 } });
    }),
  }, {
    type: 'Checkbox',
    title: '你最感焦慮的溝通情境',
    description: '複選',
    icon: nervous,
    options: scenes,
  }],
  [{
    type: 'Radar',
    title: '這些技能你目前為止分別點到多高？',
    axes: [
      { label: '說故事', scores: ['story'] },
      { label: '視覺設計', scores: ['design'] },
      { label: '圖表製作', scores: ['info'] },
      { label: '資訊處理', scores: ['info'] },
      { label: '了解溝通對象', scores: ['story', 'design'] },
    ],
  }],
];

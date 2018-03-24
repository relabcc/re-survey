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
      return Object.assign(v, { score: { story: 1 } });
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
      { label: '資料呈現的準確' },
      { label: '視覺呈現的美感' },
      { label: '溝通對象理解內容' },
      { label: '品牌概念的營造' },
      { label: '資訊重點的傳達' },
      { label: '對溝通對象有幫助' },
      { label: '引發共鳴和思考' },
      { label: '資訊脈絡的邏輯' },
      { label: '有趣的設計和創意' },
      { label: '說服認同和行動' },
    ],
  }],
];

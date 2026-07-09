const { default: Timeline } = _Timeline;

const imageLayoutDemo = [
  {
    title: '单图',
    content: '单张图片占满整行，适合重点功能截图或架构图展示。',
    images: ['https://assets.aceternity.com/pro/hero-sections.png']
  },
  {
    title: '双图',
    content: '两张图片并排排列，适合前后对比或双端界面对照。',
    images: [
      'https://assets.aceternity.com/templates/startup-1.webp',
      'https://assets.aceternity.com/templates/startup-2.webp'
    ]
  },
  {
    title: '三图',
    content: '首图通栏展示，后两张并排，适合「主图 + 细节」组合。',
    images: [
      { src: 'https://assets.aceternity.com/pro/bento-grids.png', alt: '主界面', width: 1600, height: 900 },
      { src: 'https://assets.aceternity.com/features-section.png', alt: '功能模块' },
      { src: 'https://assets.aceternity.com/cards.png', alt: '卡片列表' }
    ]
  },
  {
    title: '四图',
    content: '四宫格布局，最多展示 4 张图片；点击图片可放大预览并左右切换。',
    images: [
      { src: 'https://assets.aceternity.com/templates/startup-1.webp', alt: '截图 1' },
      { src: 'https://assets.aceternity.com/templates/startup-2.webp', alt: '截图 2' },
      { src: 'https://assets.aceternity.com/templates/startup-3.webp', alt: '截图 3' },
      { src: 'https://assets.aceternity.com/templates/startup-4.webp', alt: '截图 4' },
      { src: 'https://assets.aceternity.com/pro/hero-sections.png', alt: '超出第 5 张不展示' }
    ]
  }
];

const ImagesExample = () => (
  <div style={{ position: 'relative', width: '100%', overflow: 'clip' }}>
    <Timeline data={imageLayoutDemo} title="图片布局" description="支持字符串 URL 与对象格式，点击缩略图可全屏预览" />
  </div>
);

render(<ImagesExample />);

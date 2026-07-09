const { default: Timeline } = _Timeline;

const releaseNotes = [
  {
    title: 'v2.4.0',
    content: '新增工作流审批节点配置、批量导出报表，并优化移动端表单填写体验。',
    images: [
      { src: 'https://assets.aceternity.com/templates/startup-1.webp', alt: '工作流配置面板' },
      { src: 'https://assets.aceternity.com/templates/startup-2.webp', alt: '报表导出预览' },
      { src: 'https://assets.aceternity.com/templates/startup-3.webp', alt: '移动端表单' },
      { src: 'https://assets.aceternity.com/templates/startup-4.webp', alt: '通知中心' }
    ],
    extra: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#525252' }}>
        <span>✅ 支持审批流条件分支</span>
        <span>✅ 报表导出支持 Excel / PDF</span>
        <span>✅ 修复 iOS 键盘遮挡输入框问题</span>
      </div>
    )
  },
  {
    title: 'v2.3.0',
    content: '上线组织架构同步、成员批量邀请，以及租户级权限模板。',
    images: [
      { src: 'https://assets.aceternity.com/pro/hero-sections.png', alt: '组织架构' },
      { src: 'https://assets.aceternity.com/features-section.png', alt: '成员邀请' }
    ]
  },
  {
    title: 'v2.2.0',
    content: 'Dashboard 支持自定义指标卡片，新增暗色主题与国际化语言包。',
    images: [{ src: 'https://assets.aceternity.com/pro/bento-grids.png', alt: 'Dashboard 自定义' }],
    extra: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#525252' }}>
        <span>✅ 暗色主题全局适配</span>
        <span>✅ 新增英文语言包</span>
      </div>
    )
  },
  {
    title: 'v2.1.0',
    content: '首个正式版发布，包含账号体系、租户管理与基础数据看板。'
  }
];

const BaseExample = () => (
  <div style={{ position: 'relative', width: '100%', overflow: 'clip' }}>
    <Timeline
      data={releaseNotes}
      title="产品更新日志"
      description="记录 Leapin SaaS 平台的主要版本迭代与功能发布，向下滚动查看进度动画。"
    />
  </div>
);

render(<BaseExample />);

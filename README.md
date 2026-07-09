# timeline

### 描述

滚动驱动动画的 React 时间线组件，基于 framer-motion，支持响应式布局和国际化

### 安装

```shell
npm i --save @kne/timeline
```

### 概述

### 概述

Timeline 是一个滚动驱动动画的时间线组件，基于 framer-motion 实现。随着页面滚动，左侧彩虹进度线会同步延伸，时间节点标题支持视口居中缩放动效，适合产品更新日志、项目里程碑、版本发布记录等场景。

### 主要特性

- **滚动驱动动画**：基于 framer-motion 的 `useMotionValue` 与 `useTransform`，进度线与标题缩放随滚动实时更新
- **响应式布局**：基于 `@kne/responsive-utils` 统一断点，桌面端标题侧边 sticky 展示，移动端内联展示，并支持容器查询（设备预览框内同样生效）
- **图片预览**：内置 PhotoSwipe 灯箱，支持 1～4 张图片网格布局，点击放大预览，自动识别图片原始尺寸
- **紧凑模式**：通过 `compact` 属性收紧节点间距、标题字号与图片高度，适合嵌入侧栏或弹窗
- **国际化支持**：内置中英文语言包，可通过 `@kne/react-intl` 切换
- **灵活扩展**：每条记录支持 `extra` 插槽，可渲染标签、链接、列表等自定义内容

### 使用场景

- 产品 changelog / 版本发布说明页
- 公司发展历程、融资里程碑展示
- 项目复盘时间轴、迭代记录
- 个人作品集、学习路线回顾


### 示例(全屏)

#### 示例代码

- 基础用法
- 完整展示标题、描述、正文、图片网格与 extra 插槽，模拟产品版本发布 changelog
- _Timeline(@kne/current-lib_timeline)[import * as _Timeline from "@kne/timeline"],(@kne/current-lib_timeline/dist/index.css)

```jsx
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

```

- 紧凑模式
- 通过 compact 属性收紧间距与字号，适合侧栏、抽屉等空间受限场景
- _Timeline(@kne/current-lib_timeline)[import * as _Timeline from "@kne/timeline"],(@kne/current-lib_timeline/dist/index.css),antd(antd)

```jsx
const { default: Timeline } = _Timeline;
const { Flex, Switch, Typography } = antd;
const { useState } = React;

const sprintRecords = [
  {
    title: 'Sprint 18',
    content: '完成客户标签体系与线索分配规则，销售漏斗转化率提升 12%。',
    images: [
      { src: 'https://assets.aceternity.com/templates/startup-1.webp', alt: '标签配置' },
      { src: 'https://assets.aceternity.com/templates/startup-2.webp', alt: '漏斗看板' }
    ]
  },
  {
    title: 'Sprint 17',
    content: '接入企业微信消息推送，支持审批结果实时通知到群聊。'
  },
  {
    title: 'Sprint 16',
    content: '优化列表页加载性能，首屏请求数减少 40%。',
    images: [{ src: 'https://assets.aceternity.com/cards.png', alt: '性能对比' }]
  }
];

const CompactExample = () => {
  const [compact, setCompact] = useState(true);

  return (
    <Flex vertical gap={12} style={{ width: '100%' }}>
      <Flex align="center" gap={8}>
        <Switch checked={compact} onChange={setCompact} />
        <Typography.Text type="secondary">紧凑模式（compact）</Typography.Text>
      </Flex>
      <div style={{ position: 'relative', width: '100%', overflow: 'clip' }}>
        <Timeline
          compact={compact}
          data={sprintRecords}
          title="迭代记录"
          description="适合嵌入侧栏或弹窗的紧凑布局"
        />
      </div>
    </Flex>
  );
};

render(<CompactExample />);

```

- 图片预览
- 展示 1～4 张图片的不同网格布局，点击可放大预览并左右切换
- _Timeline(@kne/current-lib_timeline)[import * as _Timeline from "@kne/timeline"],(@kne/current-lib_timeline/dist/index.css)

```jsx
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

```

- 精简展示
- 不传 title / description，仅渲染纯文本节点，适合嵌入已有页面布局
- _Timeline(@kne/current-lib_timeline)[import * as _Timeline from "@kne/timeline"],(@kne/current-lib_timeline/dist/index.css)

```jsx
const { default: Timeline } = _Timeline;

const milestones = [
  {
    title: '2024 Q1',
    content: '完成 A 轮融资，团队扩展至 50 人，开通华东、华南两个区域服务中心。'
  },
  {
    title: '2023',
    content: '产品正式上线，签约首批 20 家企业客户，月活跃用户突破 1 万。'
  },
  {
    title: '2022',
    content: '完成核心产品研发，通过等保二级认证，启动内测计划。'
  },
  {
    title: '2021',
    content: '公司成立，确定 SaaS + AI 的产品方向，完成技术选型与原型验证。'
  }
];

const MinimalExample = () => (
  <div style={{ position: 'relative', width: '100%', overflow: 'clip' }}>
    <Timeline data={milestones} />
  </div>
);

render(<MinimalExample />);

```

### API

### Timeline

时间线组件，用于按时间顺序展示事件记录，支持滚动驱动的进度动画、响应式布局与图片预览。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| data | `Array<TimelineItem>` | - | 时间线数据列表，按展示顺序传入 |
| title | `string` | - | 时间线标题，不传则不渲染标题区域 |
| description | `string` | - | 时间线描述文案，不传则不渲染描述区域 |
| compact | `boolean` | `false` | 紧凑模式，收紧节点间距、标题字号与图片高度 |

### TimelineItem

单条时间线记录的数据结构，作为 `data` 数组的元素。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 时间节点标题 |
| content | `string` | - | 时间节点文本内容 |
| images | `Array<string \| TimelineImage>` | - | 图片列表，最多展示 4 张，超出部分截断；支持字符串 URL 或对象格式 |
| extra | `ReactNode` | - | 额外扩展内容，渲染在正文与图片下方 |

### TimelineImage

图片对象格式，用于 `images` 数组。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| src | `string` | - | 图片地址 |
| alt | `string` | - | 替代文本 |
| width | `number` | - | 图片原始宽度，用于灯箱缩放动画；不传则自动从图片 `naturalWidth` 读取 |
| height | `number` | - | 图片原始高度，用于灯箱缩放动画；不传则自动从图片 `naturalHeight` 读取 |

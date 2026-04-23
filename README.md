# timeline

### 描述

滚动驱动动画的 React 时间线组件，基于 framer-motion，支持响应式布局和国际化

### 安装

```shell
npm i --save @kne/timeline
```

### 概述

### 概述

Timeline 是一个滚动驱动动画的时间线组件，基于 framer-motion 实现，随着页面滚动自动展示时间线进度动画效果。

### 主要特性

- **滚动驱动动画**：基于 framer-motion 的 `useScroll` 和 `useTransform`，随页面滚动自动展示进度动画
- **响应式布局**：适配桌面端和移动端，桌面端标题侧边固定显示，移动端标题内联显示
- **国际化支持**：内置中英文语言包，支持多语言切换
- **自定义内容**：每条时间线项目支持任意 ReactNode 作为内容渲染


### 示例

#### 示例代码

- 基础用法
- 展示时间线组件的基本用法，支持滚动驱动的进度动画和自定义内容渲染
- _Timeline(@kne/current-lib_timeline)[import * as _Timeline from "@kne/timeline"],(@kne/current-lib_timeline/dist/index.css)

```jsx
const { default: Timeline } = _Timeline;

const BaseExample = () => {
  const data = [
    {
      title: '2024',
      content: 'Built and launched Aceternity UI and Aceternity UI Pro from scratch',
      images: [
        { src: 'https://assets.aceternity.com/templates/startup-1.webp', alt: 'startup template' },
        { src: 'https://assets.aceternity.com/templates/startup-2.webp', alt: 'startup template' },
        { src: 'https://assets.aceternity.com/templates/startup-3.webp', alt: 'startup template' },
        { src: 'https://assets.aceternity.com/templates/startup-4.webp', alt: 'startup template' }
      ]
    },
    {
      title: 'Early 2023',
      content: 'I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum. Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.',
      images: [
        { src: 'https://assets.aceternity.com/pro/hero-sections.png', alt: 'hero template' },
        { src: 'https://assets.aceternity.com/features-section.png', alt: 'feature template' },
        { src: 'https://assets.aceternity.com/pro/bento-grids.png', alt: 'bento template' },
        { src: 'https://assets.aceternity.com/cards.png', alt: 'cards template' }
      ]
    },
    {
      title: 'Changelog',
      content: 'Deployed 5 new components on Aceternity today',
      images: [
        { src: 'https://assets.aceternity.com/pro/hero-sections.png', alt: 'hero template' },
        { src: 'https://assets.aceternity.com/features-section.png', alt: 'feature template' }
      ],
      extra: (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            ✅ Card grid component
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            ✅ Startup template Aceternity
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            ✅ Random file upload lol
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            ✅ Himesh Reshammiya Music CD
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
      )
    }
  ];
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'clip' }}>
      <Timeline
        data={data}
        title="Changelog from my journey"
        description="I've been working on Aceternity for the past 2 years. Here's a timeline of my journey."
      />
    </div>
  );
};

render(<BaseExample />);

```

### API

### Timeline

时间线组件，用于展示按时间顺序排列的事件记录，支持滚动驱动的进度动画效果。

#### 属性

|| 属性 | 类型 | 默认值 | 说明 |
||------|------|--------|------|
|| data | `Array<TimelineItem>` | - | 时间线数据列表 |
|| title | `string` | - | 时间线标题，不传则不显示标题区域 |
|| description | `string` | - | 时间线描述文案，不传则不显示描述区域 |

#### TimelineItem

|| 属性 | 类型 | 默认值 | 说明 |
||------|------|--------|------|
|| title | `string` | - | 时间节点标题 |
|| content | `string` | - | 时间节点文本内容 |
|| images | `Array<string \| { src: string, alt?: string }>` | - | 图片列表，支持字符串URL或对象格式，组件内部负责布局展示，最多展示4张 |
|| extra | `ReactNode` | - | 额外扩展内容，用于自定义渲染 |

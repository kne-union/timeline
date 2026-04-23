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

const imageShadow = '0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), inset 0 1px 0 rgba(255,255,255,0.1)';

const BaseExample = () => {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p style={{ marginBottom: 32, fontSize: 14 }}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
          </div>
        </div>
      )
    },
    {
      title: 'Early 2023',
      content: (
        <div>
          <p style={{ marginBottom: 32, fontSize: 14 }}>
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p style={{ marginBottom: 32, fontSize: 14 }}>
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
          </div>
        </div>
      )
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p style={{ marginBottom: 16, fontSize: 14 }}>
            Deployed 5 new components on Aceternity today
          </p>
          <div style={{ marginBottom: 32 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, boxShadow: imageShadow }}
            />
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

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| data | `Array<{ title: string, content: ReactNode }>` | - | 时间线数据列表，每项包含标题和内容 |
| title | `string` | - | 时间线标题，不传则不显示标题区域 |
| description | `string` | - | 时间线描述文案，不传则不显示描述区域 |

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

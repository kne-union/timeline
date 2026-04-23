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

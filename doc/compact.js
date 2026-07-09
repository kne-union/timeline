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

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

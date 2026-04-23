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

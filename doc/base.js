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

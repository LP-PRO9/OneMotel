export function MarqueeBar() {
  const items = Array.from({ length: 16 }, (_, i) => (
    <span key={i}>
      SEMPRE ABERTO<span className="marquee-sep">—</span>
    </span>
  ));

  return (
    <div className="marquee-bar">
      <div className="marquee-track">{items}</div>
    </div>
  );
}

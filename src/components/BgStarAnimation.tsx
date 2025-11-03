function BgStarAnimation() {
  return Array.from({ length: 200 }).map((_, index) => (
    <div
      key={index}
      className="absolute animate-ping "
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${index * 2}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    >
      <div className="relative text-[5px] shadow-inner">+</div>
    </div>
  ));
}

export default BgStarAnimation;

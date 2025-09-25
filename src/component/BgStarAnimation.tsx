

function BgStarAnimation() {
  return (
      <div>
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-[1px] h-[1px] bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
  )
}

export default BgStarAnimation
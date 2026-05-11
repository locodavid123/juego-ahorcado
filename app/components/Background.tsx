export default function Background() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 bottom-[50vh] bg-gradient-to-b from-[#0d0221] via-[#1a0b2e] to-[#2d0a42] pointer-events-none -z-10"></div>
    </>
  );
}
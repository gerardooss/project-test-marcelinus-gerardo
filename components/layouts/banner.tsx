export default function Banner() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-cover bg-parallax">
        <h1 className="text-5xl font-bold text-white mb-1">Ideas</h1>
        <h1 className="text-xl text-gray-100 italic">Where all our great things begin</h1>
      </div>
      <div className="diagonal"></div>
    </div>
  );
}

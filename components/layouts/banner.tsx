/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen bg-fixed bg-cover bg-parallax relative">
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold text-white mb-1">Ideas</h1>
          <h1 className="text-xl text-gray-100 italic">
            Where all our great things begin
          </h1>
        </div>
        <img
          src="/birds.png"
          alt="birds"
          className="absolute right-8 top-1/2 transform -translate-y-1/4 max-w-xs"
        />
      </div>
      <div className="diagonal"></div>
    </div>
  );
}

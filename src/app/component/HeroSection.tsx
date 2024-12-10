
export function HeroSection() {
  return (
    <div className="bg_hero  text-black border-4 py-44 md:px-16 flex flex-col md:flex-row  bg-cover bg-center">
      <div className="text-left md:flex-row  w-1/2 md:text-left ml-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-lg mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        
          <a href="/shop" className="bg-black text-white px-6 py-3 rounded-full text-lg inline-block">
            Shop Now
          </a>
    
      </div>
    </div>
  );
};

import bannerImg from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center pb-24 md:pb-48 text-center bg-[#9538E2] text-white rounded-lg px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl md:text-4xl mt-3 font-bold">
          Upgrade Your Tech Accessorize with <br className="hidden md:block" /> Gadget Heaven Accessories
        </h1>
        <p className="my-3 md:my-5 font-semibold text-sm md:text-base lg:text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. <br className="hidden md:block" /> From smart devices to the coolest accessories, we have
          it all!
        </p>
        <button className="btn">Shop Now</button>
      </div>
      <div className="absolute top-[200px] md:top-[250px] flex justify-center w-full">
        <img
          className="h-[250px] md:h-[400px] w-[90%] sm:w-[80%] md:w-[70%] object-cover rounded-lg border-4 border-white mx-auto"
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

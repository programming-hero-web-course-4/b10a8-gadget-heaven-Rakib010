import bannerImg from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center pb-48 text-center bg-[#9538E2] text-white rounded-lg ">
        <h1 className="text-4xl mt-3 font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="my-5 font-semibold">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
        <button className="btn">Shop Now</button>
      </div>
      <div className="absolute top-[250px] flex justify-center w-full">
        <img
          className="h-[400px] w-[70%] object-cover rounded-lg border-4 border-white mx-auto"
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

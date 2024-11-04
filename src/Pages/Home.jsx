import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Hero />

      {/* Heading */}

      <div className="flex gap-4 mt-72">
        {/* categories */}
        <Categories></Categories>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

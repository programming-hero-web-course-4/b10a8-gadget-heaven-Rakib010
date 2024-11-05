import React, { useContext, useState } from "react";
import Heading from "../components/Heading";
import { CartContext } from "../contexts/ProductsContext";
import { RiDeleteBack2Fill } from "react-icons/ri";

const Dashboard = () => {
  const { cartItems, wishList, totalCartPrice, sortCartByPrice } =
    useContext(CartContext);
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div>
      <div className="relative">
        <Heading
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />

        <div className="absolute bottom-10 left-[480px]">
          <button onClick={() => setActiveTab("cart")} className="btn mr-4">
            Cart
          </button>
          <button onClick={() => setActiveTab("wishlist")} className="btn">
            Wishlist
          </button>
        </div>
      </div>

      {/* cart */}
      <div className="mt-10">
        {activeTab === "cart" && (
          <div>
            <div className="flex justify-between items-center my-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Cart Items</h2>
              </div>
              <div className="flex gap-6 items-center">
                <h2 className="font-bold text-xl">
                  Total Cost:${totalCartPrice}
                </h2>
                <button
                  onClick={sortCartByPrice}
                  className="btn border border-purple-500"
                >
                  Sort By Price
                </button>
                <button className="btn border border-purple-500">
                  Purchase
                </button>
              </div>
            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border p-3 mb-2 rounded-lg flex gap-4 w-[70%] mx-auto"
              >
                <img
                  className="w-52 h-[110px] object-cover  rounded-lg"
                  src={item.product_image}
                  alt=""
                />
                <div className="flex flex-col gap-3 ">
                  <h3 className="text-xl font-semibold">
                    {item.product_title}
                  </h3>
                  <p>{item.description}</p>
                  <p className="font-semibold">Price: ${item.price}</p>
                </div>
                <div className="flex items-center  text-red-500 ml-auto cursor-pointer text-3xl">
                  <RiDeleteBack2Fill />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wishlist */}
        {activeTab === "wishlist" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Wishlist Items</h2>
            {wishList.map((item, index) => (
              <div
                key={index}
                className="border p-3 mb-2 rounded-lg flex gap-4 w-[70%] mx-auto"
              >
                <img
                  className="w-52 h-[110px] object-cover  rounded-lg"
                  src={item.product_image}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">
                    {item.product_title}
                  </h3>
                  <p>{item.description}</p>
                  <p className="font-semibold">Price: ${item.price}</p>
                </div>
                <div className="flex items-center  text-red-500 ml-auto cursor-pointer text-3xl">
                  <RiDeleteBack2Fill />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

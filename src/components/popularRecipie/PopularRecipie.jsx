import { motion } from 'framer-motion';
import { IoCarOutline } from 'react-icons/io5';
import { foods } from '../hotDessert/HotDessert';
const PopularRecipie = () => {
  return (
    <div className="container py-16">
      <motion.h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-leagueGothic uppercase font-semibold py-12">
        Our Popular Recipie
      </motion.h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
        {foods.map((item) => (
          <div
            className="group shadow-xl p-3 bg-white/50 text-center rounded-xl"
            key={item.id}
          >
            <img
              src={item.img}
              alt=""
              className="w-36 h-36 mx-auto group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-700"
            />

            <div className="space-y-3">
              <button
                type="button"
                className="group-hover:mt-3 opacity-0 group-hover:opacity-100 btn-primary inline-block !mt-10 !py-2 !px-3"
              >
                <IoCarOutline size={22} className=" inline mr-2" />
                Order Now
              </button>

              <h1 className="text-2xl  font-semibold">{item.name}</h1>
              <p className="text-2xl  text-yellow-400 font-semibold">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipie;

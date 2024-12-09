import food1 from '../../assets/food/food.png';
import food2 from '../../assets/food/food2-plate.png';
import food3 from '../../assets/food/banner.png';
import { motion } from 'framer-motion';
import { sildeUp } from '../hero/Hero';

export const foods = [
  { id: 1, name: 'Hot Cake', img: food1, price: '$5.99', delay: 0.1 },
  { id: 2, name: 'Salad', img: food2, price: '$5.00', delay: 0.2 },
  { id: 3, name: 'Steak', img: food3, price: '$5.00', delay: 0.3 },
];
export default function HotDessert() {
  return (
    <div className="container py-12">
      <motion.h2
        variants={sildeUp(0.1)}
        initial="initial"
        whileInView="animate"
        className="text-2xl text-darkGreen font-semibold uppercase py-8"
      >
        Hot Dessert
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
        {foods.map((item) => (
          <motion.div
            variants={sildeUp(item.delay)}
            initial="initial"
            whileInView="animate"
            key={item.id}
            className="group bg-white/50 shadow-md p-3 flex items-center gap-3 rounded-md"
          >
            <img
              src={item.img}
              alt=""
              className="w-24 rounded-full group-hover:scale-125 transition-all duration-300 group-hover:rotate-[50deg]"
            />

            <div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-xl text-yellow-500">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

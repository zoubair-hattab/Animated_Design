import React from 'react';
import leaf from '../../assets/food/leaf.png';
import spoon from '../../assets/food/spoon.png';
import plate from '../../assets/food/food.png';
import banana from '../../assets/food/banana2.png';
import { animate, motion } from 'framer-motion';
import { IoCarOutline } from 'react-icons/io5';
export const sildeUp = (delay) => {
  return {
    initial: {
      y: '100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duraction: 0.6,
        delay: delay,
      },
    },
  };
};
export default function Hero() {
  return (
    <main className="container min-h-[600px] flex justify-center ">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
        <div className="space-y-3 mt-14 ">
          <motion.h2
            variants={sildeUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="text-5xl  lg:text-7xl xl:text-8xl font-bold uppercase flex items-center justify-center md:justify-start gap-1"
          >
            <span className="block text-outline text-transparent">yummy</span>
            <img src={leaf} alt="" className="w-8 md:w-12" />
          </motion.h2>
          <motion.h2
            variants={sildeUp(0.7)}
            initial="initial"
            whileInView="animate"
            className="text-5xl text-center md:text-left lg:text-7xl xl:text-8xl font-bold uppercase"
          >
            Breakfast
          </motion.h2>
          <motion.p
            variants={sildeUp(0.9)}
            initial="initial"
            whileInView="animate"
            className="text-sm text-center md:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            at aspernatur!
          </motion.p>
          <motion.button
            variants={sildeUp(1.1)}
            initial="initial"
            whileInView="animate"
            type="button"
            className="btn-primary inline-block !mt-10"
          >
            <IoCarOutline size={22} className=" inline mr-2" />
            Order Now
          </motion.button>
        </div>
        <div className="relative">
          <motion.img
            initial={{ y: 100, x: 200, opacity: 0, rotate: 20 }}
            whileInView={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={plate}
            alt="plate"
            className="w-[450px]"
          />

          <motion.img
            initial={{ y: 100, x: 200, opacity: 0, rotate: 120 }}
            whileInView={{ y: 0, x: 0, rotate: 75, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={spoon}
            alt="spoon"
            className="absolute w-[350px] bottom-[-120px] -left-16 rotate-[75deg]"
          />
          <motion.img
            initial={{ y: 100, x: 200, opacity: 0, rotate: 20 }}
            whileInView={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={banana}
            alt="banana"
            className="absolute w-[400px] top-[-30px] right-[-130px] md:right-[-160px]"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className="w-[2500px] h-[2500px]  bg-lightYellow top-[-30%] absolute left-[70%] z-0"
      ></motion.div>
    </main>
  );
}

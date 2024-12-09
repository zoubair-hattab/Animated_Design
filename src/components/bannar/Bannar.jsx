import { IoCarOutline } from 'react-icons/io5';
import bannar from '../../assets/food/banner.png';
import { motion } from 'framer-motion';
import { sildeUp } from '../hero/Hero';
export default function Bannar() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-lightYellow rounded-full w-[280px] h-[280px] md:w-[320px] md:h-[320px] relative"
        >
          <motion.img
            initial={{ opacity: 0, x: '-50%', y: '-50%' }}
            whileHover={{ scale: 1.2, rotate: 15, x: '1%', y: '-70%' }}
            whileInView={{ opacity: 1, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.3, delay: 0.4, scale: { duration: 0.5 } }}
            src={bannar}
            alt=""
            className="w-56 absolute top-[50%] left-[50%] "
          />
        </motion.div>
        <motion.div
          variants={sildeUp(0.6)}
          initial="initial"
          whileInView="animate"
          className="space-y-3 text-center md:text-left"
        >
          <motion.h3
            variants={sildeUp(0.8)}
            initial="initial"
            whileInView="animate"
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-semibold font-leagueGothic"
          >
            the best yummy food in the town
          </motion.h3>
          <motion.p
            variants={sildeUp(1)}
            initial="initial"
            whileInView="animate"
            className="text-lg sm:text-xl md:text-2xl"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
          </motion.p>
          <motion.button
            variants={sildeUp(1.2)}
            initial="initial"
            whileInView="animate"
            type="button"
            className="btn-primary inline-block !mt-10"
          >
            <IoCarOutline size={22} className=" inline mr-2" />
            Order Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

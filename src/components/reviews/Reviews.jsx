import { IoCarOutline } from 'react-icons/io5';
import bannar from '../../assets/food/banner.png';
import { motion } from 'framer-motion';
import { sildeUp } from '../hero/Hero';

export default function Reviews() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        <div className="space-y-3 text-center md:text-left">
          <motion.p
            variants={sildeUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="leading-10 text-sm md:text-xl font-serif"
          >
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus assumenda fuga incidunt nostrum quae beatae? Ex, unde
            consequatur! Repellat eligendi accusantium totam illum suscipit
            pariatur, neque libero nihil assumenda nostrum.
          </motion.p>
          <div className="flex items-center gap-3">
            <motion.img
              variants={sildeUp(0.8)}
              initial="initial"
              whileInView="animate"
              src="https://img.freepik.com/vecteurs-premium/avatar-icon0002_750950-43.jpg?semt=ais_hybrid"
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            <motion.div
              variants={sildeUp(1.2)}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="text-lg font-medium">John Doe</h2>
              <p className="text-sm">Designation</p>
            </motion.div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

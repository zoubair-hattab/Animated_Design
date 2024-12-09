import { Link } from 'react-router-dom';
import logo from '../../assets/food/logo.png';
import { motion } from 'framer-motion';
import { sildeUp } from '../hero/Hero';
export default function Footer() {
  return (
    <motion.footer
      className="bg-lightYellow rounded-t-2xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3 lg:maw-w-[300px]">
            <img src={logo} alt="" className="w-24" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              voluptatibus totam consequatur excepturi hic esse porro,
              voluptatum!
            </p>
            <Link to="#" className="inline-block mt-3 text-sm">
              example@example.com
            </Link>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer-link">
                  <Link to="/">About</Link>
                </li>{' '}
                <li className="footer-link">
                  <Link to="/">Cantact</Link>
                </li>{' '}
                <li className="footer-link">
                  <Link to="/">Food</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer-link">
                  <Link to="/">About</Link>
                </li>{' '}
                <li className="footer-link">
                  <Link to="/">Cantact</Link>
                </li>{' '}
                <li className="footer-link">
                  <Link to="/">Food</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer-link">
                  <Link to="/">About</Link>
                </li>{' '}
                <li className="footer-link">
                  <Link to="/">Cantact</Link>
                </li>{' '}
                <li className="footer-link">
                  <Link to="/">Food</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

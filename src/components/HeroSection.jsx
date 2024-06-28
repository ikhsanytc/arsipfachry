import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      <div className="bg-black mb-5">
        <div className="p-2"></div>
        <motion.img
          initial={{ opacity: 0, y: 440 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/logo.png"
          width={200}
          className="mx-auto"
          alt=""
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center font-bold text-white text-3xl"
        >
          9.8 Class
        </motion.h1>
        <div className="p-2"></div>
      </div>
    </>
  );
}

export default HeroSection;

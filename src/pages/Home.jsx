import HeroSection from "../components/HeroSection";
import feather from "feather-icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <>
      <HeroSection />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 p-4">
        {Array.from({ length: 235 }).map((_, idx) => {
          let number = ++idx;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * idx, duration: 1 }}
              key={idx}
              onClick={() => nav(`/detail/${number}`)}
              className="bg-gray-500 shadow-lg w-full rounded-lg cursor-pointer"
            >
              <div className="p-2">
                <img
                  src={`/img/${number}.webp`}
                  className="mx-auto aspect-square object-cover"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="bg-white flex justify-between p-3 items-center ">
                <p className="text-black font-semibold">Photo {number}</p>
                <a
                  href={`/img/${number}.webp`}
                  download={`/img/${number}.webp`}
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.download.toSvg(),
                  }}
                  className="cursor-pointer"
                ></a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

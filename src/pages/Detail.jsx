import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Detail() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center min-h-screen"
      >
        <div className="bg-gray-500 w-full md:w-1/2 p-3 rounded-lg">
          <img src={`/img/${id}.webp`} className="mx-auto mb-3" alt="" />
          <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold">Photo {id}</h1>
            <div className="flex gap-2">
              <a
                href={`/img/${id}.webp`}
                download={`/img/${id}.webp`}
                className="px-5 py-2 bg-black rounded-lg text-white hover:bg-gray-900 active:bg-gray-800"
              >
                Download
              </a>
              <Link
                to="/"
                className="border-2 border-black px-5 py-2 rounded-lg"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="p-5"></div>
    </div>
  );
}

export default Detail;

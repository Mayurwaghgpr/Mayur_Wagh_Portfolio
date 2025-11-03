import { BsLinkedin, BsTwitterX } from "react-icons/bs";
// import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import useIcon from "../hooks/useIcon";

function Footer() {
  const icons = useIcon();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10  p-10">
      <div className="w-full flex justify-center items-center gap-3 z-10 h-full">
        <img
          className="w-6  object-cover object-center "
          src="/emoji6.png"
          alt=""
        />

        <h1 className=" font-semibold">Mayur Wagh</h1>
      </div>
      <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
        <Link
          to="https://github.com/Mayurwaghgpr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          <span>{icons["github"]}</span>
        </Link>
        <Link
          to="https://x.com/mayurwagh152064"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <span>
            <BsTwitterX />
          </span>
        </Link>
        <Link
          to="https://www.linkedin.com/in/mayur-wagh-751b8a24b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <span>
            <BsLinkedin />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

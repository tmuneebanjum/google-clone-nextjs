import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const style = {
    link: "hover:underline cursor-pointer",
    btn: "bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md",
  };
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className={style.link}>About</p>
          <p className={style.link}>Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className={style.link}>Gamil</p>
          <p className={style.link}>Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full  hover:bg-gray-100 cursor-pointer" />
          {/* Avatar */}
          <Avatar url="https://www.muneebanjum.dev/mypic.jpg" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 py-3 px-5 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input
            ref={searchInputRef}
            type="text"
            className=" flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className={style.btn}>
            Google Search
          </button>
          <button className={style.btn}>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  );
}

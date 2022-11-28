import React, { useState } from "react";
// import { AiFillFire } from "react-icons/ai";
import Image from "next/image";
import { gift } from "../assets";
// import Trophy from "../public/trophy.png";
// import Gift from "../public/gift.png";

const PopUpModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex left-[44%] top-[35%] absolute z-[100] bg-primary">
      {/* <div className="flex md:flex-col justify-center items-center relative z-[100]"></div> */}
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image
            src={gift}
            alt="gift"
            width={100}
            height={100}
            objectFit="contain"
            unoptimized
          />
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            This website is currently under construction. Please revisit later
            for some exciting contents.
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            OK
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PopUpModal;

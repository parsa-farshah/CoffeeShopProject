import React, { startTransition } from "react";
import caffePremium from "../../../public/images/coffee/coffeePremium.png";
import { TbPremiumRights } from "react-icons/tb";
import { FaMugHot } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";

export default function Premium() {
  return (
    <div className="w-full h-auto bg-gradient-to-r pb-4 from-amber-950 to-amber-800 flex justify-center items-center place-content-center">
      <div className="w-[100%] md:w-[60%] grid grid-cols-3 place-items-center md:gap-8 mt-16 ">
        {/* left section */}
        <div className="col-span-1 ">
          <img
            className="w-[180px] md:w-[250px] duration-500"
            src={caffePremium}
            alt="cafe"
          />
        </div>
        {/* right section */}
        <div className="col-span-2 p-4">
          {/* first Premium text */}
          <div>
            <h1 className="font-extralight playwrite text-lg md:text-3xl text-white">
              Premium Blend Coffee
            </h1>
          </div>
          {/* second Premium text */}
          <div className="mt-3">
            <p className="font-bebas text-white/40 text-xs md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              consectetur quos tempora recusandae reprehenderit eligendi sunt
              officia nihil?
            </p>
          </div>
          {/* twice Premium text */}
          <div className="mt-5 grid grid-cols-3">
            {/* left twice section */}
            <div className="flex flex-col gap-2 text-white">
              {/* 1 */}
              <div>
                <div className="grid grid-cols-3 place-items-start gap-10">
                  <div className="text-3xl place-self-center md:text-5xl col-span-1">
                    <TbPremiumRights />
                  </div>
                  <p className="col-span-2 text-xs md:text-lg place-self-center">
                    Premium Coffee
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className="grid grid-cols-3 place-items-start gap-10  mt-2">
                  <div className="text-3xl place-self-center md:text-5xl">
                    <FaMugHot />
                  </div>

                  <p className="col-span-2 text-xs md:text-xl place-self-center">
                    Hot Coffee
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div>
                <div className="grid grid-cols-3 place-items-start gap-10 mt-2">
                  <div className="text-3xl place-self-center md:text-5xl">
                    <MdOutlineSevereCold />
                  </div>

                  <p className="text-xs md:text-xl col-span-2 place-self-center">
                    Cold Coffee
                  </p>
                </div>
              </div>
            </div>
            {/* twice middle line */}
            <div className="mt-20 relative text-white">
              <hr className="rotate-90" />
            </div>
            {/* twice right section */}
            <div>
              <h1 className="playwrite text-lg md:text-2xl font-extrabold text-white">
                Tea Lover
              </h1>
              <p className="text-xs md:text-sm text-white/30 font-bebas mt-2 md:mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
                consectetur fugiat ratione earum ipsum ab molestiae, repellat
                debitis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

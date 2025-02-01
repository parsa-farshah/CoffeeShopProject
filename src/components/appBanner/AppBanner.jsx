import React from "react";
import googlePlay from "../../../public/images/appBanner/googlePlay.png";
import appStore from "../../../public/images/appBanner/AppStore.png";

export default function AppBanner() {
  return (
    <div className="bg-amber-100 w-full h-auto pt-20 ">
      <div className="grid place-content-center pb-16">
        <h1 className="font-bebas text-2xl md:text-6xl text-center text-amber-950/90 place-self-center">
          Coffee Cafe availbale on <br /> AppStore for Android and IOS
        </h1>
        <div className="grid grid-cols-2 place-items-center">
          <img
            className="w-[200px] md:w-[400px] cursor-pointer duration-700 hover:scale-110"
            src={googlePlay}
            alt=""
          />

          <img
            className="w-[170px] md:w-[340px] cursor-pointer duration-700 hover:scale-110"
            src={appStore}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

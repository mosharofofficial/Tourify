import { useEffect } from "react";
import Banner from "./Banner";
import TypeWriter from "./TypeWriter";
import Offers from "./Offers";
import Draw from "./Draw";
import AllSpots from "./AllSpots";
import Countries from "./Countries";
import ThemeController from "./ThemeController";

const Home = () => {

    useEffect(()=>{
        
    },[])
    
  return (
    <div className="mt-5 ">
        <ThemeController></ThemeController>
      <div className=" relative max-h-[60vh] ">

        <Banner></Banner>
        <h2 className="bannerTitle font-bold text-4xl sm:text-5xl lg:text-6xl absolute top-[50%] lg:top-[45%] left-[calc(50%-60px)] sm:left-[calc(50%-80px)] md:left-[calc(50%-60px)] lg:left-[calc(50%-99px)] z-[5] text-yellow ">
          Tourify
        </h2>
        <div className="absolute top-[60%] left-[calc(50%-156px)] md:left-[calc(50%-234px)] lg:left-[calc(50%-376px)] z-[5] text-xl h-ful w-full md:text-3xl lg:text-5xl font-bold max-w-[325px] md:max-w-[500px] lg:max-w-[800px] ">
          <TypeWriter></TypeWriter>
        </div>
      </div>

      <AllSpots></AllSpots>

      <Countries></Countries>

      <div className="my-10">
        <Offers></Offers>
      </div>
      <div className="my-10 bg-yellow p-5 rounded-xl border-2 border-black">
        <Draw></Draw>
      </div>
    </div>
  );
};

export default Home;
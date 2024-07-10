import Link from 'next/link';
import React from 'react';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-[url(https://www.luongson40.tv/wp-content/uploads/2024/05/bglive.png)] bg-no-repeat bg-[center_top] bg-blue">
      <div className="container max-w-[1300px] mx-auto pt-4">
        <div className="flex gap-2 w-full lg:h-[450px] xl:h-[580px] lg:px-2 xl:gap-4 xl:p-0 2xl:w-full 3xl:h-[765px]">
          <div className="lg:w-[79%] w-full rounded-2xl  px-2 lg:px-0 relative">
            <video autoPlay controls className="w-full h-full">
              <source type="video/mp4" src="blob:https://www.luongson40.tv/72932893-fda2-4c71-9368-fb5a6d3f2dd8" />
            </video>
            <div className="bg-[#0000003d] rounded-[8px] border-[2px] border-[#f9e82e] font-bold !text-[#f9e82e]  absolute bottom-[-14px] md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:!bg-[#f9e82e] hover:!text-black">
              <Link href={'/'}>Vào phòng live</Link>
            </div>
          </div>
          <div className="h-full !hidden flex-col justify-start lg:!flex lg:gap-2 lg:w-1/5">
            <div className="h-auto bg-gradient-to-b from-yellow-400 to-amber-500 rounded-lg border border-yellow-300 font-medium p-1 text-sm text-white flex item-center justify-center btnMatchHot">
              <p>CÁC TRẬN HOT</p>
            </div>
            <div className="flex flex-col justify-start gap-1 lg lg:h-[386px] xl:h-[517px] 3xl:h-[765px]">
              {new Array(4).fill().map((_, index) => (
                <div key={index} className="relative h-1/4">
                  <Button className="block z-10 w-full h-full border border-yellow-300 rounded-lg bg-gradient-to-r from-[#0E1424] to-[#283968] cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between py-1 px-2 border-b border-yellow-300 w-full h-1/5">
                      <p className="truncate text-yellow-300 font-bold text-xs md:text-sm xl:text-base">
                        Liga Portugal 1
                      </p>
                      <p className="truncate text-white font-bold text-xs md:text-sm xl:text-base">
                        BLV VÕ TÒNG MS: 23
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-yellow-300 py-2 px-1 md:py-4 md:px-2 w-full h-3/5">
                      <div className="flex flex-col items-center justify-center w-1/3">
                        <div className="flex items-center w-8 h-8 md:w-14 md:h-14">
                          <Image
                            src={'https://cdn-img.553328.com/Image/team/images/165095593478.png?win007=sell'}
                            alt="logo"
                            fill
                          />
                        </div>
                        <p className="text-white text-xs text-center truncate w-full mt-1">Benfica</p>
                      </div>
                      <div className="flex flex-col items-center justify-center w-1/3">
                        <div className="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base">
                          <span className="text-white whitespace-nowrap">00:00</span>
                          <span className="text-white whitespace-nowrap">13/05</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-1/3">
                        <div className="flex items-center w-8 h-8 md:w-14 md:h-14">
                          <Image
                            src={'https://cdn-img.553328.com/Image/team/images/165095593478.png?win007=sell'}
                            alt="logo"
                            fill
                          />
                        </div>
                        <p className="text-white text-xs text-center truncate w-full mt-1">Benfica</p>
                      </div>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

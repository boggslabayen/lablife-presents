"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
import Robert from "@/public/robert.png";
import Jake from "@/public/Jake.png";
import { bungee } from "@/app/ui/fonts";

export default function Home() {
  return (
    <>
      <div className=" mx-auto max-w-screen-xl my-10 h-screen flex flex-col place-content-center">
        <div className="pb-8">
          <Image
            src={Logo}
            width={75}
            height={75}
            alt="lablife logo"
            className="mx-auto"
          />
        </div>

        <div className="justify-center flex flex-col">
          <h3 className="text-gray-50 text-xl md:text-3xl pt-4 text-center pb-4">
            Ika nga ni ate luds,
          </h3>
          <h1
            className={`${bungee.className} text-gray-50 text-3xl md:text-8xl max-w-md md:max-w-4xl font-extralight text-center mx-auto`}
          >
            We will be right back! Promise!
          </h1>
          <div>
            <p className="text-center my-8 text-xl text-gray-50">
              for the mean time, send your lab letters to
              hello@lablifecreatives.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

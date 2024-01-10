"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Logo from "../public/logo.svg";
import Robert from "../public/robert.png";
import Jake from "../public/Jake.png";
import { Button } from "@material-tailwind/react";
import { bungee } from "./ui/fonts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lab is Life | Home</title>
        <meta name="keywords" content="creatives"/>
      </Head>
      <div className=" mx-auto max-w-screen-xl my-10">
        <div className="pb-8">
          <Image
            src={Logo}
            width={75}
            height={75}
            alt="lablife logo"
            className="mx-auto"
          />
          <p className="text-center text-gray-50 text-lg font-semibold">
            Presents
          </p>
        </div>

        <div className="justify-center flex flex-col">
          <h1 className={`${bungee.className} text-gray-50 text-5xl md:text-8xl max-w-md md:max-w-4xl font-extralight text-center mx-auto`}>
            The safe place for Ideas
          </h1>
          <h3 className="text-gray-50 text-xl md:text-3xl pt-4 text-center">
            Promoting the Creative Vibe in the Office
          </h3>
        </div>

        <div className="mt-16">
          <div className="text-gray-50 text-3xl text-center">
            <h3 className="font-regular md:font-bold">Speakers:</h3>
          </div>

          <div className="md:flex justify-around my-8 px-8">
            <div className="flex py-4 items-center">
              <div>
                <Image
                  src={Jake}
                  width={90}
                  height={90}
                  alt="Jake Image"
                  className="grayscale"
                />
              </div>

              <div className="px-8">
                <h3 className="text-2xl font-bold text-gray-50">
                  Jake Yrastorza
                </h3>
                <p className="text-gray-500">Managing Director</p>
                <p className="text-gray-500 font-semibold">Gigil</p>
              </div>
            </div>

            <div className="flex py-4 items-center ">
              <div>
                <Image
                  src={Robert}
                  width={90}
                  height={90}
                  alt="Robert Image"
                  className="grayscale"
                />
              </div>

              <div className="px-8">
                <h3 className="text-2xl font-bold text-gray-50">
                  Robert Labayen
                </h3>
                <p className="text-gray-500">
                  Head Creative Communication Management
                </p>
                <p className="text-gray-500 font-semibold">ABS-CBN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around p-8 items-center border-solid rounded border-2 max-w-lg md:max-w-2xl mx-auto">
          <div>
            <p className="text-gray-50 text-lg md:text-xl font-bold ">
              February 10, 2024 | 3:00 PM
            </p>
            <p className="text-gray-50 text-lg md:text-xl font-bold ">
              via Zoom
            </p>
            <p className="text-gray-50 text-lg md:text-xl font-bold ">
              Ticket Price: Php 500
            </p>
          </div>
          <div>
            <Link href="https://forms.gle/ua7Rp4n1dnWgJhNH9">
              <button className="bg-gray-50 px-8 py-4 rounded-full hover:bg-gray-800 hover:border-1 border-slate-50">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

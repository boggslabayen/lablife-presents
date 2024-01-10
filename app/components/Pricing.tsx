import React from "react";
import { Button } from '../components/mtwexport';
import Link from "next/link";



function Pricing(){
  return (
    <>
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

              <Button 
              variant="filled"
              size="lg" children='Register' placeholder={undefined}
              className="bg-gray-50 text-lablife-purple rounded-full hover:bg-purple-500 hover:text-gray-50">
              </Button>
            </Link>
          </div>
        </div>
        </>
  )
};



export default Pricing;
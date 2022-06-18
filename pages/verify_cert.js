import { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Link from 'next/link';
import React from "react";
import Canvas from "../components/cert_canvas"
const Cert = () => {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  return (
    <>
      <Head>
        <title>
        Verify Certifications | GirlScript Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="GirlScript Summer of Code Certificates" />
      </Head>
      <div className="items-center justify-center">
        <p className="font-sans text-center text-2xl font-extrabold text-black-100">
          <p className="text-black text-5xl text center font-extrabold mb-10 dark:text-white">
            Verify Certificates
          </p>
        </p>
      </div>
      <Spacer mt={20} />
      <div className="flex flex-col bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 mx-96 mb-10 relative inline-block w-2/3 md:w-auto">
        <label className="text-black dark:text-primary_orange-0 font-semibold my-3 text-md">Enter Certificate ID hash</label>
        <input type="text" className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-md"></input>
        
        <Canvas draw={draw} />
      </div>
    </>
  );
};

export default Cert;

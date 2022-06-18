import { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Link from 'next/link';
import React from "react";
const Cert = () => {
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
      <div className="items-center justify-center flex flex-col">
        
      </div>
    </>
  );
};

export default Cert;

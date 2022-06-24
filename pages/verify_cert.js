import { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import FileSaver from "file-saver";
const Cert = () => {
  let [filter, setFilter] = useState("");
  const downloadImage = () => {
    var image_url = "https://res.cloudinary.com/dqjtoo2h2/image/upload/l_text:helvetica_72_bold_normal_left:"+filter+"/fl_layer_apply,g_center,x_0.2,y_-0.1/CA_Speaker_certificate_oqydmx.jpg"
    FileSaver.saveAs(image_url, "Cert_GSSoC.png"); // Put your image url here.
  };
  return (
    <>
      <Head>
        <title>
          Verify Certifications | GirlScript Summer of Code 2022 | GirlScript
          Foundation India
        </title>
        <meta
          name="description"
          content="GirlScript Summer of Code Certificates"
        />
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
        <label className="text-black dark:text-primary_orange-0 font-semibold my-3 text-md">
          Enter Certificate ID hash
        </label>
        <input
          type="text"
          className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-md"
        ></input>
        <label className="text-black dark:text-primary_orange-0 font-semibold my-3 text-md">
          Enter Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-md"
          id="contrib_name"
        ></input>
        <img
          src="https://res.cloudinary.com/dqjtoo2h2/image/upload/l_text:helvetica_72_bold_normal_left:Contributor/fl_layer_apply,g_center,x_0.2,y_-0.1/CA_Speaker_certificate_oqydmx.jpg"
          className="w-full h-auto mt-4"
          id="canvas"
        />
        <button
          type="button"
          className="bg-primary_orange-0 dark:bg-white font-semibold mt-2 text-xs sm:text-sm md:text-md"
          onClick={downloadImage}
        >
          Verify
        </button>
      </div>
    </>
  );
};

export default Cert;

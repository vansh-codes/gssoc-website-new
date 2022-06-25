import { useState, useEffect, useCallback, useRef } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
// import FileSaver from "file-saver";
// import CertImg from "../components/cert.svg";
import Image from 'next/image';
import { exportComponentAsPNG } from "react-component-export-image";
const Cert = () => {
  const certificateWrapper = React.createRef();
  const [Name, setName] = useState("");
  const downloadImage = 
  (e) => {
    e.preventDefault();
    exportComponentAsPNG(certificateWrapper, 
      {fileName: Name + "_Cert_GSSoC2022.png"},{
        html2CanvasOptions: { backgroundColor: null },
    });
  }

  // () => {
  //   var image_url = "https://res.cloudinary.com/dqjtoo2h2/image/upload/co_rgb:FD7617,l_text:Playfair%20Display_80_bold_normal_left:"+Name+"/fl_layer_apply,g_center,x_0.2,y_-0.12/GSSoC2022_Cert_nf09fu.png"
  //   FileSaver.saveAs(image_url, "Cert_GSSoC.png");
  // }

  /* Note to future devs 
  Directly downloading doesn't seem to work because the CSS breaks when downloading th Blog.
  Hence the source of download is entirely different
  */
  // useCallback(() => {
  //   if (ref.current === null) {
  //     return
  //   }

  //   toPng(ref.current, { cacheBust: true, })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a')
  //       link.download = Name+"Cert GSSOC2022.png"
  //       link.href = dataUrl
  //       link.click()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [ref]);
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
        <div className="font-sans text-center text-2xl font-extrabold text-black-100">
          <div className="text-black text-5xl text center font-extrabold mb-10 dark:text-white">
            Verify Certificates
          </div>
        </div>
      </div>
      <Spacer mt={20} />
      <div className="flex flex-col bg-white shadow-2xl dark:bg-black rounded-md mx-2 sm:mx-10 md:mx-10 lg:mx-20 px-10 py-2">
        <label className="text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg">
          Enter GitHub Username
        </label>
        <input
          type="text"
          className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg"
        ></input>
        <label className="text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg">
          Enter Name
        </label>
        <input
          type="text"
          className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg">
          Select Role in GSSoC 2022
        </label>
        <select className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg">
          <option value="">Contributor</option>
          <option value="">Mentor</option>
          <option value="">Project Admin</option>
        </select>
        <Spacer mt={20} />
        {/* <img
          src="https://res.cloudinary.com/dqjtoo2h2/image/upload/l_text:helvetica_72_bold_normal_left:Contributor/fl_layer_apply,g_center,x_0.2,y_-0.1/CA_Speaker_certificate_oqydmx.jpg"
          className="w-full h-auto mt-4"
          id="canvas"
        /> */}
        <div className="flex justify-center" id="cert">
          {/* <Image src="/cert.png" height="700" width="1000" alt="Certificate"/> */}
          <div className="banner" ref={certificateWrapper}>
          <div id="contrib_name" className="contrib_name text-big-orange">{Name}</div>
          </div>
        </div>
        <h6 id="no-mobile-alert" className="text-black dark:text-white">* Please download the certificate on the desktop website</h6>
        <Spacer mt={20} />
        <button
          type="button"
          className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white dark:text-black font-medium rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
          onClick={downloadImage}
        >
          Verify
        </button>
      </div>
    </>
  );
};

export default Cert;

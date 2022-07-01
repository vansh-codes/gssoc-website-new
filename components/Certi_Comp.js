import React from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { Spacer } from "@chakra-ui/react";
const Certi_Comp = (props) => {
  const certificateWrapper = React.createRef();
  console.log(props.Role);
  const DownloadImage = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      exportComponentAsPNG(
        certificateWrapper,
        { fileName: props.Name + "_Cert_" + props.Role + "_GSSoC2022.png" },
        {
          html2CanvasOptions: { backgroundColor: null },
        }
      );
    }
  };

  return (
    <>
      <div className="flex justify-center" id="cert">
        {/* <Image src="/cert.png" height="700" width="1000" alt="Certificate"/> */}
        {props.Role === "Contributor" ? (
          <div className="banner cert-contrib" ref={certificateWrapper}>
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Top Contributor" ? (
          <div className="banner cert-topcontrib" ref={certificateWrapper}>
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Mentor" ? (
          <div className="banner cert-mentor" ref={certificateWrapper}>
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Project Admin" ? (
          <div className="banner cert-pa" ref={certificateWrapper}>
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Campus Ambassador" ? (
            <div className="banner cert-ca" ref={certificateWrapper}>
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Speaker" ? (
          <div className="banner cert-speaker" ref={certificateWrapper}>
          <div id="contrib_name" className="contrib_name text-big-orange">
            {props.Name}
          </div>
        </div>
      ) : <></>
          }
      </div>
      <h6 id="no-mobile-alert" className="text-black dark:text-white">
        * Please download the certificate on the desktop website
      </h6>
      <Spacer mt={20} />
      <button
        type="button"
        className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white dark:text-black font-medium rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
        onClick={DownloadImage}
      >
        Verify
      </button>
    </>
  );
};

export default Certi_Comp;

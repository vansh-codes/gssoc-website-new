import { useState, useEffect, useCallback, useRef } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
// import FileSaver from "file-saver";
// import CertImg from "../components/cert.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
// const exportComponentAsPNG = dynamic(import('react-component-export-image'), { ssr: false });
import html2canvas from "html2canvas";
import { ethers } from "ethers";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import ABI from "./JSON/ABI.json";
import contributors from "./JSON/Contributors.json";

const Certi_Comp = dynamic(() => import("../components/Certi_Comp"), {
  ssr: false,
});
const contractAddress = "0xB594ab41070EFbA162354e20305Cf63E7CA48d75";

const Cert = () => {
  const [Name, setName] = useState("");
  const [Role, setRole] = useState("Contributor");

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

  const provider = new ethers.providers.JsonRpcProvider("JSON_RPC_PROVIDER");
  const privateKey =
    "0x2183467634e8e797c30f4a502ec8eab1a6e648ab8256668300092c4768bffc1d";
  // add funds for ME please.

  const wallet = new ethers.Wallet(privateKey, provider);
  // console.log(wallet.address);
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  // console.log(contract);
  const contractWithWallet = contract.connect(wallet);

  let participantDataArray = [];
  for (let key in contributors) {
    participantDataArray.push(
      keccak256(JSON.stringify(contributors[key])).toString("hex")
    );
  }
  const leaves = participantDataArray.map((participant) =>
    keccak256(participant)
  );
  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  const treeData = JSON.stringify(tree);

  // console.log("tree: ", tree);
  const merkleRoot = tree.getHexRoot();
  const checkerGitHub = "DragasdasonUncaged";
  const checkerEmail = "emailforreal.ankit@gmail.com";

  const singleParticipant = keccak256(
    JSON.stringify({
      github: checkerGitHub,
      email: checkerEmail,
    })
  ).toString("hex");
  // console.log("singleParticipant", singleParticipant);

  const merkleProof = tree.getHexProof(keccak256(singleParticipant));
  // console.log("merkleProof", merkleProof);

  async function something() {
    console.log(merkleProof);
    const tx = await contractWithWallet
      .verify(merkleProof, singleParticipant)
      .then((res) => {
        console.log(res);
        if (res == true) alert("You are awesome");
        else console.log("You are not awesome");
      });
  }
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
        <button onClick={something}> Hello Blockchain</button>
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
        <select
          className="text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg"
          defaultValue="Contributor"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Contributor">Contributor</option>
          <option value="Top Contributor">Top 100 Contributor</option>
          <option value="Mentor">Mentor</option>
          <option value="Project Admin">Project Admin</option>
        </select>
        <Spacer mt={20} />
        {/* <img
          src="https://res.cloudinary.com/dqjtoo2h2/image/upload/l_text:helvetica_72_bold_normal_left:Contributor/fl_layer_apply,g_center,x_0.2,y_-0.1/CA_Speaker_certificate_oqydmx.jpg"
          className="w-full h-auto mt-4"
          id="canvas"
        /> */}
        <Certi_Comp Name={Name} Role={Role}/>
      </div>
    </>
  );
};

export default Cert;

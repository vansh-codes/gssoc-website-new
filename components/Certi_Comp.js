import React, { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { Spacer } from "@chakra-ui/react";
import { ethers } from "ethers";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import ABI from "../pages/JSON/ABI.json";
import CampusAmbassadors from "../pages/JSON/CampusAmbassadors.json";
import Contributors from "../pages/JSON/Contributors.json";
import Mentors from "../pages/JSON/Mentors.json";
import OpenSourceAdvocates from "../pages/JSON/OpenSourceAdvocates.json";
import OrganizingTeam from "../pages/JSON/OrganizingTeam.json";
import ProjectAdmins from "../pages/JSON/ProjectAdmins.json";
// import Top100 from "../pages/JSON/Top100.json";
import Top100 from "../pages/JSON/2023 Contributors/Top100.json"
import Confetti from "react-confetti";
const contractAddress = "0x0E2195E4292458eaA9Ee30242Fce440b5a722944";

const Certi_Comp = (props) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const certificateWrapper = React.createRef();
  const DownloadImage = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && props.verified === true) {
      exportComponentAsPNG(
        certificateWrapper,
        { fileName: props.Name + "_Cert_" + props.Role + "_GSSoC2023.png" },
        {
          html2CanvasOptions: { backgroundColor: null },
        }
      );
    }
  };

  // const provider = new ethers.providers.JsonRpcProvider("JSON_RPC_PROVIDER");
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.JSON_RPC_PROVIDER
  );
  const privateKey =
    "0x2183467634e8e797c30f4a502ec8eab1a6e648ab8256668300092c4768bffc1d";
  // add funds for ME please.xD

  const wallet = new ethers.Wallet(privateKey, provider);
  // console.log(wallet.address);
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  // console.log(contract);
  const contractWithWallet = contract.connect(wallet);

  function treeMaker(file) {
    let data = file;
    let participantDataArray = [];
    for (let key in data) {
      participantDataArray.push(
        keccak256(JSON.stringify(data[key])).toString("hex")
      );
    }
    const leaves = participantDataArray.map((participant) =>
      keccak256(participant)
    );
    const tree = new MerkleTree(leaves, keccak256, { sort: true });
    return tree;
  }

  const projectAdminsTree = treeMaker(ProjectAdmins);
  const mentorsTree = treeMaker(Mentors);
  const contributorsTree = treeMaker(Contributors);
  const top100Tree = treeMaker(Top100);
  const campusAmbassadorsTree = treeMaker(CampusAmbassadors);
  const openSourceAdvocatesTree = treeMaker(OpenSourceAdvocates);
  const organizingTeamTree = treeMaker(OrganizingTeam);

  const setVerifiedTrue = () => {
    props.setVerified();
  };
  async function Checker(tree, email) {
    let singleParticipant = keccak256(
      JSON.stringify({
        email: email,
      })
    ).toString("hex");
    const merkleProof = tree.getHexProof(keccak256(singleParticipant));

    console.log("singleParticipant", singleParticipant);

    const toTheMoon =
      props.Role === "Contributor"
        ? await contractWithWallet.verifyContributors(
          merkleProof,
          singleParticipant
        )
        : props.Role === "Top Contributor"
          ? await contractWithWallet.verifyTop100(merkleProof, singleParticipant)
          : props.Role === "Mentor"
            ? await contractWithWallet.verifyMentors(merkleProof, singleParticipant)
            : props.Role === "Project Admin"
              ? await contractWithWallet.verifyPAs(merkleProof, singleParticipant)
              : props.Role === "Campus Ambassador"
                ? await contractWithWallet.verifyCAs(merkleProof, singleParticipant)
                : props.Role === "Speaker"
                  ? await contractWithWallet.verifyOpenSourceAdvocates(
                    merkleProof,
                    singleParticipant
                  )
                  : props.Role === "Organizing Team"
                    ? await contractWithWallet.verifyOrgTeam(merkleProof, singleParticipant)
                    : false;

    if (toTheMoon) {
      setVerifiedTrue();
      console.log("GG OP EZ");
      const ver_success =
        "Verification successful.\n Achievement Unlocked 🎊!!! \n Proceed to download your hard-earned certificate from below. \n\nHope you had a great time learning & contributing with us. All the best for your future endeavors.";
      alert(ver_success);

      setShowConfetti(true);
      setTimeout(function () {
        setShowConfetti(false);
      }, 8000);
    } else {
      console.log("Never gonna give you up...");
      const ver_failed =
        "Verification failed.💀\nPlease recheck if you have entered the correct email (used to register in GSSoC'23) & selected the appropriate role from the dropdown. \n\nIf you still feel something is wrong, feel free to make a ticket on the official server regarding the same.";
      alert(ver_failed);
    }
  }

  const Switcher = () => {
    var actor =
      props.Role === "Contributor"
        ? contributorsTree
        : props.Role === "Top Contributor"
          ? top100Tree
          : props.Role === "Mentor"
            ? mentorsTree
            : props.Role === "Project Admin"
              ? projectAdminsTree
              : props.Role === "Campus Ambassador"
                ? campusAmbassadorsTree
                : props.Role === "Speaker"
                  ? openSourceAdvocatesTree
                  : props.Role === "Organizing Team"
                    ? organizingTeamTree
                    : "Diablo";
    Checker(actor, props.Email);
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
        ) : props.Role === "Organizing Team" ? (
          <div className="banner cert-orgteam" ref={certificateWrapper}>
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <h6 id="no-mobile-alert" className="text-black dark:text-white">
        * Please download the certificate on the desktop website
      </h6>
      <Spacer mt={20} />
      <button
        type="button"
        className={
          !props.verified
            ? "bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md  dark:text-black font-medium rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
            : "dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
        }
        onClick={Switcher}
        disabled={props.verified}
      >
        Verify
      </button>
      <Spacer mt={5} />
      <button
        type="button"
        className={
          props.verified
            ? "bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md dark:text-black  rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
            : "dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
        }
        onClick={DownloadImage}
        disabled={!props.verified}
      >
        Download Certificate
      </button>
      {showConfetti && <Confetti className="fullscreen" />}
    </>
  );
};

export default Certi_Comp;

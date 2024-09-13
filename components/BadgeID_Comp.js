import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Spacer } from "@chakra-ui/react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

const BadgeID_Comp = (props) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const badgeWrapper = React.createRef();
    const [CampusAmbassadors, setCampusAmbassadors] = useState([]);
    const [Contributors, setContributors] = useState([]);
    const [Mentors, setMentors] = useState([]);
    const [ProjectAdmins, setProjectAdmins] = useState([]);
    useEffect(() => {
        const getBadgeData = async () => {
            try {
                const resCA = await fetch(
                    `/badgesData/2024Extd/CampusAmbassadors.json`
                );
                const dataCA = await resCA.json();
                const resC = await fetch(
                    `/badgesData/2024Extd/Contributors.json`
                );
                const dataC = await resC.json();
                const resM = await fetch(`/badgesData/2024Extd/Mentors.json`);
                const dataM = await resM.json();
                const resPA = await fetch(
                    `/badgesData/2024Extd/ProjectAdmins.json`
                );
                const dataPA = await resPA.json();
                setCampusAmbassadors(dataCA);
                setContributors(dataC);
                setMentors(dataM);
                setProjectAdmins(dataPA);
                // console.log(dataM)
            } catch (error) {
                console.log(error);
            }
        };
        getBadgeData();
    }, []);

    const DownloadImage = (e) => {
        e.preventDefault();
        if (typeof window !== "undefined" && props.verified === true) {
            html2canvas(badgeWrapper.current)
                .then((canva) => {
                    const base64 = canva.toDataURL("image/png");
                    var anchor = document.createElement("a");
                    anchor.setAttribute("href", base64);
                    anchor.setAttribute(
                        "download",
                        props.Name +
                            "_Badge_" +
                            props.Role +
                            `_GSSoC2024-Extd.png`
                    );
                    anchor.click();
                    anchor.remove();
                })
                .catch((err) => console.log(err));
        }
    };

    const setVerifiedTrue = () => {
        props.setVerified();
    };

    const checkIfVerified = (email) => {
        const lowerCaseEmail = email.toLowerCase(); // Convert email to lowercase

        // check if lowerCaseEmail is in the verified json
        // if yes, setVerifiedTrue()

        if (props.Role === "Contributor") {
            for (let i = 0; i < Contributors.length; i++) {
                if (Contributors[i].email.toLowerCase() === lowerCaseEmail) {
                    setVerifiedTrue();
                    return true;
                }
            }
        }

        if (props.Role === "Mentor") {
            for (let i = 0; i < Mentors.length; i++) {
                console.log(Mentors[i]?.email);
                if (Mentors[i]?.email?.toLowerCase() === lowerCaseEmail) {
                    setVerifiedTrue();
                    return true;
                }
            }
        }

        if (props.Role === "Project Admin") {
            for (let i = 0; i < ProjectAdmins.length; i++) {
                if (ProjectAdmins[i].email.toLowerCase() === lowerCaseEmail) {
                    setVerifiedTrue();
                    return true;
                }
            }
        }

        if (props.Role === "Campus Ambassador") {
            for (let i = 0; i < CampusAmbassadors.length; i++) {
                if (
                    CampusAmbassadors[i].email.toLowerCase() === lowerCaseEmail
                ) {
                    setVerifiedTrue();
                    return true;
                }
            }
        }

        return false;
    };

    async function Checker(email) {
        const verified = checkIfVerified(email);

        if (verified) {
            setVerifiedTrue();
            console.log("Verification successful.");
            const ver_success =
                "Verification successful.\n Badge Unlocked 🎊!!! \n Proceed to download your badge from below. \n\nHope you have a great time learning & contributing with us. All the best for your future endeavors.";
            alert(ver_success);

            setShowConfetti(true);
            setTimeout(function () {
                setShowConfetti(false);
            }, 8000);
        } else {
            console.log("Never gonna give you up...");
            const ver_failed = `Verification failed.💀\nPlease recheck if you have entered the correct email (used to register in GSSoC'2024 Extended & selected the appropriate allocated role from the dropdown. \n\nIf you still feel something is wrong, feel free to make a ticket on the official server regarding the same.`;
            alert(ver_failed);
        }
    }

    const Switcher = () => {
        Checker(props.Email);
    };

    return (
        <>
            <div
                className="flex justify-center relative overflow-hidden"
                id="cert"
            >
                {/* <Image src="/cert.png" height="700" width="1000" alt="Certificate"/> */}
                {props.Role === "Contributor" ? (
                    <div
                        style={{
                            backgroundImage: `url(/badges/2024Extd/Contributor.png)`,
                        }}
                        className={`banner cert-contrib bg-no-repeat`}
                        ref={badgeWrapper}
                    >
                      <div className="image-wrapper">
                        {props.verified ? (
                          <Image
                          src={
                            props.verified
                            ? props.image
                            : ""
                          }
                          alt={`${props.Role} Badge`}
                          height={175}
                          width={175}
                          className="badge-img"
                          draggable="false"
                          />
                        ) : <></>}
                        </div>
                        <div
                            id="contrib_name"
                            className="badge_name text-2xl text-white leading-5"
                        >
                            {props.verified ? props.Name : "Your Name"}
                        </div>
                        <h5 className="badge-github text-sm font-bold text-white">
                            <span className="font-normal">
                                {props.verified
                                    ? props.Github
                                    : "Github username"}
                            </span>
                        </h5>
                    </div>
                ) : props.Role === "Mentor" ? (
                    <div
                        style={{
                            backgroundImage: `url(/badges/2024Extd/Mentor.png)`,
                        }}
                        className={`banner cert-mentor bg-no-repeat`}
                        ref={badgeWrapper}
                    >
                        <div
                            id="contrib_name"
                            className="badge_name text-big-orange"
                        >
                            {props.verified
                                ? props.Name
                                : "X".repeat(props.Name.length)}
                        </div>
                        <h5 className="issue_2024 text-sm  font-bold">
                            ISSUED:{" "}
                            <span className="font-normal">{"August 2024"}</span>
                        </h5>
                    </div>
                ) : props.Role === "Project Admin" ? (
                    <div
                        style={{
                            backgroundImage: `url(/badges/2024Extd/ProjectAdmin.png)`,
                        }}
                        className={`banner cert-pa bg-no-repeat`}
                        ref={badgeWrapper}
                    >
                        <div
                            id="contrib_name"
                            className="badge_name text-big-orange"
                        >
                            {props.verified
                                ? props.Name
                                : "X".repeat(props.Name.length)}
                        </div>
                        <h5 className="issue_2024 text-sm  font-bold">
                            ISSUED:{" "}
                            <span className="font-normal">{"August 2024"}</span>
                        </h5>
                    </div>
                ) : props.Role === "Campus Ambassador" ? (
                    <div
                        style={{
                            backgroundImage: `url(/badges/2024Extd/CampusAmbassador.png)`,
                        }}
                        className={`banner cert-ca bg-no-repeat`}
                        ref={badgeWrapper}
                    >
                        <div
                            id="contrib_name"
                            className="badge_name text-big-orange"
                        >
                            {props.verified
                                ? props.Name
                                : "X".repeat(props.Name.length)}
                        </div>
                        <h5 className="cert_id_2024 text-sm  font-bold">
                            {/* ////Certificate ID: <span className="font-normal">{certificateId}</span> */}
                        </h5>
                        <h5 className="issue_2024 text-sm  font-bold">
                            ISSUED:{" "}
                            <span className="font-normal">{"August 2024"}</span>
                        </h5>
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
                        ? "bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md  dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
                        : "dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md w-full mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
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
                        : "dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md w-full mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3"
                }
                onClick={DownloadImage}
                disabled={!props.verified}
            >
                Download Badge
            </button>
            {showConfetti && <Confetti className="fullscreen" />}
        </>
    );
};

export default BadgeID_Comp;

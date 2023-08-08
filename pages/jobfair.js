import Head from "next/head";
import React, { useState } from "react";
import DiabloAccordion from "../components/diabloAccordion";
import { accordionData } from "./api/FAQdata";
import Bighex from "../components/BgAssets/Bighex";
import Hex1 from "../components/BgAssets/Hex1";
import Hex2 from "../components/BgAssets/Hex2";
import EllipseBox2 from "../components/BgAssets/EllipseBox2";
import EllipseBox from "../components/BgAssets/EllipseBox";
import SmallHex from "../components/BgAssets/SmallHex";
import SocialFollow from "../components/homepage/SocialFollow";

function Faq() {
    const [data] = useState(accordionData);
    return (
        <>
            <Head>
                <title>
                    FAQs | GirlScript Summer of Code 2023 | GirlScript Foundation India
                </title>
                <meta name="description" content="FAQs of GirlScript Summer of Code" />
            </Head>

            <div className="hidden -z-10 lg:block 3xl:hidden pt-12">
                <div className="absolute bottom-[60rem] right-0">
                    <img
                        src="https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg"
                        alt="bg"
                    />
                </div>
                {/* <div className="absolute w-full left-0 -top-10 right-0">
                    <Bighex />
                </div>
                <div className="absolute top-0 left-0">
                    <Hex1 />
                </div>
                <div className="absolute top-0 left-0">
                    <Hex2 />
                </div> */}
                <div className="absolute blur-sm top-0 left-48">
                    <EllipseBox2 />
                </div>
                <div className="absolute top-10 -left-20">
                    <EllipseBox />
                </div>
                <div className="blur-md absolute top-0">
                    <SmallHex />
                </div>
            </div>
            <SocialFollow />


            <section className="flex flex-col mb-24 items-center">
                <div className="w-3/4 flex justify-between items-center rounded-2xl flex-wrap mb-24 bg-[#FFECDE] dark:bg-[#1A1A1B]">
                    <div className="dark:bg-black rounded-2xl basis-full p-6 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
                        <div className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
                            About <span className="text-primary_orange-0">GirlScript Summer of Code 2023 </span>
                            Job Fair
                        </div>
                        <p className="dark:text-white font-serif text-1xl p-2 text-black-100">
                            At GSSoC 2023 Job Fair, we believe in inclusivity and diversity. That&apos;s why the event is open to all students from different academic backgrounds.
                            Whether you&apos;re a tech nerd, a creative genius, a marketing maven, or a business aficionado, there are opportunities waiting for you.
                            Don&apos;t miss this extraordinary opportunity to kickstart your career in the technology world.

                        </p>
                        <p className="dark:text-white font-serif font-bold text-1xl p-2 text-black-100">
                            Register for the GSSoC 2023 Job Fair and open doors to limitless possibilities.
                        </p>

                        <button className="mt-10">
                            <a
                                href="https://forms.gle/8K4K3zqUK1KJbqQPA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary_orange-0 text-white font-bold py-2 px-4 rounded-full mt-10"
                            >
                                Register Now
                            </a>
                        </button>
                    </div>

                    <div
                        className="border-8 rounded drop-shadow-xl border-black dark:border-white"
                        data-aos="flip-left"
                        data-aos-duration="700"
                    >
                        <img
                            src="https://s3-alpha-sig.figma.com/img/897e/ab3a/986a2f2028b034178d5d5dd3a22fbdb1?Expires=1692576000&Signature=jMV31O19bqD1~SzNKggc9lhAaUTQJyJNZYYmFq5l-HDsW573O4yJwElm3O-nuFDcoS-c638k-aNWDtCSP98BS8xnQZVZh7YcT7BhKBy3-Wzv1wxqUUpr~IRAmKPk3-fBeiuIKnzIU7Be6ip8HOr9AX17THWLq0f3XXEu2RuV6paZlnoslLYrPefK8CR47su8qbs53U8HjlpNVGtXFcb0M~5~pyVoKJo6D66mPloEGHl3O2VJpcfhW~HH5w~4pKgJ3eA7V1VVgoBL46Ooc9JvaM1gypwj8BNu7sczPVEI~3MqKckO0mgcCopznzrbC39uTBY2YnS0FeYTSvoj47bhuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            height="653"
                            width="420"
                            className="w-[33vw]"
                            alt="GirlScript Group Photo"
                        />
                    </div>
                </div>
            </section>

            {/* <section className="flex flex-col items-center mt-24">
                <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500  underline-offset-8">
                    <h1 className="text-primary_orange-0">
                        Welcome to GSSoC&apos;23 Job Fair
                    </h1>
                </p>
            </section> */}
        </>
    );
}

export default Faq;

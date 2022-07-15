import React, { useState } from "react";
import { accordionData } from "./api/FAQdata";
import DiabloAccordion from "../components/diabloAccordion";
import Head from "next/head";

function Faq() {
  const [data] = useState(accordionData);
  return (
    <>
      <Head>
        <title>
          FAQs | GirlScript Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="FAQs of GirlScript Summer of Code" />
        {/* <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        /> */}
      </Head>
      <section className="flex flex-col items-center">
        <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500  underline-offset-8">
          <h1 className="text-primary_orange-0">
            Frequently Asked Questions&nbsp;
          </h1>
          <h1>(FAQs) </h1>
        </p>
        <br />
        <div className="flex justify-around md:gap-1 w-11/12">
          <div className="w-6/12">
            {data.slice(0, Math.ceil(data.length / 2)).map((curElem) => {
              const { id } = curElem;
              return <DiabloAccordion key={id} {...curElem} />;
            })}
          </div>
          <div className="w-6/12">
            {data
              .slice(Math.ceil(data.length / 2), data.length)
              .map((curElem) => {
                const { id } = curElem;
                return <DiabloAccordion key={id} {...curElem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

import React, { useState } from 'react';
import {accordionData} from './api/FAQdata';
import DiabloAccordion from '../components/diabloAccordion';

function Faq() {
  const [data] = useState(accordionData);
  return (
    <>
    <section className="flex flex-col items-center">
    <h1 className="font-sans text-center flex flex-col text-orange-500 text-5xl font-bold m-3 underline underline-offset-4 decoration-primary_orange-0">Frequently Asked Questions (FAQS)</h1>
    < br/ >
    <div className="flex justify-around md:gap-1 w-11/12">
      <div className="w-6/12">
    {
       data.slice(0, Math.ceil(data.length/2)).map((curElem) => {
         const { id } = curElem;
         return <DiabloAccordion key={ id} { ...curElem }/>
       })
     }
     </div>
     <div className="w-6/12">
     {
       data.slice(Math.ceil(data.length/2), data.length).map((curElem) => {
         const { id } = curElem;
         return <DiabloAccordion key={ id} { ...curElem }/>
       })
     }
      </div>
     </div>
     </section>
    </>
  );
}

export default Faq;

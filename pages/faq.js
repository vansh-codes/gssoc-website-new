import React, { useState } from 'react';
import {accordionData} from './api/data'
// import MyAccordion from './MyAccordion';
import DiabloAccordion from '../components/diabloAccordion';

const Faq = () => {
  const [data, setData] = useState(accordionData);
  return (
    <>
    <section className="flex flex-col">
    <h1 className="flex flex-col text-orange-500 text-5xl font-bold m-3">Frequently Asked Questions (FAQS)</h1>
    {
       data.map((curElem) => {
         const { id } = curElem;
         return <DiabloAccordion key={ id} { ...curElem }/>
       })
     }
     </section>
    </>
  );
};

export default Faq;

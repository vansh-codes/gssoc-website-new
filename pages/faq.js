import React from "react";
import Datas from "../pages/api/data";

function Faq() {
  return (
    <>
    <section className="flex flex-col items-center">
    <h1 className="flex flex-col text-orange-500 text-5xl font-bold m-3">Frequently Asked Questions (FAQS)</h1>
    < br/ >
    <div className="flex flex-wrap w-85 justify-around gap-0">
    {
       data.map((curElem) => {
         const { id } = curElem;
         return <DiabloAccordion key={ id} { ...curElem }/>
       })
     }
     </div>
     </section>

//       <div className="w-10/12 mx-auto text-oscuro">
//         <div className="flex flex-col justify-center w-full">
//           <div>
//             <section className="text-gray-700">
//               <div className="container px-5 py-5 mx-auto mb-10">
//                 <div className="text-center mb-10">
//                   <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-orange-500 mb-4">
//                     Frequently Asked Question
//                   </h1>
//                   <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//                     The most common questions that are asked in GirlScipt Summer
//                     of Code.
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//                   <div className="w-full lg:w-1/2 px-4 py-2 select-none">
//                     <details className="mb-4">
//                       <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         Will a beginner, with absolutely no knowledge of github,
//                         gain anything fruitful?
//                       </summary>
//                       <span className="dark:text-white">
//                         Yeah, definitely. The organization is meant to assist
//                         the beginners grow in the field of development. We’ll
//                         have distinct projects appropriate both for beginners as
//                         well as the accolades and thereby we’ll make sure that
//                         each and every participant gets to learn something new
//                         from the projects he or she is contributing for.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         Is there any registration fee?
//                       </summary>

//                       <span className="dark:text-white" >
//                         No, there is no registration fees for participation. It
//                         is absolutely free of cost.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         Any age limit for participation?
//                       </summary>

//                       <span className="dark:text-white">
//                         No, there is no age limit for participation in GSSoC. It
//                         is open for all.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         How will we receive the prizes (if won) and certificate?
//                       </summary>

//                       <span className="dark:text-white">
//                         We’ll be providing all the participants with the digital
//                         certificate. The prize money to all the concerned
//                         students will be sent to their bank accounts.We’ll ask
//                         for the bank account details via an email after the
//                         conclusion of the event.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         By what time will the result come?
//                       </summary>

//                       <span className="dark:text-white">
//                         The results will be declared in the first week of June
//                       </span>
//                     </details>
//                   </div>
//                   <div className="w-full lg:w-1/2 px-4 py-2 select-none">
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         From where do we need to start being a beginner as of
//                         now so as contribute properly in the projects?
//                       </summary>

//                       <span className="dark:text-white">
//                         We’ll be providing you with the links on our official
//                         website to start with Github and various other
//                         development to make sure that everyone is able to aptly
//                         contribute for the projects.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         What minimum conditions should the project satisfy?
//                       </summary>

//                       <span className="dark:text-white">
//                         There are no such conditions that the projects need to
//                         satisfy. The mentors can propose the idea in any field
//                         that they specifically expertise in.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         Is it strictly for girls or can boys also participate?
//                       </summary>

//                       <span className="dark:text-white">
//                         GirlScript aims to assist anyone who is new in the field
//                         of development and it specifically supports an inclusive
//                         environment. Thereby GSSOC is open both for girls and
//                         for boys . Everyone can participate and contribute their
//                         part in the development of open source community and our
//                         initiative.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         How will I know that I am selected?
//                       </summary>

//                       <span className="dark:text-white">
//                         The participants will be notified through email and the
//                         invite to the Slack workspace will be sent to them.
//                       </span>
//                     </details>
//                     <details className="mb-4">
//                       <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
//                         What is the criterion for selection as a participant?
//                       </summary>

//                       <span className="dark:text-white">
//                         This program is for beginners to get started with open
//                         source. The only criterion for selection are your
//                         dedication and enthusiasm to contribute to open source.
//                       </span>
//                     </details>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
    </>
  );
}

export default Faq;

import Datas from "../pages/api/codeofconductdData";
import { useState, React } from "react";

const Content = () => {
  return (
    <>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="items-center justify-center">
          <p className="font-sans text-center text-2xl font-extrabold text-black-100">
            <p className="text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0 ">
              Code of Conduct
            </p>
          </p>
        </div>
        {Datas.filter((data) => {
          return data;
        }).map((data) => {
          return (
            <div class="container">
              <div class="flex flex-col md:grid grid-cols-13 text-gray-50">
                <div class="flex md:contents">
                  <div class="list">
                    <h3>{data.head}</h3>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;

import React from "react";

function Schedule() {
  return (
    <div>
      <div className="p-4 mb-10">
        <h1 className="text-4xl text-center dark:text-white text-gray-800 font-semibold mb-6">
          <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
            Schedule{" "}
          </span>
          of GSSoC 2022!
        </h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 animate-bounce dark:bg-white shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="border-4 bg-white hover:bg-orange-400 text-gray-600 dark:bg-orange-600 dark:hover:bg-slate-700 dark:text-white border-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                <h3 className="font-bold text-xl mb-1">
                  25th Feb to 26th Feb
                </h3>
                <p className=" leading-tight text-lg w-full">
                  Assign projects to mentors
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 animate-ping dark:bg-white shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="border-4 border-orange-500 bg-white hover:bg-orange-500 text-gray-600 dark:bg-orange-600 dark:hover:bg-slate-700 dark:text-white  col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                <h3 className="font-bold text-xl text-xl mb-1">
                  01th Mar
                </h3>
                <p className="leading-tight text-justify">
                  1st phase of contribution
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 animate-pulse dark:bg-white shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="border-4 bg-white hover:bg-orange-500 text-gray-600 dark:bg-orange-600 dark:hover:bg-slate-700 dark:text-white border-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                <h3 className="font-bold text-xl text-xl mb-1">
                  5th Mar to 6th Mar
                </h3>
                <p className="leading-tight text-justify">
                  Community bonding session starts
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 dark:bg-white shadow text-center">
                  <i className="fas fa-exclamation-circle text-gray-400"></i>
                </div>
              </div>
              <div className="border-4 bg-white hover:bg-orange-500 text-gray-600 dark:bg-orange-600 dark:hover:bg-slate-700 dark:text-white border-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                <h3 className="font-bold text-xl text-xl mb-1">
                  1st April
                </h3>
                <p className="leading-tight text-justify">Leaderboard opens</p>
              </div>
            </div>


            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 dark:bg-white shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="border-4 bg-white hover:bg-orange-500 text-gray-600 dark:bg-orange-600 dark:hover:bg-slate-700 dark:text-white border-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                <h3 className="font-bold text-xl text-xl mb-1">
                  31st May
                </h3>
                <p className="leading-tight text-justify">Coding period ends</p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 dark:bg-white shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="border-4 bg-white hover:bg-orange-500 text-gray-600 dark:bg-orange-600 dark:hover:bg-slate-700 dark:text-white border-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                <h3 className="font-bold text-xl text-xl mb-1">
                  2nd week of July
                </h3>
                <p className="leading-tight text-justify">
                  Results will be declared
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

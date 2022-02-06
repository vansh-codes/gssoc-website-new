import React, { useState } from 'react';
import { schedData } from "../pages/api/scheduleData";
import ScheduleRow from "./scheduleRow";
function Schedule() {
  const [data] = useState(schedData);
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
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50 cursor-default">
            {data.map((curElem, i) => {
              return (
                <ScheduleRow key={i} curElem={curElem}/>
              )})}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

import React from "react";
import { Chrono } from "react-chrono";
import data from "./api/event_data";

const event = () => {
  return (
    <div className="wrapper">
      <div className="w-full h-[90vh]">
        <Chrono
          items={data}
          theme={{
            primary: "orange",
            secondary: "orange",
            cardBgColor: "black",
            cardForeColor: "white",
            titleColor: "white",
          }}
          hideControls="true"
          mode="VERTICAL_ALTERNATING"
        />
      </div>
    </div>
  );
};

export default event;

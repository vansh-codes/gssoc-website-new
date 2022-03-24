/* 
IMPORTANT NOTE FOR DEVELOPERS WORKING ON THIS PAGE ⚠
======================================================================================

THIS PAGE USES REACT-CHRONO TO RENDER TIMELINES
https://github.com/prabhuignoto/react-chrono

ALL THE DATA RENDERED IN THIS FILE ARE FETCCHED FROM "./api/event_data" FILE.

NOTE:
======================================================================================
THE DATE MUST HAVE THE KEY VALUE OF "title", TO REDNER IT AS A SEPERATE COMPONENT, AND ITS MANDATORY.

THEMING THE CHRONO-COMPONENT WILL TAKE EFFECT IN BOTH THE DARK AND LIGHT MODES OF NEXT-THEME.

TAILWIND DARK CLASSES WILL ONLY TAKE EFFECT INSIDE THE ACTUAL CHRONO-COMPONENT, SO IT'S NOT POSSIBLE TO CHANGE THE CHRONO-COMPONENT BASE COLORS WITH TAILWINDCSS.

I'VE USED NEUTRAL COLOR THEMES FOR BASE CHRONO COMPONENT, SO THAT IT DOESN'T ODD OUT ON BOTH DARK AND LIGHT THEMES.
*/

import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Chrono } from "react-chrono";
import Eventdata from "./api/event_data";

const event = () => {
  const [Event] = useState(Eventdata);
  // theme check
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="wrapper">
      <h1 className="text-4xl font-sans text-center dark:text-white font-semibold mb-10">
        Events in GSSoC'22
      </h1>
      <div className="w-full">
        <Chrono
          items={Eventdata}
          theme={{
            primary: "#f67621",
            secondary: "#f67621",
            cardBgColor: "#f67621",
            cardForeColor: "white",
            titleColor: "white",
          }}
          hideControls="true"
          // cardHeight={250}
          mode="VERTICAL_ALTERNATING"
          cardHeight={350}
          // scrollable={{ scrollbar: false }}
        >
          {Event.map((curEvent, i) => {
            return (
              <div className="wrapper font-sans">
                <img src={curEvent.poster} alt="poster" />
                <figcaption className="text-lg font-semibold">
                  {curEvent.maintitle}
                </figcaption>
                <div>
                  <p className="text-white">{curEvent.info}</p>
                </div>
                <div>
                  <a
                    className="text-black text-md font-semibold"
                    href={curEvent.rec_link}
                  >
                    Link here »
                  </a>
                </div>
              </div>
            );
          })}
        </Chrono>
      </div>
    </div>
  );
};

export default event;

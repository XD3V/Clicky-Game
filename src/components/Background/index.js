import React from "react";
import "./style.css";

const Background = props => {
  return (
    <div>
      <div className="background">
        <div className="water"></div>
      </div>

      {props.children}
      <svg>
        <filter
          {
          ...{
            id: "turbulence",
            x: "0",
            y: "0",
            width: "100%",
            height: "100%"
          }
          }>

          <feTurbulence
            {
            ...{
              id: "sea-filter",
              numOctaves: "7",
              seed: "5",
              baseFrequency: "50 100"
            }
            } />

          <feDisplacementMap
            {
            ...{
              scale: "5",
              in: "SourceGraphic"
            }
            } />

          <animate
            {
            ...{
              href: "#sea-filter",
              attributeName: "baseFrequency",
              dur: "30s",
              keyTimes: "0;0.9;1",
              values: "0.01 0.;0.03 0.0;0.1  0.9",
              repeatCount: "indefinite"
            }
            } />

        </filter>
      </svg>
    </div>
  );


}



export default Background;

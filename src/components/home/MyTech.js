import React from "react";
import { FaApple, FaWindows } from "react-icons/fa";

export const MyTech = () => {
  const tech = [
    {
      name: "MacBook Air 2020 M1",
      icon: "FaApple",
      description: "First time using Mac. Love it. Nice to develop on. ",
    },
    {
      name: "ThinkPad T480",
      icon: "FaWindows",
      description:
        "My windows laptop, not using it much after getting MacBook Air. Bought used for cheap but pretty mint condition. ",
    },
    { name: "iPhone 13", icon: "FaApple" },
  ];
  return (
    <div className="my-tech">
      <h2>My Tech</h2>
      <div className="tech-grid">
        {tech.map((item, index) => {
          return (
            <div className="tech-card">
              {item.icon === "FaApple" ? <FaApple /> : <FaWindows />}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

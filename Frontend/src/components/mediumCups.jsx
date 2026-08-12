import React from "react";
import { Tableware1 } from "./Tableware1";

const mediumCups = () => {
  const cupsList = Tableware1?.medCups || [];

  return (
    <div>
      {cupsList.slice(0, 5).map((item) => (
        <div key={item.id}>
          <img src={item.pic} alt="medium" />
        </div>
      ))}
    </div>
  );
};
export default mediumCups;

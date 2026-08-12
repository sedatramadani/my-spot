import React from "react";
import { Tableware1 } from "./Tableware1";

const bigCups = () => {
  const cupsList = Tableware1?.bigCups || [];

  return (
    <div>
      {cupsList.slice(0, 5).map((item) => (
        <div key={item.id}>
          <img src={item.pic} alt="big" />
        </div>
      ))}
    </div>
  );
};
export default bigCups;

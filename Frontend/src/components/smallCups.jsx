import React from "react";
import { Tableware1 } from "./Tableware1";

const smallCups = () => {
  const cupsList = Tableware1?.smallCups || [];

  return (
    <div>
      {cupsList.slice(0, 5).map((item) => (
        <div key={item.id}>
          <img src={item.pic} alt="small" />
        </div>
      ))}
    </div>
  );
};
export default smallCups;

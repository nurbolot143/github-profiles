import React from "react";

import hello from "../resources/img/Hello.jpg";

const Hello = () => {
  return (
    <div className="hello">
      <img src={hello} alt="Hello" />
    </div>
  );
};

export default Hello;

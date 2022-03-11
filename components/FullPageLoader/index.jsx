import React from "react";
import Image from "next/image";
import Spinner from "../../public/images/spinner.gif";

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <Image
        src={Spinner}
        width={100}
        height={100}
        className="fp-loader"
        alt="loading"
      />
    </div>
  );
};

export default FullPageLoader;

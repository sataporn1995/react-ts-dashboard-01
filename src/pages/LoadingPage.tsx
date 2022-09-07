import React from "react";
// import * as loadingData from "../components/loading-page/loading.json";
import loadingData from "../components/loading-page/loading.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  // animationData: loadingData.default,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingPage: React.FC = () => {
  return (
    <div className="vh-100 set-items-center bg-light">
      <FadeIn>
        <Lottie options={defaultOptions} height={140} width={140} />
      </FadeIn>
    </div>
  );
}

export default LoadingPage;

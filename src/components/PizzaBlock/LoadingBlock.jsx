import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="130" r="120" />
      <rect x="-1" y="265" rx="6" ry="6" width="280" height="27" />
      <rect x="-1" y="310" rx="10" ry="10" width="280" height="85" />
      <rect x="-1" y="415" rx="6" ry="6" width="90" height="27" />
      <rect x="139" y="408" rx="20" ry="20" width="136" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;

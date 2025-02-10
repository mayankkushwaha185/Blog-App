import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src = null, className, w, h, alt }) => {
  return (
    <div>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        alt={alt}
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
      />
    </div>
  );
};

export default Image;

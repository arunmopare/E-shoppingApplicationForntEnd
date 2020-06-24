import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
 const Imageurl = product
    ? `${API}/product/photo/${product._id}`
    : "https://yt3.ggpht.com/a/AATXAJzDMwbp__Rf9vm4tbQkXAUyAV9-Sq_BwEhxjg=s100-c-k-c0xffffffff-no-rj-mo";
  return (
    <div className='rounded border border-success p-2'>
      <img
        src={Imageurl}
        alt='photo'
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className='mb-3 rounded'
      />
    </div>
  );
};

export default ImageHelper;

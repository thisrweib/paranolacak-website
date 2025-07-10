"use client";
import { plaxUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    plaxUtility.preloader();
  }, []);

  return (
    <div className="mil-preloader" style={{justifyContent: "left"}}>
  <video
    autoPlay
    loop
    muted
    className="mil-banner-video"
    style={{zIndex:'1'}}
  >
    <source src="./img/logoanasayfa.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="mil-load"/>
  
  
  {/* <div style={{ justifyContent: "left", alignItems: "center", display: "flex", flexDirection: "column", zIndex:'1', marginLeft: '10%'}}>
    <img
      src={"img/po logo.svg"}
      alt="Paranolacak"
      width={243}
      height={89}
      className="mil-logo"
    />
    
    <p className="h2 mil-mb-30">
      <span className="mil-light mil-counter" data-number={100}>
        100
      </span>
      <span className="mil-light">%</span>
    </p>
  </div> */}
</div>
  );
};
export default Preloader;

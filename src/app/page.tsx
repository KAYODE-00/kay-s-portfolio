import Cards from "@/components/Components/Cards";
import React from "react";

const page = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className="flex items-center justify-center absolute top-20 bottom-20 left-20 right-20  grid-col-2  grid-rows-2 gap-4 ">
     <div className="">
      <div className="p-10">
        <Cards title={"Home"} /> 
      </div> <div className="p-10">
        <Cards title={""} />
         </div>
      </div>      <div className="">
      <div className="p-10">
        <Cards title={""} /> 
      </div> <div className="p-10">
        <Cards title={""} />
         </div>
      </div></div>
      
    </>
  );
};

export default page;

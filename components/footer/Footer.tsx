import React from "react";

export const Footer = () => {
  return (
    <div className="w-full py-6 flex flex-col items-center justify-center bg-slate-100 gap-4 mt-4">
      <div className="flex flex-col gap-2">
        <p className="text-sky-900 text-center">ADDRESS</p>
        <p>
          Email:{" "}
          <span className=" text-sky-900/80 ">jado.milton@gmail.com</span>
        </p>
        <p>
          Mobile Phone: <span className=" text-sky-900/80 ">+250787308777</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p> &copy; Copyright reserved {new Date().getFullYear()}</p>
        <p className="text-lg text-center text-sky-900/75">&copy;Jean</p>
      </div>
    </div>
  );
};

import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col gap-3 py-2">
      <p className="text-lg font-bold">Details</p>
      <hr />
      <div className="flex flex-col gap-6">
        <input
          className="border border-[#000] px-2 rounded"
          placeholder="Name"
        />
        <input
          className="border border-[#000] px-2 rounded"
          placeholder="Email"
        />
      </div>
      <hr />
      <div className="flex justify-end gap-4">
        <button className="border py-1.5 px-4 rounded border-[#191d88] bg-[#191d88] text-white">
          Start
        </button>
      </div>
    </div>
  );
};

export default Details;

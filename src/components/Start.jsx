import React from "react";
import { useState } from "react";

const Start = ({ setIsStarted, setEmail, setName }) => {
  const rules = [
    "You will have 30 minutes to attend this quiz.",
    "Navigate freely but only submit when confident in your answers.",
    "Each question has a single correct answer; choose carefully.",
    "No cheating or external help allowed during the quiz.",
    "Respectful and fair play; avoid inappropriate comments or behavior.",
  ];
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleStart = (e) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setEmail(formData.email);
      setName(formData.name);
      setIsStarted(true);
    } else {
      console.log("Enter the details first");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-3 py-2">
      <p className="text-lg font-bold">General Knowledge Quiz </p>
      <hr />
      <div>
        <p className="font-bold pb-2">Quiz Rules</p>
        {rules.map((rule, idx) => {
          return (
            <p key={idx}>
              {idx + 1}. {rule}
            </p>
          );
        })}
      </div>
      <hr />
      <form onSubmit={handleStart} className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <p className="font-bold">Enter Details</p>
          <input
            className="border border-[#000] px-2 rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            className="border border-[#000] px-2 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <hr />
        <div className="flex justify-end">
          <button
            className="border py-1.5 px-4 rounded border-[#191d88] bg-[#191d88] text-white"
            onClick={handleStart}
            type="submit"
          >
            Start
          </button>
        </div>
      </form>
    </div>
  );
};

export default Start;

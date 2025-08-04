import React from "react";

// wheneer the function starts with use it's a React hook

const Contact = () => {
  return (
    <div className="m-2">
      <h1 className="font-bold text-2xl  text-center my-4">
        This is from the contact page{" "}
      </h1>

      <form className="flex flex-col max-w-2xl mx-auto justify-center items-center bg-gray-400 p-4 space-y-4 rounded-lg ">
        <div className="space-x-2 ">
          <label className="font-semibold">Username</label>
          <input
            className="bg-white text-white p-2 rounded w-full "
            type="text"
            placeholder="Enter your name here"
          />
        </div>
        <div className="space-x-2">
          <label className="font-semibold">Mobile no:</label>
          <input
            className="bg-white text-white p-2 rounded  w-full "
            type="number"
            placeholder="Enter your mobile number here"
          />
        </div>
        <div >
          <button className="bg-amber-700 rounded shadow-lg py-2 px-6 text-white dark:hover:bg-amber-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

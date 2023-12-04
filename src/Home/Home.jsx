import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-violet-100 lg:flex">
        <div className="lg:w-1/2 text-center lg:p-20 w-full  pt-10">
          <p className=" text-4xl lg:text-7xl">
            One Step <br /> Closer To Your <br />
            <span className="text-violet-600">Dream job</span>{" "}
          </p>
          <p className="text-gray-400 mt-4 md:text-2xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="text-center mt-5 text-white bg-violet-500 hover:bg-violet-800 p-3 rounded">
            start applying
          </button>
        </div>
        <div className="lg:w-1/2 sm:w-full pt-10 sm:p-5 lg:p-10">
          <img className="" src="/src/assets/images/user.png" alt="" />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center font-700">Job Category List</p>
      </div>
    </div>
  );
};

export default Home;

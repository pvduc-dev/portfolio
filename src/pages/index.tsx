import * as React from 'react';
import Header from "../components/layout/Header"

const IndexPage = () => {

  return (
    <>
      <Header/>
      <div
        className="bg-banner h-screen pt-[90px]"
      >
        <div
          className="max-w-6xl mx-auto"
        >
          <p
            className="mt-[12rem] text-xl font-bold"
          >
            Hello, I 'm a
          </p>
          <p
            className="mt-4 font-black text-6xl"
          >
            Web&nbsp;
            <span
              className="text-primary"
            >
             Developer
          </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

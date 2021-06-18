import * as React from 'react';
import Header from "../components/layout/Header"
import Seo from '../components/seo';

const IndexPage = () => {

  return (
    <>
      <Seo/>
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
            className="mt-4 font-bold text-6xl"
          >
            Web&nbsp;
            <span
              className="text-primary"
            >
             Developer
          </span>
          </p>
          <p>
            Hello, I 'm Pv Duc
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

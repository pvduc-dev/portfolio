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
            data-sal="slide-right"
            className="mt-[12rem] text-xl font-bold"
          >
            Hello, I 'm a
          </p>
          <p
            data-sal="slide-right"
            className="mt-4 font-bold text-6xl"
          >
            Web&nbsp;
            <span
              className="text-primary"
            >
             Developer
          </span>
          </p>
          <p
            className="mt-4 w-[30rem]"
          >
            Hello, I 'm Pv Duc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem commodi, doloremque eius eum facilis fugiat fugit id illo ipsa nostrum placeat possimus praesentium provident quaerat quam similique suscipit tempora tenetur totam! Adipisci dolor ea eveniet illo impedit ipsa laboriosam porro, quaerat quia, quos reiciendis sint sunt suscipit tenetur vel?
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

import * as React from 'react';
import Header from "../components/layout/Header"

const IndexPage = () => {

  return (
    <>
      <Header/>
      <section
        className="bg-banner h-screen pt-[90px]"
      >
        <div
          className="max-w-6xl mx-auto"
        >
          <p
            className="mt-[12rem] text-lg font-bold"
          >
            Hello, I 'm Pv Duc
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
          <p
            className="mt-4 w-[30rem]"
          >
            High level experience in web design and development knowledge, producing quality work.
          </p>
        </div>
      </section>
      <section>
        <div
          className=""
        >
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default IndexPage;

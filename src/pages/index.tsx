import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import Header from "../components/layout/Header"

const IndexPage = () => {

  return (
    <>
      <Header/>
      <div
        className="bg-banner h-screen"
      >
      </div>
    </>
  );
};

export default IndexPage;

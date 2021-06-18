import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import Header from "../components/layout/Header"

const IndexPage = () => {
  const { backgroundImage } = useStaticQuery(
    graphql`
      query {
        backgroundImage: file(relativePath: { eq: "portfolio-banner.png" }) {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );

  const image = getImage(backgroundImage);
  console.log(backgroundImage);
  const bgImage = convertToBgImage(image);

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

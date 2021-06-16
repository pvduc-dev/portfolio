import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { setFeedbackDisabledValue } from "gatsby/dist/gatsby/src/utils/feedback"

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
      <div
        className="bg-banner h-screen"
      >
      </div>
    </>
  );
};

export default IndexPage;

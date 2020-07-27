/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const FullPixelImage = props => {
  const { level } = props;
  const data = useStaticQuery(graphql`
    query {
      full: file(relativePath: { eq: "fullPixel-image.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      semi: file(relativePath: { eq: "semiPixel-image.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      clear: file(relativePath: { eq: "clear-image.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[level].childImageSharp.fluid} {...props} />;
};

export default FullPixelImage;

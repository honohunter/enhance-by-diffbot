/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const DataImage = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "data-image.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />;
};

export default DataImage;

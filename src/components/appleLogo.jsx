import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AppleLogo = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "appleLogo.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />;
};

export default AppleLogo;

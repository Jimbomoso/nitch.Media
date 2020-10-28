import React from "react"
import footerStyles from "./footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p role="contentinfo">
          &copy;{" "}{data.site.siteMetadata.author} All Rights Reserved {new Date().getFullYear().toString()} {" "} | Legal | Privacy
        </p>
      </div>
    </footer>
  )
}

export default Footer
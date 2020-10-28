import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.scss"
import Logo from "../images/Logo5.svg"

const Header = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `
    )
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.overlay}></div>
            <div className={headerStyles.heroContent}>
                <p className={headerStyles.brand}>
                    <Link to="/"> <img width="300" id="logo" alt="logo" src={Logo}></img></Link>
                </p>
                <p className={headerStyles.description}>
                    {data.site.siteMetadata.description}
                </p>
            </div>
            <nav className={headerStyles.navContainer} role="navigation">
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" activeClassName={headerStyles.activeMenuItem}>Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>Blog</Link>
                    </li> */}
                    <li>
                        <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
import React from "react";
import Link from "next/link";
import Head from "next/head";
import PropTypes from "prop-types";
import * as COLORS from "../constants/colors";

// import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";

const Layout = props => {
    const { children, title } = props;
    return (<div>
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="/static/bootstrap.css" />
        </Head>
        <main>
            <div className="banner" />
            <div className="container">{children}</div>
        </main>
        <footer>Made with &hearts; and coffee</footer>
        <style jsx>{`
            .banner {
                background-color: ${COLORS.bannerBg};
                height: 90px;
                left: 0;
                position: fixed;
                right: 0;
                z-index: 10;
            }
            .container {
                padding-top: 120px;
            }
        `}</style>

    </div>);
};
Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object
    ])
};

export default Layout;

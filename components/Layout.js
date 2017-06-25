import React from "react";
import Link from "next/link";
import Head from "next/head";
import PropTypes from "prop-types";
import * as COLORS from "../constants/colors";

// import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";

const Layout = props => {
    const { children, title, heading, description } = props;
    return (<div>
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="/static/index.css" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <header>
            <div className="container">
                <h1>{heading}</h1>
                <p>{description}</p>
            </div>
        </header>
        <main>
            <div className="container">{children}</div>
        </main>
        <footer>
            <div className="container">
                <p className="pull-right text-right">
                    Created with &nbsp;
                    <span style={{color: "red"}}>&hearts;</span>
                    &nbsp; at <a href="https://www.desdevpro.com">Desdevpro</a>
                </p>
                <p>
                    <a href="https://github.com/schowdhuri/survey-builder">
                        View source on Github
                    </a>
                    <br/>
                    <a href="http://opensource.org/licenses/MIT">MIT License</a>
                </p>
            </div>
        </footer>
        <style jsx>{`
            header {
                background-color: ${COLORS.headerBg};
                color: ${COLORS.headerText};
                height: 90px;
                left: 0;
                position: fixed;
                right: 0;
                z-index: 10;
            }
            header h1 {
                color: ${COLORS.headerText};
                font-size: 3em;
                font-weight: 600;
                margin: 10px 0;
            }
            header p {

            }
            main {
                background-color: #f2f2f2;
                padding-top: 120px;
            }
            footer {
                background-color: #2a262c;
            }
            footer .container {
                padding: 30px 0;
            }
            footer,
            footer a {
                color: #999;
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

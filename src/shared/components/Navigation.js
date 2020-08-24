// import navimg from "../images/DavPip.png";
import React, { Component } from "react";

import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      sidedraweropen: false,
    };

    this.sidedrawerclickopener = this.sidedrawerclickopener.bind(this);
    this.sidedrawerclickcloser = this.sidedrawerclickcloser.bind(this);
  }

  sidedrawerclickopener = () => {
    this.setState((prevState) => {
      return { sidedraweropen: !prevState.sidedraweropen };
    });
  };
  sidedrawerclickcloser = () => {
    this.setState({ sidedraweropen: false });
  };

  render() {
    let backdrop;

    if (this.state.sidedraweropen) {
      backdrop = <Backdrop click={this.sidedrawerclickcloser} />;
    }
    return (
      <div>
        <div className="upp">
          <div
            className="upp1"
            style={{ height: "7px", backgroundColor: "black" }}
          ></div>
          <img
            // src={navimg}
            alt="navimg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="Nav">
          <div className="flex-child"></div>
          <div style={{ flex: "1" }}></div>
          <div className="block">
            <p className="white pointer mt0 mr4 f5">
              <b>
                <Link href="/">
                  <a className="white">Home</a>
                </Link>
              </b>
            </p>
            <p className="white pointer mt0 f5">
              <b>
                <Link href="/archives">
                  <a className="white">Archives</a>
                </Link>
              </b>
            </p>

            <DrawerToggleButton
              click={this.sidedrawerclickopener}
              className="hide"
            />
            <SideDrawer show={this.state.sidedraweropen} />
            {backdrop}
          </div>
        </div>

        <style jsx>{`
          .Nav {
            display: flex;

            background-color: darkgray;
          }
          .block p {
            display: inline-block;
            margin-right: 15px;
          }
          .flex-child {
            font-style: normal;
          }

          @media only screen and (max-width: 767px) {
            .block p {
              display: none;
            }
          }
          @media only screen and (min-width: 767px) {
            .upp1 {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Navigation;

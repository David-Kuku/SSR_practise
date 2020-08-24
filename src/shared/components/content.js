//import contimg from '../images/cont.jpg'
//import contimg1 from '../images/cont1.jpg'
import React, { Component } from "react";

import Calenda from "./calender";

const style = {
  position: "relative",
  margin: "50px auto",
};

class Content extends Component {
  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/
          bootstrap.min.css"
          />
        </head>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-7"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <div className="content1 shadow-7">
                <div className="container">
                  <div className="row">
                    <div>
                      <div className="text">
                        <p className="">
                          <b>Today</b>
                        </p>
                      </div>
                      <div className="ites">
                        <div className="img">
                          {/* <img src={require('/images/cont.jpg')} className="text1"/> */}
                        </div>
                        <div className="img">
                          {/* <img src={contimg1} className="text2" /> */}
                        </div>
                        <p
                          className="center underline"
                          style={{ textAlign: "center" }}
                        >
                          <a href="https://www.futuretimeline.net">
                            Future Timeline|Technology|Predictions|Events
                          </a>
                        </p>

                        <p className="sec" style={{ marginTop: "15px" }}>
                          “ London-based writer and futurist, William James Fox,
                          started Future Timeline back in 2008. It began as a
                          relatively small and obscure website with a brief list
                          of future predictions. Over the years, however, it
                          expanded to form a lengthy and detailed timeline –
                          running from the present day, through the next century
                          and beyond, all the way to the end of the universe
                          itself. With its quirky, thought-provoking and often
                          alarming content, the site proved to be more popular
                          than expected, gaining many fans and a number of
                          contributors offering new predictions and ideas. A
                          blog, social media and other features were added.
                          Since then, Future Timeline has further grown and
                          developed into a community of futurology enthusiasts
                          from around the world. ”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-1"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            ></div>

            <div
              className="col-md-3 first"
              style={{ paddingLeft: "15px", paddingRight: "15px" }}
            >
              <div
                className="heye"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  margin: "50px auto",
                }}
              >
                <Calenda className="" />
              </div>
            </div>
            <div
              className="col-md-1"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            ></div>
          </div>
        </div>

        <style jsx>{`
          .img {
            text-align: center;
          }
          .text {
            margin-top: 80px;
            text-align: center;
          }

          @media only screen and (min-width: 768px) {
            .first {
              margin-top: 300px;
            }
            .text1 {
              text-align: center;
              height: 190px;
            }
            .text2 {
              text-align: center;
              height: 140px;
            }
          }
          @media only screen and (max-width: 767px) {
            .heye {
            }
            .text {
              text-align: center;
              margin-left: 0;
            }
            .text1 {
              text-align: center;
              height: 150px;
            }
            .text2 {
              text-align: center;
              width: 100%;
              height: auto;
            }
            .sec {
              margin-left: 0;
              margin-bottom: 50px;
            }
            .ites {
              margin-bottom: 200px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Content;

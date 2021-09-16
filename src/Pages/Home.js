import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Sliders from "../components/Sliders";

const Home = () => {
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      <Sliders />
      <section className="work">
        <div className="grid-container">
          <div>
            <div className="item1 onhover">
              <div
                className="work-image"
                style={{
                  backgroundImage: 'url("./images/furniture.png")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Building Elevation</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item2 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/interior.png")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Canopy</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
            <div className="item3 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/celing.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Ceiling</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div>
            <div className="item2 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/gates.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Gates</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
            <div className="item3 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/lift-jamb.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Lift Jamb</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item1 onhover">
              <div
                className="work-image"
                style={{
                  backgroundImage: 'url("./images/louvers.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Louvers</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div>
            <div className="item1 onhover">
              <div
                className="work-image"
                style={{
                  backgroundImage: 'url("./images/manhole.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Manhole Cover</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item2 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/mix.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>MIX</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
            <div className="item3 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/planter.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Planter</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div>
            <Link to="/category/railing" className="item2 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/railing.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Railing</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </Link>
            <div className="item3 onhover">
              <div
                className="work-image-2"
                style={{
                  backgroundImage: 'url("./images/stair.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Staircase</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item1 onhover">
              <div
                className="work-image"
                style={{
                  backgroundImage: 'url("./images/wall-clading.jpg")',
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="overlay" />
                <div className="work-content">
                  <h2>Wall cladding</h2>
                  <div className="work-content-p">50 PROJECT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

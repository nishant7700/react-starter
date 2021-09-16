import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Sliders from "../components/Sliders";

const AboutUs = () => {
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      <div class="panel-list">
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/IMG-20160705-WA0003.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-2.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallery-3.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-4.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/IMG-20160705-WA0003.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-2.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallery-3.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-4.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/IMG-20160705-WA0003.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-2.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallery-3.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-4.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/IMG-20160705-WA0003.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-2.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallery-3.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="/images/gallary-4.jpg" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam ab quaerat quos, placeat amet, temporibus, error cum
                dolorum architecto repellat reiciendis! Quibusdam earum
                repudiandae fugit culpa ad. Quos, ducimus odit.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);

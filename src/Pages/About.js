import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = (props) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="About Us" />
      <section className="ptb-50 know-more">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="know-image">
                <img src="./images/skin-main.jpg" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="know-content">
                <h2> BRAND STORY</h2>
                <p>
                  We have a solid background in Cosmetology and Pharmacy and our
                  experience in developing cosmetics for many brands spans over
                  a decade. After working on many brands in the industry in
                  India, we realized that there is so much confusion among
                  customers in identifying what Natural, Herbal, and Organic are
                  and their uses. Customers fail to notice the distinctions
                  between these three categories due to their limited knowledge
                  and they also seem to have lesser knowledge on extracts and
                  actives.
                </p>
                <p>
                  So, we thought it is really essential to come up with a brand
                  that is transparent and uses only natural ingredients and
                  also, we want to make details regarding the proportion of
                  drugs we use very clear.{" "}
                </p>
                <p>
                  We are using Natural extracts but not only them; we are also
                  using Actives that are clinically proven and have studies to
                  support our claims regarding the effectiveness of our drug.
                </p>
                <p>
                  With their wide knowledge and experience in Cosmetology and
                  Pharmacy background, our directors have come up with the best
                  products that have the right combination of Nature and
                  Science. If Pomegranate and Glutathione together work great,
                  then we use them in combination. Thanks to the Dermatologists
                  that we have onboard who have been guiding us in the right
                  direction.
                </p>
                <p>
                  Our dermatologically tested products assure you the best
                  results and beautiful skin without causing harm to it in any
                  way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);

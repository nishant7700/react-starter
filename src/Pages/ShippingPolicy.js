import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ShippingPolicy = (props) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Shipping Policy" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ol>
                <li>
                  Send us a Return/Exchange request on contactus@rejuvaplus.com
                  with the reason for the same, and the subject of the email
                  'Return/Exchange Request, #Order number'
                </li>
                <li>
                  The Return/Exchange request for items purchased must be filed
                  within 48 hours of receiving them. Items to be
                  returned/exchanged must be returned within 10 days of the date
                  of receipt.
                </li>
                <li>
                  Items are to be returned/exchanged at the brand’s expense; the
                  cost of the delivery of the return package to Rejuva Plus and
                  the cost of the delivery of the new exchange product from
                  Rejuva Plus would be incurred by the brand.
                </li>
                <li>
                  Items to be returned for exchange should not have any signs of
                  wear and tear or of having ever been worn outdoors by the
                  customer. The Brand Tag should stay intact.
                </li>
                <li>
                  An email/message will be sent to the customer as soon as the
                  returned products reach us and the exchange item will be
                  shipped OR an exclusive coupon with (Rejuva Plus) credits OR
                  refund will be provided.
                </li>
                <li>
                  Rejuva Plus reserves the right to decline the return/exchange
                  request if the reasons mentioned in the request are found to
                  be inadequate or if the product return does not comply with
                  the terms and conditions stated above.
                </li>
                <li>Item/Order cannot be exchanged more than once.</li>
              </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShippingPolicy);

import React from "react";
import "./home.scss";
import image from "./images/madman2.png";
export default function HomePage() {
  return (
    <div className="home-page">
      <div className="heading">
        <p className="head1">TUM</p>
        <p className="head2">pend</p>
        <p className="head3">UMP</p>
      </div>
      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">Introduction :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
          <div className="img-section">
            <img src={image} alt="mad man" />
          </div>
        </div>
        <div className="part-2">
          <div className="paras">
            <p>
              We'll pump this collection in the following 7 days and then
              abandon the project on the 8th day ... if anyone wants quick eth
              ... join us in this journey!
            </p>
            <p>
              &#160; &#160;&#160;&#160;&#160;&#160;With a total Budget of 10eth
              to market this project post mint, and additional 50% of royalties
              goes back to marketing, we have to pump pump pump ...
            </p>
            <p>
              The roadmao willbe revealed day by day... for seven days ... just
              like annoucements on discord ... so don't forget to check for
              roadmap updates for seven days after mint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

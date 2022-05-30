import React from "react";
import "./home.scss";
import image from "./images/madman2.png";
export default function HomePage() {
  return (
    <div className="home-page">
      <div className="heading">
        <p className="head1">PUM</p>
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
            <p>
              The roadmap will be revealed day by day…for seven days….just like
              announcements on discord…so don't forget to check for roadmap
              updates for seven days after mint.
            </p>
            <p>Mint is FREE with 10k Collection</p>
            <div className="div-row">
              <div className="collection-list">
                <ol>
                  <li className="green-color-text">
                    <p className="green-color-text">150 rares</p>
                  </li>
                  <li className="blue-color-text">
                    <p>100 ultra rares </p>
                  </li>
                  <li className="red-color-text">
                    <p>50 legendaries</p>
                  </li>
                </ol>
              </div>
              <div className="star-content">
                <p className="red-color-text">
                  ***Enough with that Goblin shit{" "}
                  <u className="blue-color-text">mint</u> the Real Pump ***
                </p>
              </div>
            </div>
            <p>
              -Go to our Roadmap page to see the whole Idea behind the Project,
              all your Questions are asked in the FAQ column.
            </p>
            <p>-No Discord, No Twitter.</p>
            <p>
              So turn your Ultra Degen mode ON and sit back for the next 7 days!
            </p>
            <p>Goodluck Degens!</p>
            <p>-Natoshi sakamabals</p>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">FAQs :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
        </div>

        <div className="part-2"></div>
      </div>
    </div>
  );
}

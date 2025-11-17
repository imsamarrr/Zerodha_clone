import React from "react";

function Awards() {
  return (
    <div className="container cnt-awards-upper mt-5">
      <div className="row d-flex awards-cnt align-items-center">
        <div className="col-6">
          <h1 className="fs-4 mb-5">Trust with confidence</h1>

          <div className="para-para">
            <h2 className="fs-4">Customer-first always</h2>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India
            </p>
          </div>

          <div className="para-para">
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a>Our philosophies</a>.
            </p>
          </div>

          <div className="para-para">
            <h2 className="fs-4">The Zerodha universe</h2>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="para-para">
            <h2 className="fs-4">Do better with money</h2>
            <p>
              With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we
              don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img style={{ width: "90%" }} src="/ecosystem.png" alt="award"></img>
          <div className="explore text-center mt-3">
            <a className="anchor-tag">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="anchor-tag">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <img style={{width : "60%",margin : "auto",marginTop: "5rem"}} className="" src="/pressLogos.png"></img>
      </div>
    </div>
  );
}

export default Awards;

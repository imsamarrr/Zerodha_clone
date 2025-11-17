import React from "react";

function Footer() {
  return (
    <div className="cnt">
      <div className="row">
        <div className="col">
          <img style={{ width: "50%" }} src="/logozerodha.svg"></img>
          <p className="para mt-3">© 2010 - 2025, Zerodha Broking Ltd</p>
          <p className="para mt-3">All rights reserved.</p>
        </div>
        <div className="col achrs mb-4">
          <h1 className="fs-5">Account</h1>
          <a href="">Open demat account</a>
          <a href="">Minor demat account</a>
          <a href="">NRI demat account</a>
          <a href="">Commodity</a>
          <a href="">Dematerialisation</a>
          <a href="">Fund transfer</a>
          <a href="">MTF</a>
          <a href="">Referral program</a>
        </div>
        <div className="col achrs mb-4">
          <h1 className="fs-5">Company</h1>
          <a href="">About</a>
          <a href="">Philosophy</a>
          <a href="">Press & media</a>
          <a href="">Careers</a>
          <a href="">Zerodha Cares (CSR)</a>
          <a href="">Zerodha.tech</a>
          <a href="">Open source</a>
        </div>
        <div className="col achrs mb-4">
          <h1 className="fs-5">Support</h1>
          <a href="">Contact us</a>
          <a href="">Support portal</a>
          <a href="">How to file a complaint?</a>
          <a href="">Status of your complaints</a>
          <a href="">Bulletin</a>
          <a href="">Circular</a>
          <a href="">Z-Connect blog</a>
          <a href="">Downloads</a>
        </div>
        <div className="col achrs">
          <h1 className="fs-5">Quick Links</h1>
          <a href="">Upcoming IPOs</a>
          <a href="">Brokerage charges</a>
          <a href="">Market holidays</a>
          <a href="">Economic calendar</a>
          <a href="">Calculators</a>
          <a href="">Sectors</a>
        </div>
      </div>
      <div className="row mt-5">
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to <a className="anchor-tag anchor-tag-footer">complaints@zerodha.com,</a> for DP related to
          <a className="anchor-tag anchor-tag-footer">dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1">
          Procedure to file a complaint on <a className="anchor-tag anchor-tag-footer">SEBI SCORES</a>: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1"><a className="anchor-tag anchor-tag-footer">Smart Online Dispute Resolution</a> | <a className="anchor-tag anchor-tag-footer">Grievances Redressal Mechanism</a></p>
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1">
          India's largest broker based on networth as per NSE.<a className="anchor-tag anchor-tag-footer">NSE broker
          factsheet</a>
        </p>
        <p style={{fontSize : "0.7rem"}} className=" para-footer mt-1"s>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          <a className="anchor-tag anchor-tag-footer">create a ticket here</a>.
        </p>
      </div>
      <div className="footer-bottom">
        <div className=""><a className="anchor-tag-footer-bottom">NSE</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">BSE</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">MCX</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">Terms & Condition</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">Policies & procedures</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">Privacy policy</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">Disclosure</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">For invester's attention</a></div>
        <div className=""><a className="anchor-tag-footer-bottom">investor charter</a></div>
      </div>
    </div>
  );
}

export default Footer;

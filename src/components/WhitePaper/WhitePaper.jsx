import React from "react";
import { Link } from "react-router-dom";
import docImg from "../../assets/img/images/document_img.png";

const WhitePaper = () => {
  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title-purpose mb-35">
            <h2 className="title-purpose">
              Read Audit AI <span>Purpose & Benefites</span>
            </h2>
          </div>
          <div className="audit-card-parent">
            <div className="audit-card">
              {/* Left Side - Purpose */}
              <div className="card-side left-side">
                <h3>Purpose</h3>
                <p>
                  Fast anomaly detection using AI helps identify suspicious
                  transaction patterns, while smart contract optimization
                  detects inefficient code and suggests improvements.
                  Additionally, continuous security monitoring ensures smart
                  contracts remain protected after implementation, preventing
                  long-term exploitation.
                </p>
              </div>

              {/* Right Side - Benefits */}
              <div className="card-side right-side">
                <h3>Benefits</h3>
                <ul>
                  <li>
                    <strong>Prevent Attacks Before They Happen:</strong> With
                    AI, vulnerabilities can be addressed before smart contracts
                    are active.
                  </li>
                  <li>
                    <strong>High Accuracy:</strong> Machine learning technology
                    improves bug detection over manual auditing methods.
                  </li>
                  <li>
                    <strong>Scalability & Speed:</strong> Audits can be done in
                    minutes, not days or weeks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;

import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q1 2025",
      title: "Concept & Planning",
      info: [
        "Define AI Audit framework",
        "Research compliance & regulations",
        "Develop initial whitepaper",
      ],
    },
    {
      roadmapTitle: "Q2 2025",
      title: "Prototype & Research",
      info: [
        "Develop AI model for audit automation",
        "Proof of Concept (PoC) for data integrity checks",
        "Gather feedback from initial testers",
      ],
    },
    {
      roadmapTitle: "Q3 2025",
      title: "Beta Testing",
      info: [
        "Launch beta version for selected partners",
        "Implement AI bias detection system",
        "Refine security & privacy protocols",
      ],
    },
    {
      roadmapTitle: "Q4 2025",
      title: "Public Testnet & Token Integration",
      info: [
        "Launch public testnet for real-world audits",
        "Introduce incentive mechanisms (staking/rewards)",
        "Tokenized audit validation system",
      ],
    },
    {
      roadmapTitle: "Q1 2026",
      title: "Mainnet Launch",
      info: [
        "AI-powered audit system goes live",
        "Partnerships with regulatory bodies",
        "First batch of real-world audits",
      ],
    },
    {
      roadmapTitle: "Q2 2026",
      title: "Expansion & Scaling",
      info: [
        "Multi-industry adoption (finance, healthcare, Web3)",
        "Launch of AI Audit Academy",
        "Further AI improvements for fraud detection",
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Roadmap</span>
              <h2 className="title">
                AI-Powered Security Strategy and Smart Contract
                <span>Audit Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

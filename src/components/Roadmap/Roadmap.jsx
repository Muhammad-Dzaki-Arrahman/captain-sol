import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q1 2025",
      title: "Planning & Research",
      info: [
        "Define Captain Solana’s vision",
        "Community building & outreach",
        "Develop initial whitepaper",
      ],
    },
    {
      roadmapTitle: "Q2 2025",
      title: "Prototype Development",
      info: [
        "Launch early meme campaigns",
        "Test tokenomics model",
        "Engage first adopters",
      ],
    },
    {
      roadmapTitle: "Q3 2025",
      title: "Beta Phase",
      info: [
        "Token launch & airdrops",
        "Community-driven initiatives",
        "Early exchange listings",
      ],
    },
    {
      roadmapTitle: "Q4 2025",
      title: "Ecosystem Growth",
      info: [
        "Partnerships with Solana projects",
        "Staking & rewards system",
        "Captain Solana NFTs",
      ],
    },
    {
      roadmapTitle: "Q1 2026",
      title: "Mainnet Expansion",
      info: [
        "Strengthen liquidity & utility",
        "Major CEX listings",
        "First governance proposals",
      ],
    },
    {
      roadmapTitle: "Q2 2026",
      title: "Mass Adoption",
      info: [
        "Expand into GameFi & Web3",
        "Cross-chain integrations",
        "Merch & real-world branding",
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
                <span>Captain Solana Plan</span>
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

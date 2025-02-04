import React from "react";


import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: "/img/team/img_1.jpg",
      name: "Cameron Williamson",
      designation: "Founder & CO",
    },
    {
      src: "/img/team/img_3.jpg",
      name: "Eleanor Pena",
      designation: "Head of Design",
    },
    {
      src: "/img/team/img_2.jpg",
      name: "Bessie Cooper",
      designation: "AI Analyst",
    },
    {
      src: "/img/team/img_1.jpg",
      name: "Darlene Robertson",
      designation: "Product Manager",
    },
    {
      src: "/img/team/img_2.jpg",
      name: "Jacob Jones",
      designation: "Marketer",
    },
    {
      src: "/img/team/img_3.jpg",
      name: "Courtney Henry",
      designation: "Founder",
    },

  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">OUr team</span>
              <h2 className="title">
                The Leadership <br /> <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;

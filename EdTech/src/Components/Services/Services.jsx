import React from "react";
import "./Services.css";

import S1 from "../Assets/S1.svg";
import S2 from "../Assets/S2.svg";
import S3 from "../Assets/S3.svg";
import S4 from "../Assets/S4.svg";
import S5 from "../Assets/S5.svg";

const Services = () => {
  const services = [
    {
      logo: S1,
      name: "WEB DEVELOPMENT",
      Description:
        "Our web development services focus on crafting robust and responsive websites, tailored to your specific requirements, enhancing your online presence and engagement.",
    },
    {
      logo: S2,
      name: "UI/UX DESIGN",
      Description:
        "Our UI/UX design expertise focuses on creating visually appealing and user-friendly interfaces, enhancing the overall user experience and engagement on your digital platforms.",
    },
    {
      logo: S3,
      name: "MOBILE APP DEVELOPMENT",
      Description:
        "We specialize in mobile app development, creating custom solutions tailored to your business needs, ensuring a strong presence in the mobile ecosystem.",
    },
    {
      logo: S4,
      name: "WEB DESIGN",
      Description:
        "Our web design expertise ensures visually appealing and user-friendly website designs, optimizing user experience and leaving a lasting impression on your audience.",
    },
    {
      logo: S5,
      name: "CYBERSECURITY",
      Description:
        "We prioritize your digital security, providing comprehensive cybersecurity solutions to protect your systems and data from threats and vulnerabilities.",
    },
    {
      logo: S5,
      name: "USER INTERFACE (UI) TESTING",
      Description:
        "Our UI testing services rigorously evaluate the usability and performance of your digital interfaces, identifying and addressing issues to optimize user satisfaction.",
    },
  ];
  return (
    <section className="Services-section">
      <div className="container container-services">
        <div className="service-text">
          <h1>Services</h1>
        </div>
        <div className="services">
          {services.map((service) => {
            return (
              <div className="service" key={service.name}>
                    <div className="image">
                    <img src={service.logo} alt="" />
                    </div>
                    <h2>{service.name}</h2>
                    <p>{service.Description}</p>
                    {/* <div className="btn">READ MORE</div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

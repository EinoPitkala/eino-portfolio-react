import React, { useState, useEffect } from "react";

const Info = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.testaustime.fi/users/Eino/activity/summary"
        );
        const jsonData = await response.json();
        setData(jsonData.last_month.languages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="about-me">
      <h2>About me</h2>
      <p>
        Hi! I'm Eino Pitkälä, I'm from Kuopio, Finland. I am 14 years old and
        besides school, I work as an entrepreneur in my own company, Eino IT. I
        am interested in coding in different languages and I am learning to code
        more and more all the time. I do small projects with React and for my
        company's clients, I usually make websites with WordPress.
      </p>
      <h2>Testaustime Stats last month</h2>
      <div className="testaustime-stats-grid">
        {Object.entries(data).map((item, index) => {
          return Math.ceil(item[1] / 60) === 0 ? null : 
          item[1] > 300 ? (
            <div key={index} className="testaustime-stats-card">
              <h3>{item[0]}</h3>
              <p>{Math.ceil(item[1] / 60)} min</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
export default Info;

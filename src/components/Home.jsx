// import React from "react";
// import Card from "../sharedComponent/Card";

// const Home = (props) => {
//   const shop = ", happy shopping";
//   return (
//     <div>
//       {props.user}!
//       <Card happyMessage={props.happy} shop={shop} />
//     </div>
//   );
// };

// export default Home;


import React from "react";
import Card from "../sharedComponent/Card";
import "./Home.css";

const Home = (props) => {
  const shop = " Happy shopping!";
  return (
    <div className="home-container">
      <h1> {props.user}</h1>
      <div className="card-container">
        <Card happyMessage={props.happy} shop={shop} />
      </div>
      <button className="action-btn">Explore Now</button>
    </div>
  );
};

export default Home;

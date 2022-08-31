import React from "react";
import Router from "./router/router";
import env from "./environments/environment";
import "./styles/index.scss";

const App = () => {
  console.log(
    `%c${env.name} v${env.version} | environment: ${env.environment}`,
    "font-weight: bold; color: #3649d5; font-size: 1.2em;",
  );

  return (
    <div className='app-main'>
      <Router />
    </div>
  );
};

export default App;

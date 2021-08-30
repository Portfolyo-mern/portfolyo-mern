import React from "react";

const Banner = () => {
  const [state] = React.useState({
    title: "Portfolyo",
    text:
      "One stop site to create new Portfolyo",
    
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    create 
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          
            
        </div>
      </div>
    </header>
  );
};

export default Banner;

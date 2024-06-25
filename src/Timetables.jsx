import { useState } from "react";

const Timetables = () => {
  let [titleRoutes, setRoutes] = useState([
    {
      title: "Routes To Pretoria Region",
      routes: ["pretoria to pinnarsport", "pinnarsport to pretoria"],
      key: 1,
    },
    {
      title: "Routes To Johannesburg Region",
      routes: ["pretoria to kempton park", "kempton park to pretoria"],
      key: 2,
    },
    {
      title: "Routes To Attrageville Region",
      routes: ["Pretoria to attrageville", "attragevillee to Pretoria"],
      key: 3,
    },
  ]);


  const handleClick = (values)=> {
    
      console.log(values)

      let newValue = titleRoutes.filter((data)=> values.key === data.key)
      console.log(newValue)
      setRoutes(newValue)
  }
  return (
    <>
      <div className="timetables">
        <div className="stations">
          {titleRoutes.map((routes, index) => (
            <div className="station-titles">
              <h2 className="text-3" key={titleRoutes.index}>
                {routes.title}
                
              </h2>
            </div>
          ))}
        </div>
        <div className="table-routes">
          <div className="div-1">
            <div className="div-2">
              {titleRoutes.map((thisRoutes) => (
                <>
                  <h2 onClick={()=> handleClick(thisRoutes)} className="route-title">{thisRoutes.routes[0]}</h2>
                </>
              ))}
              {/* {inside the div elements} */}
            </div>
            <div className="div-3">
              {titleRoutes.map((thisRoutes) => (
                <>
                  <h2 onClick={()=> handleClick(thisRoutes)} className="route-title">{thisRoutes.routes[1]}</h2>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetables;

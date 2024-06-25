import { Link } from "react-router-dom"



const Content_three = () => {
  const stations = [
    { location: "pretoria", image: "/img-2.jpeg", link: "/pta", id: 1 },
    { location: "johannesburg", image: "/img-2.jpeg", link: "/jhb", id: 2 },
  ];

  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <>
      <div id="timetables" className="station">
        {stations.map((stations) => (
          <div className="station-region" key={stations.id}>
            <div>
              <div className="stations-content">
                <Link to={stations.link}>
                  <div>
                    <img className="img-4" src={stations.image}></img>
                    <h1 className="text-4">{stations.location}</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content_three;

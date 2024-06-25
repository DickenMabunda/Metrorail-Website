
import { Link } from "react-router-dom";

const stationsList = [
  {
    title: "Pretoria - Pinnarsport",
    image: "/img-2.jpeg",
    link: "ptaPinnars",
    id: 1,
  },
  {
    title: "Pretoria - Mamelodi Gardens",
    image: "/img-2.jpeg",
    link: "ptaGardens",
    id: 2,
  },
  {
    title: "Pretoria - Mabopane",
    image: "/img-2.jpeg",
    link: "ptaMabopane",
    id: 3,
  },
  {
    title: "Pretoria - Irene & Kempton Park",
    image: "/img-2.jpeg",
    link: "ptaIrene",
    id: 3,
  },
  {
    title: "Pretoria - Saulsville",
    image: "/img-2.jpeg",
    link: "ptaSauseville",
    id: 4,
  },
  {
    title: "Pretoria - De Wildt",
    image: "/img-2.jpeg",
    link: "ptaDewildt",
    id: 5,
  },
];

const stationsListTwo =[
  {
    title: "Leralla - germiston/joburg",
    image: "/img-2.jpeg",
    link: "jbgGermiston",
    id: 1
  },
  {
    title: "Germiston - elsburg",
    image: "/img-2.jpeg",
    link: "jbgGermiston",
    id: 2
  },
  {
    title: "johannesburg - florida",
    image: "/img-2.jpeg",
    link: "jbgGermiston",
    id: 3
  },
  {
    title: "johannesburg - Midway",
    image: "/img-2.jpeg",
    link: "jbgGermiston",
    id: 4
  },
  {
    title: "johannesburg - Naledi",
    image: "/img-2.jpeg",
    link: "jbgGermiston",
    id: 5
  },
  
]

const Content_Four = () => {
  return (
    <>
      <div className="Pretoria-Station">
        {/* Pretoria stations */}
        <div>
          <h1 className="text-5">Pretoria Weekly Timetables</h1>
        </div>
        <div id="timetables" className="station">
          {stationsList.map((stations) => (
            <div className="station-region" key={stations.id}>
              <div>
                <div className="stations-content">
                  <div>
                    <Link to={stations.link}>
                      <div>
                        <img className="img-4" src={stations.image}></img>
                        <h1 className="text-4">{stations.title}</h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Johannesburg Stations */}
      <div className="Johannesburg-Station">
        {/* Pretoria stations */}
        <div>
          <h1 className="text-5">Johannesburg Weekly Timetables</h1>
        </div>
        <div id="timetables" className="station">
          {stationsListTwo.map((stations) => (
            <div className="station-region" key={stations.id}>
              <div>
                <div className="stations-content">
                  <div>
                    <Link to={stations.link}>
                      <div>
                        <img className="img-4" src={stations.image}></img>
                        <h1 className="text-4">{stations.title}</h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content_Four;

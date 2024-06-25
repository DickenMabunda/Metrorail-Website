import { useState } from "react";
import { Link } from "react-router-dom";

let Timetables = [
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "5:10",
      },
      {
        stationName: "sportpark",
        time: "5:22",
      },
      {
        stationName: "centurion",
        time: "5:26",
      },
      {
        stationName: "irene",
        time: "5:35",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "5:45",
      },
      {
        stationName: "centurion",
        time: "5:54",
      },
      {
        stationName: "sportpark",
        time: "5:58",
      },
      {
        stationName: "pretoria",
        time: "6:10",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "5:40",
      },
      {
        stationName: "sportpark",
        time: "5:51",
      },
      {
        stationName: "centurion",
        time: "5:55",
      },
      {
        stationName: "irene",
        time: "6:03",
      },
      {
        stationName: "kempton park",
        time: "6:40",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "6:50",
      },
      {
        stationName: "olifantsfontein",
        time: "7:14",
      },
      {
        stationName: "irene",
        time: "7:27",
      },
      {
        stationName: "centurion",
        time: "7:36",
      },
      {
        stationName: "sportpark",
        time: "7:39",
      },
      {
        stationName: "pretoria",
        time: "7:50",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "6:20",
      },
      {
        stationName: "sportpark",
        time: "6:32",
      },
      {
        stationName: "centurion",
        time: "6:36",
      },
      {
        stationName: "irene",
        time: "6:45",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "9:20",
      },
      {
        stationName: "centurion",
        time: "9:29",
      },
      {
        stationName: "sportpark",
        time: "9:33",
      },
      {
        stationName: "pretoria",
        time: "9:45",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "7:30",
      },
      {
        stationName: "sportpark",
        time: "7:42",
      },
      {
        stationName: "centurion",
        time: "7:46",
      },
      {
        stationName: "irene",
        time: "7:55",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "9:30",
      },
      {
        stationName: "olifantsfontein",
        time: "9:54",
      },
      {
        stationName: "irene",
        time: "10:07",
      },
      {
        stationName: "centurion",
        time: "10:16",
      },
      {
        stationName: "sportpark",
        time: "10:19",
      },
      {
        stationName: "pretoria",
        time: "10:30",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "8:10",
      },
      {
        stationName: "sportpark",
        time: "8:21",
      },
      {
        stationName: "centurion",
        time: "8:25",
      },
      {
        stationName: "irene",
        time: "8:33",
      },
      {
        stationName: "kempton park",
        time: "9:10",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "10:30",
      },
      {
        stationName: "centurion",
        time: "10:39",
      },
      {
        stationName: "sportpark",
        time: "10:43",
      },
      {
        stationName: "pretoria",
        time: "10:55",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "8:45",
      },
      {
        stationName: "sportpark",
        time: "8:57",
      },
      {
        stationName: "centurion",
        time: "9:01",
      },
      {
        stationName: "irene",
        time: "9:10",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "11:40",
      },
      {
        stationName: "centurion",
        time: "11:49",
      },
      {
        stationName: "sportpark",
        time: "11:53",
      },
      {
        stationName: "pretoria",
        time: "12:05",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "9:55",
      },
      {
        stationName: "sportpark",
        time: "10:07",
      },
      {
        stationName: "centurion",
        time: "10:11",
      },
      {
        stationName: "irene",
        time: "10:20",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "12:00",
      },
      {
        stationName: "olifantsfontein",
        time: "12:24",
      },
      {
        stationName: "irene",
        time: "12:37",
      },
      {
        stationName: "centurion",
        time: "12:46",
      },
      {
        stationName: "sportpark",
        time: "12:49",
      },
      {
        stationName: "pretoria",
        time: "13:00",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "10:45",
      },
      {
        stationName: "sportpark",
        time: "10:56",
      },
      {
        stationName: "centurion",
        time: "11:00",
      },
      {
        stationName: "irene",
        time: "11:08",
      },
      {
        stationName: "kempton park",
        time: "11:45",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "12:50",
      },
      {
        stationName: "centurion",
        time: "12:59",
      },
      {
        stationName: "sportpark",
        time: "13:03",
      },
      {
        stationName: "pretoria",
        time: "13:15",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "11:05",
      },
      {
        stationName: "sportpark",
        time: "11:17",
      },
      {
        stationName: "centurion",
        time: "11:21",
      },
      {
        stationName: "irene",
        time: "11:30",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "14:00",
      },
      {
        stationName: "centurion",
        time: "14:09",
      },
      {
        stationName: "sportpark",
        time: "14:13",
      },
      {
        stationName: "pretoria",
        time: "14:25",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "12:15",
      },
      {
        stationName: "sportpark",
        time: "12:27",
      },
      {
        stationName: "centurion",
        time: "12:31",
      },
      {
        stationName: "irene",
        time: "12:40",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "15:10",
      },
      {
        stationName: "centurion",
        time: "15:19",
      },
      {
        stationName: "sportpark",
        time: "15:23",
      },
      {
        stationName: "pretoria",
        time: "15:35",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "13:25",
      },
      {
        stationName: "sportpark",
        time: "13:37",
      },
      {
        stationName: "centurion",
        time: "13:41",
      },
      {
        stationName: "irene",
        time: "13:50",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "15:35",
      },
      {
        stationName: "olifantsfontein",
        time: "15:59",
      },
      {
        stationName: "irene",
        time: "16:12",
      },
      {
        stationName: "centurion",
        time: "16:21",
      },
      {
        stationName: "sportpark",
        time: "16:24",
      },
      {
        stationName: "pretoria",
        time: "16:35",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "14:20",
      },
      {
        stationName: "sportpark",
        time: "14:31",
      },
      {
        stationName: "centurion",
        time: "14:35",
      },
      {
        stationName: "irene",
        time: "14:43",
      },
      {
        stationName: "kempton park",
        time: "15:20",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "16:20",
      },
      {
        stationName: "centurion",
        time: "16:29",
      },
      {
        stationName: "sportpark",
        time: "16:33",
      },
      {
        stationName: "pretoria",
        time: "16:45",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "14:35",
      },
      {
        stationName: "sportpark",
        time: "14:47",
      },
      {
        stationName: "centurion",
        time: "14:51",
      },
      {
        stationName: "irene",
        time: "15:00",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "17:30",
      },
      {
        stationName: "centurion",
        time: "17:39",
      },
      {
        stationName: "sportpark",
        time: "17:43",
      },
      {
        stationName: "pretoria",
        time: "17:55",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "15:45",
      },
      {
        stationName: "sportpark",
        time: "15:57",
      },
      {
        stationName: "centurion",
        time: "16:01",
      },
      {
        stationName: "irene",
        time: "16:10",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "18:05",
      },
      {
        stationName: "olifantsfontein",
        time: "18:29",
      },
      {
        stationName: "irene",
        time: "18:42",
      },
      {
        stationName: "centurion",
        time: "18:51",
      },
      {
        stationName: "sportpark",
        time: "18:54",
      },
      {
        stationName: "pretoria",
        time: "19:05",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "16:50",
      },
      {
        stationName: "sportpark",
        time: "17:01",
      },
      {
        stationName: "centurion",
        time: "17:05",
      },
      {
        stationName: "irene",
        time: "17:13",
      },
      {
        stationName: "kempton park",
        time: "17:50",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "18:40",
      },
      {
        stationName: "centurion",
        time: "18:49",
      },
      {
        stationName: "sportpark",
        time: "18:53",
      },
      {
        stationName: "pretoria",
        time: "19:05",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "16:55",
      },
      {
        stationName: "sportpark",
        time: "17:07",
      },
      {
        stationName: "centurion",
        time: "17:11",
      },
      {
        stationName: "irene",
        time: "17:20",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "",
      },
      {
        stationName: "centurion",
        time: "",
      },
      {
        stationName: "sportpark",
        time: "",
      },
      {
        stationName: "pretoria",
        time: "",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Irene & kempton Park",
        stationName: "Pretoria",
        time: "18:05",
      },
      {
        stationName: "sportpark",
        time: "18:17",
      },
      {
        stationName: "centurion",
        time: "18:21",
      },
      {
        stationName: "irene",
        time: "18:30",
      },
      {
        stationName: "kempton park",
        time: "",
      },
    ],
    [
      {
        from: "Irene & kempton Park - pretoria",
        stationName: "kempton park",
        time: "",
      },
      {
        stationName: "olifantsfontein",
        time: "",
      },
      {
        stationName: "irene",
        time: "",
      },
      {
        stationName: "centurion",
        time: "",
      },
      {
        stationName: "sportpark",
        time: "",
      },
      {
        stationName: "pretoria",
        time: "",
      },
    ],
  ],
];

const Pta_Irene = () => {
  let [numbers, setNumbers] = useState(0);

  const handleNumbersTwo = () => {
    if (numbers != 0 && numbers >= 0) {
      setNumbers((numbers = numbers - 1));
    }

    console.log(numbers);
  };

  const handleNumbers = () => {
    if (numbers != Timetables.length - 1 && numbers < Timetables.length) {
      setNumbers((numbers = numbers + 1));
    }
  };

  return (
    <>
      <div className="timetables">
        <div className="route-major">
          <img className="img-4" src="/img-2.jpeg"></img>
          <h1 className="text-4">Pretoria - Irene & kempton Park</h1>
          <div className="button-area">
            <Link className="button1" to="/">
              Back home
            </Link>
            <button className="button2" onClick={handleNumbers}>
              Show More
            </button>
            <button className="button2" onClick={handleNumbersTwo}>
              Return back
            </button>
          </div>
        </div>
        <div className="route-major-2">
          <div>
            <div className="edit-major">
              {Timetables[numbers][0].map((stats) => (
                <div className="edit" key={stats.id}>
                  <div>
                    <h1 className="from">{stats.from}</h1>
                  </div>
                  <div className="edit-line">
                    <div>{stats.stationName}</div>
                    <div className="stats-time">{stats.time}</div>
                  </div>
                </div>
              ))}
              <div>
                {Timetables[numbers][0].map((stats) => {
                  if (stats.time === "10:45") {
                    return (
                      <div className="timetables-2">
                        Train only available from tuesday to thursday
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="edit-major">
            {Timetables[numbers][1].map((stats) => (
              <div className="edit">
                <div>
                  <h1 className="from">{stats.from}</h1>
                </div>
                <div className="edit-line">
                  <div>{stats.stationName}</div>
                  <div className="stats-time">{stats.time}</div>
                </div>
              </div>
            ))}
            <div>
              {Timetables[numbers][1].map((stats) => {
                if (stats.time === "12:00") {
                  return (
                    <div className="timetables-2">
                      Train only available from tuesday to thursday
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pta_Irene;

import { useState } from "react";
import { Link } from "react-router-dom";

let Timetables = [
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "4:30",
      },
      {
        stationName: "Mearsstraat",
        time: "4:34",
      },
      {
        stationName: "Devenshstraat",
        time: "4:35",
      },
      { stationName: "walkerstraat", time: "4:38" },
      { stationName: "loftus versfeld park", time: "4:40" },
      { stationName: "rissik", time: "4:43" },
      { stationName: "hartbeesspruit", time: "4:45" },
      { stationName: "koedoespoort", time: "4:50" },
      { stationName: "silverton", time: "5:07" },
      { stationName: "watloo", time: "5:11" },
      { stationName: "denneboom", time: "5:13" },
      { stationName: "e/fabrieke", time: "5:15" },
      { stationName: "mamelodi-gardens", time: "5:20" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "4:35",
      },
      { stationName: "e/fabrieke", time: "4:39" },
      { stationName: "denneboom", time: "4:42" },
      { stationName: "watloo", time: "4:44" },
      { stationName: "silverton", time: "4:47" },
      { stationName: "koedospoort", time: "4:50" },
      { stationName: "hartbeesspruit", time: "5:05" },
      { stationName: "rissik", time: "5:07" },
      { stationName: "loftus", time: "5:10" },
      { stationName: "walkerstraat", time: "5:13" },
      { stationName: "devenishstraat", time: "5:14" },
      { stationName: "mearsstraat", time: "5:16" },
      { stationName: "pretoria", time: "5:20" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "6:30",
      },
      {
        stationName: "Mearsstraat",
        time: "6:34",
      },
      {
        stationName: "Devenshstraat",
        time: "6:35",
      },
      { stationName: "walkerstraat", time: "6:38" },
      { stationName: "loftus versfeld park", time: "6:40" },
      { stationName: "rissik", time: "6:43" },
      { stationName: "hartbeesspruit", time: "6:45" },
      { stationName: "koedoespoort", time: "6:50" },
      { stationName: "silverton", time: "6:07" },
      { stationName: "watloo", time: "6:11" },
      { stationName: "denneboom", time: "6:13" },
      { stationName: "e/fabrieke", time: "6:15" },
      { stationName: "mamelodi-gardens", time: "6:20" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "5:35",
      },
      { stationName: "e/fabrieke", time: "5:39" },
      { stationName: "denneboom", time: "5:42" },
      { stationName: "watloo", time: "5:44" },
      { stationName: "silverton", time: "5:47" },
      { stationName: "koedospoort", time: "5:50" },
      { stationName: "hartbeesspruit", time: "6:05" },
      { stationName: "rissik", time: "6:07" },
      { stationName: "loftus", time: "6:10" },
      { stationName: "walkerstraat", time: "6:13" },
      { stationName: "devenishstraat", time: "6:14" },
      { stationName: "mearsstraat", time: "6:16" },
      { stationName: "pretoria", time: "6:20" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "6:40",
      },
      {
        stationName: "Mearsstraat",
        time: "6:44",
      },
      {
        stationName: "Devenshstraat",
        time: "6:45",
      },
      { stationName: "walkerstraat", time: "6:48" },
      { stationName: "loftus versfeld park", time: "6:50" },
      { stationName: "rissik", time: "6:53" },
      { stationName: "hartbeesspruit", time: "6:55" },
      { stationName: "koedoespoort", time: "7:00" },
      { stationName: "silverton", time: "7:17" },
      { stationName: "watloo", time: "7:21" },
      { stationName: "denneboom", time: "7:23" },
      { stationName: "e/fabrieke", time: "7:27" },
      { stationName: "mamelodi-gardens", time: "7:30" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "6:45",
      },
      { stationName: "e/fabrieke", time: "6:49" },
      { stationName: "denneboom", time: "6:52" },
      { stationName: "watloo", time: "6:54" },
      { stationName: "silverton", time: "6:57" },
      { stationName: "koedospoort", time: "7:00" },
      { stationName: "hartbeesspruit", time: "7:15" },
      { stationName: "rissik", time: "7:17" },
      { stationName: "loftus", time: "7:20" },
      { stationName: "walkerstraat", time: "7:23" },
      { stationName: "devenishstraat", time: "7:24" },
      { stationName: "mearsstraat", time: "7:26" },
      { stationName: "pretoria", time: "7:30" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "7:50",
      },
      {
        stationName: "Mearsstraat",
        time: "7:54",
      },
      {
        stationName: "Devenshstraat",
        time: "7:55",
      },
      { stationName: "walkerstraat", time: "7:58" },
      { stationName: "loftus versfeld park", time: "8:00" },
      { stationName: "rissik", time: "8:03" },
      { stationName: "hartbeesspruit", time: "8:05" },
      { stationName: "koedoespoort", time: "8:10" },
      { stationName: "silverton", time: "8:22" },
      { stationName: "watloo", time: "8:26" },
      { stationName: "denneboom", time: "8:28" },
      { stationName: "e/fabrieke", time: "8:32" },
      { stationName: "mamelodi-gardens", time: "8:35" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "7:55",
      },
      { stationName: "e/fabrieke", time: "7:59" },
      { stationName: "denneboom", time: "8:02" },
      { stationName: "watloo", time: "8:04" },
      { stationName: "silverton", time: "8:07" },
      { stationName: "koedospoort", time: "8:10" },
      { stationName: "hartbeesspruit", time: "8:25" },
      { stationName: "rissik", time: "8:27" },
      { stationName: "loftus", time: "8:30" },
      { stationName: "walkerstraat", time: "8:33" },
      { stationName: "devenishstraat", time: "8:34" },
      { stationName: "mearsstraat", time: "8:36" },
      { stationName: "pretoria", time: "8:40" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "15:30",
      },
      {
        stationName: "Mearsstraat",
        time: "15:34",
      },
      {
        stationName: "Devenshstraat",
        time: "15:35",
      },
      { stationName: "walkerstraat", time: "15:37" },
      { stationName: "loftus versfeld park", time: "15:40" },
      { stationName: "rissik", time: "15:42" },
      { stationName: "hartbeesspruit", time: "15:44" },
      { stationName: "koedoespoort", time: "15:49" },
      { stationName: "silverton", time: "15:52" },
      { stationName: "watloo", time: "15:56" },
      { stationName: "denneboom", time: "15:58" },
      { stationName: "e/fabrieke", time: "16:02" },
      { stationName: "mamelodi-gardens", time: "16:05" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "16:30",
      },
      { stationName: "e/fabrieke", time: "16:34" },
      { stationName: "denneboom", time: "16:37" },
      { stationName: "watloo", time: "16:39" },
      { stationName: "silverton", time: "16:42" },
      { stationName: "koedospoort", time: "16:45" },
      { stationName: "hartbeesspruit", time: "17:05" },
      { stationName: "rissik", time: "17:07" },
      { stationName: "loftus", time: "17:10" },
      { stationName: "walkerstraat", time: "17:13" },
      { stationName: "devenishstraat", time: "17:14" },
      { stationName: "mearsstraat", time: "17:16" },
      { stationName: "pretoria", time: "17:20" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "16:25",
      },
      {
        stationName: "Mearsstraat",
        time: "16:29",
      },
      {
        stationName: "Devenshstraat",
        time: "16:30",
      },
      { stationName: "walkerstraat", time: "16:33" },
      { stationName: "loftus versfeld park", time: "16:35" },
      { stationName: "rissik", time: "16:38" },
      { stationName: "hartbeesspruit", time: "16:40" },
      { stationName: "koedoespoort", time: "16:45" },
      { stationName: "silverton", time: "17:02" },
      { stationName: "watloo", time: "17:06" },
      { stationName: "denneboom", time: "17:08" },
      { stationName: "e/fabrieke", time: "17:12" },
      { stationName: "mamelodi-gardens", time: "17:15" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "17:40",
      },
      { stationName: "e/fabrieke", time: "17:44" },
      { stationName: "denneboom", time: "17:47" },
      { stationName: "watloo", time: "17:49" },
      { stationName: "silverton", time: "17:52" },
      { stationName: "koedospoort", time: "17:55" },
      { stationName: "hartbeesspruit", time: "18:15" },
      { stationName: "rissik", time: "18:17" },
      { stationName: "loftus", time: "18:20" },
      { stationName: "walkerstraat", time: "18:23" },
      { stationName: "devenishstraat", time: "18:24" },
      { stationName: "mearsstraat", time: "18:26" },
      { stationName: "pretoria", time: "18:30" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - mamelodi gardens",
        stationName: "Pretoria",
        time: "17:35",
      },
      {
        stationName: "Mearsstraat",
        time: "17:39",
      },
      {
        stationName: "Devenshstraat",
        time: "17:40",
      },
      { stationName: "walkerstraat", time: "17:43" },
      { stationName: "loftus versfeld park", time: "17:45" },
      { stationName: "rissik", time: "17:48" },
      { stationName: "hartbeesspruit", time: "17:50" },
      { stationName: "koedoespoort", time: "17:55" },
      { stationName: "silverton", time: "18:17" },
      { stationName: "watloo", time: "18:21" },
      { stationName: "denneboom", time: "18:23" },
      { stationName: "e/fabrieke", time: "18:27" },
      { stationName: "mamelodi-gardens", time: "18:30" },
    ],
    [
      {
        from: "mamelodi gardens - pretoria",
        stationName: "mamelodi-gardens",
        time: "",
      },
      { stationName: "e/fabrieke", time: "" },
      { stationName: "denneboom", time: "" },
      { stationName: "watloo", time: "" },
      { stationName: "silverton", time: "" },
      { stationName: "koedospoort", time: "" },
      { stationName: "hartbeesspruit", time: "" },
      { stationName: "rissik", time: "" },
      { stationName: "loftus", time: "" },
      { stationName: "walkerstraat", time: "" },
      { stationName: "devenishstraat", time: "" },
      { stationName: "mearsstraat", time: "" },
      { stationName: "pretoria", time: "" },
    ],
  ],
];

const Pta_Gardens = () => {
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
          <h1 className="text-4">Pretoria - Mamelodi gardens</h1>
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
                    <div className="from-edit">
                      <h1 className="from">{stats.from}</h1>
                    </div>
                  </div>
                  <div className="edit-line">
                    <div>{stats.stationName}</div>
                    <div className="stats-time">{stats.time}</div>
                  </div>
                </div>
              ))}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Pta_Gardens;

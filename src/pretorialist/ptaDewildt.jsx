import { useState } from "react";
import { Link } from "react-router-dom";

let Timetables = [
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "5:35",
      },
      {
        stationName: "pretoria west",
        time: "5:41",
      },
      {
        stationName: "hercules",
        time: "5:48",
      },
      {
        stationName: "montain view",
        time: "5:53",
      },
      {
        stationName: "pretoria north",
        time: "6:00",
      },
      {
        stationName: "wolmerton",
        time: "6:04",
      },
      {
        stationName: "wintersnest",
        time: "6:10",
      },
      {
        stationName: "rosslyn",
        time: "6:15",
      },
      {
        stationName: "ga rankuwa",
        time: "6:26",
      },
      {
        stationName: "taillardshoop",
        time: "6:30",
      },
      {
        stationName: "de wildt",
        time: "6:35",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "4:25",
      },
      {
        stationName: "taillardshoop",
        time: "4:30",
      },
      {
        stationName: "ga rankuwa",
        time: "4:33",
      },
      {
        stationName: "rosslyn",
        time: "4:45",
      },
      {
        stationName: "wintersnest",
        time: "4:50",
      },
      {
        stationName: "wolmerton",
        time: "4:56",
      },
      {
        stationName: "pretoria north",
        time: "5:00",
      },
      {
        stationName: "montain view",
        time: "5:07",
      },
      {
        stationName: "hercules",
        time: "5:12",
      },
      {
        stationName: "pretoria west",
        time: "5:19",
      },
      {
        stationName: "pretoria",
        time: "5:25",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "6:10",
      },
      {
        stationName: "pretoria west",
        time: "6:16",
      },
      {
        stationName: "hercules",
        time: "6:23",
      },
      {
        stationName: "montain view",
        time: "6:28",
      },
      {
        stationName: "pretoria north",
        time: "6:35",
      },
      {
        stationName: "wolmerton",
        time: "6:39",
      },
      {
        stationName: "wintersnest",
        time: "6:45",
      },
      {
        stationName: "rosslyn",
        time: "6:50",
      },
      {
        stationName: "ga rankuwa",
        time: "7:01",
      },
      {
        stationName: "taillardshoop",
        time: "7:05",
      },
      {
        stationName: "de wildt",
        time: "7:10",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "5:00",
      },
      {
        stationName: "taillardshoop",
        time: "5:05",
      },
      {
        stationName: "ga rankuwa",
        time: "5:08",
      },
      {
        stationName: "rosslyn",
        time: "5:20",
      },
      {
        stationName: "wintersnest",
        time: "5:25",
      },
      {
        stationName: "wolmerton",
        time: "5:31",
      },
      {
        stationName: "pretoria north",
        time: "5:35",
      },
      {
        stationName: "montain view",
        time: "5:42",
      },
      {
        stationName: "hercules",
        time: "5:47",
      },
      {
        stationName: "pretoria west",
        time: "5:54",
      },
      {
        stationName: "pretoria",
        time: "6:00",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "6:45",
      },
      {
        stationName: "pretoria west",
        time: "6:51",
      },
      {
        stationName: "hercules",
        time: "6:58",
      },
      {
        stationName: "montain view",
        time: "7:03",
      },
      {
        stationName: "pretoria north",
        time: "7:10",
      },
      {
        stationName: "wolmerton",
        time: "7:14",
      },
      {
        stationName: "wintersnest",
        time: "7:20",
      },
      {
        stationName: "rosslyn",
        time: "7:25",
      },
      {
        stationName: "ga rankuwa",
        time: "7:36",
      },
      {
        stationName: "taillardshoop",
        time: "7:40",
      },
      {
        stationName: "de wildt",
        time: "7:45",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "5:35",
      },
      {
        stationName: "taillardshoop",
        time: "5:40",
      },
      {
        stationName: "ga rankuwa",
        time: "5:43",
      },
      {
        stationName: "rosslyn",
        time: "5:55",
      },
      {
        stationName: "wintersnest",
        time: "6:00",
      },
      {
        stationName: "wolmerton",
        time: "6:06",
      },
      {
        stationName: "pretoria north",
        time: "6:10",
      },
      {
        stationName: "montain view",
        time: "6:17",
      },
      {
        stationName: "hercules",
        time: "6:22",
      },
      {
        stationName: "pretoria west",
        time: "6:29",
      },
      {
        stationName: "pretoria",
        time: "6:35",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "7:20",
      },
      {
        stationName: "pretoria west",
        time: "7:26",
      },
      {
        stationName: "hercules",
        time: "7:33",
      },
      {
        stationName: "montain view",
        time: "7:38",
      },
      {
        stationName: "pretoria north",
        time: "7:45",
      },
      {
        stationName: "wolmerton",
        time: "7:49",
      },
      {
        stationName: "wintersnest",
        time: "7:55",
      },
      {
        stationName: "rosslyn",
        time: "8:00",
      },
      {
        stationName: "ga rankuwa",
        time: "8:11",
      },
      {
        stationName: "taillardshoop",
        time: "8:15",
      },
      {
        stationName: "de wildt",
        time: "8:20",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "6:10",
      },
      {
        stationName: "taillardshoop",
        time: "6:15",
      },
      {
        stationName: "ga rankuwa",
        time: "6:18",
      },
      {
        stationName: "rosslyn",
        time: "6:30",
      },
      {
        stationName: "wintersnest",
        time: "6:35",
      },
      {
        stationName: "wolmerton",
        time: "6:41",
      },
      {
        stationName: "pretoria north",
        time: "6:45",
      },
      {
        stationName: "montain view",
        time: "6:52",
      },
      {
        stationName: "hercules",
        time: "6:57",
      },
      {
        stationName: "pretoria west",
        time: "7:04",
      },
      {
        stationName: "pretoria",
        time: "7:10",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "7:55",
      },
      {
        stationName: "pretoria west",
        time: "8:01",
      },
      {
        stationName: "hercules",
        time: "8:08",
      },
      {
        stationName: "montain view",
        time: "8:13",
      },
      {
        stationName: "pretoria north",
        time: "8:20",
      },
      {
        stationName: "wolmerton",
        time: "8:24",
      },
      {
        stationName: "wintersnest",
        time: "8:30",
      },
      {
        stationName: "rosslyn",
        time: "8:35",
      },
      {
        stationName: "ga rankuwa",
        time: "8:46",
      },
      {
        stationName: "taillardshoop",
        time: "8:50",
      },
      {
        stationName: "de wildt",
        time: "8:55",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "6:45",
      },
      {
        stationName: "taillardshoop",
        time: "6:50",
      },
      {
        stationName: "ga rankuwa",
        time: "6:53",
      },
      {
        stationName: "rosslyn",
        time: "7:05",
      },
      {
        stationName: "wintersnest",
        time: "7:10",
      },
      {
        stationName: "wolmerton",
        time: "7:16",
      },
      {
        stationName: "pretoria north",
        time: "7:20",
      },
      {
        stationName: "montain view",
        time: "7:27",
      },
      {
        stationName: "hercules",
        time: "7:32",
      },
      {
        stationName: "pretoria west",
        time: "7:39",
      },
      {
        stationName: "pretoria",
        time: "7:45",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "8:30",
      },
      {
        stationName: "pretoria west",
        time: "8:36",
      },
      {
        stationName: "hercules",
        time: "8:43",
      },
      {
        stationName: "montain view",
        time: "8:48",
      },
      {
        stationName: "pretoria north",
        time: "8:55",
      },
      {
        stationName: "wolmerton",
        time: "8:59",
      },
      {
        stationName: "wintersnest",
        time: "9:05",
      },
      {
        stationName: "rosslyn",
        time: "9:10",
      },
      {
        stationName: "ga rankuwa",
        time: "9:21",
      },
      {
        stationName: "taillardshoop",
        time: "9:25",
      },
      {
        stationName: "de wildt",
        time: "9:30",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "7:20",
      },
      {
        stationName: "taillardshoop",
        time: "7:25",
      },
      {
        stationName: "ga rankuwa",
        time: "7:28",
      },
      {
        stationName: "rosslyn",
        time: "7:40",
      },
      {
        stationName: "wintersnest",
        time: "7:45",
      },
      {
        stationName: "wolmerton",
        time: "7:51",
      },
      {
        stationName: "pretoria north",
        time: "7:55",
      },
      {
        stationName: "montain view",
        time: "8:02",
      },
      {
        stationName: "hercules",
        time: "8:07",
      },
      {
        stationName: "pretoria west",
        time: "8:14",
      },
      {
        stationName: "pretoria",
        time: "8:20",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "9:05",
      },
      {
        stationName: "pretoria west",
        time: "9:11",
      },
      {
        stationName: "hercules",
        time: "9:18",
      },
      {
        stationName: "montain view",
        time: "9:23",
      },
      {
        stationName: "pretoria north",
        time: "9:30",
      },
      {
        stationName: "wolmerton",
        time: "9:34",
      },
      {
        stationName: "wintersnest",
        time: "9:40",
      },
      {
        stationName: "rosslyn",
        time: "9:45",
      },
      {
        stationName: "ga rankuwa",
        time: "9:56",
      },
      {
        stationName: "taillardshoop",
        time: "10:00",
      },
      {
        stationName: "de wildt",
        time: "10:05",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "7:55",
      },
      {
        stationName: "taillardshoop",
        time: "8:00",
      },
      {
        stationName: "ga rankuwa",
        time: "8:03",
      },
      {
        stationName: "rosslyn",
        time: "8:15",
      },
      {
        stationName: "wintersnest",
        time: "8:20",
      },
      {
        stationName: "wolmerton",
        time: "8:26",
      },
      {
        stationName: "pretoria north",
        time: "8:30",
      },
      {
        stationName: "montain view",
        time: "8:37",
      },
      {
        stationName: "hercules",
        time: "8:42",
      },
      {
        stationName: "pretoria west",
        time: "8:49",
      },
      {
        stationName: "pretoria",
        time: "8:55",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "11:25",
      },
      {
        stationName: "pretoria west",
        time: "11:31",
      },
      {
        stationName: "hercules",
        time: "11:38",
      },
      {
        stationName: "montain view",
        time: "11:43",
      },
      {
        stationName: "pretoria north",
        time: "11:50",
      },
      {
        stationName: "wolmerton",
        time: "11:54",
      },
      {
        stationName: "wintersnest",
        time: "12:00",
      },
      {
        stationName: "rosslyn",
        time: "12:05",
      },
      {
        stationName: "ga rankuwa",
        time: "12:16",
      },
      {
        stationName: "taillardshoop",
        time: "12:20",
      },
      {
        stationName: "de wildt",
        time: "12:25",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "8:30",
      },
      {
        stationName: "taillardshoop",
        time: "8:35",
      },
      {
        stationName: "ga rankuwa",
        time: "8:38",
      },
      {
        stationName: "rosslyn",
        time: "8:50",
      },
      {
        stationName: "wintersnest",
        time: "8:55",
      },
      {
        stationName: "wolmerton",
        time: "9:01",
      },
      {
        stationName: "pretoria north",
        time: "9:05",
      },
      {
        stationName: "montain view",
        time: "9:12",
      },
      {
        stationName: "hercules",
        time: "9:17",
      },
      {
        stationName: "pretoria west",
        time: "9:24",
      },
      {
        stationName: "pretoria",
        time: "9:30",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "13:45",
      },
      {
        stationName: "pretoria west",
        time: "13:51",
      },
      {
        stationName: "hercules",
        time: "13:58",
      },
      {
        stationName: "montain view",
        time: "14:03",
      },
      {
        stationName: "pretoria north",
        time: "14:10",
      },
      {
        stationName: "wolmerton",
        time: "14:14",
      },
      {
        stationName: "wintersnest",
        time: "14:20",
      },
      {
        stationName: "rosslyn",
        time: "14:25",
      },
      {
        stationName: "ga rankuwa",
        time: "14:36",
      },
      {
        stationName: "taillardshoop",
        time: "14:40",
      },
      {
        stationName: "de wildt",
        time: "14:45",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "10:15",
      },
      {
        stationName: "taillardshoop",
        time: "10:20",
      },
      {
        stationName: "ga rankuwa",
        time: "10:23",
      },
      {
        stationName: "rosslyn",
        time: "10:35",
      },
      {
        stationName: "wintersnest",
        time: "10:40",
      },
      {
        stationName: "wolmerton",
        time: "10:46",
      },
      {
        stationName: "pretoria north",
        time: "10:50",
      },
      {
        stationName: "montain view",
        time: "10:57",
      },
      {
        stationName: "hercules",
        time: "11:02",
      },
      {
        stationName: "pretoria west",
        time: "11:09",
      },
      {
        stationName: "pretoria",
        time: "11:15",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "14:55",
      },
      {
        stationName: "pretoria west",
        time: "15:01",
      },
      {
        stationName: "hercules",
        time: "15:08",
      },
      {
        stationName: "montain view",
        time: "15:13",
      },
      {
        stationName: "pretoria north",
        time: "15:20",
      },
      {
        stationName: "wolmerton",
        time: "15:24",
      },
      {
        stationName: "wintersnest",
        time: "15:30",
      },
      {
        stationName: "rosslyn",
        time: "15:35",
      },
      {
        stationName: "ga rankuwa",
        time: "15:46",
      },
      {
        stationName: "taillardshoop",
        time: "15:50",
      },
      {
        stationName: "de wildt",
        time: "15:55",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "12:35",
      },
      {
        stationName: "taillardshoop",
        time: "12:40",
      },
      {
        stationName: "ga rankuwa",
        time: "12:43",
      },
      {
        stationName: "rosslyn",
        time: "13:55",
      },
      {
        stationName: "wintersnest",
        time: "13:00",
      },
      {
        stationName: "wolmerton",
        time: "13:06",
      },
      {
        stationName: "pretoria north",
        time: "13:10",
      },
      {
        stationName: "montain view",
        time: "13:17",
      },
      {
        stationName: "hercules",
        time: "13:22",
      },
      {
        stationName: "pretoria west",
        time: "13:29",
      },
      {
        stationName: "pretoria",
        time: "13:35",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "15:30",
      },
      {
        stationName: "pretoria west",
        time: "15:36",
      },
      {
        stationName: "hercules",
        time: "15:43",
      },
      {
        stationName: "montain view",
        time: "15:48",
      },
      {
        stationName: "pretoria north",
        time: "15:55",
      },
      {
        stationName: "wolmerton",
        time: "15:59",
      },
      {
        stationName: "wintersnest",
        time: "16:05",
      },
      {
        stationName: "rosslyn",
        time: "16:10",
      },
      {
        stationName: "ga rankuwa",
        time: "16:21",
      },
      {
        stationName: "taillardshoop",
        time: "16:25",
      },
      {
        stationName: "de wildt",
        time: "16:30",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "",
      },
      {
        stationName: "taillardshoop",
        time: "",
      },
      {
        stationName: "ga rankuwa",
        time: "",
      },
      {
        stationName: "rosslyn",
        time: "",
      },
      {
        stationName: "wintersnest",
        time: "",
      },
      {
        stationName: "wolmerton",
        time: "",
      },
      {
        stationName: "pretoria north",
        time: "14:55",
      },
      {
        stationName: "montain view",
        time: "15:02",
      },
      {
        stationName: "hercules",
        time: "15:06",
      },
      {
        stationName: "pretoria west",
        time: "15:14",
      },
      {
        stationName: "pretoria",
        time: "15:20",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "16:05",
      },
      {
        stationName: "pretoria west",
        time: "16:11",
      },
      {
        stationName: "hercules",
        time: "16:18",
      },
      {
        stationName: "montain view",
        time: "16:23",
      },
      {
        stationName: "pretoria north",
        time: "16:30",
      },
      {
        stationName: "wolmerton",
        time: "16:34",
      },
      {
        stationName: "wintersnest",
        time: "16:40",
      },
      {
        stationName: "rosslyn",
        time: "16:45",
      },
      {
        stationName: "ga rankuwa",
        time: "16:56",
      },
      {
        stationName: "taillardshoop",
        time: "17:00",
      },
      {
        stationName: "de wildt",
        time: "17:05",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "14:55",
      },
      {
        stationName: "taillardshoop",
        time: "15:00",
      },
      {
        stationName: "ga rankuwa",
        time: "15:03",
      },
      {
        stationName: "rosslyn",
        time: "15:15",
      },
      {
        stationName: "wintersnest",
        time: "15:20",
      },
      {
        stationName: "wolmerton",
        time: "15:26",
      },
      {
        stationName: "pretoria north",
        time: "15:30",
      },
      {
        stationName: "montain view",
        time: "15:37",
      },
      {
        stationName: "hercules",
        time: "15:42",
      },
      {
        stationName: "pretoria west",
        time: "15:49",
      },
      {
        stationName: "pretoria",
        time: "15:55",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "16:40",
      },
      {
        stationName: "pretoria west",
        time: "16:46",
      },
      {
        stationName: "hercules",
        time: "16:53",
      },
      {
        stationName: "montain view",
        time: "16:58",
      },
      {
        stationName: "pretoria north",
        time: "17:05",
      },
      {
        stationName: "wolmerton",
        time: "17:09",
      },
      {
        stationName: "wintersnest",
        time: "17:15",
      },
      {
        stationName: "rosslyn",
        time: "17:20",
      },
      {
        stationName: "ga rankuwa",
        time: "17:31",
      },
      {
        stationName: "taillardshoop",
        time: "17:35",
      },
      {
        stationName: "de wildt",
        time: "17:40",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "15:30",
      },
      {
        stationName: "taillardshoop",
        time: "15:35",
      },
      {
        stationName: "ga rankuwa",
        time: "15:38",
      },
      {
        stationName: "rosslyn",
        time: "15:50",
      },
      {
        stationName: "wintersnest",
        time: "15:55",
      },
      {
        stationName: "wolmerton",
        time: "16:01",
      },
      {
        stationName: "pretoria north",
        time: "16:05",
      },
      {
        stationName: "montain view",
        time: "16:12",
      },
      {
        stationName: "hercules",
        time: "16:17",
      },
      {
        stationName: "pretoria west",
        time: "16:24",
      },
      {
        stationName: "pretoria",
        time: "16:30",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "17:15",
      },
      {
        stationName: "pretoria west",
        time: "17:21",
      },
      {
        stationName: "hercules",
        time: "17:28",
      },
      {
        stationName: "montain view",
        time: "17:33",
      },
      {
        stationName: "pretoria north",
        time: "17:40",
      },
      {
        stationName: "wolmerton",
        time: "17:44",
      },
      {
        stationName: "wintersnest",
        time: "17:50",
      },
      {
        stationName: "rosslyn",
        time: "17:55",
      },
      {
        stationName: "ga rankuwa",
        time: "18:06",
      },
      {
        stationName: "taillardshoop",
        time: "18:10",
      },
      {
        stationName: "de wildt",
        time: "18:15",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "16:05",
      },
      {
        stationName: "taillardshoop",
        time: "16:10",
      },
      {
        stationName: "ga rankuwa",
        time: "16:13",
      },
      {
        stationName: "rosslyn",
        time: "16:25",
      },
      {
        stationName: "wintersnest",
        time: "16:30",
      },
      {
        stationName: "wolmerton",
        time: "16:36",
      },
      {
        stationName: "pretoria north",
        time: "16:40",
      },
      {
        stationName: "montain view",
        time: "16:47",
      },
      {
        stationName: "hercules",
        time: "16:52",
      },
      {
        stationName: "pretoria west",
        time: "16:59",
      },
      {
        stationName: "pretoria",
        time: "17:05",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "17:50",
      },
      {
        stationName: "pretoria west",
        time: "17:56",
      },
      {
        stationName: "hercules",
        time: "18:03",
      },
      {
        stationName: "montain view",
        time: "18:08",
      },
      {
        stationName: "pretoria north",
        time: "18:15",
      },
      {
        stationName: "wolmerton",
        time: "18:19",
      },
      {
        stationName: "wintersnest",
        time: "18:25",
      },
      {
        stationName: "rosslyn",
        time: "18:30",
      },
      {
        stationName: "ga rankuwa",
        time: "18:41",
      },
      {
        stationName: "taillardshoop",
        time: "18:45",
      },
      {
        stationName: "de wildt",
        time: "18:50",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "16:40",
      },
      {
        stationName: "taillardshoop",
        time: "16:45",
      },
      {
        stationName: "ga rankuwa",
        time: "16:48",
      },
      {
        stationName: "rosslyn",
        time: "17:00",
      },
      {
        stationName: "wintersnest",
        time: "17:05",
      },
      {
        stationName: "wolmerton",
        time: "17:11",
      },
      {
        stationName: "pretoria north",
        time: "17:15",
      },
      {
        stationName: "montain view",
        time: "17:22",
      },
      {
        stationName: "hercules",
        time: "17:27",
      },
      {
        stationName: "pretoria west",
        time: "17:34",
      },
      {
        stationName: "pretoria",
        time: "17:40",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "18:25",
      },
      {
        stationName: "pretoria west",
        time: "18:31",
      },
      {
        stationName: "hercules",
        time: "18:38",
      },
      {
        stationName: "montain view",
        time: "18:43",
      },
      {
        stationName: "pretoria north",
        time: "18:50",
      },
      {
        stationName: "wolmerton",
        time: "18:54",
      },
      {
        stationName: "wintersnest",
        time: "19:00",
      },
      {
        stationName: "rosslyn",
        time: "19:05",
      },
      {
        stationName: "ga rankuwa",
        time: "19:16",
      },
      {
        stationName: "taillardshoop",
        time: "19:20",
      },
      {
        stationName: "de wildt",
        time: "19:25",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "17:15",
      },
      {
        stationName: "taillardshoop",
        time: "17:20",
      },
      {
        stationName: "ga rankuwa",
        time: "17:23",
      },
      {
        stationName: "rosslyn",
        time: "17:35",
      },
      {
        stationName: "wintersnest",
        time: "17:40",
      },
      {
        stationName: "wolmerton",
        time: "17:46",
      },
      {
        stationName: "pretoria north",
        time: "17:50",
      },
      {
        stationName: "montain view",
        time: "17:57",
      },
      {
        stationName: "hercules",
        time: "18:02",
      },
      {
        stationName: "pretoria west",
        time: "18:09",
      },
      {
        stationName: "pretoria",
        time: "18:15",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - De wildt",
        stationName: "Pretoria",
        time: "19:20",
      },
      {
        stationName: "pretoria west",
        time: "19:26",
      },
      {
        stationName: "hercules",
        time: "19:33",
      },
      {
        stationName: "montain view",
        time: "19:38",
      },
      {
        stationName: "pretoria north",
        time: "19:45",
      },
      {
        stationName: "wolmerton",
        time: "19:49",
      },
      {
        stationName: "wintersnest",
        time: "19:55",
      },
      {
        stationName: "rosslyn",
        time: "20:00",
      },
      {
        stationName: "ga rankuwa",
        time: "20:10",
      },
      {
        stationName: "taillardshoop",
        time: "20:15",
      },
      {
        stationName: "de wildt",
        time: "20:20",
      },
    ],
    [
      {
        from: "De wildt - pretoria",
        stationName: "de wildt",
        time: "17:50",
      },
      {
        stationName: "taillardshoop",
        time: "17:55",
      },
      {
        stationName: "ga rankuwa",
        time: "17:58",
      },
      {
        stationName: "rosslyn",
        time: "18:10",
      },
      {
        stationName: "wintersnest",
        time: "18:15",
      },
      {
        stationName: "wolmerton",
        time: "18:21",
      },
      {
        stationName: "pretoria north",
        time: "18:25",
      },
      {
        stationName: "montain view",
        time: "18:32",
      },
      {
        stationName: "hercules",
        time: "18:37",
      },
      {
        stationName: "pretoria west",
        time: "18:44",
      },
      {
        stationName: "pretoria",
        time: "18:50",
      },
    ],
  ],
];

const Pta_Deweldt = () => {
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
          <h1 className="text-4">Pretoria - De Wildt</h1>
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

export default Pta_Deweldt;

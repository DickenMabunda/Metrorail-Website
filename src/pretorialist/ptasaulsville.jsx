import {
  useState
} from "react";
import {
  Link
} from "react-router-dom";


let Timetables = [
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "5:15",
      },
      {
        stationName: "pretoria west",
        time: "5:20",
      },
      {
        stationName: "rebecca",
        time: "5:24",
      },
      {
        stationName: "electro",
        time: "5:26",
      },
      {
        stationName: "oor delfos",
        time: "5:29",
      },
      {
        stationName: "kalafong",
        time: "5:35",
      },
      {
        stationName: "atteridgeville",
        time: "5:37",
      },
      {
        stationName: "saulsville",
        time: "5:40",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "4:40",
      },
      {
        stationName: "atteridgeville",
        time: "4:42",
      },
      {
        stationName: "kalafong",
        time: "4:44",
      },
      {
        stationName: "oor delfos",
        time: "4:50",
      },
      {
        stationName: "electro",
        time: "4:53",
      },
      {
        stationName: "rebecca",
        time: "4:54",
      },
      {
        stationName: "pretoria west",
        time: "5:58",
      },
      {
        stationName: "pretoria",
        time: "5:02",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "5:50",
      },
      {
        stationName: "pretoria west",
        time: "5:55",
      },
      {
        stationName: "rebecca",
        time: "5:59",
      },
      {
        stationName: "electro",
        time: "6:01",
      },
      {
        stationName: "oor delfos",
        time: "6:04",
      },
      {
        stationName: "kalafong",
        time: "6:10",
      },
      {
        stationName: "atteridgeville",
        time: "6:12",
      },
      {
        stationName: "saulsville",
        time: "6:15",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "5:15",
      },
      {
        stationName: "atteridgeville",
        time: "5:18",
      },
      {
        stationName: "kalafong",
        time: "5:20",
      },
      {
        stationName: "oor delfos",
        time: "5:27",
      },
      {
        stationName: "electro",
        time: "5:29",
      },
      {
        stationName: "rebecca",
        time: "5:31",
      },
      {
        stationName: "pretoria west",
        time: "5:35",
      },
      {
        stationName: "pretoria",
        time: "5:40",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "6:25",
      },
      {
        stationName: "pretoria west",
        time: "6:30",
      },
      {
        stationName: "rebecca",
        time: "6:34",
      },
      {
        stationName: "electro",
        time: "6:36",
      },
      {
        stationName: "oor delfos",
        time: "6:39",
      },
      {
        stationName: "kalafong",
        time: "6:45",
      },
      {
        stationName: "atteridgeville",
        time: "6:47",
      },
      {
        stationName: "saulsville",
        time: "6:50",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "5:50",
      },
      {
        stationName: "atteridgeville",
        time: "5:53",
      },
      {
        stationName: "kalafong",
        time: "5:55",
      },
      {
        stationName: "oor delfos",
        time: "6:02",
      },
      {
        stationName: "electro",
        time: "6:04",
      },
      {
        stationName: "rebecca",
        time: "6:06",
      },
      {
        stationName: "pretoria west",
        time: "6:10",
      },
      {
        stationName: "pretoria",
        time: "6:15",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "7:00",
      },
      {
        stationName: "pretoria west",
        time: "7:03",
      },
      {
        stationName: "rebecca",
        time: "7:05",
      },
      {
        stationName: "electro",
        time: "7:12",
      },
      {
        stationName: "oor delfos",
        time: "7:14",
      },
      {
        stationName: "kalafong",
        time: "7:16",
      },
      {
        stationName: "atteridgeville",
        time: "7:20",
      },
      {
        stationName: "saulsville",
        time: "7:25",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "6:25",
      },
      {
        stationName: "atteridgeville",
        time: "6:28",
      },
      {
        stationName: "kalafong",
        time: "6:30",
      },
      {
        stationName: "oor delfos",
        time: "6:37",
      },
      {
        stationName: "electro",
        time: "6:39",
      },
      {
        stationName: "rebecca",
        time: "6:41",
      },
      {
        stationName: "pretoria west",
        time: "6:45",
      },
      {
        stationName: "pretoria",
        time: "6:50",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "7:35",
      },
      {
        stationName: "pretoria west",
        time: "7:38",
      },
      {
        stationName: "rebecca",
        time: "7:40",
      },
      {
        stationName: "electro",
        time: "7:47",
      },
      {
        stationName: "oor delfos",
        time: "7:49",
      },
      {
        stationName: "kalafong",
        time: "7:51",
      },
      {
        stationName: "atteridgeville",
        time: "7:55",
      },
      {
        stationName: "saulsville",
        time: "8:00",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "7:35",
      },
      {
        stationName: "atteridgeville",
        time: "7:38",
      },
      {
        stationName: "kalafong",
        time: "7:40",
      },
      {
        stationName: "oor delfos",
        time: "7:47",
      },
      {
        stationName: "electro",
        time: "7:49",
      },
      {
        stationName: "rebecca",
        time: "7:51",
      },
      {
        stationName: "pretoria west",
        time: "7:55",
      },
      {
        stationName: "pretoria",
        time: "8:00",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "8:10",
      },
      {
        stationName: "pretoria west",
        time: "8:13",
      },
      {
        stationName: "rebecca",
        time: "8:15",
      },
      {
        stationName: "electro",
        time: "8:22",
      },
      {
        stationName: "oor delfos",
        time: "8:24",
      },
      {
        stationName: "kalafong",
        time: "8:26",
      },
      {
        stationName: "atteridgeville",
        time: "8:30",
      },
      {
        stationName: "saulsville",
        time: "8:35",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "8:10",
      },
      {
        stationName: "atteridgeville",
        time: "8:13",
      },
      {
        stationName: "kalafong",
        time: "8:15",
      },
      {
        stationName: "oor delfos",
        time: "8:22",
      },
      {
        stationName: "electro",
        time: "8:24",
      },
      {
        stationName: "rebecca",
        time: "8:26",
      },
      {
        stationName: "pretoria west",
        time: "8:30",
      },
      {
        stationName: "pretoria",
        time: "8:35",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "8:45",
      },
      {
        stationName: "pretoria west",
        time: "8:48",
      },
      {
        stationName: "rebecca",
        time: "8:50",
      },
      {
        stationName: "electro",
        time: "8:57",
      },
      {
        stationName: "oor delfos",
        time: "8:59",
      },
      {
        stationName: "kalafong",
        time: "9:01",
      },
      {
        stationName: "atteridgeville",
        time: "9:05",
      },
      {
        stationName: "saulsville",
        time: "9:10",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "8:45",
      },
      {
        stationName: "atteridgeville",
        time: "8:48",
      },
      {
        stationName: "kalafong",
        time: "8:50",
      },
      {
        stationName: "oor delfos",
        time: "8:57",
      },
      {
        stationName: "electro",
        time: "8:59",
      },
      {
        stationName: "rebecca",
        time: "9:01",
      },
      {
        stationName: "pretoria west",
        time: "9:05",
      },
      {
        stationName: "pretoria",
        time: "9:10",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "9:20",
      },
      {
        stationName: "pretoria west",
        time: "9:23",
      },
      {
        stationName: "rebecca",
        time: "9:25",
      },
      {
        stationName: "electro",
        time: "9:32",
      },
      {
        stationName: "oor delfos",
        time: "9:34",
      },
      {
        stationName: "kalafong",
        time: "9:36",
      },
      {
        stationName: "atteridgeville",
        time: "9:40",
      },
      {
        stationName: "saulsville",
        time: "9:45",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "9:20",
      },
      {
        stationName: "atteridgeville",
        time: "9:23",
      },
      {
        stationName: "kalafong",
        time: "9:25",
      },
      {
        stationName: "oor delfos",
        time: "9:32",
      },
      {
        stationName: "electro",
        time: "9:34",
      },
      {
        stationName: "rebecca",
        time: "9:36",
      },
      {
        stationName: "pretoria west",
        time: "9:40",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "10:30",
      },
      {
        stationName: "pretoria west",
        time: "10:33",
      },
      {
        stationName: "rebecca",
        time: "10:35",
      },
      {
        stationName: "electro",
        time: "10:42",
      },
      {
        stationName: "oor delfos",
        time: "10:44",
      },
      {
        stationName: "kalafong",
        time: "10:46",
      },
      {
        stationName: "atteridgeville",
        time: "10:50",
      },
      {
        stationName: "saulsville",
        time: "10:55",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "10:30",
      },
      {
        stationName: "atteridgeville",
        time: "10:33",
      },
      {
        stationName: "kalafong",
        time: "10:35",
      },
      {
        stationName: "oor delfos",
        time: "10:42",
      },
      {
        stationName: "electro",
        time: "10:44",
      },
      {
        stationName: "rebecca",
        time: "10:46",
      },
      {
        stationName: "pretoria west",
        time: "10:50",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "11:40",
      },
      {
        stationName: "pretoria west",
        time: "11:43",
      },
      {
        stationName: "rebecca",
        time: "11:45",
      },
      {
        stationName: "electro",
        time: "11:52",
      },
      {
        stationName: "oor delfos",
        time: "11:54",
      },
      {
        stationName: "kalafong",
        time: "11:56",
      },
      {
        stationName: "atteridgeville",
        time: "12:00",
      },
      {
        stationName: "saulsville",
        time: "12:05",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "11:40",
      },
      {
        stationName: "atteridgeville",
        time: "11:43",
      },
      {
        stationName: "kalafong",
        time: "11:45",
      },
      {
        stationName: "oor delfos",
        time: "11:52",
      },
      {
        stationName: "electro",
        time: "11:54",
      },
      {
        stationName: "rebecca",
        time: "11:56",
      },
      {
        stationName: "pretoria west",
        time: "12:00",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "12:50",
      },
      {
        stationName: "pretoria west",
        time: "12:53",
      },
      {
        stationName: "rebecca",
        time: "12:55",
      },
      {
        stationName: "electro",
        time: "13:02",
      },
      {
        stationName: "oor delfos",
        time: "13:04",
      },
      {
        stationName: "kalafong",
        time: "13:06",
      },
      {
        stationName: "atteridgeville",
        time: "13:10",
      },
      {
        stationName: "saulsville",
        time: "13:15",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "12:50",
      },
      {
        stationName: "atteridgeville",
        time: "12:53",
      },
      {
        stationName: "kalafong",
        time: "12:55",
      },
      {
        stationName: "oor delfos",
        time: "13:02",
      },
      {
        stationName: "electro",
        time: "13:04",
      },
      {
        stationName: "rebecca",
        time: "13:06",
      },
      {
        stationName: "pretoria west",
        time: "13:10",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "14:00",
      },
      {
        stationName: "pretoria west",
        time: "14:03",
      },
      {
        stationName: "rebecca",
        time: "14:05",
      },
      {
        stationName: "electro",
        time: "14:12",
      },
      {
        stationName: "oor delfos",
        time: "14:14",
      },
      {
        stationName: "kalafong",
        time: "14:16",
      },
      {
        stationName: "atteridgeville",
        time: "14:20",
      },
      {
        stationName: "saulsville",
        time: "14:25",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "14:00",
      },
      {
        stationName: "atteridgeville",
        time: "14:03",
      },
      {
        stationName: "kalafong",
        time: "14:05",
      },
      {
        stationName: "oor delfos",
        time: "14:12",
      },
      {
        stationName: "electro",
        time: "14:14",
      },
      {
        stationName: "rebecca",
        time: "14:16",
      },
      {
        stationName: "pretoria west",
        time: "14:20",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "15:10",
      },
      {
        stationName: "pretoria west",
        time: "15:13",
      },
      {
        stationName: "rebecca",
        time: "15:15",
      },
      {
        stationName: "electro",
        time: "15:22",
      },
      {
        stationName: "oor delfos",
        time: "15:24",
      },
      {
        stationName: "kalafong",
        time: "15:26",
      },
      {
        stationName: "atteridgeville",
        time: "15:30",
      },
      {
        stationName: "saulsville",
        time: "15:35",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "15:10",
      },
      {
        stationName: "atteridgeville",
        time: "15:13",
      },
      {
        stationName: "kalafong",
        time: "15:15",
      },
      {
        stationName: "oor delfos",
        time: "15:22",
      },
      {
        stationName: "electro",
        time: "15:24",
      },
      {
        stationName: "rebecca",
        time: "15:26",
      },
      {
        stationName: "pretoria west",
        time: "15:30",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "15:45",
      },
      {
        stationName: "pretoria west",
        time: "15:48",
      },
      {
        stationName: "rebecca",
        time: "15:50",
      },
      {
        stationName: "electro",
        time: "15:57",
      },
      {
        stationName: "oor delfos",
        time: "15:59",
      },
      {
        stationName: "kalafong",
        time: "16:01",
      },
      {
        stationName: "atteridgeville",
        time: "16:05",
      },
      {
        stationName: "saulsville",
        time: "16:10",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "15:45",
      },
      {
        stationName: "atteridgeville",
        time: "15:48",
      },
      {
        stationName: "kalafong",
        time: "15:50",
      },
      {
        stationName: "oor delfos",
        time: "15:57",
      },
      {
        stationName: "electro",
        time: "15:59",
      },
      {
        stationName: "rebecca",
        time: "16:01",
      },
      {
        stationName: "pretoria west",
        time: "16:05",
      },
      {
        stationName: "pretoria",
        time: "16:10",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "16:20",
      },
      {
        stationName: "pretoria west",
        time: "16:23",
      },
      {
        stationName: "rebecca",
        time: "16:25",
      },
      {
        stationName: "electro",
        time: "16:32",
      },
      {
        stationName: "oor delfos",
        time: "16:34",
      },
      {
        stationName: "kalafong",
        time: "16:36",
      },
      {
        stationName: "atteridgeville",
        time: "16:40",
      },
      {
        stationName: "saulsville",
        time: "16:45",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "16:20",
      },
      {
        stationName: "atteridgeville",
        time: "16:23",
      },
      {
        stationName: "kalafong",
        time: "16:25",
      },
      {
        stationName: "oor delfos",
        time: "16:32",
      },
      {
        stationName: "electro",
        time: "16:34",
      },
      {
        stationName: "rebecca",
        time: "16:36",
      },
      {
        stationName: "pretoria west",
        time: "16:40",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "16:55",
      },
      {
        stationName: "pretoria west",
        time: "16:58",
      },
      {
        stationName: "rebecca",
        time: "17:00",
      },
      {
        stationName: "electro",
        time: "17:07",
      },
      {
        stationName: "oor delfos",
        time: "17:09",
      },
      {
        stationName: "kalafong",
        time: "17:11",
      },
      {
        stationName: "atteridgeville",
        time: "17:15",
      },
      {
        stationName: "saulsville",
        time: "17:20",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "16:55",
      },
      {
        stationName: "atteridgeville",
        time: "16:58",
      },
      {
        stationName: "kalafong",
        time: "17:00",
      },
      {
        stationName: "oor delfos",
        time: "17:07",
      },
      {
        stationName: "electro",
        time: "17:09",
      },
      {
        stationName: "rebecca",
        time: "17:11",
      },
      {
        stationName: "pretoria west",
        time: "17:15",
      },
      {
        stationName: "pretoria",
        time: "17:20",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "17:30",
      },
      {
        stationName: "pretoria west",
        time: "17:33",
      },
      {
        stationName: "rebecca",
        time: "17:35",
      },
      {
        stationName: "electro",
        time: "17:42",
      },
      {
        stationName: "oor delfos",
        time: "17:44",
      },
      {
        stationName: "kalafong",
        time: "17:46",
      },
      {
        stationName: "atteridgeville",
        time: "17:50",
      },
      {
        stationName: "saulsville",
        time: "17:55",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "17:30",
      },
      {
        stationName: "atteridgeville",
        time: "17:33",
      },
      {
        stationName: "kalafong",
        time: "17:35",
      },
      {
        stationName: "oor delfos",
        time: "17:42",
      },
      {
        stationName: "electro",
        time: "17:44",
      },
      {
        stationName: "rebecca",
        time: "17:46",
      },
      {
        stationName: "pretoria west",
        time: "17:50",
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
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "18:05",
      },
      {
        stationName: "pretoria west",
        time: "18:08",
      },
      {
        stationName: "rebecca",
        time: "18:10",
      },
      {
        stationName: "electro",
        time: "18:17",
      },
      {
        stationName: "oor delfos",
        time: "18:19",
      },
      {
        stationName: "kalafong",
        time: "18:21",
      },
      {
        stationName: "atteridgeville",
        time: "18:25",
      },
      {
        stationName: "saulsville",
        time: "18:30",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "18:05",
      },
      {
        stationName: "atteridgeville",
        time: "18:08",
      },
      {
        stationName: "kalafong",
        time: "18:10",
      },
      {
        stationName: "oor delfos",
        time: "18:17",
      },
      {
        stationName: "electro",
        time: "18:19",
      },
      {
        stationName: "rebecca",
        time: "18:21",
      },
      {
        stationName: "pretoria west",
        time: "18:25",
      },
      {
        stationName: "pretoria",
        time: "18:30",
      },
    ],
  ],
  [
    [
      {
        from: "Pretoria - Saulsville",
        stationName: "Pretoria",
        time: "18:40",
      },
      {
        stationName: "pretoria west",
        time: "18:43",
      },
      {
        stationName: "rebecca",
        time: "18:45",
      },
      {
        stationName: "electro",
        time: "18:52",
      },
      {
        stationName: "oor delfos",
        time: "18:54",
      },
      {
        stationName: "kalafong",
        time: "18:56",
      },
      {
        stationName: "atteridgeville",
        time: "19:00",
      },
      {
        stationName: "saulsville",
        time: "19:05",
      },
    ],
    [
      {
        from: "Saulsville - pretoria",
        stationName: "Saulsville",
        time: "18:40",
      },
      {
        stationName: "atteridgeville",
        time: "18:43",
      },
      {
        stationName: "kalafong",
        time: "18:45",
      },
      {
        stationName: "oor delfos",
        time: "18:52",
      },
      {
        stationName: "electro",
        time: "18:54",
      },
      {
        stationName: "rebecca",
        time: "18:56",
      },
      {
        stationName: "pretoria west",
        time: "19:00",
      },
      {
        stationName: "pretoria",
        time: "19:05",
      },
    ],
  ],
];

const Pta_Saulsville = () => {

  let [numbers,
    setNumbers] = useState(0);

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
                    <h1 className="from">{stats.from}</h1>
                  </div>
                  <div className="edit-line">
                    <div>
                      {stats.stationName}
                    </div>
                    <div className="stats-time">
                      {stats.time}
                    </div>
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
                  <div>
                    {stats.stationName}
                  </div>
                  <div className="stats-time">
                    {stats.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pta_Saulsville;
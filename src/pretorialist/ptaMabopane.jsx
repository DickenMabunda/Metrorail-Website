import { useState } from "react";
import { Link } from "react-router-dom";

const Pta_Mabop = () => {
  let Timetables = [
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "5:10",
        },
        { stationName: "pretoria west", time: "5:16" },
        { stationName: "hercules", time: "5:25" },
        { stationName: "montainview", time: "5:30" },
        { stationName: "pretoria north", time: "5:37" },
        { stationName: "wolmerton", time: "5:42" },
        { stationName: "wintersnest", time: "5:47" },
        { stationName: "akasiaboom west", time: "5:54" },
        { stationName: "mabopane", time: "6:10" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "4:00",
        },
        { stationName: "akasiaboom", time: "4:16" },
        { stationName: "wintersnet", time: "4:23" },
        { stationName: "wolmerton", time: "4:29" },
        { stationName: "pretoria north", time: "4:34" },
        { stationName: "montainview", time: "4:41" },
        { stationName: "hercules", time: "4:46" },
        { stationName: "pretoria west", time: "4:54" },
        { stationName: "pretoria", time: "5:00" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "5:45",
        },
        { stationName: "pretoria west", time: "5:51" },
        { stationName: "hercules", time: "6:00" },
        { stationName: "montainview", time: "6:05" },
        { stationName: "pretoria north", time: "6:12" },
        { stationName: "wolmerton", time: "6:17" },
        { stationName: "wintersnest", time: "6:22" },
        { stationName: "akasiaboom west", time: "6:29" },
        { stationName: "mabopane", time: "6:45" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "4:35",
        },
        { stationName: "akasiaboom", time: "4:51" },
        { stationName: "wintersnet", time: "4:58" },
        { stationName: "wolmerton", time: "5:04" },
        { stationName: "pretoria north", time: "5:09" },
        { stationName: "montainview", time: "5:16" },
        { stationName: "hercules", time: "5:21" },
        { stationName: "pretoria west", time: "5:29" },
        { stationName: "pretoria", time: "5:35" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "6:20",
        },
        { stationName: "pretoria west", time: "6:27" },
        { stationName: "hercules", time: "6:35" },
        { stationName: "montainview", time: "6:40" },
        { stationName: "pretoria north", time: "6:48" },
        { stationName: "wolmerton", time: "6:52" },
        { stationName: "wintersnest", time: "6:57" },
        { stationName: "akasiaboom west", time: "7:02" },
        { stationName: "mabopane", time: "7:20" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "5:10",
        },
        { stationName: "akasiaboom", time: "5:26" },
        { stationName: "wintersnet", time: "5:33" },
        { stationName: "wolmerton", time: "5:39" },
        { stationName: "pretoria north", time: "5:44" },
        { stationName: "montainview", time: "5:51" },
        { stationName: "hercules", time: "5:56" },
        { stationName: "pretoria west", time: "6:04" },
        { stationName: "pretoria", time: "6:10" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "6:55",
        },
        { stationName: "pretoria west", time: "7:01" },
        { stationName: "hercules", time: "7:10" },
        { stationName: "montainview", time: "7:15" },
        { stationName: "pretoria north", time: "7:22" },
        { stationName: "wolmerton", time: "7:27" },
        { stationName: "wintersnest", time: "7:32" },
        { stationName: "akasiaboom west", time: "7:39" },
        { stationName: "mabopane", time: "7:55" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "5:45",
        },
        { stationName: "akasiaboom", time: "6:01" },
        { stationName: "wintersnet", time: "6:08" },
        { stationName: "wolmerton", time: "6:14" },
        { stationName: "pretoria north", time: "6:19" },
        { stationName: "montainview", time: "6:26" },
        { stationName: "hercules", time: "6:31" },
        { stationName: "pretoria west", time: "6:39" },
        { stationName: "pretoria", time: "6:45" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "7:30",
        },
        { stationName: "pretoria west", time: "7:36" },
        { stationName: "hercules", time: "7:45" },
        { stationName: "montainview", time: "7:50" },
        { stationName: "pretoria north", time: "7:57" },
        { stationName: "wolmerton", time: "8:02" },
        { stationName: "wintersnest", time: "8:07" },
        { stationName: "akasiaboom west", time: "8:14" },
        { stationName: "mabopane", time: "8:30" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "6:20",
        },
        { stationName: "akasiaboom", time: "6:36" },
        { stationName: "wintersnet", time: "6:43" },
        { stationName: "wolmerton", time: "6:49" },
        { stationName: "pretoria north", time: "6:54" },
        { stationName: "montainview", time: "7:01" },
        { stationName: "hercules", time: "7:06" },
        { stationName: "pretoria west", time: "7:14" },
        { stationName: "pretoria", time: "7:20" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "8:05",
        },
        { stationName: "pretoria west", time: "8:11" },
        { stationName: "hercules", time: "8:20" },
        { stationName: "montainview", time: "8:25" },
        { stationName: "pretoria north", time: "8:32" },
        { stationName: "wolmerton", time: "8:37" },
        { stationName: "wintersnest", time: "8:42" },
        { stationName: "akasiaboom west", time: "8:49" },
        { stationName: "mabopane", time: "9:05" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "6:55",
        },
        { stationName: "akasiaboom", time: "7:11" },
        { stationName: "wintersnet", time: "7:18" },
        { stationName: "wolmerton", time: "7:24" },
        { stationName: "pretoria north", time: "7:29" },
        { stationName: "montainview", time: "7:36" },
        { stationName: "hercules", time: "7:41" },
        { stationName: "pretoria west", time: "7:49" },
        { stationName: "pretoria", time: "7:55" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "8:40",
        },
        { stationName: "pretoria west", time: "8:46" },
        { stationName: "hercules", time: "8:55" },
        { stationName: "montainview", time: "9:00" },
        { stationName: "pretoria north", time: "9:07" },
        { stationName: "wolmerton", time: "9:12" },
        { stationName: "wintersnest", time: "9:17" },
        { stationName: "akasiaboom west", time: "9:24" },
        { stationName: "mabopane", time: "9:40" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "7:30",
        },
        { stationName: "akasiaboom", time: "7:46" },
        { stationName: "wintersnet", time: "7:53" },
        { stationName: "wolmerton", time: "7:59" },
        { stationName: "pretoria north", time: "8:04" },
        { stationName: "montainview", time: "8:11" },
        { stationName: "hercules", time: "8:16" },
        { stationName: "pretoria west", time: "8:24" },
        { stationName: "pretoria", time: "8:30" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "9:15",
        },
        { stationName: "pretoria west", time: "9:21" },
        { stationName: "hercules", time: "9:30" },
        { stationName: "montainview", time: "9:35" },
        { stationName: "pretoria north", time: "9:42" },
        { stationName: "wolmerton", time: "9:47" },
        { stationName: "wintersnest", time: "9:52" },
        { stationName: "akasiaboom west", time: "9:59" },
        { stationName: "mabopane", time: "10:15" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "8:05",
        },
        { stationName: "akasiaboom", time: "8:21" },
        { stationName: "wintersnet", time: "8:28" },
        { stationName: "wolmerton", time: "8:34" },
        { stationName: "pretoria north", time: "8:39" },
        { stationName: "montainview", time: "8:46" },
        { stationName: "hercules", time: "8:51" },
        { stationName: "pretoria west", time: "8:59" },
        { stationName: "pretoria", time: "9:05" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "10:25",
        },
        { stationName: "pretoria west", time: "10:31" },
        { stationName: "hercules", time: "10:40" },
        { stationName: "montainview", time: "10:45" },
        { stationName: "pretoria north", time: "10:52" },
        { stationName: "wolmerton", time: "10:57" },
        { stationName: "wintersnest", time: "11:02" },
        { stationName: "akasiaboom west", time: "11:09" },
        { stationName: "mabopane", time: "11:25" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "8:40",
        },
        { stationName: "akasiaboom", time: "8:56" },
        { stationName: "wintersnet", time: "9:03" },
        { stationName: "wolmerton", time: "9:09" },
        { stationName: "pretoria north", time: "9:14" },
        { stationName: "montainview", time: "9:21" },
        { stationName: "hercules", time: "9:26" },
        { stationName: "pretoria west", time: "9:34" },
        { stationName: "pretoria", time: "9:40" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "11:35",
        },
        { stationName: "pretoria west", time: "11:41" },
        { stationName: "hercules", time: "11:50" },
        { stationName: "montainview", time: "11:55" },
        { stationName: "pretoria north", time: "12:02" },
        { stationName: "wolmerton", time: "12:07" },
        { stationName: "wintersnest", time: "12:12" },
        { stationName: "akasiaboom west", time: "12:19" },
        { stationName: "mabopane", time: "12:35" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "9:15",
        },
        { stationName: "akasiaboom", time: "9:31" },
        { stationName: "wintersnet", time: "9:38" },
        { stationName: "wolmerton", time: "9:44" },
        { stationName: "pretoria north", time: "9:49" },
        { stationName: "montainview", time: "9:56" },
        { stationName: "hercules", time: "10:01" },
        { stationName: "pretoria west", time: "10:09" },
        { stationName: "pretoria", time: "10:15" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "12:45",
        },
        { stationName: "pretoria west", time: "12:51" },
        { stationName: "hercules", time: "13:00" },
        { stationName: "montainview", time: "13:05" },
        { stationName: "pretoria north", time: "13:12" },
        { stationName: "wolmerton", time: "13:17" },
        { stationName: "wintersnest", time: "13:22" },
        { stationName: "akasiaboom west", time: "13:29" },
        { stationName: "mabopane", time: "13:45" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "10:25",
        },
        { stationName: "akasiaboom", time: "10:41" },
        { stationName: "wintersnet", time: "10:48" },
        { stationName: "wolmerton", time: "10:54" },
        { stationName: "pretoria north", time: "10:59" },
        { stationName: "montainview", time: "11:06" },
        { stationName: "hercules", time: "11:11" },
        { stationName: "pretoria west", time: "11:19" },
        { stationName: "pretoria", time: "11:25" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "13:55",
        },
        { stationName: "pretoria west", time: "14:01" },
        { stationName: "hercules", time: "14:10" },
        { stationName: "montainview", time: "14:15" },
        { stationName: "pretoria north", time: "14:22" },
        { stationName: "wolmerton", time: "14:27" },
        { stationName: "wintersnest", time: "14:32" },
        { stationName: "akasiaboom west", time: "14:39" },
        { stationName: "mabopane", time: "14:55" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "11:35",
        },
        { stationName: "akasiaboom", time: "11:51" },
        { stationName: "wintersnet", time: "11:58" },
        { stationName: "wolmerton", time: "12:04" },
        { stationName: "pretoria north", time: "12:09" },
        { stationName: "montainview", time: "12:16" },
        { stationName: "hercules", time: "12:21" },
        { stationName: "pretoria west", time: "12:29" },
        { stationName: "pretoria", time: "12:35" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "15:05",
        },
        { stationName: "pretoria west", time: "15:11" },
        { stationName: "hercules", time: "15:20" },
        { stationName: "montainview", time: "15:25" },
        { stationName: "pretoria north", time: "15:32" },
        { stationName: "wolmerton", time: "15:37" },
        { stationName: "wintersnest", time: "15:42" },
        { stationName: "akasiaboom west", time: "15:49" },
        { stationName: "mabopane", time: "16:05" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "12:45",
        },
        { stationName: "akasiaboom", time: "13:01" },
        { stationName: "wintersnet", time: "13:08" },
        { stationName: "wolmerton", time: "13:14" },
        { stationName: "pretoria north", time: "13:19" },
        { stationName: "montainview", time: "13:26" },
        { stationName: "hercules", time: "13:31" },
        { stationName: "pretoria west", time: "13:39" },
        { stationName: "pretoria", time: "13:45" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "15:40",
        },
        { stationName: "pretoria west", time: "15:46" },
        { stationName: "hercules", time: "15:55" },
        { stationName: "montainview", time: "16:00" },
        { stationName: "pretoria north", time: "16:07" },
        { stationName: "wolmerton", time: "16:12" },
        { stationName: "wintersnest", time: "16:17" },
        { stationName: "akasiaboom west", time: "16:24" },
        { stationName: "mabopane", time: "16:40" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "13:55",
        },
        { stationName: "akasiaboom", time: "14:11" },
        { stationName: "wintersnet", time: "14:18" },
        { stationName: "wolmerton", time: "14:24" },
        { stationName: "pretoria north", time: "14:29" },
        { stationName: "montainview", time: "14:36" },
        { stationName: "hercules", time: "14:41" },
        { stationName: "pretoria west", time: "14:49" },
        { stationName: "pretoria", time: "14:55" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "16:15",
        },
        { stationName: "pretoria west", time: "16:21" },
        { stationName: "hercules", time: "16:30" },
        { stationName: "montainview", time: "16:35" },
        { stationName: "pretoria north", time: "16:42" },
        { stationName: "wolmerton", time: "16:47" },
        { stationName: "wintersnest", time: "16:52" },
        { stationName: "akasiaboom west", time: "16:59" },
        { stationName: "mabopane", time: "17:15" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "",
        },
        { stationName: "akasiaboom", time: "" },
        { stationName: "wintersnet", time: "" },
        { stationName: "wolmerton", time: "" },
        { stationName: "pretoria north", time: "15:05" },
        { stationName: "montainview", time: "15:12" },
        { stationName: "hercules", time: "15:16" },
        { stationName: "pretoria west", time: "15:24" },
        { stationName: "pretoria", time: "15:30" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "16:50",
        },
        { stationName: "pretoria west", time: "16:56" },
        { stationName: "hercules", time: "17:05" },
        { stationName: "montainview", time: "17:10" },
        { stationName: "pretoria north", time: "17:17" },
        { stationName: "wolmerton", time: "17:22" },
        { stationName: "wintersnest", time: "17:27" },
        { stationName: "akasiaboom west", time: "17:34" },
        { stationName: "mabopane", time: "17:50" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "15:05",
        },
        { stationName: "akasiaboom", time: "15:21" },
        { stationName: "wintersnet", time: "15:28" },
        { stationName: "wolmerton", time: "15:34" },
        { stationName: "pretoria north", time: "15:39" },
        { stationName: "montainview", time: "15:46" },
        { stationName: "hercules", time: "15:51" },
        { stationName: "pretoria west", time: "15:59" },
        { stationName: "pretoria", time: "16:05" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "17:25",
        },
        { stationName: "pretoria west", time: "17:31" },
        { stationName: "hercules", time: "17:40" },
        { stationName: "montainview", time: "17:45" },
        { stationName: "pretoria north", time: "17:52" },
        { stationName: "wolmerton", time: "17:57" },
        { stationName: "wintersnest", time: "18:02" },
        { stationName: "akasiaboom west", time: "18:09" },
        { stationName: "mabopane", time: "18:25" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "15:40",
        },
        { stationName: "akasiaboom", time: "15:56" },
        { stationName: "wintersnet", time: "16:03" },
        { stationName: "wolmerton", time: "16:09" },
        { stationName: "pretoria north", time: "16:14" },
        { stationName: "montainview", time: "16:21" },
        { stationName: "hercules", time: "16:26" },
        { stationName: "pretoria west", time: "16:34" },
        { stationName: "pretoria", time: "16:40" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "18:00",
        },
        { stationName: "pretoria west", time: "18:06" },
        { stationName: "hercules", time: "18:15" },
        { stationName: "montainview", time: "18:20" },
        { stationName: "pretoria north", time: "18:27" },
        { stationName: "wolmerton", time: "18:32" },
        { stationName: "wintersnest", time: "18:37" },
        { stationName: "akasiaboom west", time: "18:44" },
        { stationName: "mabopane", time: "19:00" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "16:15",
        },
        { stationName: "akasiaboom", time: "16:31" },
        { stationName: "wintersnet", time: "16:38" },
        { stationName: "wolmerton", time: "16:44" },
        { stationName: "pretoria north", time: "16:49" },
        { stationName: "montainview", time: "16:56" },
        { stationName: "hercules", time: "17:01" },
        { stationName: "pretoria west", time: "17:09" },
        { stationName: "pretoria", time: "17:15" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "18:35",
        },
        { stationName: "pretoria west", time: "18:41" },
        { stationName: "hercules", time: "18:50" },
        { stationName: "montainview", time: "18:55" },
        { stationName: "pretoria north", time: "19:02" },
        { stationName: "wolmerton", time: "19:07" },
        { stationName: "wintersnest", time: "19:12" },
        { stationName: "akasiaboom west", time: "19:19" },
        { stationName: "mabopane", time: "19:35" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "16:50",
        },
        { stationName: "akasiaboom", time: "17:06" },
        { stationName: "wintersnet", time: "17:13" },
        { stationName: "wolmerton", time: "17:19" },
        { stationName: "pretoria north", time: "17:24" },
        { stationName: "montainview", time: "17:31" },
        { stationName: "hercules", time: "17:36" },
        { stationName: "pretoria west", time: "17:44" },
        { stationName: "pretoria", time: "17:50" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "19:30",
        },
        { stationName: "pretoria west", time: "19:36" },
        { stationName: "hercules", time: "19:45" },
        { stationName: "montainview", time: "19:50" },
        { stationName: "pretoria north", time: "19:57" },
        { stationName: "wolmerton", time: "20:02" },
        { stationName: "wintersnest", time: "20:07" },
        { stationName: "akasiaboom west", time: "20:14" },
        { stationName: "mabopane", time: "20:30" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "17:25",
        },
        { stationName: "akasiaboom", time: "17:41" },
        { stationName: "wintersnet", time: "17:48" },
        { stationName: "wolmerton", time: "17:54" },
        { stationName: "pretoria north", time: "17:59" },
        { stationName: "montainview", time: "18:06" },
        { stationName: "hercules", time: "18:11" },
        { stationName: "pretoria west", time: "18:19" },
        { stationName: "pretoria", time: "18:25" },
      ],
    ],
    [
      [
        {
          from: "Pretoria - mabopane",
          stationName: "Pretoria",
          time: "",
        },
        { stationName: "pretoria west", time: "" },
        { stationName: "hercules", time: "" },
        { stationName: "montainview", time: "" },
        { stationName: "pretoria north", time: "" },
        { stationName: "wolmerton", time: "" },
        { stationName: "wintersnest", time: "" },
        { stationName: "akasiaboom west", time: "" },
        { stationName: "mabopane", time: "" },
      ],
      [
        {
          from: "Mabopane - pretoria",
          stationName: "mabopane",
          time: "18:00",
        },
        { stationName: "akasiaboom", time: "18:16" },
        { stationName: "wintersnet", time: "18:23" },
        { stationName: "wolmerton", time: "18:29" },
        { stationName: "pretoria north", time: "18:34" },
        { stationName: "montainview", time: "18:41" },
        { stationName: "hercules", time: "18:46" },
        { stationName: "pretoria west", time: "18:54" },
        { stationName: "pretoria", time: "19:00" },
      ],
    ],
  ];

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
          <h1 className="text-4">Pretoria - Mabopane</h1>
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

export default Pta_Mabop;

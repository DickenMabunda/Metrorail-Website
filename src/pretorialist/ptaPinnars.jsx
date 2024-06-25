import { useState } from "react";
import { Link } from "react-router-dom";

let Timetables = [
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "4:05",
      },
      {
        stationName: "Mearsstraat",
        time: "4:07",
      },
      {
        stationName: "Devenshstraat",
        time: "4:08",
      },
      { stationName: "walkerstraat", time: "4:09" },
      { stationName: "loftus versfeld park", time: "4:10" },
      { stationName: "rissik", time: "4:11" },
      { stationName: "hartbeesspruit", time: "4:12" },
      { stationName: "koedoespoort", time: "4:17" },
      { stationName: "silverton", time: "4:37" },
      { stationName: "watloo", time: "4:41" },
      { stationName: "denneboom", time: "4:43" },
      { stationName: "e/fabrieke", time: "4:46" },
      { stationName: "mamelodi-gardens", time: "4:50" },
      { stationName: "greenview", time: "4:53" },
      { stationName: "pienaarspoort", time: "5:00" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "4:00",
      },
      { stationName: "greenview", time: "4:06" },
      {
        stationName: "mamelodi-gardens",
        time: "4:10",
      },
      { stationName: "e/fabrieke", time: "4:14" },
      { stationName: "denneboom", time: "4:17" },
      { stationName: "watloo", time: "4:19" },
      { stationName: "silverton", time: "4:22" },
      { stationName: "koedospoort", time: "4:25" },
      { stationName: "hartbeesspruit", time: "4:40" },
      { stationName: "rissik", time: "4:42" },
      { stationName: "loftus", time: "4:45" },
      { stationName: "walkerstraat", time: "4:48" },
      { stationName: "devenishstraat", time: "4:49" },
      { stationName: "mearsstraat", time: "4:51" },
      { stationName: "pretoria", time: "4:55" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "5:10",
      },
      {
        stationName: "Mearsstraat",
        time: "5:14",
      },
      {
        stationName: "Devenshstraat",
        time: "5:15",
      },
      { stationName: "walkerstraat", time: "5:18" },
      { stationName: "loftus versfeld park", time: "5:20" },
      { stationName: "rissik", time: "5:23" },
      { stationName: "hartbeesspruit", time: "5:25" },
      { stationName: "koedoespoort", time: "5:30" },
      { stationName: "silverton", time: "5:47" },
      { stationName: "watloo", time: "5:51" },
      { stationName: "denneboom", time: "5:53" },
      { stationName: "e/fabrieke", time: "5:56" },
      { stationName: "mamelodi-gardens", time: "6:00" },
      { stationName: "greenview", time: "6:03" },
      { stationName: "pienaarspoort", time: "6:10" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "5:10",
      },
      { stationName: "greenview", time: "5:16" },
      {
        stationName: "mamelodi-gardens",
        time: "5:20",
      },
      { stationName: "e/fabrieke", time: "5:24" },
      { stationName: "denneboom", time: "5:27" },
      { stationName: "watloo", time: "5:29" },
      { stationName: "silverton", time: "5:32" },
      { stationName: "koedospoort", time: "5:35" },
      { stationName: "hartbeesspruit", time: "5:50" },
      { stationName: "rissik", time: "5:52" },
      { stationName: "loftus", time: "5:55" },
      { stationName: "walkerstraat", time: "5:58" },
      { stationName: "devenishstraat", time: "5:59" },
      { stationName: "mearsstraat", time: "6:01" },
      { stationName: "pretoria", time: "6:05" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "6:20",
      },
      {
        stationName: "Mearsstraat",
        time: "6:24",
      },
      {
        stationName: "Devenshstraat",
        time: "6:25",
      },
      { stationName: "walkerstraat", time: "6:28" },
      { stationName: "loftus versfeld park", time: "6:30" },
      { stationName: "rissik", time: "6:33" },
      { stationName: "hartbeesspruit", time: "6:35" },
      { stationName: "koedoespoort", time: "6:40" },
      { stationName: "silverton", time: "6:57" },
      { stationName: "watloo", time: "7:01" },
      { stationName: "denneboom", time: "7:03" },
      { stationName: "e/fabrieke", time: "7:06" },
      { stationName: "mamelodi-gardens", time: "7:10" },
      { stationName: "greenview", time: "7:13" },
      { stationName: "pienaarspoort", time: "7:20" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "6:20",
      },
      { stationName: "greenview", time: "6:26" },
      {
        stationName: "mamelodi-gardens",
        time: "6:30",
      },
      { stationName: "e/fabrieke", time: "6:34" },
      { stationName: "denneboom", time: "6:37" },
      { stationName: "watloo", time: "6:39" },
      { stationName: "silverton", time: "6:42" },
      { stationName: "koedospoort", time: "6:45" },
      { stationName: "hartbeesspruit", time: "7:00" },
      { stationName: "rissik", time: "7:02" },
      { stationName: "loftus", time: "7:05" },
      { stationName: "walkerstraat", time: "7:08" },
      { stationName: "devenishstraat", time: "7:09" },
      { stationName: "mearsstraat", time: "7:11" },
      { stationName: "pretoria", time: "7:15" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "7:30",
      },
      {
        stationName: "Mearsstraat",
        time: "7:34",
      },
      {
        stationName: "Devenshstraat",
        time: "7:35",
      },
      { stationName: "walkerstraat", time: "7:38" },
      { stationName: "loftus versfeld park", time: "7:40" },
      { stationName: "rissik", time: "7:43" },
      { stationName: "hartbeesspruit", time: "7:45" },
      { stationName: "koedoespoort", time: "7:50" },
      { stationName: "silverton", time: "8:07" },
      { stationName: "watloo", time: "8:11" },
      { stationName: "denneboom", time: "8:13" },
      { stationName: "e/fabrieke", time: "8:16" },
      { stationName: "mamelodi-gardens", time: "8:20" },
      { stationName: "greenview", time: "8:23" },
      { stationName: "pienaarspoort", time: "8:30" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "7:30",
      },
      { stationName: "greenview", time: "7:36" },
      {
        stationName: "mamelodi-gardens",
        time: "7:40",
      },
      { stationName: "e/fabrieke", time: "7:44" },
      { stationName: "denneboom", time: "7:47" },
      { stationName: "watloo", time: "7:49" },
      { stationName: "silverton", time: "7:52" },
      { stationName: "koedospoort", time: "7:55" },
      { stationName: "hartbeesspruit", time: "8:10" },
      { stationName: "rissik", time: "8:12" },
      { stationName: "loftus", time: "8:15" },
      { stationName: "walkerstraat", time: "8:18" },
      { stationName: "devenishstraat", time: "8:19" },
      { stationName: "mearsstraat", time: "8:21" },
      { stationName: "pretoria", time: "8:25" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "8:40",
      },
      {
        stationName: "Mearsstraat",
        time: "8:43",
      },
      {
        stationName: "Devenshstraat",
        time: "8:45",
      },
      { stationName: "walkerstraat", time: "8:47" },
      { stationName: "loftus versfeld park", time: "8:49" },
      { stationName: "rissik", time: "8:52" },
      { stationName: "hartbeesspruit", time: "8:54" },
      { stationName: "koedoespoort", time: "8:59" },
      { stationName: "silverton", time: "9:01" },
      { stationName: "watloo", time: "9:05" },
      { stationName: "denneboom", time: "9:07" },
      { stationName: "e/fabrieke", time: "9:11" },
      { stationName: "mamelodi-gardens", time: "9:14" },
      { stationName: "greenview", time: "9:18" },
      { stationName: "pienaarspoort", time: "9:25" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "8:40",
      },
      { stationName: "greenview", time: "8:46" },
      {
        stationName: "mamelodi-gardens",
        time: "8:50",
      },
      { stationName: "e/fabrieke", time: "8:54" },
      { stationName: "denneboom", time: "8:57" },
      { stationName: "watloo", time: "9:00" },
      { stationName: "silverton", time: "9:03" },
      { stationName: "koedospoort", time: "9:05" },
      { stationName: "hartbeesspruit", time: "9:11" },
      { stationName: "rissik", time: "9:13" },
      { stationName: "loftus", time: "9:15" },
      { stationName: "walkerstraat", time: "9:18" },
      { stationName: "devenishstraat", time: "9:20" },
      { stationName: "mearsstraat", time: "9:21" },
      { stationName: "pretoria", time: "9:25" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "10:30",
      },
      {
        stationName: "Mearsstraat",
        time: "10:33",
      },
      {
        stationName: "Devenshstraat",
        time: "10:35",
      },
      { stationName: "walkerstraat", time: "10:37" },
      { stationName: "loftus versfeld park", time: "10:40" },
      { stationName: "rissik", time: "10:42" },
      { stationName: "hartbeesspruit", time: "10:44" },
      { stationName: "koedoespoort", time: "10:49" },
      { stationName: "silverton", time: "10:52" },
      { stationName: "watloo", time: "10:55" },
      { stationName: "denneboom", time: "10:58" },
      { stationName: "e/fabrieke", time: "11:01" },
      { stationName: "mamelodi-gardens", time: "11:05" },
      { stationName: "pienaarspoort", time: "11:15" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "9:35",
      },
      {
        stationName: "mamelodi-gardens",
        time: "9:44",
      },
      { stationName: "e/fabrieke", time: "9:49" },
      { stationName: "denneboom", time: "9:52" },
      { stationName: "watloo", time: "9:54" },
      { stationName: "silverton", time: "9:57" },
      { stationName: "koedospoort", time: "10:00" },
      { stationName: "hartbeesspruit", time: "10:06" },
      { stationName: "rissik", time: "10:08" },
      { stationName: "loftus", time: "10:10" },
      { stationName: "walkerstraat", time: "10:13" },
      { stationName: "devenishstraat", time: "10:15" },
      { stationName: "mearsstraat", time: "10:16" },
      { stationName: "pretoria", time: "10:20" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "12:20",
      },
      {
        stationName: "Mearsstraat",
        time: "12:23",
      },
      {
        stationName: "Devenshstraat",
        time: "12:25",
      },
      { stationName: "walkerstraat", time: "12:27" },
      { stationName: "loftus versfeld park", time: "12:30" },
      { stationName: "rissik", time: "12:32" },
      { stationName: "hartbeesspruit", time: "12:34" },
      { stationName: "koedoespoort", time: "12:39" },
      { stationName: "silverton", time: "12:42" },
      { stationName: "watloo", time: "12:45" },
      { stationName: "denneboom", time: "12:48" },
      { stationName: "e/fabrieke", time: "12:51" },
      { stationName: "mamelodi-gardens", time: "12:55" },
      { stationName: "pienaarspoort", time: "13:05" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "11:25",
      },
      {
        stationName: "mamelodi-gardens",
        time: "11:34",
      },
      { stationName: "e/fabrieke", time: "11:39" },
      { stationName: "denneboom", time: "11:42" },
      { stationName: "watloo", time: "11:44" },
      { stationName: "silverton", time: "11:47" },
      { stationName: "koedospoort", time: "11:50" },
      { stationName: "hartbeesspruit", time: "11:56" },
      { stationName: "rissik", time: "11:58" },
      { stationName: "loftus", time: "12:00" },
      { stationName: "walkerstraat", time: "12:03" },
      { stationName: "devenishstraat", time: "12:05" },
      { stationName: "mearsstraat", time: "12:06" },
      { stationName: "pretoria", time: "12:10" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "14:10",
      },
      {
        stationName: "Mearsstraat",
        time: "14:13",
      },
      {
        stationName: "Devenshstraat",
        time: "14:15",
      },
      { stationName: "walkerstraat", time: "14:17" },
      { stationName: "loftus versfeld park", time: "14:20" },
      { stationName: "rissik", time: "14:22" },
      { stationName: "hartbeesspruit", time: "14:24" },
      { stationName: "koedoespoort", time: "14:29" },
      { stationName: "silverton", time: "14:32" },
      { stationName: "watloo", time: "14:35" },
      { stationName: "denneboom", time: "14:38" },
      { stationName: "e/fabrieke", time: "14:41" },
      { stationName: "mamelodi-gardens", time: "14:45" },
      { stationName: "pienaarspoort", time: "14:55" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "13:15",
      },
      {
        stationName: "mamelodi-gardens",
        time: "13:24",
      },
      { stationName: "e/fabrieke", time: "13:29" },
      { stationName: "denneboom", time: "13:32" },
      { stationName: "watloo", time: "13:34" },
      { stationName: "silverton", time: "13:37" },
      { stationName: "koedospoort", time: "13:40" },
      { stationName: "hartbeesspruit", time: "13:46" },
      { stationName: "rissik", time: "13:48" },
      { stationName: "loftus", time: "13:50" },
      { stationName: "walkerstraat", time: "13:53" },
      { stationName: "devenishstraat", time: "13:55" },
      { stationName: "mearsstraat", time: "13:56" },
      { stationName: "pretoria", time: "14:00" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "15:05",
      },
      {
        stationName: "Mearsstraat",
        time: "15:08",
      },
      {
        stationName: "Devenshstraat",
        time: "15:10",
      },
      { stationName: "walkerstraat", time: "15:12" },
      { stationName: "loftus versfeld park", time: "15:15" },
      { stationName: "rissik", time: "15:17" },
      { stationName: "hartbeesspruit", time: "15:19" },
      { stationName: "koedoespoort", time: "15:24" },
      { stationName: "silverton", time: "15:27" },
      { stationName: "watloo", time: "15:30" },
      { stationName: "denneboom", time: "15:33" },
      { stationName: "e/fabrieke", time: "15:36" },
      { stationName: "mamelodi-gardens", time: "15:40" },
      { stationName: "pienaarspoort", time: "15:50" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "15:05",
      },
      {
        stationName: "mamelodi-gardens",
        time: "15:14",
      },
      { stationName: "e/fabrieke", time: "15:19" },
      { stationName: "denneboom", time: "15:22" },
      { stationName: "watloo", time: "15:24" },
      { stationName: "silverton", time: "15:27" },
      { stationName: "koedospoort", time: "15:30" },
      { stationName: "hartbeesspruit", time: "15:36" },
      { stationName: "rissik", time: "15:38" },
      { stationName: "loftus", time: "15:40" },
      { stationName: "walkerstraat", time: "15:43" },
      { stationName: "devenishstraat", time: "15:45" },
      { stationName: "mearsstraat", time: "15:46" },
      { stationName: "pretoria", time: "15:50" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "16:05",
      },
      {
        stationName: "Mearsstraat",
        time: "16:09",
      },
      {
        stationName: "Devenshstraat",
        time: "16:10",
      },
      { stationName: "walkerstraat", time: "16:13" },
      { stationName: "loftus versfeld park", time: "16:15" },
      { stationName: "rissik", time: "16:18" },
      { stationName: "hartbeesspruit", time: "16:20" },
      { stationName: "koedoespoort", time: "16:25" },
      { stationName: "silverton", time: "16:37" },
      { stationName: "watloo", time: "16:41" },
      { stationName: "denneboom", time: "16:43" },
      { stationName: "e/fabrieke", time: "16:46" },
      { stationName: "mamelodi-gardens", time: "16:50" },
      { stationName: "pienaarspoort", time: "17:00" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "16:00",
      },
      {
        stationName: "mamelodi-gardens",
        time: "16:09",
      },
      { stationName: "e/fabrieke", time: "16:14" },
      { stationName: "denneboom", time: "16:17" },
      { stationName: "watloo", time: "16:19" },
      { stationName: "silverton", time: "16:22" },
      { stationName: "koedospoort", time: "16:25" },
      { stationName: "hartbeesspruit", time: "16:45" },
      { stationName: "rissik", time: "16:47" },
      { stationName: "loftus", time: "16:50" },
      { stationName: "walkerstraat", time: "16:53" },
      { stationName: "devenishstraat", time: "16:54" },
      { stationName: "mearsstraat", time: "16:56" },
      { stationName: "pretoria", time: "17:00" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "17:15",
      },
      {
        stationName: "Mearsstraat",
        time: "17:19",
      },
      {
        stationName: "Devenshstraat",
        time: "17:20",
      },
      { stationName: "walkerstraat", time: "17:23" },
      { stationName: "loftus versfeld park", time: "17:25" },
      { stationName: "rissik", time: "17:28" },
      { stationName: "hartbeesspruit", time: "17:30" },
      { stationName: "koedoespoort", time: "17:35" },
      { stationName: "silverton", time: "17:47" },
      { stationName: "watloo", time: "17:51" },
      { stationName: "denneboom", time: "17:53" },
      { stationName: "e/fabrieke", time: "17:56" },
      { stationName: "mamelodi-gardens", time: "18:00" },
      { stationName: "pienaarspoort", time: "18:10" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "17:10",
      },
      {
        stationName: "mamelodi-gardens",
        time: "17:19",
      },
      { stationName: "e/fabrieke", time: "17:24" },
      { stationName: "denneboom", time: "17:27" },
      { stationName: "watloo", time: "17:29" },
      { stationName: "silverton", time: "17:32" },
      { stationName: "koedospoort", time: "17:35" },
      { stationName: "hartbeesspruit", time: "17:55" },
      { stationName: "rissik", time: "17:57" },
      { stationName: "loftus", time: "18:00" },
      { stationName: "walkerstraat", time: "18:03" },
      { stationName: "devenishstraat", time: "18:04" },
      { stationName: "mearsstraat", time: "18:06" },
      { stationName: "pretoria", time: "18:10" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "18:20",
      },
      {
        stationName: "Mearsstraat",
        time: "18:23",
      },
      {
        stationName: "Devenshstraat",
        time: "18:25",
      },
      { stationName: "walkerstraat", time: "18:27" },
      { stationName: "loftus versfeld park", time: "18:30" },
      { stationName: "rissik", time: "18:32" },
      { stationName: "hartbeesspruit", time: "18:34" },
      { stationName: "koedoespoort", time: "18:39" },
      { stationName: "silverton", time: "18:42" },
      { stationName: "watloo", time: "18:45" },
      { stationName: "denneboom", time: "18:48" },
      { stationName: "e/fabrieke", time: "18:51" },
      { stationName: "mamelodi-gardens", time: "18:55" },
      { stationName: "pienaarspoort", time: "19:05" },
    ],
    [
      {
        from: "pienaarspoort - pretoria",
        stationName: "pienaarspoort",
        time: "18:20",
      },
      {
        stationName: "mamelodi-gardens",
        time: "18:29",
      },
      { stationName: "e/fabrieke", time: "18:34" },
      { stationName: "denneboom", time: "18:37" },
      { stationName: "watloo", time: "18:39" },
      { stationName: "silverton", time: "18:42" },
      { stationName: "koedospoort", time: "18:45" },
      { stationName: "hartbeesspruit", time: "18:51" },
      { stationName: "rissik", time: "18:53" },
      { stationName: "loftus", time: "18:55" },
      { stationName: "walkerstraat", time: "18:58" },
      { stationName: "devenishstraat", time: "19:00" },
      { stationName: "mearsstraat", time: "19:01" },
      { stationName: "pretoria", time: "19:05" },
    ],
  ],
  [
    [
      {
        from: "Pretoria - pienaarspoort",
        stationName: "Pretoria",
        time: "19:25",
      },
      {
        stationName: "Mearsstraat",
        time: "19:28",
      },
      {
        stationName: "Devenshstraat",
        time: "19:30",
      },
      { stationName: "walkerstraat", time: "19:32" },
      { stationName: "loftus versfeld park", time: "19:35" },
      { stationName: "rissik", time: "19:37" },
      { stationName: "hartbeesspruit", time: "19:39" },
      { stationName: "koedoespoort", time: "19:44" },
      { stationName: "silverton", time: "19:47" },
      { stationName: "watloo", time: "19:50" },
      { stationName: "denneboom", time: "19:53" },
      { stationName: "e/fabrieke", time: "19:56" },
      { stationName: "mamelodi-gardens", time: "20:00" },
      { stationName: "pienaarspoort", time: "20:10" },
    ],
    [],
  ],
];

const Pta_Pinnars = () => {
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
          <h1 className="text-4">Pretoria - Pinnarsport</h1>
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

export default Pta_Pinnars;

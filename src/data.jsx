import React from "react";
import { useState } from "react";

const timeTables = () => {
  let Timetablestwo = [
    [
      {
        from: "Pretoria - mabopnae",
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
      { stationName: "pretoria", time: "6:10" },
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
  ];
  const [ptaPinnars, setPtaPinnars] =
    useState[
      ([
        {
          from: "Pretoria - pienaarspoort",
          stationName: "Pretoria",
          time: "5:21",
        },
        {
          stationName: "Mearsstraat",
          time: "5:24",
        },
        {
          stationName: "Devenshstraat",
          time: "26",
        },
        { stationName: "Mearsstraat", time: "5:27" },
        { stationName: "Mearsstraat", time: "5:30" },
        { stationName: "Mearsstraat", time: "5:32" },
        { stationName: "Mearsstraat", time: "5:24" },
        { stationName: "koedoespoort", time: "5:38" },
        { stationName: "silverton", time: "5:41" },
        { stationName: "watloo", time: "5:44" },
        { stationName: "denneboom", time: "5:46" },
        { stationName: "e/fabrieke", time: "5:49" },
        { stationName: "mamelodi-gardens", time: "5:53" },
        { stationName: "pienaarspoort", time: "5:24" },
      ],
      [
        {
          from: "pienaarspoort - pretoria",
          stationName: "pienaarspoort",
          time: "4:30",
        },
        {
          stationName: "mamelodi-gardens",
          time: "4:38",
        },
        { stationName: "e/fabrieke", time: "4:42" },
        { stationName: "denneboom", time: "4:45" },
        { stationName: "watloo", time: "4:47" },
        { stationName: "silverton", time: "4:50" },
        { stationName: "koedospoort", time: "4:53" },
        { stationName: "hartbeesspruit", time: "4:58" },
        { stationName: "rissik", time: "5:00" },
        { stationName: "loftus", time: "5:02" },
        { stationName: "walkerstraat", time: "5:04" },
        { stationName: "devenishstraat", time: "5:06" },
        { stationName: "mearsstraat", time: "5:08" },
        { stationName: "pretoria", time: "5:11" },
      ])
    ];

  
};

export default timeTables;

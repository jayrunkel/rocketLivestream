// ================================================================
// LiveStream 1 - Aggregation Queries
//
// Directions:
//  - To explore the live stream data, run this script as is in
//    mongosh or copy the query variable
//    values one at a time and run them in MongoDB Compass
//  - If using Compass, you must select the rocketData collection and
//    then navigate to the Aggregations tab. Select "Create
//    New"->"Pipeline from text" and past in the aggregation queries
//    into the dialog box.



use("launchData");

db.rocketData.createIndex({time: 1});

// ================================================================
// rocketData Collection
// ================================================================

const countReadingsPerDevice = [
  {
    $group: {
      _id: "$meta.device",
      readingsCount: {
        $count: {},
      },
    },
  },
];


// Perform the following analysis steps:
//   1. Find all rocket data generated after 2020-10-13T13:46:35.000+00:00
//   2. Group this by device type and count the number of readings per device
//   3. For each of the device type groups ('lidar', 'dlc', etc.),
//      - find all the notes in the notes collection for this device
//        (equijoin with the nodes collection _id == device)
//      - place these notes in the notes field

const deviceNotesAfterTimeStamp = [
  {
    $match: {
      time: {
        $gt: ISODate("2020-10-13T13:46:35.000+00:00"),
      },
    },
  },
  {
    $group: {
      _id: "$meta.device",
      readingsCount: {
        $count: {},
      },
    },
  },
  {
    $lookup: {
      from: "notes",
      localField: "_id",
      foreignField: "device",
      as: "notes",
    },
  },
];


db.rocketData.aggregate(countReadingsPerDevice);

db.rocketData.aggregate(deviceNotesAfterTimeStamp);

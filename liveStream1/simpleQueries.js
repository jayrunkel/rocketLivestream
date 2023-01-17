// ================================================================
// LiveStream 1 - Find Queries
//
// Directions:
//  - To explore the live stream data, run this script as is in
//    mongosh or copy the query variable
//    values one at a time and run them in MongoDB Compass
//  - If using Compass, you must navigate to the launchData database
//    and select the appropriate collection.



use("launchData");

// ================================================================
// rocketData Collection
// ================================================================



const findTruthDeviceQuery = {'meta.device': 'truth'}; // find all documents for 'truth' devices

const findDlcDeviceQuery = {'meta.device': 'dlc'};     // find all documents for 'dlc' devices
const findLidarDeviceQuery = {'meta.device': 'lidar'}; // find all documents for 'lidar' devices

db.rocketData.find(findTruthDeviceQuery).limit(10);
db.rocketData.find(findDlcDeviceQuery).limit(10);
db.rocketData.find(findLidarDeviceQuery).limit(10);



// ================================================================
// notes Collection
// ================================================================

const MpS3_GT28 = {parameter: 'OMPS_DopplerSpeed_MpS3',value: {$gt: 28}};

db.notes.find(MpS3_GT28).limit(10)

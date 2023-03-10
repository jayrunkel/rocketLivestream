
// Note the database user that runs these commands must have the
// AtlasAdmin role. If you get a "Not authorized to run this command
// error", add the "atlasAdmin@admin" role to your database user. (On
// the left hand size of the Atlas UI under security, click on
// "Database Access". Either add a new user with the atlasAdmin role
// or add this role to your existing user.

use admin
db.runCommand({sqlGenerateSchema: 1, sampleNamespaces: ["rocketAnalytics.historicalData"], sampleSize: 1000, setSchemas: true})

db.runCommand({sqlGenerateSchema: 1, sampleNamespaces: ["rocketAnalytics.Weather"], sampleSize: 1000, setSchemas: true})



use rocketAnalytics
db.runCommand({sqlGetSchema: "historicalData"})
db.runCommand({sqlGetSchema: "Weather"})


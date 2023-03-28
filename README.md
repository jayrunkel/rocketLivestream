# MongoDB Rocket Data Livestream

# Overview

This repository contains four top level folders as follows:

- data - contains the json data used for live stream
- liveStream1 - queries and other resources used during live stream 1
- liveStream2 - queries and other resources used during live stream 2
- liveStream3 - queries and other resources used during live stream 3

## Livestream Preparation

This live stream has been designed so that attendees can build the
solution simultaneously with the instructor. To make this possible,
attendees should perform the steps listed below to ready their computer
and MongoDB Atlas account before the start of the webinar. If you
prefer video instructions, you can review them
[here](https://www.youtube.com/watch?v=vOjgLyrGMzY).

**Livestream Setup Instructions**

1. Download and install MongoDB Compass
   [download](https://www.mongodb.com/try/download/compass) Download and install
   the version appropriate for your operating system and hardware.
2. Create an Atlas account, if you don’t have one. Navigate to
   [Atlas Login](https://account.mongodb.com/account/login) and click
   on the blue "Sign Up" link.
3. Deploy a free tier cluster (M0)
   * Click the green "Build a Database" button.
   * Select the M0 FREE box on the right.
   * Pick the cloud provider and region of your choice
   * Give you cluster the name "Aerospace"
   * Click the create button. This will take you to the "Security
Quickstart" page. _(If you are asked for payment information, verify that you have
selected a M0 FREE cluster. No payment information should be necessary.)_



4. Security Quickstart
   * Create a database username and password. This is a different user than they
one created in step 2. The first user is the user for the Atlas
control plan. This new user is for the user that will access the data
in MongoDB.
   * Select the "Username and Password" button
   * Provide a username, e.g., "admin" or "mongoUser"
   * Provide a password or have Atlas generate a password. Save the
password in a safe place.
   * Select "My Local Environment" under "2. Where would you like to
connect from?"
   * Either provide an IP address or click "Add My Current IP Address"
to insert your IP address. (Note, if you IP address changes or if you
move to a new location, you will need to update your IP Whitelist
under Security-->Network Access, in the Atlas UI.

5. Connection String
   * In the Atlas UI, select the "Connect" button next to your new
database name.
   * Select Connect using MongoDB Compass
   * Select "I have MongoDB Compass"
   * Copy the connection string and save it somewhere. It should look
something like:
`mongodb+srv://demo:<password>@aerospace.a6ndg4g.mongodb.net/test`

6. Connect Using Compass
   * start MongoDB Compass
   * past the connection string (above) into the "URI" box.
   * In the connection string, in between the // and the @, add your
username and password, with the user name and password separated with
a colon. The final connection string should look
something like:

```mongodb+srv://yourUserName:yourPassword@aerospace.a6ndg4g.mongodb.net/test```

# Livestream 1

Watch Livestream 1 on [youtube](https://www.youtube.com/live/RUTsdqehWjo?feature=share).

There are three resources for Livestream 1:

1. simpleQueries.js - Queries used to review the rocket data
2. aggregations.js - Aggregation queries used to perform some basic
   analytics on therocket data.
3. ChartDashboard.charts - A MongoDB charts databoard file that can be
   loaded directly into MongoDB charts to recreate the Charts
   databoard build during Live Steam 1. _(To maximize the knowledge
   gained from the live stream, You should try to build the
   chart manually by following the steps during the live stream.)_
   
# Livestream 2

Watch Livestream 2 on [youtube](https://www.youtube.com/live/-jSQhlkaBCc?feature=share).

There are 5 resources for Livestream 2:

1. notesSearchIndex.js - the JSON definition of the search index
   created on the launchData.notes collection. During the livestream,
   we will use the Visual search index builder. This document is here
   for reference.
2. simpleSearchQuery.js - a simple aggregation pipeline that executes
   a search query and leverages the index defined in
   notesSearchIndex.js.
4. embedChartFinal - A simple React application that leverages the
   Charts SDK to embed a chart in a React component. To embed your
   chart into this application execute the following steps:
   * Install node js, if not installed already
   * `cd <yourPath>/rocketLiveStream/liveStream2/embedChartFinal`
   * `npm install`
   * `npm start` (this should open a browser tab with the react app)
   * In Charts, make your data source, dashboard, and chart accessible
     by unauthenticated access.
   * Assign your baseUri and ChartId in the variables at the top of
     `<yourPath>/rocketLiveStream/liveStream2/embedChartFinal/src/Dashboard.js` 
5. parameterTrigger.js - The code for the trigger that will inspect
   the parameter values and insert a node if a parameter is out of
   bounds. 


# Livestream 3

There are four resources for Livestream 3:

1. dataFedConfig.json - The JSON representation of the Data Federation
   configuration that consists of a virtual database connecting the M0
   Atlas cluster, Atlas Data Lake Backup Snaphots, and weather data
   located in a S3 bucket.
2. lidarJoinPlasma.js - An aggregation query that uses Data Federation
   tojoins the rocket data stored in the Data Lake with the weather
   data in a S3 bucket.
3. setSchemas.js - Atlas SQL commands to generate SQL schemas for the
   Data Lake and S3 bucket.
4. atlasSQL.sql - SQL queries for Atlas SQL that joins the rocket data
   stored in Data Lake with the weather data in S3 bucket. The queries
   in this file perform the same operations as the queries in
   lidarJoinPlasma.js. lidarJoinPlasma.js is in MQL whereas
   atlasSQL.js is in SQL.
   
Install the prerequisites listed
[here](https://www.mongodb.com/docs/atlas/data-federation/query/sql/dbeaver/connect/)
to connect DBeaver to Atlas SQL. 

## CODE FOR $50.00 IN ATLAS CREDITS - FREE

Livestream 3 uses some Atlas capabilities that are not available in
the free tier. We have made 100 $50.00 Atlas coupon codes available
for free to enable livestream participants to try out these
capabilities. The code for $50.00 in free Atlas credits is hidden in the data
set. 

Hint: find the document where the sum of the
`truth_pos_CON_ECEF_ECEF_M1` and `truth_vel_CON_ECEF_ECEF_MpS3` fields
equals `-1387989.7605416959`.




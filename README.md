# MongoDB Rocket Data Live Stream

# Overview

This repository contains four top level folders as follows:

- data - contains the json data used for live stream
- liveStream1 - queries and other resources used during live stream 1
- liveStream2 - queries and other resources used during live stream 2
- liveStream3 - queries and other resources used during live stream 3

## Live Stream Preparation

This live stream has been designed so that attendees can build the
solution simultaneously with the instructor. To make this possible,
attendees should perform the following steps to ready their computer
and MongoDB Atlas account before the start of the webinar.

1. Download and install MongoDB Compass [download](https://www.mongodb.com/try/download/compass)
2. Create an Atlas account, if you don’t have one
3. Deploy a free tier cluster (M0)
4. Create a new database user: admin/_your password_/atlasAdmin
5. Whitelist your current IP address
6. Get connection string the connection string to your new cluster. It
should look something like `mongodb+srv://<username>:<password>@aerospace.kk0bwmp.mongodb.net/test`
7. Create Compass Connection and Make Favorite

# Live Stream 1

There are three resources for Live Stream 1

1. simpleQueries.js - Queries used to review the rocket data
2. aggregations.js - Aggregation queries used to perform some basic
   analytics on therocket data.
3. ChartDashboard.charts - A MongoDB charts databoard file that can be
   loaded directly into MongoDB charts to recreate the Charts
   databoard build during Live Steam 1. _(To maximize the knowledge
   gained from the live stream, You should try to build the
   chart manually by following the steps during the live stream.)_

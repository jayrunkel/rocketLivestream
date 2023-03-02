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
   
# Live Stream 2

TBD


# Live Stream 3

TBD

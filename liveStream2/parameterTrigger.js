exports = function(changeEvent) {
  /*
    A Database Trigger will always call a function with a changeEvent.
    Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/

    Access the _id of the changed document:
    const docId = changeEvent.documentKey._id;

    Access the latest version of the changed document
    (with Full Document enabled for Insert, Update, and Replace operations):
    const fullDocument = changeEvent.fullDocument;

    const updateDescription = changeEvent.updateDescription;

    See which fields were changed (if any):
    if (updateDescription) {
      const updatedFields = updateDescription.updatedFields; // A document containing updated fields
    }

    See which fields were removed (if any):
    if (updateDescription) {
      const removedFields = updateDescription.removedFields; // An array of removed fields
    }

    Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.

    Access a mongodb service:
    const collection = context.services.get(<SERVICE_NAME>).db("db_name").collection("coll_name");
    const doc = collection.findOne({ name: "mongodb" });

    Note: In Atlas Triggers, the service name is defaulted to the cluster name.

    Call other named functions if they are defined in your application:
    const result = context.functions.execute("function_name", arg1, arg2);

    Access the default http client and execute a GET request:
    const response = context.http.get({ url: <URL> })

    Learn more about http client here: https://docs.mongodb.com/realm/functions/context/#context-http
  */
  
  //Access the latest version of the changed document
  //  (with Full Document enabled for Insert, Update, and Replace operations):
  
  const collection = context.services.get(mongodb-atlas).db("launchData").collection("rocketData"); 
  
  const expectedBounds = {
    DATA_DELTA_ANGLE1: {min: -0.001, max: .0005},
    OMPS_Range_M1: {min: 15, max: 1000},
    truth_vel_CON_ECEF_ECEF_MpS1: {min: -0.0001, max: 200}
  }
  
  const fullDocument = changeEvent.fullDocument;
  
  Object.keys(expectedBounds).forEach(key => {
    
    const docValue = fullDocument[key];
    if ((typeof docValue != 'undefined') && (docValue < expectedBounds[key].min || docValue > expectedBounds[key].max)) {
      const noteDoc = {
		    title: 'OUT OF BOUNDS NOTIFICATION',
		    notes: `Parameter ${key} with ${docValue} was out of bounds [${expectedBounds[key].min}, ${expectedBounds[key].max}].`,

        parameter: key,
        value: docValue,
        timestamp: changeEvent.wallTime,
        author: {name: "Atlas Triggers"}
      };

	    db.notes.insertOne(noteDoc);
    }
  });
};

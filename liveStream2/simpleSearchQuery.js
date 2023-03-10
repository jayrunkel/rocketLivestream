// ================================================================
// LiveStream 2 - Simple Search Queries
//
// Directions:
//  1. To experiment with Atlas search, create the search index on the
//     notes collection. The search index definition can be found in
//     ~/liveStream2/notesSearchIndex.js .
//  2. In Compass,
//     - you must navigate to the launchData database and select the
//       notes collection.  Switch to the "aggregation" tab in Compass.
//     - Select "Create New"->"Pipeline from text" and paste the value
//       of the searchQuery value into the dialog box. Press "Create New".
//  3. For mongosh, simple run the script below


use("launchData");

// ================================================================
// notes Collection
// ================================================================

const searchQuery =
[
  {
    $search: {
      index: "default",
      text: {
        query: ["min", "mp4s"],
        path: ["notes", "title"],
      },
    },
  },
  {
    $addFields: {
      score: { $meta: "searchScore" },
    },
  },
];

db.notes.aggregate(searchQuery);

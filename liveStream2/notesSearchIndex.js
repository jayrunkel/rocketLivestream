// Test strings in query tester
// 1. MpS4
// 2. min MpS4


// Search Index

{
  "mappings": {
    "dynamic": false,
    "fields": {
      "notes": {
        "type": "string"
      },
      "title": {
        "type": "string"
      }
    }
  }
}


// This is a more complex index definition with autocomplete and facets.
// This version is not required for the livestream.
/* 
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "author": {
        "fields": {
          "name": {
            "type": "stringFacet"
          }
        },
        "type": "document"
      },
      "notes": [
        {
          "type": "string"
        },
        {
          "type": "autocomplete"
        }
      ],
      "title": {
        "type": "string"
      },
			"timeStamp" : {
				"type" : "dateFacet"
			},
			"device" : {
				"type" : "stringFacet"
			},
			"parameter" : {
				"type" : "stringFacet"
			},
			"violationType" : {
				"type" : "stringFacet"
			}
    }
  }
}
*/

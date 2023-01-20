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

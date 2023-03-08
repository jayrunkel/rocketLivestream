[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        "meta.device": "lidar",
        time: {
          $gt: ISODate(
            "2020-10-13T13:44:18.891Z"
          ),
        },
      },
  },
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "Weather",
        let: {
          timeLow: {
            $subtract: ["$time", 60000],
          },
          timeHigh: {
            $add: ["$time", 60000],
          },
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: [
                      "$metric",
                      "plasma-7-day",
                    ],
                  },
                  {
                    $gt: [
                      "$time_tag",
                      "$$timeLow",
                    ],
                  },
                  {
                    $lt: [
                      "$time_tag",
                      "$$timeHigh",
                    ],
                  },
                ],
              },
            },
          },
        ],
        as: "result",
      },
  },
]

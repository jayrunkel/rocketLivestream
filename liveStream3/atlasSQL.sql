-- ================================================================
-- Test Schemas
-- ================================================================

-- get all rows from Atlas Data Lake

SELECT * FROM rocketAnalytics.historicalData;

-- get all rows from S3
SELECT * FROM Weather;

-- ================================================================
-- JOIN Data Lake launch data with S3 Weather data
-- ================================================================


-- Join all rocket data with plasma readings based upon time window
-- This will process lots of data and take a long time
SELECT * 
FROM rocketAnalytics.historicalData as h
INNER JOIN Weather as w 
  ON h."time" > DATEADD(MINUTE, -1, w.time_tag) AND 
     h."time" < DATEADD(MINUTE, 1, w.time_tag) AND 
     w.metric = 'plasma-7-day' AND 
     h."time" > CAST('2020-10-13T13:44:18.891Z' AS BSON_DATE) AND
     h.meta.device = 'lidar';




-- Join a subset of the rocket data with a subset of the weather data
-- Same query as previous, but reduces both sides of the join to improve performance 
SELECT t1.*, t2.*
FROM (SELECT l1."time", l1.meta.device, l1."OMPS_Range_M1", l1."OMPS_Range_M4" 
      FROM rocketAnalytics.historicalData as l1 
      WHERE l1.meta.device = 'lidar' AND l1."time" > CAST('2020-10-13T13:44:18.891Z' AS BSON_DATE)) as t1
INNER JOIN (SELECT l2.*
            FROM rocketAnalytics.Weather  as l2 
            WHERE l2.metric = 'plasma-7-day' 
               AND l2.time_tag > CAST('2020-10-13T13:40:00.000Z' AS BSON_DATE)
               AND l2.time_tag < CAST('2020-10-13T13:48:00.000Z' AS BSON_DATE)
           ) as t2
      ON t1."time" > DATEADD(MINUTE, -1, t2.time_tag) AND t1."time" < DATEADD(MINUTE, 1, t2.time_tag);

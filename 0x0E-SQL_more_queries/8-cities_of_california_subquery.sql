-- sdhxncc jdudb dhhdshjsddhjd 
-- dhb  sdvhjjjhdhd there are love 
SELECT id, name FROM cities
WHERE state_id = (
      SELECT id FROM states
      WHERE name = "California")
ORDER BY id;
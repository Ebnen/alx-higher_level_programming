-- Write a script that lists the number of records with the same score
-- The result should displa
SELECT score, COUNT(1) AS number FROM second_table
GROUP BY score
ORDER BY number DESC;
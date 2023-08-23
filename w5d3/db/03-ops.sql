-- fetchAllJokes

SELECT
  jokes.*,
  authors.name, authors.funny, authors.description
  FROM jokes
  JOIN authors 
    ON authors.id = jokes.author_id
;

-- fetchJokeById

SELECT 
  jokes.*,
  authors.name, authors.funny, authors.description
  FROM jokes
  JOIN authors 
    ON authors.id = jokes.author_id
  WHERE jokes.id = 1
;

-- insertJoke

INSERT INTO 
  jokes (question, answer, rating, author_id) 
  VALUES ('Pouet?', 'Pouet pouet!', 5, 1)
; 

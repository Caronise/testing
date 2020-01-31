-- Creating the books table

DROP TABLE IF EXISTS books CASCADE;
CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  book_title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  book_description VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  num_of_pages INTEGER NOT NULL,
  publisher VARCHAR(255) NOT NULL,
);
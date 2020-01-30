-- Creating the books table

DROP TABLE IF EXISTS books CASCADE;
CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  book_title VARCHAR(255) NOT NULL,
  author ,
  book_description ,
  img_url ,
  num_of_pages ,
  publisher ,
);
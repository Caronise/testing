-- Creating the categories table 

DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
  book_name VARCHAR(255) NOT NULL,
);
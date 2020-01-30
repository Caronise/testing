-- Creating the wishlists tables

DROP TABLE IF EXISTS wishlists CASCADE;

CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
  list_name VARCHAR(255) NOT NULL,
);
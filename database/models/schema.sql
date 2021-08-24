CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username varchar,
  email varchar NOT NULL
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar,
  userId int references users(id)
);

CREATE TABLE users_boards (
  id SERIAL,
  userId int references users(id),
  boardId int references boards(id)
)

CREATE TABLE tickets (
  id SERIAL,
  title varchar(40),
  description varchar(240),
  size varchar,
  status varchar,
  boardId int references baords(id)
);
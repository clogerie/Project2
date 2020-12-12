### Schema

CREATE DATABASE moviebuddy_db;
USE moviebuddy_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	movie_name varchar(20) NOT NULL,
	deleted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
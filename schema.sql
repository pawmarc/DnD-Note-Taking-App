CREATE SCHEMA dnd_note_taker;
USE dnd_note_taker;

CREATE TABLE users (
	id CHAR(36) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY(id)
);

INSERT INTO users (id, email, password, first_name, last_name) VALUES ('43b650b4-5938-4ae9-9efa-356a1bf5ec13', 'guest@email.com', '$2b$12$U89MQ/QceNawQivSWKo0iugKsWdauLYoFxHU2MxEJyjPVzj6ync3q', 'Guest', 'User');


CREATE TABLE notes (
	id CHAR(36) NOT NULL,
    userid CHAR(36) NOT NULL,
    body VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users(id)
);

INSERT INTO notes (id, userid, body) VALUES ('3b7fe2ca-5df8-4e3c-a144-8d7e971f4270', '43b650b4-5938-4ae9-9efa-356a1bf5ec13', '"Only a week away!" said Ernie Macmillan of Hufflepuff, emerging from the crowd, his eyes gleaming. "I wonder if Cedric knows? Think I\'ll go and tell him. . . ." "Cedric?" said Ron blankly as Ernie hurried off.');

CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dnd_note_taker';

GRANT ALL PRIVILEGES ON dnd_note_taker.* TO 'dnd_note_taker'@'localhost';

FLUSH PRIVILEGES;


SELECT * FROM users;
SELECT * FROM notes;

SELECT * FROM users WHERE email = 'guest@email.com';
SELECT * FROM users WHERE password = 'password123';

UPDATE users
SET password = "$2b$12$U89MQ/QceNawQivSWKo0iugKsWdauLYoFxHU2MxEJyjPVzj6ync3q"
WHERE email = "guest@email.com";

DROP TABLE IF EXISTS Users;

COMMIT;

CREATE TABLE USERS
(
    id         int auto_increment
        primary key,
    first_name varchar(255) null,
    last_name  varchar(255) null,
    email      varchar(255) null,
    createdAt  datetime     not null,
    updatedAt  datetime     not null
);

COMMIT;

INSERT INTO USERS(id, first_name, last_name, email, createdAt, updatedAt) VALUES
    (1, 'BURAK', 'KAROGLAN', 'basasd@gmail.com', datetime('now'), datetime('now'));
COMMIT;

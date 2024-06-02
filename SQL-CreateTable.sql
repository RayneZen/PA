CREATE TABLE users (
  UserId BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  roles VARCHAR(255) NOT NULL DEFAULT 'user',
  CHECK (roles IN ('user', 'admin'))
);


CREATE TABLE Subscription (
SubscriberId int,
AuthorId int );

CREATE TABLE views (
ViewerId int,
ArtWorkID int );

CREATE TABLE Liks (
LikerId int,
ArtWorkID int );

CREATE TABLE Comments (
CommentatorId int,
ArtWorkID int,
CommentText text
 );





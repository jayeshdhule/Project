DROP DATABASE IF EXISTS `quotify`;

CREATE DATABASE `quotify`;

USE `quotify`;


-- quotify.`User` definition

CREATE TABLE `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(512) NOT NULL,
  `avatarPath` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_UN` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE User ADD COLUMN authMethod varchar(25);
-- quotify.Post definition

CREATE TABLE `Post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text DEFAULT NULL,
  `coverPath` varchar(255) DEFAULT NULL,
  `category` enum('life','love','pain','motivation','mental health','travel') DEFAULT NULL,
  `publishDate` datetime DEFAULT current_timestamp(),
  `editDate` datetime NOT NULL DEFAULT current_timestamp(),
  `status` enum('pub','pvt','draft') NOT NULL DEFAULT 'pub',
  `userId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Post_FK` (`userId`),
  CONSTRAINT `Post_FK` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- quotify.PostChanges definition

CREATE TABLE `PostChanges` (
  `title` varchar(255) DEFAULT NULL,
  `body` text DEFAULT NULL,
  `coverPath` varchar(255) DEFAULT NULL,
  `category` enum('life','love','pain','motivation','mental health','travel') DEFAULT NULL,
  `postId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  KEY `PostChange_Post_FK` (`postId`),
  KEY `PostChange_User_FK` (`userId`),
  CONSTRAINT `PostChange_Post_FK` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `PostChange_User_FK` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- quotify.Comment definition

CREATE TABLE `Comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `body` text NOT NULL,
  `postId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `Comment_Post_FK` (`postId`),
  KEY `Comment_User_FK` (`userId`),
  CONSTRAINT `Comment_Post_FK` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Comment_User_FK` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- quotify.Like definition

CREATE TABLE `Like` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `postId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `liked` int(10),
  PRIMARY KEY (`id`),
  KEY `Like_Post_FK` (`postId`),
  KEY `Like_User_FK` (`userId`),
  CONSTRAINT `Like_Post_FK` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Like_User_FK` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


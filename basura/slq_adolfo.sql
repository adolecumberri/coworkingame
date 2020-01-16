create database coworkin_coworkingame;
use coworkin_coworkingame;



SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/* ---------------------------------------------------------------------------------------------   */
/*-------------------------------------------------TABLA MAESTRA---------------------------------------------*/
CREATE TABLE `gender`(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar (20)  NOT NULL
) ENGINE=InnoDB default character set utf8mb4;

CREATE TABLE `country` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(60)  NOT NULL
) ENGINE=InnoDB default character set utf8mb4;

CREATE TABLE `state` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_country` int DEFAULT NULL,
  `name` varchar(255)  NOT NULL,
   FOREIGN KEY(id_country) REFERENCES country(id)
) ENGINE=InnoDB default character set utf8mb4;

 CREATE TABLE `profile` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `cathegory` varchar (60) NOT NULL
) ENGINE=InnoDB default character set utf8mb4;

CREATE TABLE `type`(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `cathegory` enum('file','proyect'),
  `description` text NULL
)ENGINE=InnoDB;

CREATE TABLE `social_media`(
  `id`int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB default character set utf8mb4;

/* ---------------------------------------------------------------------------------------------   */
/* -----------------------------------------------TABLES ---------------------------------------   */
CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(60) ,
  `password`  varchar(60) ,
  `name`  varchar(255) ,
  `age` int(3),
  `id_gender` int NOT NULL,
  `id_country`  int NOT NULL ,
  `id_state`  int NOT NULL ,
  `id_social_media` int NOT NULL,
  `header`  text ,
  `features`  varchar(60) ,
  `cv_photo` text ,
  `cv_studies` text ,
  `cv_works` text ,
  `cv_experience` text ,
  `job_desired` tinyint(1) DEFAULT 0,
  `colaboration_desired` tinyint(1) DEFAULT 0,
  `likes` int(11)  DEFAULT 0,
  `seen` int(11)  DEFAULT '0',
  `develloper` tinyint(1) DEFAULT 0,
  `avatar` text ,
  `outstanding` tinyint(1) DEFAULT NULL,
  `ip` text ,
  `token` text ,
  `last_visit` date NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  FOREIGN KEY(id_gender) REFERENCES gender(id),
  FOREIGN KEY(id_country) REFERENCES country(id),
  FOREIGN KEY(id_state) REFERENCES state(id)
) ENGINE=InnoDB default character set utf8mb4;

CREATE TABLE `enterprise` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(60),
  `name` varchar(60),
  `url_friendly` varchar(255),
  `description` text ,
  `id_country`  int NOT NULL ,
  `id_state`  int NOT NULL ,
  `logo` text ,
  `header` text ,
  `seen` int(11) DEFAULT NULL,
  `date`  date NOT NULL,
  `visible` tinyint(1) DEFAULT 1,
  `active` tinyint(1) DEFAULT 1,
  FOREIGN KEY(id_country) REFERENCES country(id),
  FOREIGN KEY(id_state) REFERENCES state(id)
  ) ENGINE=InnoDB default character set utf8mb4;

/* TODO: preguntar davis diferencia entr proyect y portafolio. */
/*project: trabajos de empresas */
CREATE TABLE `project` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` text ,
  `id_type` int NOT NULL,
  `header` text ,
  `date`  date NOT NULL,
  `seen` int(11) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT 1,
  `active` tinyint(1) DEFAULT 1,
  FOREIGN KEY(id_type) REFERENCES type(id)
) ENGINE=InnoDB DEFAULT character set utf8mb4;

/*conjunto de archivos de los creadores de contenido (posiblemente ligados a projects de empresas*/
/*id_project puede ser NULL porque un portafolio puede ser o ¡¡NO!! parte de un PROJECT y no de un usuario
  Y
 id_user puede ser NULL porque PUEDE SER o ¡¡NO!! parte del trabajo de un usuario*/
CREATE TABLE `portfolio` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_project` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `title` varchar(60) NOT NULL,
  `description` varchar(200) ,
  `id_style` int DEFAULT NULL,
  `likes` int(11) DEFAULT 0,
  `views` int(11) DEFAULT 0,
  `tags` text CHARACTER SET utf8mb4,
  `publish` tinyint(1) DEFAULT NULL,
  `date`  date NOT NULL,
  `visible` tinyint(1) DEFAULT 1,
  `active` tinyint(1) DEFAULT 1,
  FOREIGN KEY(id_user) REFERENCES user(id),
  FOREIGN KEY(id_project) REFERENCES project(id)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `file` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_type` int,
  `name` varchar(150),
  `id_project` int(11) DEFAULT NULL,
  `id_portfolio` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT '0',
  `views` int(11) DEFAULT '0',
  `puntos` int(11) DEFAULT '0',
  `visible` tinyint(1) DEFAULT 1,
  `active` tinyint(1) DEFAULT 1,
  FOREIGN KEY(id_type) REFERENCES type(id),
  FOREIGN KEY(id_project) REFERENCES project(id),
  FOREIGN KEY(id_portfolio) REFERENCES portfolio(id)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `commentary` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `commentary` text ,
  `id_file` int NOT NULL,
  `id_user` int NOT NULL,
  `date`  date NOT NULL,
  `read` tinyint(1) DEFAULT 0,
  `visible` tinyint(1) DEFAULT 1,
  `active` tinyint(1) DEFAULT 1,
  FOREIGN KEY(id_file) REFERENCES file(id),
  FOREIGN KEY(id_user) REFERENCES user(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `favourite`(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_portfolio` int NULL,
  `id_project` int NULL,
  `id_file` int NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  FOREIGN KEY(id_portfolio) REFERENCES portfolio(id),
  FOREIGN KEY(id_project) REFERENCES project(id),
  FOREIGN KEY(id_file) REFERENCES file(id),
  FOREIGN KEY(id_user) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;
/*Qué es TIPO ??¿?¿?¿?¿??¿*/
CREATE TABLE `message` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_receiver` int NOT NULL,
  `id_sender` int NOT NULL,
  `message` text ,
  `tipo` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `read` tinyint(1) DEFAULT 0,
  FOREIGN KEY(id_receiver) REFERENCES user(id),
  FOREIGN KEY(id_sender) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;


/* ---------------------------------------------------------------------------------------------   */
/* --------------------------------------------------- TABLAS NM ----------------------------------------------------- */


CREATE TABLE `user_social_media`(
  `id_user` int NULL,
  `id_social_media` int NOT NULL,
  FOREIGN KEY(id_user) REFERENCES user(id),
  FOREIGN KEY(id_social_media) REFERENCES social_media(id),
  PRIMARY KEY (id_user, id_social_media)
) ENGINE=InnoDB;

CREATE TABLE `user_profile`(
  `id_user` int,
  `id_profile` int,
  FOREIGN KEY(id_user) REFERENCES user(id),
  FOREIGN KEY(id_profile) REFERENCES profile(id),
  PRIMARY KEY (id_user, id_profile)
) ENGINE=InnoDB;

CREATE TABLE `user_portfolio` (
  `id_user` int(11) NOT NULL,
  `id_portfolio` int(11) NOT NULL,
  `request_status` enum('send','accepted','refused'),
  FOREIGN KEY(id_user) REFERENCES user(id),
  FOREIGN KEY(id_portfolio) REFERENCES portfolio(id),
  PRIMARY KEY (id_user, id_portfolio)
) ENGINE=InnoDB;

/*Colaboradores aquí*/
CREATE TABLE `user_enterprise` (
  `id_user` int NOT NULL,
  `id_enterprise` int NOT NULL,
  `request_status` enum('send','accepted','refused'),
  `admin` int(11) DEFAULT NULL, 
  `type_user` enum('basic','updater','admin'),
  PRIMARY KEY (id_user, id_enterprise)
) ENGINE=InnoDB;

CREATE TABLE `user_project` (
  `id_user` int NOT NULL,
  `id_project` int NOT NULL,
  `request_status` enum('send','accepted','refused'),
  FOREIGN KEY(id_user) REFERENCES user(id),
  FOREIGN KEY(id_project) REFERENCES project(id),
  PRIMARY KEY (id_user, id_project)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;


CREATE TABLE `enterprise_social_media`(
  `id_enterprise` int,
  `id_social_media` int,
  FOREIGN KEY(id_enterprise) REFERENCES enterprise(id),
  FOREIGN KEY(id_social_media) REFERENCES social_media(id),
  PRIMARY KEY (id_enterprise, id_social_media)
) ENGINE=InnoDB;

CREATE TABLE `enterprise_project` (
  `id_enterprise` int NOT NULL,
  `id_project` int NOT NULL,
  `request_status` enum('send','accepted','refused'),
  FOREIGN KEY(id_enterprise) REFERENCES enterprise(id),
  FOREIGN KEY(id_project) REFERENCES project(id),
  PRIMARY KEY (id_enterprise, id_project)
) ENGINE=InnoDB;

/*Esta tabla esta mal, user debe ligarse con proyecto si participan en una empresa*/

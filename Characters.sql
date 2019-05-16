DROP DATABASE IF EXISTS Characters;

CREATE DATABASE Characters;

USE Characters;

CREATE TABLE Characters (
  id varchar(45) NULL,
  routeName VARCHAR(45) NULL,
  name VARCHAR(45) NULL,
  class VARCHAR(45) NULL,
  race VARCHAR(45) NULL,
  alignment VARCHAR(45) NULL,
  level INT NULL,
  experience INT NULL,
  speed INT NULL,
  charisma INT NULL,
  strength INT NULL,
  dexterity INT NULL,
  constitution INT NULL,
  intelligence INT NULL,
  createdAt datetime,
  updatedAt datetime
  
);


create database burgers_DB;

use burgers_DB;

drop table if exists burgers; 

create table burgers (
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)


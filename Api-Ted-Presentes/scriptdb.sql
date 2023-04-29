create database ted_presente;

use ted_presente;

create table cliente(
	id varchar(250) primary key,
	nome varchar(40) not null,
	documento varchar(14) not null,
	telefone varchar(11) not null,
	email varchar(60) not null,
	created_at datetime default CURRENT_TIMESTAMP(),
	updated_at datetime default CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);
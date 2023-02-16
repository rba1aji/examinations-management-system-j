drop database amsdb;
drop user ams;
create user ams with password 'password';
create database amsdb with template=template0 owner=ams;
\connect amsdb;
alter default privileges grant all on tables to ams;
alter default privileges grant all on sequences to ams;

create table students
(
    id            integer primary key,
    dateofbirth   varchar(10) not null,
    fullname      varchar not null,
    degree        varchar,
    branch        varchar,
    section       varchar(1),
    yearofjoin    varchar(4),
    yearofpassout varchar(4),
    email         varchar,
    phone         varchar,
    address       varchar,
    blocked       boolean
);

create table faculties
(
    id          integer primary key,
    dateofbirth varchar(10) not null,
    fullname    varchar not null,
    email       varchar,
    phone       varchar
);

create table marks
(
    id        integer primary key,
    studentid integer not null,
    examid    integer not null,
    courseid  varchar not null,
    mark      float
);

create table exams
(
    id       integer primary key,
    name     varchar not null,
    year     varchar(4),
    semester integer
);

create table courses
(
    id   varchar primary key,
    name varchar not null,
    degree varchar,
    branch varchar,
    semester integer
);

create table grades
(
    id   integer primary key,
    cgpa float
);

create sequence student_id_seq increment by 1 start 1;
create sequence faculty_id_seq increment by 1 start 1;
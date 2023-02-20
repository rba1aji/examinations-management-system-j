drop database amsdb;
drop user ams;
create user ams with password 'password';
create database amsdb with template =template0 owner =ams;
\connect amsdb;
alter default privileges grant all on tables to ams;
alter default privileges grant all on sequences to ams;

create table students
(
    id            varchar primary key,
    dateofbirth   varchar(10) not null,
    fullname      varchar     not null,
    degree        varchar,
    branch        varchar,
    section       varchar(1),
    yearofjoin    varchar(4),
    yearofpassout varchar(4),
    email         varchar,
    phone         varchar,
    address       varchar
);

create table faculties
(
    id          varchar primary key,
    password    varchar,
    dateofbirth varchar(10) not null,
    fullname    varchar     not null,
    email       varchar,
    phone       varchar
);

create table marks
(
    id        integer primary key,
    studentid varchar not null,
    examid    integer not null,
    courseid  varchar not null,
    mark      float
);

create table exams
(
    id       varchar primary key,
    name     varchar not null,
    semester integer,
    batch    varchar
);

create table courses
(
    id       varchar primary key,
    name     varchar not null,
    credits  integer,
    degreeid varchar,
    branchid varchar,
    semester integer,
    batch    varchar
);

create table grades
(
    id   integer primary key,
    cgpa float
);

create table blocked_students
(
    id integer primary key
);

-- create sequence student_id_seq increment by 1 start 1;
-- create sequence faculty_id_seq increment by 1 start 1;

-- static data

create table degrees
(
    id   varchar primary key ,
    name varchar
);

create table branches
(
    id       varchar primary key ,
    name     varchar,
    degreeid varchar
);

create table branch_exam
(
    examid   varchar references exams (id),
    branchid varchar references branches (id),
    primary key (examid, branchid)
);


insert into degrees
values ('BE', 'BE');
insert into degrees
values ('BTECH', 'BTECH');

insert into branches
values ('CSE', 'Computer Science and Engineering', 'BE');
insert into branches
values ('IT', 'Information Technology', 'BTECH');
insert into branches
values ('ECE', 'Electrical and Electronical Engineering', 'BE');
insert into branches
values ('MECH', 'Mechanical Engineering', 'BE');
insert into branches
values ('CIVIL', 'Civil Engineering', 'BE');
insert into branches
values ('CSBS', 'Computer Science and Buisness Systems', 'BTECH');
insert into branches
values ('AIDS', 'Artificial Intelligence and Data Science', 'BTECH');

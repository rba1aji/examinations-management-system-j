drop database amsdb;
drop user ams;
create user ams with password 'password';
create database amsdb with template =template0 owner =ams;
\connect amsdb;
alter default privileges grant all on tables to ams;
alter default privileges grant all on sequences to ams;

create table admins
(
    id       varchar primary key,
    password varchar not null,
    fullname varchar
);

create table degrees
(
    id   varchar primary key,
    name varchar
);

create table branches
(
    id       varchar primary key,
    name     varchar,
    degreeid varchar
);

create table students
(
    id          bigint primary key,
    dateofbirth varchar(10) not null,
    fullname    varchar     not null,
    degreeid    varchar references degrees (id),
    branchid    varchar references branches (id),
    section     varchar(1),
    batch       varchar(9),
    phone       varchar
);

create table faculties
(
    id          varchar primary key,
    password    varchar not null,
    fullname    varchar not null,
    department  varchar,
    designation varchar,
    email       varchar,
    phone       varchar
);

create table exams
(
    id       integer primary key,
    name     varchar not null,
    semester integer,
    batch    varchar
);

create table courses
(
    id       varchar,
    name     varchar not null,
    credits  integer,
    degreeid varchar references degrees (id),
    branchid varchar references branches (id),
    semester integer,
    batch    varchar,
    primary key (id, branchid),
    unique (id, branchid)
);

create table marks
(
    studentid  bigint references students (id),
    attendance boolean,
    mark       integer,
    examid     integer references exams (id),
    courseid   varchar,
    branchid   varchar,
    primary key (studentid, examid, courseid, branchid),
    foreign key (courseid, branchid) references courses (id, branchid)
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


create table branch_exam
(
    examid   integer references exams (id),
    branchid varchar references branches (id),
    primary key (examid, branchid)
);


create table exam_batches
(
    id              integer,
    name            varchar,
    start_studentid bigint references students (id),
    end_studentid   bigint references students (id),
    starttime       timestamp,
    endtime         timestamp,
    facultyid       varchar references faculties (id),
    venue           varchar,
    courseid        varchar,
    examid          integer,
    branchid        varchar,
    primary key (id),
    unique (name, examid, courseid),
    foreign key (courseid, branchid) references courses (id, branchid),
    foreign key (examid, branchid) references branch_exam (examid, branchid)
);

create sequence exam_batch_id_seq increment by 1 start 1;
create sequence exam_id_seq increment by 1 start 1;


-- static data
insert into admins
values ('admin', '$2a$10$5nwaYpKGftguR5.Kvep5KesDEz9uKEKe/M5VFvGPUWA3eLg8ekP.K', 'Admin');

insert into degrees
values ('BE', 'BE');
insert into degrees
values ('BTECH', 'BTECH');

insert into branches
values ('CSE', 'Computer Science and Engineering', 'BE');
insert into branches
values ('IT', 'Information Technology', 'BTECH');
insert into branches
values ('ECE', 'Electrics and Communication Engineering', 'BE');
insert into branches
values ('EEE', 'Electrical and Electronical Engineering', 'BE');
insert into branches
values ('MECH', 'Mechanical Engineering', 'BE');
insert into branches
values ('CIVIL', 'Civil Engineering', 'BE');
insert into branches
values ('CSBS', 'Computer Science and Buisness Systems', 'BTECH');
insert into branches
values ('AIDS', 'Artificial Intelligence and Data Science', 'BTECH');

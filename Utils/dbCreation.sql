CREATE TABLE module (
    id CHAR(36) PRIMARY KEY,
    moduleName VARCHAR(50),
    moduleStartDate DATE,
    moduleEndDate DATE,
    description TEXT
)

CREATE TABLE content (
    id CHAR(36) PRIMARY KEY,
    uploadtime TIMESTAMP,
    url VARCHAR(255), 
    format VARCHAR(1000),
    contentId CHAR(36) REFERENCES module(Id)	
)

CREATE TABLE contentType(
    id CHAR(36) PRIMARY KEY, 
    format VARCHAR(1000),
    typeId CHAR(36) REFERENCES content(Id)	
)

CREATE TABLE quize (
    id CHAR(36) PRIMARY KEY,
    description VARCHAR(255),
    timeLimit INT, 
    quizId CHAR(36) REFERENCES content(id)
)

CREATE TABLE assignment (
    id CHAR(36) PRIMARY KEY,
    introduction VARCHAR(255), 
    name VARCHAR(255), 
    dueDate DATE, 
    timeLimit INT, 
    assignmentId CHAR(36) REFERENCES content(id)
);

CREATE TABLE wishList (
    id CHAR(36) PRIMARY KEY,
    addedDate DATE,
    addedTime TIME, 
    wishListId CHAR(36) REFERENCES module(id)
);

CREATE TABLE quizQuestion (
    id CHAR(36) PRIMARY KEY,
    createdDate TIMESTAMP,
    correctAnswer VARCHAR(255), 
    questionText TEXT, 
    questionName VARCHAR(255), 
    mark INT, 
    lastModifiedDate TIMESTAMP, 
    tag VARCHAR(255), 
    qID CHAR(36) REFERENCES quize(id)
);

CREATE TABLE questionCategory (
    id CHAR(36) PRIMARY KEY,
    categoryName VARCHAR(255), 
    subcategory VARCHAR(255), 
    questionID CHAR(36) REFERENCES quizQuestion(id)

);
CREATE TABLE forumcategory(
    id CHAR(36) PRIMARY KEY,
    name character (100)
);

Create Table forumquestion(
    id CHAR(36) PRIMARY KEY,
    pinstatus boolean,
    lockstatus boolean,
    title character (200),
    body character (200),
    fquestionid character REFERENCES  (36)
);


--new--
CREATE TABLE ForumCategory (
    id CHAR(36) PRIMARY KEY,
    category_name VARCHAR(255)
);
Create Table forumquestion(
    id CHAR(36) PRIMARY KEY,
    forum_questtion_pin_status boolean,
    forum_questtion_lock_status boolean,
    forum_questtion_title character (200),
    forum_questtion_body character (200),
    fCategoryID CHAR(36) REFERENCES ForumCategory(id)
);

Create Table forumquestion(
    id CHAR(36) PRIMARY KEY,
	user_id CHAR(36),
    forum_questtion_pin_status boolean,
    forum_questtion_lock_status boolean,
    forum_questtion_title character (200),
    forum_questtion_body character (200),
    fCategoryID CHAR(36) REFERENCES ForumCategory(id)
);


Create Table forumcomment(
    id CHAR(36) PRIMARY KEY,
    forum_comment_body TEXT,
    FQuestionID CHAR(36) REFERENCES forumquestion(id)
);

Create Table forumcomment(
    id CHAR(36) PRIMARY KEY,
	user_id CHAR(36),
    forum_comment_body TEXT,
    FQuestionID CHAR(36) REFERENCES forumquestion(id)
);


Create Table forum_sub_comment
(
    id CHAR(36) PRIMARY KEY,
    forum_sub_comment_body TEXT,
    FCommentID CHAR(36) REFERENCES forumcomment(id)
);

Create Table forum_sub_comment
(
    id CHAR(36) PRIMARY KEY,
	user_id CHAR(36),
    forum_sub_comment_body TEXT,
    FCommentID CHAR(36) REFERENCES forumcomment(id)
);

(
    id character(36) COLLATE pg_catalog."default" NOT NULL,
    email character(100) COLLATE pg_catalog."default",
    user_name character(50) COLLATE pg_catalog."default",
    password character(150) COLLATE pg_catalog."default",
    address character(200) COLLATE pg_catalog."default",
    contact_no character(20) COLLATE pg_catalog."default",
    dob date,
    gender integer,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);


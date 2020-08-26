CREATE DATABASE news_portal_nodejs;

USE news_portal_nodejs;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(title, news) VALUES('my title','content of the news');

SELECT * FROM news;


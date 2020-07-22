CREATE TABLE `LittleLibrary`.`book`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR
(150) NOT NULL,
  `author` VARCHAR
(75) NULL,
  `date` DATE NULL,
  `rate` INT NULL,
  `comment` VARCHAR
(200) NULL,
  PRIMARY KEY
(`id`));




INSERT INTO `
LittleLibrary`.`book
`
(`title`, `author`, `date`, `rate`, `comment`) VALUES
('La tresse', 'Laetitia Colombani', '2019/01/02', '8', 'Agréable à lire. Pour voyager et découvrir le destin de 3 femmes.');
INSERT INTO `
LittleLibrary`.`book
`
(`title`, `auteur`, `date`, `rate`, `comment`) VALUES
('Femmes qui courent avec les loups', 'Clarissa Pinkola', '2018/01/02', '10', 'A lire et à relire, une bible !');

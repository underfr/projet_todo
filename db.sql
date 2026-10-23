CREATE DATABASE IF NOT EXISTS todolist CHARSET utf8mb4;

USE todolist;

CREATE TABLE IF NOT EXISTS category(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
category_name VARCHAR(50) UNIQUE NOT NULL
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `right`(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
right_name VARCHAR(50) UNIQUE NOT NULL
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `account`(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
firstname VARCHAR(50) NOT NULL,
lastname VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL,
image VARCHAR(255) DEFAULT "profil.png" NOT NULL,
right_id INT DEFAULT 1 NOT NULL
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS task(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(50) NOT NULL,
`description` VARCHAR(255) NOT NULL,
created_at DATETIME NOT NULL,
updated_at DATETIME NOT NULL,
finish_on DATETIME,
`status` BOOL DEFAULT 1 NOT NULL,
`repeat` VARCHAR(50),
account_id INT NOT NULL
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS task_category(
task_id INT NOT NULL,
category_id INT NOT NULL,
PRIMARY KEY(task_id, category_id)
)ENGINE=InnoDB;

ALTER TABLE `account`
ADD CONSTRAINT fk_possess_right
FOREIGN KEY(right_id)
REFERENCES `right`(id);

ALTER TABLE task
ADD CONSTRAINT fk_create_account
FOREIGN KEY(account_id)
REFERENCES `account`(id)
ON DELETE CASCADE;

ALTER TABLE task_category
ADD CONSTRAINT fk_detail_category
FOREIGN KEY(category_id)
REFERENCES category (id);

ALTER TABLE task_category
ADD CONSTRAINT fk_detail_task
FOREIGN KEY(task_id)
REFERENCES task (id);

INSERT INTO `right`(right_name) VALUES ("ROLE_USER"), ("ROLE_ADMIN");

-- Données par défaut de test
INSERT INTO category(category_name) VALUES ("Travail"), ("Loisir");
INSERT INTO `account`(firstname, lastname, email, password, right_id) VALUES
                                                                          ("Jean", "Dupont", "jean.dupont@example.com", "$2y$12$pJSJYPM62diINmmIb7ce0ube6qbV3nHWt1UezQnNgLKI59SAAHpIq", 1),
                                                                          ("Marie", "Martin", "marie.martin@example.com", "$2y$12$pJSJYPM62diINmmIb7ce0ube6qbV3nHWt1UezQnNgLKI59SAAHpIq", 1);
INSERT INTO task(title, `description`, created_at, updated_at, finish_on, `status`, `repeat`, account_id) VALUES
                                                                                                              ("Daily Stand-up", "Point rapide de 15 minutes avec l'équipe de dev.", NOW(), NOW(), '2026-10-26 09:00:00', 1, "Quotidien", 1),
                                                                                                              ("Rapport de projet", "Compiler les KPI et envoyer le récapitulatif.", NOW(), NOW(), '2026-10-30 17:00:00', 1, "Hebdomadaire", 1),
                                                                                                              ("Mise à jour BDD", "Vérifier les sauvegardes cloud et logs.", NOW(), NOW(), '2026-11-01 23:00:00', 1, "Mensuel", 1),
                                                                                                              ("Cours de guitare", "Précision des accords d'intro.", NOW(), NOW(), '2026-10-24 18:00:00', 1, "Quotidien", 1),
                                                                                                              ("Session running", "Footing de 5km au parc municipal.", NOW(), NOW(), '2026-10-25 10:00:00', 1, "Hebdomadaire", 1);
INSERT INTO task(title, `description`, created_at, updated_at, finish_on, `status`, `repeat`, account_id) VALUES
                                                                                                              ("Tri des emails", "Archiver les fils résolus et traiter l'urgence.", NOW(), NOW(), '2026-10-26 08:30:00', 1, "Quotidien", 2),
                                                                                                              ("Notes de frais", "Rassembler tous les tickets de caisse du mois.", NOW(), NOW(), '2026-10-31 12:00:00', 1, "Mensuel", 2),
                                                                                                              ("Lecture Roman", "Lire au moins 20 pages avant de dormir.", NOW(), NOW(), '2026-10-23 21:30:00', 1, "Quotidien", 2),
                                                                                                              ("Meal Prep", "Cuisiner les repas de la semaine à l'avance.", NOW(), NOW(), '2026-10-25 15:00:00', 1, "Hebdomadaire", 2),
                                                                                                              ("Soirée Jeux de société", "Accueil des amis pour la session mensuelle.", NOW(), NOW(), '2026-11-07 20:00:00', 1, "Mensuel", 2);
INSERT INTO task_category(task_id, category_id) VALUES
                                                    (1, 1), (2, 1), (3, 1), (4, 2), (5, 2),
                                                    (6, 1), (7, 1), (8, 2), (9, 2), (10, 2);
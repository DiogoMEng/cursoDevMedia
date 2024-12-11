SELECT * FROM campeonatos;

CREATE TABLE Campeonatos (
	id INTEGER,
    campeao VARCHAR(35),
    vice VARCHAR(35),
    ano INTEGER
);

ALTER TABLE campeonatos MODIFY id INT AUTO_INCREMENT PRIMARY KEY;

INSERT INTO campeonatos (campeao, vice, ano) 
	VALUES ("Boca Junior", "São Caetano", 2001),
           ("Olimpia", "Santos", 2002),
           ("Boca Junior", "Santos", 2003),
           ("Once Caldas", "Boca Junior", 2004),
           ("São Paulo", "Atlético Paranaense", 2005),
           ("Internacional", "São Paulo", 2006),
           ("Boca Junior", "Grêmio", 2007),
           ("Liga de Quito", "Fluminense", 2008),
           ("Estudiantes", "Cruzeiro", 2009),
           ("Internacional", "Guadalajara", 2010),
           ("Santos", "Peñarol", 2011),
           ("Corinthians", "Boca Junior", 2012),
           ("Atlética Mineiro", "Olímpia", 2013);
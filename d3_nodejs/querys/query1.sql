SELECT CURRENT_USER();

CREATE USER novousuario IDENTIFIED BY 'novasenha';

GRANT ALL PRIVILEGES ON novoprojetodb TO novousuario;
insert into bd_devmedia.clientes (nome, sexo, DataNascimento, peso)
	values('Tatiana', 'F', '1970-06-09', 83.5),
		  ('Cristian', 'M', '1965-12-20', 87.4),
          ('João Lucas', 'M', '2014-03-29', 65.5);
          
insert into bd_devmedia.telefoneclientes (ddd, numero, idcliente)
	values ('055', '91985805873', 1),
		   ('055', '91992964466', 5),
           ('055', '91981012906', 6),
           ('055', '91983803401', 7);
           
CREATE TABLE `telefoneclientes` (
  `idclientetelefone` int(11) NOT NULL AUTO_INCREMENT,
  `ddd` varchar(3) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `idcliente` int(11) NOT NULL,
  PRIMARY KEY (`idclientetelefone`),
  KEY `FK_Cliente_idx` (`idcliente`),
  CONSTRAINT `FK_cliente` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idclientes`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;




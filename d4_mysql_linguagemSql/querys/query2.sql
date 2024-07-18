use bd_devmedia;

SELECT idclientes AS id, nome, peso FROM clientes;

SELECT * FROM clientes;
SELECT * FROM clientes WHERE nome = "Diogo";
SELECT * FROM clientes WHERE nome LIKE '%a%';
SELECT * FROM clientes 	WHERE nome IN ("Cristian", "Diogo");
SELECT DISTINCT nome FROM clientes;

SELECT * 
	FROM clientes
    ORDER BY
		nome DESC
	LIMIT 3;

programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real resultado
		real juros
		real desconto
		
		escreva("## SISTEMA DE CALCULO DE PORCENTAGEM ##")

		escreva("\n\ninforme um valor: ")
		leia(valor)

		escreva("\n\ninforme uma porcetagem(%): ")
		leia(porcentagem)

		resultado = valor * (porcentagem/100)
		desconto = valor - resultado
		juros = valor + resultado
		
		escreva("\n\n" + valor + " com " + porcentagem + "% de desconto é " + desconto)
		escreva("\n\n" + valor + " com " + porcentagem + "% de juros é " + juros)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 543; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
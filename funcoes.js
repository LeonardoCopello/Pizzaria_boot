/*function mudaFoto(foto,nome,descr,precoPS) {
	document.getElementById("tipo_pizza").src = foto;
	document.getElementById('saborPizzaSuco').innerHTML = nome
	document.getElementById('DescricaoPizzaSuco').innerHTML = descr
	document.getElementById('PrecoPizzaSuco').innerHTML = precoPS
}*/
/*function mudaFoto(a) {
	var foto, nome, descr, precoPS;
	switch (a) {
	case 1:
		foto = "pz_calabresa.jpg"
		nome = "Pizza Calabreza"
		descr = "Calabresa e queijo"
		precoPS = "R$ 55,00"
		document.getElementById("tipo_pizza").src = foto;
		document.getElementById('saborPizzaSuco').innerHTML = nome;
		document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
		document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
		break;
	case 2:
		foto = "pz_frango.jpg"
		nome = "Frango"
		descr = "Frango e queijo"
		precoPS = "55,00"
		document.getElementById("tipo_pizza").src = foto;
		document.getElementById('saborPizzaSuco').innerHTML = nome;
		document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
		document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
		break;
	case 3:
		foto = "pz_4queijos.jpg"
		nome = "4 queijos"
		descr = "Mussarela, lanche, parmesão e provolone"
		precoPS = "60,00"
		document.getElementById("tipo_pizza").src = foto;
		document.getElementById('saborPizzaSuco').innerHTML = nome;
		document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
		document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
		break;
	case 4:
		foto = "pz_marguerita.jpg"
		nome = "Marguerita"
		descr = "Queijos, tomate e rúcula"
		precoPS = "70,00"
		document.getElementById("tipo_pizza").src = foto;
		document.getElementById('saborPizzaSuco').innerHTML = nome;
		document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
		document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
		break;
	case 5:
		foto = "suco_laranja.jpg"
		nome = "Suco de Laranja"
		descr = "Suco de Laranja da Fruta"
		precoPS = "12,00"
		document.getElementById("tipo_pizza").src = foto;
		document.getElementById('saborPizzaSuco').innerHTML = nome;
		document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
		document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
		break;
}
}*/
function semNada(foto) {
	nome = ""
	descr = ""
	precoPS = ""
	document.getElementById("tipo_pizza").src = foto;
	document.getElementById('saborPizzaSuco').innerHTML = nome;
	document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
	document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
}

function mudaFoto(a) {
	switch (a) {
	case 1:
		document.getElementById("tipo_pizza").src = "img/pz_calabresa.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Pizza Calabreza";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Calabresa e queijo";
		document.getElementById('PrecoPizzaSuco').innerHTML = "R$ 55,00";
		break;
	case 2:
		document.getElementById("tipo_pizza").src = "img/pz_frango.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Frango";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Frango e queijo";
		document.getElementById('PrecoPizzaSuco').innerHTML = "55,00";
		break;
	case 3:
		document.getElementById("tipo_pizza").src = "img/pz_4queijos.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "4 queijos";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Mussarela, lanche, parmesão e provolone";
		document.getElementById('PrecoPizzaSuco').innerHTML = "60,00";
		break;
	case 4:
		document.getElementById("tipo_pizza").src = "img/pz_marguerita.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Marguerita";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Queijos, tomate e rúcula";
		document.getElementById('PrecoPizzaSuco').innerHTML = "70,00";
		break;
	case 5:
		document.getElementById("tipo_pizza").src = "img/suco_laranja.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Suco de Laranja";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Suco de Laranja da Fruta";
		document.getElementById('PrecoPizzaSuco').innerHTML = "12,00";
		break;
}
}
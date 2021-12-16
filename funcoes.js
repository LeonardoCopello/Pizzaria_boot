
function semNada(foto) {
	nome = null
	descr = null
	precoPS = null
	document.getElementById("tipo_pizza").src = foto;
	document.getElementById('saborPizzaSuco').innerHTML = nome;
	document.getElementById('DescricaoPizzaSuco').innerHTML = descr;
	document.getElementById('PrecoPizzaSuco').innerHTML = precoPS;
	document.getElementById("DescInd").style.border = "none";
}
function mudaFoto(a) {
	switch (a) {
	case 1:
		document.getElementById("tipo_pizza").src = "img/pz_calabresa.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Pizza Calabreza";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Calabresa e queijo";
		document.getElementById('PrecoPizzaSuco').innerHTML = "R$ 55,00";
		document.getElementById("DescInd").style.border = "3px #F56E00 dashed";
		break;
	case 2:
		document.getElementById("tipo_pizza").src = "img/pz_frango.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Frango";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Frango e queijo";
		document.getElementById('PrecoPizzaSuco').innerHTML = "55,00";
		document.getElementById("DescInd").style.border = "3px #F56E00 dashed";
		break;
	case 3:
		document.getElementById("tipo_pizza").src = "img/pz_4queijos.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "4 queijos";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Mussarela, lanche, parmesão e provolone";
		document.getElementById('PrecoPizzaSuco').innerHTML = "60,00";
		document.getElementById("DescInd").style.border = "3px #F56E00 dashed";
		break;
	case 4:
		document.getElementById("tipo_pizza").src = "img/pz_marguerita.jpg";
		document.getElementById('saborPizzaSuco').innerHTML = "Marguerita";
		document.getElementById('DescricaoPizzaSuco').innerHTML = "Queijos, tomate e rúcula";
		document.getElementById('PrecoPizzaSuco').innerHTML = "70,00";
		document.getElementById("DescInd").style.border = "3px #F56E00 dashed";
		break;
}
}
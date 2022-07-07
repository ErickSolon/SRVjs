const form = document.forms.Simulacao;



form.addEventListener("submit", (e) => {

  e.preventDefault();



  const { veiculo, ano, preco } = form;



  const infoVeiculo = document.querySelector("#veiculo");

  const anoVeiculo = new Date(ano.value).getFullYear();



const entrada = 15000

const valorTotalPosEntrada = +preco.value-entrada




const valorTotalPraParcela = valorTotalPosEntrada



const parcela = valorTotalPraParcela/48

 

  //const parcela = (preco.value - 15000 * (50 / 100)) / 48 + 520.848;



  infoVeiculo.textContent = `${veiculo.value} de ano ${anoVeiculo}`;

  valParcela.textContent = ` Parcelas: 48x de ${parcela}`;

});
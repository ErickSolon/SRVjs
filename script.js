const form = document.forms.simulacao;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { veiculo, ano, preco } = form;

  const infoVeiculo = document.querySelector("#infoVeiculo");
  const valEntrada = document.querySelector("#valEntrada");
  const valParcela = document.querySelector("#valParcela");

  const anoVeiculo = new Date(ano.value).getFullYear();
  
  const entrada = +veiculo.value * (50 / 100);
  const parcela = (+preco.value * (50 / 100)) / 48;

  const intlEntrada = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    maximumSignificantDigits: 2,
  }).format(entrada);
  const intlParcela = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    maximumSignificantDigits: 2,
  }).format(parcela);

  infoVeiculo.textContent = `${veiculo.value} de ano ${anoVeiculo}`;
  valEntrada.textContent = `Entrada de: ${intlEntrada}`;
  valParcela.textContent = ` Parcelas: 48x de ${intlParcela}`;
});

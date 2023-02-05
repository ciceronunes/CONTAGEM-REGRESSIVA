const MudancaTela = () => {
  const container = document.getElementsByClassName("inserir-dados")[0];
  const button = document.getElementsByTagName("button")[0];
  const img = document.getElementsByTagName("img")[0];
  const result = document.getElementsByClassName("result")[0];
  container.style.display = "none";
  button.style.display = "none";
  img.style.display = "block";
  result.style.display = "grid";
};

const DateOurYour = () => {
  //Conversão dos dados do input em Date
  const dateFinal = new Date(
    document.getElementById("inserirdata").value +
      "T" +
      document.getElementById("inserirhora").value
  );

  const date = new Date();
  const conversion = {
    dia: 60 * 60 * 24,
    horas: 60 * 60,
    minutos: 60,
  };

  //lógica contagem regressiva
  if (dateFinal.getTime() - date.getTime() > 0) {
    const datainicio = (dateFinal.getTime() - date.getTime()) / 1000;

    const dia = Math.trunc(datainicio / conversion.dia);
    const dias = dia < 10 ? "0" + dia : dia;

    const hora = Math.trunc((datainicio % conversion.dia) / conversion.horas);
    const horas = hora < 10 ? "0" + hora : hora;

    const minuto = Math.trunc(
      ((datainicio % conversion.dia) % conversion.horas) / conversion.minutos
    );
    const minutos = minuto < 10 ? "0" + minuto : minuto;

    const segundo = Math.trunc(
      ((datainicio % conversion.dia) % conversion.horas) % conversion.minutos
    );
    const segundos = segundo < 10 ? "0" + segundo : segundo;

    document.getElementById("dia").innerText = dias;
    document.getElementById("hora").innerText = horas;
    document.getElementById("minuto").innerText = minutos;
    document.getElementById("segundo").innerText = segundos;
    //chamando mudança de tela
    MudancaTela();
  } else {
    clearInterval(DateOurYour);
    
  }
};
const chamando = () => setInterval(DateOurYour, 1000);


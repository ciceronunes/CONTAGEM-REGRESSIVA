/*
Lógica foi resumida em três funções:
- verifiyExecute = Esta é a verificação se a data e hora inserida pelo usuário é maior do que o dia e hora que iremos "rodar" a aplicação, se for verdadeiro é chamada a próxima função caso contrário será chamado um alert informando.

- dateOurYour = Esta função é chamada após a execução da função (verifiyExecute). Ela recebe os dados e os trata efetuando a conversão da diferença das datas e retornando para o usuario um Timer, no final desta função e função (changeScreen) é chamada.

- changeScreen = Está tem a função de efetuar algumas mudanças nos estados de algumas classes assim efetuando a mudança de backgroud e display.
*/
const verifiyExecute = () => {
  const dateAndTimeEntered = new Date(
    document.getElementById("InsertDate").value +
    "T" +
    document.getElementById("InsertTime").value
  );

  const currentDateAndTime = new Date();

  if (dateAndTimeEntered.getTime() - currentDateAndTime.getTime() > 0) setInterval(dateOurYour, 1000)
  else alert("Data e hora fornecido inferior a data e hora atual")
};

const dateOurYour = () => {
  const dateAndTimeEntered = new Date(
    document.getElementById("InsertDate").value +
    "T" +
    document.getElementById("InsertTime").value
  );

  const currentDateAndTime = new Date();

  const conversion = {
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
  };

  const date = (dateAndTimeEntered.getTime() - currentDateAndTime.getTime()) / 1000;

  const day = Math.trunc(date / conversion.day);
  const hour = Math.trunc((date % conversion.day) / conversion.hour);
  const minute = Math.trunc(((date % conversion.day) % conversion.hour) / conversion.minute);
  const second = Math.trunc(((date % conversion.day) % conversion.hour) % conversion.minute);

  const days = day < 10 ? "0" + day : day;
  const hours = hour < 10 ? "0" + hour : hour;
  const minutes = minute < 10 ? "0" + minute : minute;
  const seconds = second < 10 ? "0" + second : second;

  document.getElementById("Day").innerText = days;
  document.getElementById("Hour").innerText = hours;
  document.getElementById("Minute").innerText = minutes;
  document.getElementById("Second").innerText = seconds;
  //chamando mudança de tela
  changeScreen();
};

const changeScreen = () => {
  const dataScreen = document.getElementsByClassName("DataScreen")[0];
  const changeBackground = document.getElementsByTagName("body")[0];
  const screenResult = document.getElementsByClassName("ScreenResult")[0];

  dataScreen.style.display = "none";
  changeBackground.style.background = "url('assets/fogos-de-artificio.jpg')";
  changeBackground.style.backgroundOrigin = "content-box";
  changeBackground.style.backgroundPosition = "center";
  screenResult.style.display = "grid";
};

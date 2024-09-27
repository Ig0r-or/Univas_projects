function loading(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
function formatTime(number)
 {
    return number < 10 ? '0' + number : number;
  }
  function updateTime() {
  let now = new Date();
  let hours = formatTime(now.getHours());
  let minutes = formatTime(now.getMinutes());
  let seconds = formatTime(now.getSeconds());  
    if(hours >= 0 && hours < 12){
        msg.innerHTML = `${hours}:${minutes}:${seconds}`
        img.scr = 'Imagens/Manhã.png'
        document.body.style.background = '#87CEFA'
    }else if(hours >= 12 && hours < 18){
        msg.innerHTML = `${hours}:${minutes}:${seconds}`
        img.src = 'Imagens/Tarde.png'
        document.body.style.background = '#FFDEAD'
    }else if (hora > 12 && hora <= 24){
        msg.innerHTML = `${hours}:${minutes}:${seconds}`
        img.src = 'Imagens/Noite.png'
        document.body.style.background = '#191970'
    }else{
        msg.innerHTML = `Horário inválido!!`
        img.src = 'Imagens/error.png'
        msg.style.color = 'red'
        document.body.style.background = 'gray'
    }
  }
updateTime();
setInterval(updateTime, 1000);
}

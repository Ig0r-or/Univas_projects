function loading(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
        img.scr = 'JavaScript/Imagens/Manhã.png'
        document.body.style.background = '#87CEFA'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        img.src = 'JavaScript/Imagens/Tarde.png'
        document.body.style.background = '#FFDEAD'
    }else{
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        img.src = 'JavaScript/Imagens/Noite.png'
        document.body.style.background = '#191970'
    }
    
}

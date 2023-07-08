
let b;
let a;
let c = 0;
document.getElementById('start').onclick = start;

function fun(){
    b = document.getElementById('inpp').value;
    document.querySelector('.o').innerHTML = b;

};

function start(){

    if (c === 0){
        a = b;
        document.querySelector('.o').innerHTML = a;
        timer = setInterval(() => {
    
            if(a == 1){
                soundClick();
            } 
            if (a > 0){
                c = 1;
                --a;
                document.querySelector('.o').innerHTML = a;
            }
  
            else{
                c = 0;
                a = b;
                document.querySelector('.o').innerHTML = a;
            }
    
        }, 1000);
    }
}

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'AlarmBeep.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }

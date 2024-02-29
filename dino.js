document.addEventListener('DOMContentLoaded',() =>{
// referências
    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    const body = document.querySelector('.body')
    const alert = document.querySelector('.alert')

    //variáveis
    let jumping = false
    let gravity = 0.9
    let gameo = false
    let dinopy = 0

    //Entrada de dados
    document.addEventListener('keyup', jumpcontrol)

    //controle do pulo
    function jumpcontrol(e){
        if (e.keyCode ===32){
            if (!jumping){
                jumping = true
                jump ()
            }
        }
    }
        
     function jump(){
        let count = 0
        let timerId = setInterval(function(){
            //caindo
            if (count ===15){
                clearInterval(timerId)
                let downTimerId = setInterval(function (){
                    if (count ===0){
                        clearInterval(downTimerId)
                        jumping = false
                    }
                    dinopy -= 5
                    count --
                    dinopy = dinopy * gravity
                    dino.style.bottom = dinopy + 'px'
                },20)
            }
            //subida
            dinopy +=30
            count ++
            dinopy = dinopy * gravity
            dino .style.bottom = dinopy + 'px'


        },20)

        }
     }
        



)
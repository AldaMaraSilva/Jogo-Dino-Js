document.addEventListener('DOMContentLoaded', () => {
    // referências
    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    const body = document.querySelector('body')
    const alert = document.getElementById('alert')

    //variáveis
    let jumping = false
    let gravity = 0.9
    let gameo = false
    let dinopy = 0

    //Entrada de dados
    document.addEventListener('keyup', jumpcontrol)

    //controle do pulo
    function jumpcontrol(e) {
        if (e.keyCode === 32) {
            if (!jumping) {
                jumping = true
                jump()
            }
        }
    }

    function jump() {
        let count = 0
        let timerId = setInterval(function () {
            //caindo
            if (count === 15) {
                clearInterval(timerId)
                let downTimerId = setInterval(function () {
                    if (count === 0) {
                        clearInterval(downTimerId)
                        jumping = false
                    }
                    dinopy -= 5
                    count--
                    dinopy = dinopy * gravity
                    dino.style.bottom = dinopy + 'px'
                }, 20)
            }
            //subida
            dinopy += 30
            count++
            dinopy = dinopy * gravity
            dino.style.bottom = dinopy + 'px'


        }, 20)

    }
    function gerarobst() {
        let randomTime = Math.random() * 4000
        let obstaclepx = 1000
        const obstacle = document.createElement('div')

        //criando cópias
        if (!gameo) obstacle.classList.add('obstacle')
        grid.appendChild(obstacle)
        obstacle.style.left = obstaclepx + "px"

        //lógica do jogo + movimento dos obstáculos
        let timerId = setInterval(function () {
            //colisão com o player
            
            console.log(dinopy)
            if (obstaclepx > 0 && obstaclepx < 60 && dinopy < 60) {
                clearInterval(timerId)
                alert.innerHTML = 'fim de jogo'
                gameo = true
                //removendo todas as cópias
                body.removeChild(body.firstChild)
                while(grid.firstChild){
                    grid.removeChild(grid.lastChild)
                }

            }
            //movimento dos obstáculos para a esquerda
            obstaclepx -= 10
            obstacle.style.left = obstaclepx + 'px'
        }, 20)

        if(!gameo) setTimeout(gerarobst, randomTime)


    }

    gerarobst()

})
window.onload = () => {

  function quantia() {
    return parseInt(location.href.split('?q=')[1])+1
  }

  function exibeNumeros() {
    const totalNumeros = document.querySelectorAll('.num')

    for(let i=0; i < totalNumeros.length; i++) {
      if(quantia() <= i) {
        totalNumeros[i].style.display = "none"
      }
    }

    return totalNumeros
  }

  function semRepetir(numeros) {

    let restante = numeros.length

    while (restante) {

      // Pegue um elemento restante
      let b = Math.floor(Math.random() * restante--);

      // E troque-o pelo elemento atual
      let troca = numeros[restante];
      numeros[restante] = numeros[b]
      numeros[b] = troca;
    }

    return numeros;
  }

  function numerosASortear() {
    const aSortear = []

    for(let i=0; i < quantia(); i++) {
      aSortear.push(i)
    }
    return aSortear
  }

  function coloreNumeros() {
    const sorteio = semRepetir(numerosASortear())

    for(let i=0; i < quantia(); i++) {
      let unidade = sorteio[i]%10
      let dezena = Math.floor(sorteio[i]/10)
      exibeNumeros()[i].id = sorteio[i]

      exibeNumeros()[i].innerHTML = `<span class='dezena'>${dezena}</span><span class='unidade'>${unidade}</span>`
    }
  }

  function resposta() {
    const numeros = exibeNumeros()
    let clicks = 0
    const a = document.createElement('a')
    const img = document.createElement('img')

    for(let i=0; i < numeros.length; i++) {
      numeros[i].addEventListener('click', () => {
        
        if(clicks < numeros[i].id) {

          modal.appendChild(a)
          a.href = window.location.href
          a.appendChild(img)
          img.style.marginTop = '50%'
          img.src = 'assets/tente-novamente.svg'
          modal.style.visibility = 'visible'
          modal.style.height = document.body.scrollHeight
          modal.style.width = document.body.scrollWidth
        }

        if(clicks+1 == quantia()) {

          modal.appendChild(a)
          a.href = window.location.href
          a.appendChild(img)
          img.style.marginTop = '50%'
          img.src = 'assets/parabens.svg'
          modal.style.visibility = 'visible'
          modal.style.height = document.body.scrollHeight
          modal.style.width = document.body.scrollWidth
        }

        if(numeros[i].classList.contains('acerto')) {
          clicks += 0
        }

        else {

          numeros[i].style.backgroundColor = '#00998a'
          numeros[i].classList.add('acerto')
          clicks += 1
          console.log('acerto: ', clicks)
        }
      })
    }
  }

  function jogo(){
    exibeNumeros()
    coloreNumeros()
    resposta()
  }

  jogo()
  /* fim */
}
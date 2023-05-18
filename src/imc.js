const formulario  = document.querySelector('#formulario');
const resultado = document.querySelector('.result');
const pessoa = document.querySelector('#name');

function resultadoFormulario(valor){

    valor.preventDefault();

    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;

    //---------------Calculo IMC------------------
    let imc = (peso / (altura * altura)).toFixed(2);

   
    if(imc >= 0.0 && imc <= 18.5){
        result.innerHTML = `<p> Olá, ${pessoa.value} Seu IMC é de: <strong> ${imc} </strong> - Isso significa que você é muito magro. &#x1F626;  </p>`;
    }

    else if (imc >= 18.50 && imc <= 24.99) {
        result.innerHTML = `<p>Olá, ${pessoa.value} Seu IMC é de: <strong> ${imc} </strong> - Seu IMC é considerado "Normal". &#x1F604;  </p>`
      }

    else if (imc >= 25.00 && imc <= 29.99) {
        result.innerHTML = `<p>Olá, ${pessoa.value} Seu IMC é de: <strong> ${imc} </strong> - Isso significa que sua classificação é "Sobrepeso". &#x1F615;  </p>`
      }

    else if (imc >= 30.00 && imc <= 39.99) {
        result.innerHTML = `<p>Olá, ${pessoa.value} Seu IMC é de: <strong> ${imc} </strong> - Você é considerado "Obeso". &#128559;  </p>`
      } 
     
    else if (imc >= 40.00) {
        result.innerHTML = `<p>Olá, ${pessoa.value} Seu IMC é de: <strong> ${imc} </strong> - Sua classificação é "Obesidade grave", 
        em um terceiro grau de obesidade. Você precisa de ajuda? &#x1F630;  </p>`
      }
    else {
        result.innerHTML = `<p>Olá, ${pessoa.value} Seu IMC é de: <strong> 0 </strong> - Algo de errado não está certo... &#x1F61C;</p>`
      }

}

formulario.addEventListener('submit', resultadoFormulario);

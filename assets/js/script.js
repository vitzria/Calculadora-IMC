const form = document.getElementById('form'); //pega um elemento do html pelo id

form.addEventListener('submit', function(event){ //adiciona um evento quando enviar os dados
    event.preventDefault(); //a pagina nao atualiza quando envia os dados

    const weight = document.getElementById('weight').value; //pega o valor do input weight
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2); //aparece so 2 casas depois da virgula

    const value = document.getElementById('value');
    let description =''; //cria a descrição para adicionar valores ao value

    value.classList.add('attention'); //adc a class attention para ficar vermelho

    document.getElementById('infos').classList.remove('hidden'); //remove a class hidden, para que os elementos apareçam

    if(bmi < 18.5){ //condições
        description = 'Cuidado, você está abaixo do peso!'
    } else if(bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal!'
        value.classList.remove('attention'); //remove o vermelho
        value.classList.add('normal'); //adc o verde
    } else if(bmi > 25 && bmi <= 30){
        description = 'Cuidado, você está com sobrepeso!'
    } else if(bmi > 30 && bmi <= 35){
        description = 'Cuidado, você está com obesidade moderada!'
    } else if(bmi > 35 && bmi <= 40){
        description = 'Cuidado, você está com obesidade severa!'
    } else {
        description = 'Cuidado, você está com obesidade morbida!'
    }

    value.textContent = bmi.replace('-',','); //troca o ponto pela virgula

    document.getElementById('description').textContent = description; //o Id description recebe o conteudo de description
}); //impede o carregamento da pagina quando enviar os dados

const rpta = document.getElementById('resultado');
const botones = document.querySelectorAll('.botones span');
let history = document.getElementById('history');

botones.forEach(e => {

    e.addEventListener('click', (btn)=>{
        const btnValor = btn.target.innerHTML;
        
        if(isNaN(btnValor) === false){
            if(rpta.innerHTML.length < 16){
                rpta.innerHTML += eval(btnValor);
            }

        }else if(btnValor === '='){
            if(rpta.innerHTML !== '' && isNaN(rpta.innerHTML.substr(-1)) === false){
                rpta.innerHTML = eval(rpta.innerHTML);
            }
                
        }else if(btnValor === 'CE'){
            rpta.innerHTML = rpta.innerHTML.substr(0 ,rpta.innerHTML.length - 1);

        }else if(btnValor === 'C'){
            rpta.innerHTML = '';

        }else{
            if(isNaN(rpta.innerHTML.substr(-1)) === false){
                rpta.innerHTML += btnValor;
            }else{
                rpta.innerHTML = rpta.innerHTML.substr(0, rpta.innerHTML.length -1) + btnValor;
            }
        }    
    });

});

equal.addEventListener('click', function(e) {
    if (screen.value === '') {
        screen.value = "Please Enter";
    } else {
        screen.value = resultado;
        localStorage.setItem("resultado", JSON.stringify(resultado));
        resultado = JSON.parse(localStorage.getItem('resultado'));
        history.value = resultado;
    }
});
//mostrar alerta con ilustracion de la formula 
let btnShow = document.getElementById('showmore');


btnShow.addEventListener('click', () => {
    Swal.fire({
        imageUrl: 'https://www.educapeques.com/wp-content/uploads/2018/11/ejemplo-regla-de-tres.jpg.webp',
        imageHeight: 319,
        imageAlt: 'Forula'
    })
});

//
let submit = document.getElementById('btn');

let v1 = document.getElementById('v1');
v2 = document.getElementById('v2');
v3 = document.getElementById('v3');

submit.addEventListener('click', () => {
    // si no se ingresa valor sale un alerta
    if (!v1.value || !v2.value || !v3.value) {
        Swal.fire({
            icon: 'error',
            title: 'Debe compeltar los datos correspondientes',

        })
    } else {
        let res = v3.value * v2.value / v1.value;
        Swal.fire('Resultado: ', res.toString());
    }




});
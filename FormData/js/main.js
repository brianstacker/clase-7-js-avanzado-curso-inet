console.log('FormData')

function mostrarValoresFormData(data) {
    let valores = data.values()
    let claves = data.keys()
    //console.log(valores)
    //console.log(claves)

    do {
        let clave = claves.next()
        let valor = valores.next()
        if(valor.done || clave.done) break;
        console.log(clave.value, ':', valor.value)
    }
    while(true)
    /*
    console.log(valores.next())
    console.log(valores.next())
    console.log(claves.next())
    console.log(claves.next())
    */
}

//-------------------------------------------------
//USO DE FORM DATA CON DATOS DE UN FORMULARIO
//-------------------------------------------------

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    //console.log(form[0].value)
    //console.log(form[1].value)

    let data = new FormData(form)
    console.log(data)

    mostrarValoresFormData(data)
})

//-------------------------------------------------
//USO DE FORM DATA CON DATOS INGRESADOS MANUALMENTE
//-------------------------------------------------

let btn = document.querySelectorAll('button')[1]
//console.log(btn)
btn.addEventListener('click', () => {
    let data = new FormData()
    for(let i=0; i<10; i++) {
        data.append(`param-${i}`,i)
    }
    mostrarValoresFormData(data)
})

//-------------------------------------------------
//USO DE FORM DATA MEDIANTE AJAX POST
//-------------------------------------------------

let data = new FormData()
for(let i=0; i<10; i++) {
    data.append(`Imagen-${i}`,`archivo${i+1},jpg`)
}

let xhr = new XMLHttpRequest
xhr.open('post','url')
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        let.respuesta = xhr.response
        console.log(respuesta)
    }
})

//xhr.setRequestHeader('content-type', 'application/json')
xhr.send(data)
console.log('Ajax anidado')


//------------------------------------------------------------
// Ajax ordenado utilizando Fetch
//------------------------------------------------------------
function getComentarioFetch(num, debug){
    return fetch('https://jsonplaceholder.typicode.com/comments/' + num)
    .then(respuesta => {
        //console.log(respuesta)
        return respuesta.json()
    })
    .then(json => {
        if(debug) console.log(json)
        return Promise.resolve(json)
    })
}

function getComentariosFetch() {
    getComentarioFetch(1, true)
    .then(() => getComentarioFetch(2, true))
    .then(() => getComentarioFetch(3, true))
    .then(() => getComentarioFetch(4, true))
    .catch(console.log)
}
//getComentariosFetch()
/*
async function getComentariosFetchAsyncAwait() {
    try {
        await getComentarioFetch(1, true)
        await getComentarioFetch(2, true)
        await getComentarioFetch(3, true)
        await getComentarioFetch(4, true)
    }
    catch(error) {
        console.log(error)
    }
}
*/

async function getComentariosFetchAsyncAwait() {
    try{
        let respuesta = await getComentarioFetch(1, !true)
        console.log(respuesta)

        respuesta = await getComentarioFetch(2, !true)
        console.log(respuesta)

        respuesta = await getComentarioFetch(3, !true)
        console.log(respuesta)

        respuesta = await getComentarioFetch(4, !true)
        console.log(respuesta)

    }
    catch(error) {
        console.log(error)
    }
}
    getComentariosFetchAsyncAwait()



//------------------------------------------------------------
// Ajax ordenado utilizando Promise
//------------------------------------------------------------
function getComentarioPromise(num, debug) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest
        xhr.open('get', 'https://jsonplaceholder.typicode.com/comments/' + num)
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                let respuesta = JSON.parse(xhr.response)
                //console.log(typeof respuesta)
                if (debug) console.log(respuesta)
                resolve(respuesta)
            }
            else {
                let error = {
                    title: 'Error Status Ajax',
                    body: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => { 
            let error = {
                title: 'Error General Ajax',
                body: e
            }
            reject(error)
        })
        xhr.send()
    })
}

//------------------------------------------------------------
// Ajax ordenado utilizando Async Await
//------------------------------------------------------------
/*
async function getComentariosAsyncAwait() {
    try {
        respuesta = await getComentarioPromise(1, true)
        respuesta = await getComentarioPromise(2, true)
        respuesta = await getComentarioPromise(3, true)
        respuesta = await getComentarioPromise(4, true)
        respuesta = await getComentarioPromise(5, true)
        respuesta = await getComentarioPromise(6, true)
        respuesta = await getComentarioPromise(7, true)
    }
    catch (error) {
        console.log(error)
    }
}
*/


async function getComentariosAsyncAwait() {
    try {
        let respuesta = await getComentarioPromise(1, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(2, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(3, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(4, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(5, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(6, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(7, !true)
        console.log(respuesta)

    }
    catch (error) {
        console.log(error)
    }
}
//getComentariosAsyncAwait()



function getComentariosPromise(){
    getComentarioPromise(1, true)
        .then(() => getComentarioPromise(2, true))
        .then(() => getComentarioPromise(3, true))
        .then(() => getComentarioPromise(4, true))
        .then(() => getComentarioPromise(5, true))
        .then(() => getComentarioPromise(6, true))
        .then(() => getComentarioPromise(7, true))
        .catch(error => console.log(error))
        //.then(console.log)
        //.catch(console.log))
        //.then(respuesta=> console.log(respuesta))
}

//getComentariosPromise()

/*
//------------------------------------------------------------
// Ajax ordenado utilizando Callbacks
//------------------------------------------------------------
function getComentarioCallback(num, debug, cb) {
    let xhr = new XMLHttpRequest
    xhr.open('get','https://jsonplaceholder.typicode.com/comments/' + num)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            //console.log(typeof respuesta)
            if(debug) console.log(respuesta)
            if(cb) cb(respuesta)
        }
    })
    xhr.send()
}

    getComentarioCallback(1, true, () => {
        getComentarioCallback(2, true, () => {
            getComentarioCallback(3, true, () => {
                getComentarioCallback(4, true, () => {
                    getComentarioCallback(5, true, () => {
                        getComentarioCallback(6, true, () => {
                            getComentarioCallback(7, true, () => {
                                getComentarioCallback(8, true, () => {
                                    getComentarioCallback(9, true, () => {
                                        getComentarioCallback(10, true, () => {
                                            getComentarioCallback(11, true, () => {
                                                getComentarioCallback(12, true, () => {
                                                    getComentarioCallback(13, true, () => {
                                                        getComentarioCallback(14, true, () => {

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

*/



//------------------------------------------------------------
// Ajax ordenado por funciones anidadas
//------------------------------------------------------------
//------------------------------------------------------------
// Comentario parte 1
//------------------------------------------------------------
function getComentario1() {
    let xhr = new XMLHttpRequest
    xhr.open('get','https://jsonplaceholder.typicode.com/comments/1')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(typeof respuesta)
            console.log(respuesta)
            getComentario2()
        }
    })
    xhr.send()
}


//------------------------------------------------------------
// Comentario parte 2
//------------------------------------------------------------
function getComentario2() {
    let xhr = new XMLHttpRequest
    xhr.open('get','https://jsonplaceholder.typicode.com/comments/2')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(typeof respuesta)
            console.log(respuesta)
            getComentario3()
        }
    })
    xhr.send()
}


//------------------------------------------------------------
// Comentario parte 3
//------------------------------------------------------------
function getComentario3() {
    let xhr = new XMLHttpRequest
    xhr.open('get','https://jsonplaceholder.typicode.com/comments/3')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(typeof respuesta)
            console.log(respuesta)
        }
    })
    xhr.send()
}

//------------------------------------------------------------
// Pido los datos
//------------------------------------------------------------
//getComentario1()

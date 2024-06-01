console.log(location.search);

let querystring = location.search

let= querystringobj = new URLSearchParams(querystring)

let id = querystringobj.get("id")
console.log(id);

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let seccion = document.querySelector("section")
        seccion.innerHTML = `<h2>${data.name}</h2>
        <img src=${data.image}>
        <p> especie: ${data.species}`
    })
    .catch(function(err){
        console.log(err)
    })


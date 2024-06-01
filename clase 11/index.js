fetch('https://rickandmortyapi.com/api/character')
  .then(function (response){
    return response.json ();
  })
  .then(function (data){
    let seccion= document.querySelector("section")
    let personajesrecorridos = ''
    for (let i = 0; i< data.results.length; i++){
      personajesrecorridos = personajesrecorridos + `<article class=hijo>
      <a href= "./detalle.html?id=${data.results[i].id}"> 
      <img src= ${data.results [i].image}>
      </a>
      <h2> ${data.results[i].name}</h2>
      <p> name: ${data.results[i].name} </p>
      <p> status: ${data.results[i].status}</p>
      </article>`
    }
    seccion.innerHTML = personajesrecorridos
  })
   

   
  .catch(error => {
    console.error('Error fetching the characters:', error);
  });

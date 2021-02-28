const modelo = document.querySelector('.modelo');
const post = document.querySelector('.posts');


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => {

  json.forEach(postagem => {
    fetch('https://unsplash.it/540/325?random')
      .then((response) => response.blob())
      .then(json => {
        const postModel = document.importNode(post, true);
        const autor = postModel.querySelector('.autor');
        const trabalhos = postModel.querySelector('.trabalhos');
        let imagen = postModel.querySelector('img');

        autor.innerText = postagem.name;
        trabalhos.innerText = postagem.email;
        imagen.src = URL.createObjectURL(json);
        modelo.appendChild(postModel)
      });

  });
});

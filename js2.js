const image = document.querySelector('img')
const nome = document.querySelector('.autor');
const site = document.querySelector('.site');
const email = document.querySelector('.email')
let random = Math.floor(Math.random() * 10) + 1; 
const perguntas = [
  'Conhece a pessoa que fotografou?',
  'Considera um trabalho profissional?',
  'A qualidade da foto é boa?', 'Compartilharia essa foto em rede social?',
  'Indicaria o fotógrafo pra alguem?', 'Contrataria o serviço desse profissional?','' 
]

if(document.hasFocus()) mostrar();

function mostrar() {
  fetch(`https://jsonplaceholder.typicode.com/users/${random}`)
  .then((response) => response.json())
  .then((json) => {
    nome.textContent = json.name;
    site.textContent = json.website;
    email.textContent = json.email;
  })
  image.src = "https://unsplash.it/540/325?random";
}

const sim = document.querySelector('#sim');
sim.addEventListener('change', funcSim)
function funcSim(e) {
  if(e.target.checked) {
    setTimeout(() => {
     trocaPerguntas();
     e.target.checked = false;
   }, 2000)
 } 
}
const nao = document.querySelector('#nao');
nao.addEventListener('change', (e) => {
  if(e.target.checked) {
     setTimeout(() => {
      trocaPerguntas();
      e.target.checked = false;
      console.log(perguntas.length); 
    }, 2000)
  } 
})

const trocaPerguntas = () => {
  const respDisplay = document.querySelector('.perguntas');
  respDisplay.innerText = perguntas.shift();
  if(perguntas.length === 0) {
    resultadoFinal()
  }  
}

function resultadoFinal() {
  const resp = document.querySelector('.respostas');
      resp.innerHTML = `
      <div style="background-color: #eee;width: 80%;margin-left: auto;margin-right: auto;">
        <h1>Para contratar os serviços desse fotógrafo(a) entre em 
        contato pelo E-mail:</h1>
      </div>
      `;
  email.style.cssText = 'display: block;'    
}    
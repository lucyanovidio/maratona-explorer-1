// Primeiras coisas a se pensar na hora de criar um programa:
// Quais as variáveis nesse problema?
// Quais os dados de entrada?
// Quais os de saída?

// essa forma de referenciar a parada lá do html agt viu na nlw8, lembra? Agt tá pegando o nosso h3 resposta e colocando dentro da variável pra usar ele na função junto com uma propriedade js nele.
// além disso repare q agt criou aqui fora da função, e isso pq eu n preciso que isso seja criado toda vez q eu clico, mas uma vez só. obs: esse elementoResposta é uma modelagem do h3 q agt tem no html. Essa é a ideia da DOM
const elementoResposta = document.querySelector('#resposta')
// Criamos essa variável tbm pra referenciar o input no html e conseguirmos pegar o que a pessoa escrever lá pra poder jogar no h3, usando uma propriedade js.
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// CLICAR EM FAZER PERGUNTA

function fazerPergunta() {
  // CRIANDO CONDIÇÃO EM QUE A PESSOA NÃO DIGITOU NADA E FALANDO PRA ELA DIGITAR

  // obs.: .value é a propriedade do elemento que pega o que a pessoa escreve, o "valor do input" propriamente dito. N sei como se aplica pra outros elementos.
  if (inputPergunta.value == '') {
    alert('Escreve a pergunta, amadx.')
    return
    // esse return faz toda a função parar, (acho q tipo que retorna pro começo), ele não segue nas outras coisas da função, e agt põe isso pq se a pessoa n digita a pergunta eu n quero q ele coloque nada de resposta, tlgd, só msm qnd a pessoa colocar a pergunta. Aí o senão vai ser a continuidade da função.
  }

  // DESABILITAR O BOTÃO, FAZENDO A RESPOSTA NÃO APARECER, MUDANDO DE RESPOSTA DENTRO DA MESMA PERGUNTA, CASO A PESSOA CLIQUE VÁRIAS VEZES

  // (e se eu quisesse que ele só funcionasse quando a pessoa digitasse algo diferente no input?)

  buttonPerguntar.setAttribute('disabled', true)
  // Isso ´o mesmo que eu colocar no html inline do button assim "disabled="true"". Estou desabilitando. E esse setAttribute(), que seria colocar um atributo nesse elemento, recebe dois argumentos. Sempre: ('o atributo que eu quero', o valor).

  // PEGANDO O QUE A PESSOA ESCREVE

  const pergunta = '<div>' + inputPergunta.value + '</div>'
  // Isso é oq a pessoa escrever no input. Com isso aqui eu reescrevo no meu HTML o <div>Pergunta que fiz</div> usando o innerHTML depois, lembra? Corre lá no HTML pra ver outra explicação. E nisso eu consigo que as props CSS sejam aplicadas e esse texto fique bonitinho. Eu to pegando a pergunta q a pessoa fez, o que ela escreveu no input, e to colocando numa tag a qual foi aplicado um estilo no css. Vou usar isso lá embaixo pra printar o que a pessoa perguntou + a resposta.

  // GERANDO NÚMERO ALEATÓRIO
  // e nós colocamos dentro da função que fica no onclick do botão pq o número precisa mudar toda vez que agt clica no botão. Tem q ser pra cada click uma resposta diferente

  //Segundo mayke ISSO é lógica de programação, é forma de pensar o programa. Vc coloca sem usar números fixos, usando funções e extensões da linguagem, de forma que se eu preciso mudar as respsostas, por ex, tirando ou acrescentando uma, eu n interfiro no programa como eu interferiria se eu colocasse o número "19" fixo aqui, já que não seria mais 19, tlgd
  const totalRespostas = respostas.length
  // esse length diz quantas coisas eu tenho dentro da minha variável (19 nesse caso), e fazemos uma variável com ele pra fazer o algoritmo do número aleatório, indo do 0 (q é sempre o primeiro) até o último q vms calcular usando o totalRespostas
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  // Precisamos de um num aleatório de 0 a 18, pq temos 19 coisas dentro do nosso array respostas. Calculamos usando essas extensões da linguagem pq o Math.floor sempre vai arrendondar pro piso, pro que vem antes, e o Math.random escolhe um número de 0 a 0.99, que seria multiplicado por 19 aqui. Esse cálculo vai nos dar o número certo que nós queremos de 0 a 18, NÃO ME PERGUNTE PORQUÊ PQ EU NÃO ENTENDI, APENAS APRENDA QUE É ASSIM QUE SE FAZ E PESQUISA DEPOIS O PORQUÊ. No discover talvez ele explique isso melhor já que em cada aula de eventos diferentes na rocket eles explicam de uma forma uma msm parada.

  // console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  // Esse innerHTML é uma propriedade aplicada a algum elemento, que no nosso caso é o elementoResposta, q é o h3 no html, q escreve o que eu mandar ele escrever no lugar desse elemento (foi oq entendi, mas PESQUISAR pra ver isso direito). Neste caso o q ele vai escrever na posição onde está o h3 é o q a pessoa escreve no input + respostas[numeroAleatorio], e isso a cada clique pq estamos na função.

  elementoResposta.style.opacity = 1
  // Aqui agt estabelece que ele está aparecendo pq agt estabelece dps q ele vai sumir. Só q se agt n fala q é pra ele aparecer dnv dps, qnd o click no botão chamar essa função fazerPergunta dnv, a resposta não vai aparecer, pq agt só falou pra ela sumir, e em momento nenhum pra aparecer, como se fosse óbvio, mas n é. Estamos pensando que essa função vai ser executada várias e várias vezes. Se não, a pessoa teria que recarregar a página toda vez pra poder fazer começar do início e a resposta aparecer.

  // FAZER A RESPOSTA SUMIR DEPOIS DE 3 SEGUNDOS

  // setTimeout() é uma extensão da linguagem tbm, pra estabelecer o tempo pra alguma coisa acontecer. Geralmente eu coloco dois argumentos nela: o que eu quero que aconteça depois de um tempo e o tempo. Aqui eu estou dizendo que quero que ele execute a função (e sim, uma função pode estar dentro de outra como argumento, assim como pode estar dentro de arrays, variáveis, etc) depois de 3000 milissegundos (é assim que agt representa os segundo no JS, e aqui no caso 3000mls = 3s)
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
  // Agt aplicou a prop style na constante elementoResposta e através dela chamou a prop opacity pra jogar no 0. Podemos aplicar estilo no JS e é desse jeito.A função vai fazer isso depois de 3s.
  // Também aplicamos o prop pra remover o disabled do botão pq agt quer q, dps q ele sumir em 3s, ele volte a funcionar pra pessoa clicar e ter uma nova resposta, e não ficar trocando as respostas conforma a pessoa clica várias vezes
}

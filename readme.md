# Implementação de API e Rotas do Servidor
_Desenvolvido por [**Reginaldo Mota (O Régis)**](https://oregis.dev.br)_

O intuito desse projeto foi o de implementar uma **API** que basicamente retorna para o usuário um **JSON** com algumas disciplinas e assuntos estudados nas mesmas, e o servidor com as implementações das rotas:
* **Get:**
    - No diretório padrão retorna o **JSON** completo
    - No diretório '/disciplines' retorna somente o nome das disciplinas cadastradas
    - No diretório '/:Nome_da_Disciplina' retorna os assuntos estudados pela disciplina passada como parâmetro

* **Post:**
    - No diretório padrão adiciona uma nova disciplina e seus assuntos, que devem ser passadas em um objeto pelo body, não é possível adicionar uma disciplina que já está cadastrada, nem uma disciplina sem passar os assuntos

* **Put:**
    - No diretório padrão atualiza os assuntos de uma disciplina passada no body, caso a disciplina não esteja cadastrada é retornado um erro


* **Delete:**
    - No diretório '/:Nome_da_Disciplina' deleta a disciplina passada como parâmetro, caso a disciplina não esteja cadastrada retorna erro

# Consumindo a API

A API pode ser consumida de diversas formas, e para decidir entre uma ou outra é necessário que você analise o seu foco de estudos atual. 

Minhas sugestões de acordo com a stack:
* **Frontend:** crie uma página html que consome a API, implemente testes para cada um dos tipos de requisição. Lembre-se que para isso é necessário que você clone esse repositório, instale o node em sua máquina, inicialize com *npm init* e em seguida digite o comando *npm start* que irá iniciar o servidor localmente na porta 5000. Com isso feito, pode implementar o seu site que consome essa API de forma local. Caso necessite de um exemplo, eu criei um projeto que consome essa API, é uma interface web que permite atualização, adição e remoção de dados. [Clique para acessar o repositório com a interface que consome essa API](https://github.com/Regijur/Cosumindo-a-API-de-Disciplinas)
* **Backend:** crie uma API baseada na minha, e utilize o [*Postman*](https://www.postman.com/) para testar os tipos de requisição e rotas. Caso deseje fazer esse processo com a minha API, basta clonar esse repositório e seguir os mesmos passos do tópico anterior relacionado ao Frontend, a diferença é que em vez de criar um site você irá utilizar o [*Postman*](https://www.postman.com/) para se divertir com a API 😉.

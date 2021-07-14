## Gazin - Processo Seletivo
Este projeto consiste na prova prática do processo seletivo para desenvolvedor da Gazin. 
E trata-se da criação de um CRUD de desenvolvedores, seguindo as específicações recomendadas. 
Nele há apenas duas telas, uma consiste na listagem de desenvolvedores com as opções de adicionar, editar ou remover um desenvolvedor já existente, 
e a segunda tela consiste na tela de cadastro ou edição do desenvolvedor. 


## Tecnologias Utilizadas

Na construção do projeto optou-se por utilizar o Node.js, juntamente com express e typeorm na consturção das APIs.
O banco selecionado foi o Postgres e já no front-end a tecnologia escolhida foi ReactJS.
Além disso todo o projeto está rodando utilizando Docker.

## Pré-Requisitos
 - Docker
 - Docker Compose

## Instruções de Uso

Ao clona o projeto, haverá dois diretórios, um chamado 'server' que contém todo o back-end da aplição, que consiste basicamente nas APIs. 
Já o outro diretório é chamado de 'web' onde consiste todo o front-end da aplicação.
Para executar o projeto siga os passo abaixo.

1) Entre dentro do diretório 'server' e execute o comando abaixo como administrador.
> docker-compose up -d

2) Agora entre no diretório 'web' e execute novamente o comando para gerar o container responsável pelo front-end.
> docker-compose up -d

3) Agora basta acessa a aplicação através do endereço abaixo
> http://localhost:3000



## API Rest - Endpoints (Rotas)

Esta aplicação possui apenas 5 endpoints definidos, são eles:

1) Exibir todos os usuários
> GET [http://localhost:3333/api/v1/developer]
> GET [http://localhost:3333/api/v1/developer?limit=?&start=?]

2) Mostra os dados de um usuário específico
> GET [http://localhost:3333/api/v1/developer/{id}]

3) Criar um usuário
> POST [http://localhost:3333/api/v1/developer]

4) Atualizar as informações de um usuário
> UPDATE [http://localhost:3333/api/v1/developer/{id}]

5) Excluir um usuário
> DELETE [http://localhost:3333/api/v1/developer/{id}]

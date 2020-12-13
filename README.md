# Projeto final - Diversas
![](https://ibb.co/r0BgLDk)

## Unindo Oportunidades

Tendo em vista as múltiplas nuances da questão social, e as inúmeras iniciativas que surgiram visando a diminuição de tais disparidades e do GAP de gênero, nos fez refletir sobre a parcela minoritária que possuem acesso à esses instrumentos, e sobre todos os entraves que inviabilizam essa disseminação nas favelas. O Projeto Diversas busca reunir informações sobre a população e LGBTQIA+, negra, periférica e de baixa renda da Região Metropolitana do Recife (RMR), traçando estratégias visam capacitar essas pessoas por meio de uma busca ativa e pesquisa qualitativa e quantitativa nas estruturas que se firmam no Sistema Único de Assistência Social da região.

##  Objetivo

Diminuir as disparidades do âmbito social, capacitação e educação de pessoas periféricas no âmbito da tecnologia, e levar informações para empresas que visam implementar seus serviços em uma sociedade equânime.

## Documentação

- [NodeJs](https://nodejs.org/en/docs/);
- [MongoDB](https://docs.mongodb.com/);
- [Git Bash](https://www.atlassian.com/git/tutorials/git-bash);
- [Git](https://git-scm.com/doc);
- [Robo 3T](https://robomongo.org/download);
- [NPM](https://docs.npmjs.com/).

## Queres explorar esse projeto? 
### Para inicializar, você precisará ter instalado em sua máquina:
- Node.js(versão igual ou superior a v12.18.3);
- MongoDB;
- Robo 3T (para facilitar a visualização da estrutura do banco de dados);
- Controle de versionamento(Git Bash);
- Visual Studio Code.

### Comandos para inicializar: 
- Faça um Fork desse repositório para seu GitHub;
- Clone seu repositório para seu ambiente local;
- Abra o terminal e digite os comandos:

    npm init
    
    npm install 
    
    npm start 
    
### Rotas disponíveis: 

Método | Recurso | Descrição | Observação
-------|---------|-----------|------------|
GET |  /usuaries | Mostra todes usuáries cadastrados | -
GET | /empresas | Mostra todas as empresas cadastradas | -
GET | /instituicoes | Mostra instituições que podem prestar algum tipo de acolhimento e ou orientação social | -
GET | /capacitacoes | Mostra todas as capacitações que podem ser solicidadas pelas empresas cadastradas | Precisa de autenticação
GET | /cursos | Mostra todos os cursos gratuitos para usuáries interessados em agragar novos conhecimentos ao currículo | Precisa de autenticação
POST |/usuaries | Adiciona usuarie | -
POST | /usuaries/login | Gera o token para validação | -
POST | /instituicoes | Adiciona instituição | -
POST | /empresas | Adiciona empresa | -
POST | /cursos | Adiciona curso | -
POST | /capacitacoes | Adiciona capacitações | -
POST | /empresas/login | Gera token para validação | - 
PUT | /instituicoes/:_ id | Altera elemento do objeto por meio do id | -
PUT | /cursos/:_ id | Altera elemento do objeto por meio do id | -
PUT | /capacitação/:_ id | Altera elemento do objeto por meio do id | -
DELETE | /instituicoes/:_ id | Apaga instituição | -
DELETE | /cursos/:_ id | Apaga curso | -
DELETE | /capacitacoes/:_ id | Apaga curso | -





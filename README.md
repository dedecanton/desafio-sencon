# Tabela Sencon

## Explicação do projeto

O projeto consiste em uma aplicação que faz requisição para o endpoint “https://jsonplaceholder.typicode.com/users”, e mostra os dados em uma tabela que contém os campos:

- Nome
- Email
- Telefone
- Endereço completo
- Cidade
- Empresa

Para a definição da empresa, foi solicitado para implementar a seguinte lógica:

- caso o índice do usuário for divisível por 3, mostrar a palavra “TC”
- caso o índice do usuário for divisível por 5, mostrar a palavra “SENCON”
- caso o índice do usuário for divisível por 3 e 5, mostrar a palavra “TC/ SENCON”
- se não satisfazer nenhuma condição, mostrar a palavra “Sem empresa”

Além disso, ao clicar em uma das linhas da tabela, abre um modal que consta os seguintes dados:

- Username
- Id
- Índice da linha

Por fim, como adicional, uma barra de pesquisa foi adicionada para filtrar os usuários pelo seu nome, email e/ou cidade.

## Demonstração da aplicação

- Deploy na vercel: [https://desafio-sencon.vercel.app/](https://desafio-sencon.vercel.app/)


https://user-images.githubusercontent.com/67431433/179227802-167d6bd4-be6e-41d0-aa89-b51988299355.mp4




## Tecnologias/bibliotecas utilizadas

- ReactJS
- Typescript
- Styled Components

## Como rodar o projeto

1. Clonar repositório (git clone [https://github.com/dedecanton/desafio-sencon.git](https://github.com/dedecanton/desafio-sencon.git))
2. Entrar na pasta do projeto
3. Instalar as dependências ( *rodar __**yarn**__ no terminal do projeto* )
4. Para rodar em ambiente de desenvolvimento, rode o script __**yarn start**__
5. Para fazer build da aplicação, rode o script __**yarn build**__

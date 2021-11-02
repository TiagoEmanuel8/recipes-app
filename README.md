
# Boas vindas ao repositório do projeto App de receitas!

## Um pouco sobre minhas motivações

Esse projeto foi especial por vários motivos, destaco aqui o fato de ter sido desenvolvido em trio com o [Diógenes Santos](https://github.com/SantosDiv) e do [Rafael Nascimento](https://github.com/rafaelrnascimento2006) no encerramento do módulo de front end do curso da Trybe.

Entre os pricipais aprendizados do projeto, considero:

 - Desenvolvimento das Soft-Skills, seja na comunicação ou no pair program.
 - Consolidar no uso da metodologia scrum e uso de ferramentas como o trello para o gerenciamento de atividades.
 - Consolidar o conhecimento em Context Api, Hooks, React.
 - Clean Code.
 - Utilização de 2 API's em simultâneo para fazer requisições.
 - Utilizar localstorage.
 - Javascript ES6
 - Mobile First *(desenvolvimento pensado em mobile)*


## O que é o App de Receitas?

Uma aplicação **Front end** de receitas e apesar do nome 'receitas', dando a entender que se restringe a comida, porém a aplicação também contém receitas de bebidas.

As seguintes ações são possíveis com essa aplicação:

- Criar um usuário e senha para armazenar suas receitas
- Ler receitas, nessa secção contém ingredientes e vídeos tutoriais para auxiliar na preparação dessas.
- Favoritar e remover dos favoritos suas receitas.
- Explorar as várias receitas disponíveis, seja por categorias ou no modo 'surpreenda-me'.
- Visualizar receitas já feitas dentro do aplicativo.
- Acompanhar tudo isso diretamente do seu celular.

 
## Habilidades desenvolvidas durante o projeto

  - Utilizar a Context API do React para gerenciar estado
  - Utilizar o React Hook useState
  - Utilizar o React Hook useContext
  - Utilizar o React Hook useEffect
  - Criar Hooks customizados

---
 
## Preview do projeto

***Clique no vídeo para ver o projeto em funcionamento***

https://user-images.githubusercontent.com/72472530/139759287-1783c775-f99f-4367-957a-9e9eb55a7846.mp4

## Etapas do desenvolvimento desse projeto

Cada tela contém subrequisitos, caso queira conhecer é só clicar em cima dos nomes que uma lista irá se expandir contendo os detalhes do desenvolvimento de cada parte desse projeto.


---
  <details>
    <summary>Testes unitários</summary>

    <!-- - [Testes unitários](#testes-unitários) -->
    - [1 - Desenvolva os testes unitários de maneira que a seja de, no mínimo, 90%](#1---desenvolva-os-testes-unitários-de-maneira-que-a-seja-de-no-mínimo-90)

  </details>
  <details>
    <summary>Tela de Login</summary>

    <!-- - [Tela de login](#tela-de-login) -->
    - [2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login](#2---crie-todos-os-elementos-que-devem-respeitar-os-atributos-descritos-no-protótipo-para-a-tela-de-login)
    - [3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email](#3---desenvolva-a-tela-de-maneira-que-a-pessoa-deve-conseguir-escrever-seu-email-no-input-de-email)
    - [4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha](#4---desenvolva-a-tela-de-maneira-que-a-pessoa-deve-conseguir-escrever-sua-senha-no-input-de-senha)
    - [5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos](#5---desenvolva-a-tela-de-maneira-que-o-formulário-só-seja-válido-após-um-email-válido-e-uma-senha-de-mais-de-6-caracteres-serem-preenchidos)
    - [6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken](#6---salve-2-tokens-no-localstorage-após-a-submissão-identificados-pelas-chaves-mealstoken-e-cocktailstoken)
    - [7 - Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão](#7---salve-o-e-mail-da-pessoa-usuária-no-localstorage-na-chave-user-após-a-submissão)
    - [8 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login](#8---redirecione-a-pessoa-usuária-para-a-tela-principal-de-receitas-de-comidas-após-a-submissão-e-validação-com-sucesso-do-login)
  </details>

  <details>
    <summary>Header</summary>

    - [9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo](#9---implemente-os-elementos-do-header-na-tela-principal-de-receitas-respeitando-os-atributos-descritos-no-protótipo)
    - [10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo](#10---implemente-um-ícone-para-a-tela-de-perfil-um-título-e-um-ícone-para-a-busca-caso-exista-no-protótipo)
    - [11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil](#11---redirecione-a-pessoa-usuária-para-a-tela-de-perfil-ao-clicar-no-botão-de-perfil)
    - [12 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la](#12---desenvolva-o-botão-de-busca-que-ao-ser-clicado-a-barra-de-busca-deve-aparecer-o-mesmo-serve-para-escondê-la)
  </details>

  <details>
    <summary>Barra de busca</summary>

    <!-- - [Barra de busca - Header](#barra-de-busca---header) -->
    - [13 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo](#13---implemente-os-elementos-da-barra-de-busca-respeitando-os-atributos-descritos-no-protótipo)
    - [14 - Posicione a barra logo abaixo do header e implemente 3 radio buttons: Ingrediente, Nome e Primeira letra](#14---posicione-a-barra-logo-abaixo-do-header-e-implemente-3-radio-buttons-ingrediente-nome-e-primeira-letra)
    - [15 - Busque na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas](#15---busque-na-api-de-comidas-caso-a-pessoa-esteja-na-página-de-comidas-e-na-de-bebidas-caso-esteja-na-de-bebidas)
    - [16 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL](#16---redirecione-para-a-tela-de-detalhes-da-receita-caso-apenas-uma-receita-seja-encontrada-com-o-id-da-mesma-na-url)
    - [17 - Mostre as receitas em cards caso mais de uma receita seja encontrada](#17---caso-mais-de-uma-receita-seja-encontrada-mostrar-as-receitas-em-cards-da-mesma-maneira-que-a-tela-principal-de-receitas)
    - [18 - Exiba um `alert` caso nenhuma receita seja encontrada](#18---exiba-um-alert-caso-nenhuma-receita-seja-encontrada)
  </details>

  <details>
    <summary>Menu inferior</summary>

    - [19 - Implemente os elementos do menu inferior respeitando os atributos descritos no protótipo](#19---implemente-os-elementos-do-menu-inferior-respeitando-os-atributos-descritos-no-protótipo)
    - [20 - Posicione o menu inferior de forma fixa e apresente 3 ícones: um para comidas, um para bebidas e outro para exploração](#20---posicione-o-menu-inferior-de-forma-fixa-e-apresente-3-ícones-um-para-comidas-um-para-bebidas-e-outro-para-exploração)
    - [21 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo](#21---exiba-o-menu-inferior-apenas-nas-telas-indicadas-pelo-protótipo)
    - [22 - Redirecione a pessoa usuária para uma lista de cocktails ao clicar no ícone de bebidas](#22---redirecione-a-pessoa-usuária-para-uma-lista-de-cocktails-ao-clicar-no-ícone-de-bebidas)
    - [23 - Redirecione a pessoa usuária para a tela de explorar ao clicar no ícone de exploração](#23---redirecione-a-pessoa-usuária-para-a-tela-de-explorar-ao-clicar-no-ícone-de-exploração)
    - [24 - Redirecione a pessoa usuárua para uma lista de comidas ao clicar no ícone de comidas](#24---redirecione-a-pessoa-usuárua-para-uma-lista-de-comidas-ao-clicar-no-ícone-de-comidas)
  </details>
  <details>
    <summary>Tela principal de receitas</summary>

    - [25 - Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo](#25---implemente-os-elementos-da-tela-principal-de-receitas-respeitando-os-atributos-descritos-no-protótipo)
    - [26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card](#26---carregue-as-12-primeiras-receitas-de-comidas-ou-bebidas-uma-em-cada-card)
    - [27 - Implemente os botões de categoria para serem utilizados como filtro](#27---implemente-os-botões-de-categoria-para-serem-utilizados-como-filtro)
    - [28 - Implemente o filtro das receitas através da API ao clicar no filtro de categoria](#28---implemente-o-filtro-das-receitas-através-da-api-ao-clicar-no-filtro-de-categoria)
    - [29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro](#29---implemente-o-filtro-como-um-toggle-que-se-for-selecionado-de-novo-o-app-deve-retornar-as-receitas-sem-nenhum-filtro)
    - [30 - Implemente o filtro de categoria para que apenas um seja selecionado por vez](#30---implemente-o-filtro-de-categoria-para-que-apenas-um-seja-selecionado-por-vez)
    - [31 - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias](#31---desenvolva-o-filtro-de-categorias-com-a-opção-de-filtrar-por-todas-as-categorias)
    - [32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL](#32---redirecione-a-pessoa-usuária-ao-clicar-no-card-para-a-tela-de-detalhes-que-deve-mudar-a-rota-e-conter-o-id-da-receita-na-url)
  </details>

  <details>
    <summary>Tela de detalhes de uma receita</summary>

    - [33 - Implemente os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo](#33---implemente-os-elementos-da-tela-de-detalhes-de-uma-receita-respeitando-os-atributos-descritos-no-protótipo)
    - [34 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL](#34---realize-uma-request-para-a-api-passando-o-id-da-receita-que-deve-estar-disponível-nos-parâmetros-da-url)
    - [35 - Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações](#35---desenvolva-a-tela-de-forma-que-contenha-uma-imagem-da-receita-o-título-a-categoria-ou-se-é-ou-não-alcoólico-uma-lista-de-ingredientes-seguidos-pelas-quantidades-instruções-um-vídeo-do-youtube-embedado-e-recomendações)
    - [36 - Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa](#36---implemente-as-recomendações-para-receitas-de-comida-a-recomendação-deverá-ser-bebida-e-vice-versa)
    - [37 - Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`](#37---implemente-os-cards-de-recomendação-onde-serão-6-cards-mas-mostrando-apenas-2-e-o-scroll-é-horizontal-similar-a-um-carousel)
    - [38 - Desenvolva um botão de nome "Iniciar Receita" que deve ficar fixo na parte de baixo da tela o tempo todo](#38---desenvolva-um-botão-de-nome-iniciar-receita-que-deve-ficar-fixo-na-parte-de-baixo-da-tela-o-tempo-todo)
    - [39 - Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Iniciar Receita" deve sumir](#39---implemente-a-solução-de-forma-que-caso-a-receita-já-tenha-sido-feita-o-botão-iniciar-receita-deve-sumir)
    - [40 - Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continuar Receita"](#40---implemente-a-solução-de-modo-que-caso-a-receita-tenha-sido-iniciada-mas-não-finalizada-o-texto-do-botão-deve-ser-continuar-receita)
    - [41 - Redirecione a pessoa usuário caso o botão "Iniciar Receita" seja clicado, a rota deve mudar para a tela de receita em processo](#41---redirecione-a-pessoa-usuário-caso-o-botão-iniciar-receita-seja-clicado-a-rota-deve-mudar-para-a-tela-de-receita-em-processo)
    - [42 - Implemente um botão de compartilhar e um de favoritar a receita](#42---implemente-um-botão-de-compartilhar-e-um-de-favoritar-a-receita)
    - [43 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer](#43---implemente-a-solução-de-forma-que-ao-clicar-no-botão-de-compartilhar-o-link-da-receita-dentro-do-app-deve-ser-copiado-para-o-clipboard-e-uma-mensagem-avisando-que-o-link-foi-copiado-deve-aparecer)
    - [44 - Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário](#44---implemente-o-ícone-do-coração-favorito-de-maneira-que-deve-vir-preenchido-caso-a-receita-esteja-favoritada-e-despreenchido-caso-contrário)
    - [45 - Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa](#45---implemente-a-lógica-no-botão-de-favoritar-caso-seja-clicado-o-ícone-do-coração-deve-mudar-seu-estado-atual-caso-esteja-preenchido-deve-mudar-para-despreenchido-e-vice-versa)
    - [46 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`](#46---salve-as-receitas-favoritas-no-localstorage-na-chave-favoriterecipes)
  </details>

  <details>
    <summary>Tela de receita em progresso</summary>

    - [47 - Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidade e suas instruções](#47---desenvolva-a-tela-de-maneira-que-contenha-uma-imagem-da-receita-seu-titulo-sua-categoria-ou-se-a-bebida-é-alcoólica-ou-não-uma-lista-de-ingredientes-com-suas-respectivas-quantidade-e-suas-instruções)
    - [48 - Desenvolva um checkbox para cada item da lista de ingredientes](#48---desenvolva-um-checkbox-para-cada-item-da-lista-de-ingredientes)
    - [49 - Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista](#49---implemente-uma-lógica-que-ao-clicar-no-checkbox-de-um-ingrediente-o-nome-dele-deve-ser-riscado-da-lista)
    - [50 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita](#50---salve-o-estado-do-progresso-que-deve-ser-mantido-caso-a-pessoa-atualize-a-página-ou-volte-para-a-mesma-receita)
    - [51 - Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui](#51---desenvolva-a-lógica-de-favoritar-e-compartilhar-a-lógica-da-tela-de-detalhes-de-uma-receita-se-aplica-aqui)
    - [52 - Implemente a solução de maneira que o botão de finalizar receita só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)](#52---implemente-a-solução-de-maneira-que-o-botão-de-finalizar-receita-só-pode-estar-habilitado-quando-todos-os-ingredientes-estiverem-checkados-marcados)
    - [53 - Redirecione a pessoa usuária após clicar no botão "Finalizar receita", para a página de receitas feitas, cuja rota deve ser `/receitas-feitas`](#53---redirecione-a-pessoa-usuária-após-clicar-no-botão-finalizar-receita-para-a-página-de-receitas-feitas-cuja-rota-deve-ser-receitas-feitas)
  </details>

  <details>
    <summary>Tela de receitas feitas</summary>

    - [54 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo](#54---implemente-os-elementos-da-tela-de-receitas-feitas-respeitando-os-atributos-descritos-no-protótipo)
    - [55 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a area, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar](#55---desenvolva-a-tela-de-maneira-que-caso-a-receita-do-card-seja-uma-comida-ela-deve-possuir-a-foto-da-receita-o-nome-a-categoria-a-area-a-data-em-que-a-pessoa-fez-a-receita-as-2-primeiras-tags-retornadas-pela-api-e-um-botão-de-compartilhar)
    - [56 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar](#56---desenvolva-a-tela-de-maneira-que-caso-a-receita-do-card-seja-uma-bebida-ela-deve-possuir-a-foto-da-receita-o-nome-se-é-alcoólica-a-data-em-que-a-pessoa-fez-a-receita-e-um-botão-de-compartilhar)
    - [57 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard](#57---desenvolva-a-solução-de-maneira-que-o-botão-de-compartilhar-deve-copiar-a-url-da-tela-de-detalhes-da-receita-para-o-clipboard)
    - [58 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros](#58---implemente-2-botões-que-filtram-as-receitas-por-comida-ou-bebida-e-um-terceiro-que-remove-todos-os-filtros)
    - [59 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita](#59---redirecione-para-a-tela-de-detalhes-da-receita-caso-seja-clicado-na-foto-ou-no-nome-da-receita)
  </details>

  <details>
    <summary>Tela de receitas favoritas</summary>

    - [60 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo](#60---implemente-os-elementos-da-tela-de-receitas-favoritas-cumulativo-com-os-atributos-em-comum-com-a-tela-de-receitas-feitas-respeitando-os-atributos-descritos-no-protótipo)
    - [61 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a area, um botão de compartilhar e um de "desfavoritar"](#61---desenvolva-a-tela-de-maneira-que-caso-a-receita-do-card-seja-uma-comida-ela-deve-possuir-a-foto-da-receita-o-nome-a-categoria-a-area-um-botão-de-compartilhar-e-um-de-desfavoritar)
    - [62 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"](#62---desenvolva-a-tela-de-maneira-que-caso-a-receita-do-card-seja-uma-bebida-ela-deve-possuir-a-foto-da-receita-o-nome-se-é-alcoólica-ou-não-um-botão-de-compartilhar-e-um-de-desfavoritar)
    - [63 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard](#63---desenvolva-a-solução-de-maneira-que-o-botão-de-compartilhar-deve-copiar-a-url-da-tela-de-detalhes-da-receita-para-o-clipboard)
    - [64 - Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela](#64---desenvolva-a-solução-de-maneira-que-o-botão-de-desfavoritar-deve-remover-a-receita-da-lista-de-receitas-favoritas-do-localstorage-e-da-tela)
    - [65 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros](#65---implemente-2-botões-que-filtram-as-receitas-por-comida-ou-bebida-e-um-terceiro-que-remove-todos-os-filtros)
    - [66 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita](#66---redirecione-a-pessoa-usuária-ao-clicar-na-foto-ou-no-nome-da-receita-a-rota-deve-mudar-para-a-tela-de-detalhes-daquela-receita)
  </details>

  <details>
    <summary>Tela de explorar</summary>

    - [67 - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo](#67---implemente-os-elementos-da-tela-de-explorar-respeitando-os-atributos-descritos-no-protótipo)
    - [68 - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas](#68---desenvolva-a-tela-de-maneira-que-tenha-2-botões-um-para-explorar-comidas-e-o-outro-para-explorar-bebidas)
    - [69 - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas](#69---redirecione-a-pessoa-usuária-ao-clicar-em-um-dos-botões-a-rota-deve-mudar-para-a-página-de-explorar-comidas-ou-de-explorar-bebidas)

  </details>

  <details>
    <summary>Tela de explorar bebidas ou comidas</summary>

    - [70 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo](#70---implemente-os-elementos-da-tela-de-explorar-bebidas-ou-comidas-respeitando-os-atributos-descritos-no-protótipo)
    - [71 - Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por local de origem e um para pegar uma receita aleatória](#71---desenvolva-3-botões-um-para-explorar-por-ingrediente-um-para-explorar-por-local-de-origem-e-um-para-pegar-uma-receita-aleatória)
    - [72 - Redirecione a pessoa usuária ao clicar em "Por Ingredientes", a rota deve mudar para a tela de explorar por ingredientes](#72---redirecione-a-pessoa-usuária-ao-clicar-em-por-ingredientes-para-a-tela-de-explorar-por-ingredientes)
    - [73 - Redirecione a pessoa usuária ao clicar em "Por Local de Origem", a rota deve mudar para tela de explorar por local de origem](#73---redirecione-a-pessoa-usuária-ao-clicar-em-por-local-de-origem-a-rota-deve-mudar-para-tela-de-explorar-por-local-de-origem)
    - [74 - Redirecione a pessoa usuária ao clicar em "Me Surpreenda!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API](#74---redirecione-a-pessoa-usuária-ao-clicar-em-me-surpreenda-a-rota-deve-mudar-para-a-tela-de-detalhes-de-uma-receita-que-deve-ser-escolhida-de-forma-aleatória-através-da-api)
  </details>

  <details>
    <summary>Tela de explorar ingredientes</summary>

    - [75 - Implemente os elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo](#75---implemente-os-elementos-da-tela-de-explorar-ingredientes-respeitando-os-atributos-descritos-no-protótipo)
    - [76 - Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto](#76---desenvolva-cards-para-os-12-primeiros-ingredientes-de-forma-que-cada-card-contenha-o-nome-do-ingrediente-e-uma-foto)
    - [77 -  Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido](#77----redireciona-a-pessoa-usuária-ao-clicar-no-card-do-ingrediente-a-rota-deve-mudar-para-tela-principal-de-receitas-mas-mostrando-apenas-as-receitas-que-contém-o-ingrediente-escolhido)
  </details>

  <details>
    <summary>Tela de explorar por local de origem/area</summary>

  - [78 - Implemente os elementos da tela de explorar por local de origem respeitando os atributos descritos no protótipo](#78---implemente-os-elementos-da-tela-de-explorar-por-local-de-origem-respeitando-os-atributos-descritos-no-protótipo)
  - [79 - Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown](#79---desenvolva-as-mesmas-especificações-da-tela-de-receitas-principal-com-a-diferença-de-que-os-filtros-de-categoria-são-substituídos-por-um-dropdown)
  - [80 - Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro](#80---implemente-o-dropdown-de-maneira-que-devem-estar-disponíveis-todas-as-áreas-retornadas-da-api-incluindo-a-opção-all-que-retorna-as-receitas-sem-nenhum-filtro)
  - [81 - Implemente a rota que deve ser apenas `/explorar/comidas/area`](#81---implemente-a-rota-que-deve-ser-apenas-explorarcomidasarea)
  </details>

  <details>
    <summary>Tela de perfil</summary>

  - [82 - Implemente os elementos da a tela de perfil respeitando os atributos descritos no protótipo](#82---implemente-os-elementos-da-a-tela-de-perfil-respeitando-os-atributos-descritos-no-protótipo)
  - [83 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível](#83---implemente-a-solução-de-maneira-que-o-e-mail-da-pessoa-usuária-deve-estar-visível)
  - [84 - Implemente 3 botões: um de nome "Receitas Feitas", um de nome "Receitas Favoritas" e um de nome "Sair"](#84---implemente-3-botões-um-de-nome-receitas-feitas-um-de-nome-receitas-favoritas-e-um-de-nome-sair)
  - [85 - Redirecione a pessoa usuária que, ao clicar no botão de "Receitas Favoritas", a rota deve mudar para a tela de receitas favoritas](#85---redirecione-a-pessoa-usuária-que-ao-clicar-no-botão-de-receitas-favoritas-a-rota-deve-mudar-para-a-tela-de-receitas-favoritas)
  - [86 - Redirecione a pessoa usuária que, ao clicar no botão de "Receitas Feitas", a rota deve mudar para a tela de receitas feitas](#86---redirecione-a-pessoa-usuária-que-ao-clicar-no-botão-de-receitas-feitas-a-rota-deve-mudar-para-a-tela-de-receitas-feitas)
  - [87 - Redirecione a pessoa usuária que, ao clicar no botão de "Sair", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login](#87---redirecione-a-pessoa-usuária-que-ao-clicar-no-botão-de-sair-o-localstorage-deve-ser-limpo-e-a-rota-deve-mudar-para-a-tela-de-login)
  </details>

---


## Quer instalar esse projeto em seu notebook ou pc?

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.

**1. Pré-requisitos**
```
- node v16.8.0

- npm 7.21.0

- git version 2.17.1
```

[Download node js](https://nodejs.org/en/)
 

[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

  

**2. Clonando o projeto**

  

Digite o comando abaixo em seu terminal para clonar o projeto.
  

```
git clone https://github.com/TiagoEmanuel8/recipes-app.git
```

  

Entre na pasta

  

```
cd recipes-app
```

  

**3. Instalando as dependências**

  

```
npm install
```

  

**4. Executando o projeto**

  

```
npm start
```

---------




## Referências

Esse projeto contei com a ajuda do [Diógenes Santos](https://github.com/SantosDiv) e do [Rafael Nascimento](https://github.com/rafaelrnascimento2006)

O projeto foi feito durante o módulo de Front End do curso da trybe

Essa aplicação contou com as seguintes API's e recursos para serem desenvolvidas:

 - [TheMealDB API](https://www.themealdb.com/api.php)
 - [The CockTailDB API](https://www.thecocktaildb.com/api.php)
 - [Clipboard-Copy](https://www.npmjs.com/package/clipboard-copy)
 - [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)

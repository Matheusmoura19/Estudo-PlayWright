# Estudo-PlayWright

Repositório dedicado aos meus estudos sobre o [Playwright](https://playwright.dev/), framework de automação de testes desenvolvido pela Microsoft.

O objetivo é praticar automação de testes utilizando **JavaScript** e **TypeScript**, explorando tanto testes **End-to-End (E2E)** quanto testes de **API**.

O repositório é dividido em projetos independentes, cada um com sua própria configuração do Playwright.

---

## Estrutura do repositório

```text
Estudo-PlayWright/
├── AutomationExercise_Tests/
│   ├── helpers/
│   │   ├── closeButton.js
│   │   └── testCredentials.js
│   │
│   ├── tests/
│   │   ├── api/
│   │   │   ├── deleteAPIs/
│   │   │   │   └── deleteLogin.spec.js
│   │   │   │
│   │   │   ├── getAPIs/
│   │   │   │   ├── getBrands.spec.js
│   │   │   │   └── getProducts.spec.js
│   │   │   │
│   │   │   ├── postAPIs/
│   │   │   │   ├── postLogin.spec.js
│   │   │   │   ├── postProducts.spec.js
│   │   │   │   └── postSearch.spec.js
│   │   │   │
│   │   │   └── putAPIs/
│   │   │       └── putBrands.spec.js
│   │   │
│   │   ├── cart/
│   │   │   └── functions.spec.js
│   │   │
│   │   ├── login/
│   │   │   ├── login.spec.js
│   │   │   └── signup.spec.js
│   │   │
│   │   └── products/
│   │       ├── filter.spec.js
│   │       └── search.spec.js
│   │
│   ├── playwright.config.js
│   ├── package.json
│   └── package-lock.json
│
├── Anthera_Tests/
│   ├── helpers/
│   │   └── login.ts
│   │
│   ├── tests/
│   │   └── example.spec.ts
│   │
│   ├── playwright.config.ts
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

> Cada pasta de projeto possui seu próprio `package.json` e `playwright.config`, permitindo que os estudos sejam executados de forma independente.

---

## Tecnologias

* [Playwright](https://playwright.dev/)
* Playwright Test
* JavaScript
* TypeScript
* Node.js
* API Testing
* Git

A versão atual utilizada do Playwright é **1.62.1**.

---

# Projetos de teste

## 1. `AutomationExercise_Tests`

Projeto de estudos utilizando **JavaScript**, baseado no site público [Automation Exercise](https://automationexercise.com/).

O projeto atualmente contempla testes **E2E** e **API**.

### Testes E2E

Os testes de interface estão organizados por funcionalidade.

### Login

Arquivo:

```text
tests/login/login.spec.js
```

Cenários implementados:

* Login com credenciais válidas
* Login com credenciais inválidas
* Logout
* Login e exclusão da conta

As credenciais utilizadas nos testes são centralizadas no helper:

```text
helpers/testCredentials.js
```

---

### Cadastro

Arquivo:

```text
tests/login/signup.spec.js
```

Cenários implementados:

* Criação de uma nova conta
* Tentativa de criação de uma conta utilizando um e-mail já existente

---

### Produtos

Arquivos:

```text
tests/products/search.spec.js
tests/products/filter.spec.js
```

Os testes de produtos cobrem:

* Busca de produto existente
* Busca de produto inexistente
* Busca e visualização dos detalhes de um produto
* Avaliação de um produto
* Filtro por categoria **Women**
* Filtro por categoria **Men**
* Filtro por categoria **Kids**
* Filtro por marca, como **Polo**

---

### Carrinho

Arquivo:

```text
tests/cart/functions.spec.js
```

Cenário implementado:

* Acessar produtos
* Visualizar um produto
* Adicionar o produto ao carrinho
* Confirmar a mensagem de adição
* Acessar o carrinho
* Validar a página do carrinho

---

## Testes de API

Uma das principais evoluções do projeto foi a inclusão de testes para as APIs disponibilizadas pelo Automation Exercise.

Os testes estão organizados por método HTTP:

```text
tests/api/
├── deleteAPIs/
├── getAPIs/
├── postAPIs/
└── putAPIs/
```

### GET

Arquivos:

```text
tests/api/getAPIs/getBrands.spec.js
tests/api/getAPIs/getProducts.spec.js
```

Cenários:

* `GET /api/brandsList`

  * Validação do status HTTP
  * Validação do `responseCode`
  * Validação da existência da lista de marcas
  * Validação de que a resposta contém um array com dados

* `GET /api/productsList`

  * Validação do status HTTP
  * Validação do `responseCode`
  * Validação da lista de produtos
  * Validação de que existem produtos retornados

---

### POST

Arquivos:

```text
tests/api/postAPIs/postLogin.spec.js
tests/api/postAPIs/postProducts.spec.js
tests/api/postAPIs/postSearch.spec.js
```

Cenários:

* `POST /api/verifyLogin`

  * Login com credenciais válidas
  * Login sem informar e-mail

* `POST /api/productsList`

  * Validação de que o método não é suportado

* `POST /api/searchProduct`

  * Busca de produto
  * Validação de produto encontrado
  * Busca sem informar `search_product`

---

### PUT

Arquivo:

```text
tests/api/putAPIs/putBrands.spec.js
```

Cenário:

* `PUT /api/brandsList`

  * Validação de que o método não é suportado

---

### DELETE

Arquivo:

```text
tests/api/deleteAPIs/deleteLogin.spec.js
```

Cenário:

* `DELETE /api/verifyLogin`

  * Validação de que o método não é suportado

---

## Helpers

O projeto possui helpers para evitar repetição de código.

### `testCredentials.js`

Centraliza as credenciais utilizadas nos testes:

```text
helpers/testCredentials.js
```

São disponibilizadas credenciais para cenários de:

* Login válido
* Login inválido

### `closeButton.js`

Arquivo:

```text
helpers/closeButton.js
```

Implementa um mecanismo para monitorar e fechar anúncios exibidos pelo site durante a execução dos testes.

Esse helper é utilizado principalmente nos testes E2E que acessam o Automation Exercise.

---

# 2. `Anthera_Tests`

Projeto de estudos utilizando **TypeScript**, realizando testes E2E no projeto [Anthera](https://anthera-project-nu.vercel.app/).

A estrutura utiliza helpers reutilizáveis para os diferentes tipos de acesso ao sistema.

## Helpers de login

Arquivo:

```text
helpers/login.ts
```

O helper possui funções específicas para:

```text
loginDistribuidor(page)
loginAdmin(page)
```

### Distribuidor

Realiza o fluxo de:

* Acessar a área do parceiro
* Preencher as credenciais
* Realizar o login
* Recarregar a página
* Validar o acesso ao portal
* Interagir com o tutorial inicial

### Admin

Realiza o fluxo de:

* Acessar o portal de gestão
* Preencher as credenciais administrativas
* Realizar o login
* Validar o acesso ao painel administrativo
* Interagir com o tutorial inicial

---

## Testes implementados

Arquivo:

```text
tests/example.spec.ts
```

Atualmente contém cenários envolvendo:

### Login no Anthera

* Acesso à área do parceiro
* Login como distribuidor

### Alteração de tema

Utilizando o helper `loginDistribuidor`:

* Acesso às configurações da conta
* Abertura das configurações
* Alteração do tema

### Administração de cursos

Utilizando o helper `loginAdmin`:

* Acesso à área de cursos
* Edição de um curso
* Verificação do status do curso
* Desativação do curso quando necessário
* Atualização das informações

---

# Configuração do Playwright

Os dois projetos utilizam três navegadores:

* Chromium
* Firefox
* WebKit

A execução pode ser feita contra todos os navegadores configurados ou utilizando um projeto específico.

### AutomationExercise

O projeto possui:

```text
baseURL: https://automationexercise.com
```

Além disso, está configurado para utilizar:

```text
Accept: application/json
```

como header HTTP adicional.

### Anthera

O projeto está configurado com:

```text
locale: pt-BR
timezoneId: America/Sao_Paulo
```

Isso permite que os testes sejam executados considerando o idioma português do Brasil e o fuso horário de São Paulo.

---

# Como executar

## Pré-requisitos

É necessário ter instalado:

* [Node.js](https://nodejs.org/)
* Git

Recomenda-se utilizar uma versão LTS do Node.js.

---

## AutomationExercise_Tests

Entre na pasta:

```bash
cd AutomationExercise_Tests
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores do Playwright:

```bash
npx playwright install
```

Execute todos os testes:

```bash
npx playwright test
```

Execute os testes com o navegador visível:

```bash
npx playwright test --headed
```

Execute em modo UI:

```bash
npx playwright test --ui
```

Execute um arquivo específico:

```bash
npx playwright test tests/login/login.spec.js
```

Execute somente os testes de API:

```bash
npx playwright test tests/api
```

Execute somente os testes de produtos:

```bash
npx playwright test tests/products
```

Visualize o relatório HTML:

```bash
npx playwright show-report
```

---

## Anthera_Tests

Entre na pasta:

```bash
cd Anthera_Tests
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores:

```bash
npx playwright install
```

Execute todos os testes:

```bash
npx playwright test
```

Execute com o navegador visível:

```bash
npx playwright test --headed
```

Execute em modo UI:

```bash
npx playwright test --ui
```

Visualize o relatório HTML:

```bash
npx playwright show-report
```

---

# Codegen

O Playwright possui uma ferramenta chamada **Codegen**, que permite gravar as interações realizadas no navegador e gerar automaticamente uma base de código para os testes.

Para utilizar:

```bash
npx playwright codegen <url>
```

Exemplo:

```bash
npx playwright codegen https://automationexercise.com
```

---

# Relatórios

Os projetos utilizam o **HTML Reporter** do Playwright.

Após executar os testes:

```bash
npx playwright show-report
```

O relatório permite visualizar informações como:

* Testes aprovados
* Testes falhos
* Testes ignorados
* Tempo de execução
* Detalhes das etapas
* Traces quando disponíveis

Os projetos também estão configurados para coletar **trace na primeira tentativa de um teste que falhar novamente**:

```javascript
trace: 'on-first-retry'
```

---

# Objetivo

O objetivo deste repositório é consolidar conhecimento prático em **automação de testes com Playwright**, explorando diferentes tipos de testes e boas práticas de organização.

Atualmente os estudos abrangem:

* Testes End-to-End
* Testes de API
* Automação de formulários
* Login e autenticação
* Cadastro de usuários
* Navegação
* Busca e filtros
* Carrinho de compras
* Avaliação de produtos
* Validação de respostas HTTP
* Validação de JSON
* Uso de `request` para testes de API
* Helpers reutilizáveis
* JavaScript
* TypeScript
* Execução em múltiplos navegadores
* Relatórios HTML
* Trace Viewer
* Codegen
* Execução em modo UI

O repositório serve como **ambiente de estudo e referência pessoal**, permitindo evoluir gradualmente os conhecimentos em automação de testes e explorar novas funcionalidades do Playwright.

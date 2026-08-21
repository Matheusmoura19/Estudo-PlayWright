# Estudo-PlayWright

Repositório dedicado aos meus estudos sobre o [Playwright](https://playwright.dev/), framework de automação de testes end-to-end desenvolvido pela Microsoft, praticando tanto em **JavaScript** quanto em **TypeScript**.

O repositório reúne mais de um projeto de estudo, cada um em uma pasta própria, com sua própria configuração do Playwright.

## Estrutura do repositório

```
Estudo-PlayWright/
├── AutomationExercise_Tests/   # Testes em JavaScript no site automationexercise.com
│   ├── helpers/
│   │   └── testCredentials.js
│   ├── tests/
│   │   ├── login/
│   │   │   ├── login.spec.js
│   │   │   └── signup.spec.js
│   │   └── products/
│   │       ├── search.spec.js
│   │       └── filter.spec.js
│   ├── playwright.config.js
│   └── package.json
│
├── Anthera_Tests/               # Testes em TypeScript no projeto Anthera
│   ├── helpers/
│   │   └── login.ts
│   ├── tests/
│   │   └── example.spec.ts
│   ├── playwright.config.ts
│   └── package.json
│
└── README.md
```

> Cada pasta é um projeto Playwright independente, com seu próprio `package.json` e `playwright.config`. Novas pastas de estudo podem ser adicionadas seguindo o mesmo padrão.

## Tecnologias

- [Playwright Test](https://playwright.dev/)
- JavaScript
- TypeScript
- Node.js

## Projetos de teste

### 1. `AutomationExercise_Tests` (JavaScript)

Testes E2E no site público [automationexercise.com](https://automationexercise.com), cobrindo:

- **Login** (`tests/login/login.spec.js`)
  - Login com credenciais válidas
  - Login com credenciais inválidas
  - Logout
  - Login e exclusão de conta
- **Cadastro** (`tests/login/signup.spec.js`)
  - Criação de conta de usuário
  - Tentativa de criar conta com e-mail já existente
- **Produtos** (`tests/products/search.spec.js` e `filter.spec.js`)
  - Busca de produto existente / inexistente
  - Filtro de produtos por categoria (Women, Men, Kids)
  - Filtro de produtos por marca (Brand)

Esse projeto também conta com um workflow de **GitHub Actions** (`.github/workflows/playwright.yml`) que roda os testes automaticamente em cada push/PR para as branches `main`/`master`.

### 2. `Anthera_Tests` (TypeScript)

Testes E2E no projeto [Anthera](https://anthera-project-nu.vercel.app/), incluindo:

- Login como distribuidor/parceiro e como admin (helpers reutilizáveis em `helpers/login.ts`)
- Navegação e busca no YouTube (exemplo de teste em site externo)
- Alteração de tema nas configurações da conta
- Fluxo de administração: acessar cursos e editar status de um curso

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Git

### AutomationExercise_Tests

```bash
cd AutomationExercise_Tests

# Instalar dependências
npm install

# Instalar os navegadores usados pelo Playwright
npx playwright install

# Rodar todos os testes
npx playwright test

# Rodar em modo headed (com o navegador visível)
npx playwright test --headed

# Rodar um arquivo específico
npx playwright test tests/login/login.spec.js

# Ver o relatório HTML após a execução
npx playwright show-report
```

### Anthera_Tests

```bash
cd Anthera_Tests

# Instalar dependências
npm install

# Instalar os navegadores usados pelo Playwright
npx playwright install

# Rodar todos os testes
npx playwright test

# Rodar em modo UI (interface visual)
npx playwright test --ui

# Ver o relatório HTML após a execução
npx playwright show-report
```

### Gerador de código (Codegen)

Útil para gravar ações no navegador e gerar o código do teste automaticamente:

```bash
npx playwright codegen <url>
```



## Objetivo

Consolidar conhecimento prático em automação de testes com Playwright, testando tanto sites públicos de prática (Automation Exercise) quanto um projeto real (Anthera), servindo como base de estudo e referência pessoal.

---

Feito por [Matheus Moura](https://github.com/Matheusmoura19) 🚀

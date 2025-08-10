# App de Suplementos

Aplicativo mobile desenvolvido em **React Native** para exibição e navegação de categorias e produtos de suplementos alimentares. Criado como atividade acadêmica com foco em interface responsiva e experiência do usuário.

---

## Funcionalidades

* **Tela de Login** com gradiente e design moderno
* **Categorias de Suplementos** com lista expansível
* **Catálogo de Produtos** com imagens e informações detalhadas
* **Navegação por abas** com Expo Router
* **Sistema de arquivos** para roteamento automático
* **Design responsivo** com tema rosa/pink
* **Interface intuitiva** com componentes touchables

---

## Tecnologias Utilizadas

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Expo Router](https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white)

### Stack Detalhada

* **React Native** — Framework principal para desenvolvimento mobile
* **Expo** — Plataforma para desenvolvimento e build
* **Expo Linear Gradient** — Gradientes lineares na interface
* **FontAwesome6** — Ícones vetoriais (dumbbell)
* **Expo Router** — Sistema de navegação baseado em arquivos
* **Tab Navigation** — Navegação por abas
* **StyleSheet** — Estilização nativa do React Native

---

## Estrutura do Projeto

```
app/
├── (tabs)/                   # Estrutura de navegação por abas
│   ├── index.tsx            # Tela inicial (Home)
│   ├── layout.tsx           # Layout das abas  
│   └── detalhes.ts          # Tela de detalhes
├── assets/                  # Imagens e recursos estáticos
├── App.tsx                  # Componente principal
└── package.json             # Dependências do projeto
```

---

## Telas Implementadas

### Login
* Design com gradiente rosa (`#ffc1cc`, `#ffb6c1`, `#ffe4ec`)
* Campos de email e senha
* Ícone de haltere (dumbbell) como logo
* Botão de entrada estilizado

### Home - Categorias
* Lista de 5 categorias de suplementos:
  * **Whey Protein** - Recuperação muscular
  * **Creatina** - Performance em exercícios
  * **Pré-Treino** - Energia e foco
  * **BCAA** - Aminoácidos essenciais
  * **Termogênicos** - Queima de gordura
* Componentes expansíveis (toggle)
* Cards com elevação e bordas arredondadas

### Produtos
* Catálogo com 4 produtos principais
* Imagens hospedadas externamente (Imgur)
* Informações de preço, descrição e nome
* Botão para navegação aos detalhes
* Layout em cards centralizados

---

## Como Executar o Projeto

### Instalação

```bash
git clone https://github.com/cawzkf/app-suplementos.git
cd app-suplementos
npm install
```

### Executando

```bash
npx expo start --web
```

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Rosa Principal | `#D81B60` | Títulos e elementos principais |
| Rosa Claro | `#F8BBD0` | Background dos cards |
| Rosa Escuro | `#880E4F` | Textos destacados |
| Roxo | `#4A148C` | Descrições |
| Gradiente | `#ffc1cc → #ffe4ec` | Background do login |

---

## Estrutura de Dados

### Categorias
```javascript
{
  nome: 'Nome da Categoria',
  descricao: 'Descrição detalhada do suplemento'
}
```

### Produtos
```javascript
{
  id: Number,
  nome: 'Nome do Produto',
  preco: Number,
  descricao: 'Descrição do produto',
  img: 'URL da imagem'
}
```

---

## Repositório

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cawzkf/app-suplementos)

**Repositório:** [github.com/cawzkf/Disp.moveis](https://github.com/cawzkf/Disp.moveis)

---

<div align="center">

**Desenvolvido como atividade acadêmica**

![React Native](https://img.shields.io/badge/Made_with-React_Native-61DAFB?style=flat-square&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Powered_by-Expo-000020?style=flat-square&logo=expo&logoColor=white)

</div>

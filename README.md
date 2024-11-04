# App Banco E-commerce

Este é um projeto de e-commerce voltado para produtos bancários, desenvolvido em Angular. O objetivo do projeto é permitir a visualização e compra de produtos financeiros, como Seguro de Vida, Seguro de Carro, Seguro Residencial e Planos de Previdência Privada.

Este projeto faz parte de um desafio para estruturar e configurar um ambiente completo de desenvolvimento Angular, incluindo suporte a testes, configurações específicas de ambiente e otimizações para produção.

## Objetivo do Desafio

O objetivo principal do desafio é:

1. Criar um projeto de e-commerce em Angular focado em produtos financeiros.
2. Configurar o ambiente de desenvolvimento para suportar testes unitários usando Jasmine e Karma.
3. Ajustar o `angular.json` para ambientes de produção e desenvolvimento.
4. Implementar configurações de proxy e pré-renderização para melhorar o desempenho do projeto.
5. Resolver erros e otimizar o ambiente para compilar corretamente, garantindo uma base sólida para o desenvolvimento e testes.

## Estrutura do Projeto

A estrutura do projeto Angular está organizada da seguinte forma:

App_Banco_Ecommerce/ ├── src/ │ ├── app/ │ │ ├── cart/ # Módulo de carrinho de compras │ │ ├── checkout/ # Módulo de checkout │ │ ├── products/ # Módulo de produtos bancários │ │ ├── shared/ # Módulo compartilhado, com serviços e modelos │ │ ├── app-routing.module.ts # Configurações de rotas │ │ ├── app.component.ts # Componente raiz │ │ ├── app.module.ts # Módulo principal │ ├── assets/ # Arquivos estáticos, como imagens e estilos │ ├── environments/ # Configurações de ambiente (produção e desenvolvimento) │ ├── index.html # Página principal HTML │ ├── main.ts # Arquivo de entrada da aplicação │ ├── polyfills.ts # Polyfills para compatibilidade com navegadores ├── angular.json # Configurações do projeto Angular ├── karma.conf.js # Configurações do Karma para testes ├── tsconfig.json # Configurações TypeScript ├── tsconfig.app.json # Configurações TypeScript para aplicação ├── tsconfig.spec.json # Configurações TypeScript para testes └── proxy-config.json # Configuração de proxy para desenvolvimento

![Estrutura do Projeto](assets/images/Estrutura_Projeto.PNG)

## Tecnologias Utilizadas

- **Angular**: Framework JavaScript para construção de SPAs.
- **TypeScript**: Linguagem usada para desenvolvimento no Angular.
- **Jasmine**: Framework de testes utilizado para escrever testes unitários.
- **Karma**: Executor de testes para Angular.
- **Zone.js**: Utilizado pelo Angular para gerenciar mudanças de estado.
- **Node.js & NPM**: Ambiente de execução e gerenciador de pacotes para instalar dependências.

## Comandos Utilizados

### Para rodar o projeto em modo de desenvolvimento

ng serve

### Para construir o projeto para produção

ng build --configuration production

### Para executar os testes unitários

ng test

### Para instalar dependências de teste

npm install --save-dev @types/jasmine

### Para limpar o cache do npm (em caso de erros)

npm cache clean --force

### Para reconstruir o projeto (caso necessário)

rm -rf node_modules
npm install

### Resumo do Desenvolvimento

Durante o desenvolvimento deste projeto, enfrentamos e resolvemos diversos desafios, incluindo:

    Configuração correta de angular.json para produção e desenvolvimento.
    Ajustes no tsconfig.spec.json e instalação de tipos para o Jasmine.
    Configuração do Karma para execução dos testes unitários.
    Correção de erros no arquivo app.component.spec.ts e nas configurações de teste do Jasmine.
    Solução de problemas de configuração de proxy.

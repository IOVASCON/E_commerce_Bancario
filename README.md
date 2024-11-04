# App Banco E-commerce

Este é um projeto de e-commerce voltado para produtos bancários, desenvolvido em Angular. O objetivo do projeto é permitir a visualização e compra de produtos financeiros, como Seguro de Vida, Seguro de Carro, Seguro Residencial e Planos de Previdência Privada.

Este projeto faz parte de um desafio para estruturar e configurar um ambiente completo de desenvolvimento Angular, incluindo suporte a testes, configurações específicas de ambiente e otimizações para produção.

## Objetivo do Desafio

O objetivo deste desafio é desenvolver uma aplicação Angular completa para e-commerce de produtos bancários, abordando desde a estrutura básica do projeto até a configuração de testes automatizados.

Pontos princiapis do objetivo:

1. Criar um projeto de e-commerce em Angular focado em produtos financeiros.
2. Configurar o ambiente de desenvolvimento para suportar testes unitários usando Jasmine e Karma.
3. Ajustar o `angular.json` para ambientes de produção e desenvolvimento.
4. Implementar configurações de proxy e pré-renderização para melhorar o desempenho do projeto.
5. Resolver erros e otimizar o ambiente para compilar corretamente, garantindo uma base sólida para o desenvolvimento e testes.

## Estrutura do Projeto

A estrutura do projeto está organizada conforme as melhores práticas do Angular, separando os módulos e componentes de acordo com suas funcionalidades:

1. **src/app/** - Contém todos os componentes, serviços e módulos do projeto.
    - **app-routing.module.ts** - Configuração de rotas.
    - **app.component.ts** - Componente raiz da aplicação.
    - **shared/** - Serviços e modelos compartilhados entre os componentes.
    - **cart/** - Componentes e serviços relacionados ao carrinho de compras.
    - **checkout/** - Componente responsável pelo processo de checkout.
    - **products/** - Componentes para exibir e gerenciar produtos.
2. **assets/images/** - Imagens de desenvolvimento do projeto.
3. **angular.json** - Arquivo de configuração do Angular.
4. **karma.conf.js** - Configuração para o Karma, o framework de testes.
5. **tsconfig.json e tsconfig.spec.json** - Configuração do TypeScript para a aplicação e para os testes.

A estrutura do projeto Angular está organizada da seguinte forma:

![Estrutura do Projeto](/src/assets/images/Estrutura_Projeto.PNG)

## Tecnologias Utilizadas

- **Angular**: Framework JavaScript para construção de SPAs.
- **TypeScript**: Linguagem usada para desenvolvimento no Angular.
- **Jasmine**: Framework de testes utilizado para escrever testes unitários.
- **Karma**: Executor de testes para Angular.
- **Zone.js**: Utilizado pelo Angular para gerenciar mudanças de estado.
- **Node.js & NPM**: Ambiente de execução e gerenciador de pacotes para instalar dependências.

## Comandos Utilizados

## Dependências Necessárias

Antes de rodar o projeto e executar os testes, instale as dependências com os comandos:

    npm install
    npm install --save-dev jasmine-core karma karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage @types/jasmine

### Para rodar o projeto em modo de desenvolvimento

    ng serve

O servidor estará disponível em <http://localhost:4200>

### Para construir o projeto para produção

    ng build --configuration production

### Para limpar o cache do npm (em caso de erros)

    npm cache clean --force

### Para reconstruir o projeto (caso necessário)

    rm -rf node_modules
    npm install

## Instruções para Executar os Testes

1. **Testes Unitários**

Para rodar os testes unitários, use o comando:

    ng test --watch=false

Este comando executará os testes configurados com o Karma e Jasmine e abrirá um navegador exibindo os resultados dos testes. Certifique-se de que os arquivos de teste estejam configurados corretamente e que as dependências foram instaladas.

2.**Teste de Sanidade**

Incluímos um teste de sanidade para garantir que a configuração está funcional. O código do teste de sanidade está em app.component.spec.ts:

    describe('Sanity Check', () => {
    it('should pass this test', () => {
        expect(true).toBe(true);
    });
    });

3. **Testes e2e (Cypress**)

Se desejar, você pode executar testes end-to-end com o Cypress:

    npx cypress open

## Estrutura de Testes

O projeto está configurado para detectar automaticamente os arquivos de teste com extensão .spec.ts. O arquivo test.ts é necessário para o Karma carregar recursivamente os arquivos de teste e o framework Angular.
Arquivos Principais de Configuração para Testes

- **karma.conf.js** - Configura o Karma para executar os testes com o Jasmine.
- **tsconfig.spec.json** - Configurações do TypeScript para os arquivos de teste.
- **test.ts** - Arquivo responsável por inicializar o ambiente de testes do Angular.

## Imagens do Desenvolvimento

Abaixo estão algumas imagens que mostram a configuração e estrutura do projeto:

1. **Karma no Navegador**

    ![Estrutura do Projeto](/src/assets/images/Karma_Navegador.PNG)

2. **Instalação do Cypress**

    ![Estrutura do Projeto](/src/assets/images/Instalacao_Cypress.PNG)

3. **Instalação do Karma e Jasmine**

    ![Estrutura do Projeto](/src/assets/images/Instalacao_Karma_Jasmine.PNG)

4. **Verificação de Dependências**

    ![Estrutura do Projeto](/src/assets/images/Verificando_Dependencias.PNG)

5. **Versão Angular CLI**

    ![Estrutura do Projeto](/src/assets/images/Versao_Angular_Cli.PNG)

6. **Versão TypeScript**

    ![Estrutura do Projeto](/src/assets/images/Versao_TypeScript.PNG)

7. **Versões Node e NPM**

    ![Estrutura do Projeto](/src/assets/images/Versoes_Node_Npm.PNG)

## Resumo do Desenvolvimento

Durante o desenvolvimento deste projeto, enfrentamos e resolvemos diversos desafios, incluindo:

- Configuração correta de angular.json para produção e desenvolvimento.
- Ajustes no tsconfig.spec.json e instalação de tipos para o Jasmine.
- Configuração do Karma para execução dos testes unitários.
- Correção de erros no arquivo app.component.spec.ts e nas configurações de teste do Jasmine.
- Solução de problemas de configuração de proxy.

## Considerações Finais

Este projeto foi desenvolvido para oferecer uma estrutura sólida para e-commerce em Angular com uma configuração de testes automatizados. A configuração do Karma e Jasmine, junto com o Cypress para testes e2e, permite uma cobertura completa de testes para garantir a estabilidade e funcionalidade da aplicação.

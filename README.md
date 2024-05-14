# ehosDEVida_testes

## Instalação dos ambientes de desenvolvimento:
1. IDE VSCode (code):
https://code.visualstudio.com/

2. JDK (java):
https://www.oracle.com/java/technologies/javase-downloads.html

3. Instalação - Cypress (Teste de UI):

 Faça a instalação do cypress via linha de comando. Abra o terminal e digite

```
npm install cypress

```
 Download cypress direto do site: https://www.cypress.io/

Link para download direto: https://download.cypress.io/desktop

Basta baixar, extrair, executar o Cypress.exe e apontar para o diretório do projeto desejado na interface do cypress.
Utilize a IDE para editar o código.


## Comandos cypress

Criar o diretório inicial e indicar para o node que o diretório é um projeto
```
npm init
```

Baixar as dependencias do projeto 
```
npm install
```

Abrir cypress pela linha de comando:
```
./node_modules/.bin/cypress open
```
Selecionar na tela principal o arquivo teste trabalhoui

## Gerando um report 

1. Adicionando as dependências necessárias para gerar o reporte de testes:
npm i --save-dev cypress-mochawesome-reporter
	
2. Modificar o arquivo cypress.config.js:
```
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
````
3. Adicionar em cypress/support/e2e.js:
```
import 'cypress-mochawesome-reporter/register';
```
4. Rodar specs pela linha de comando:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
6. Abrir o arquivo index.html gerado


## Instalação dos ambientes de desenvolvimento:
1. IDE VSCode (code):
https://code.visualstudio.com/

2. JDK (java):
https://www.oracle.com/java/technologies/javase-downloads.html

3. Maeven:
https://maven.apache.org

4. Git Bash (Git for Windows - mais leve) 
https://gitforwindows.org/


## Configuração do Projeto

Utilizaremos o maven (mvn) para fazer a instalação do Karate via terminal. A seguinte linha de código cria esse arquivo seguindo os parâmetros necessários:

```
mvn archetype:generate \
-DarchetypeGroupId=com.intuit.karate \
-DarchetypeArtifactId=karate-archetype \
-DarchetypeVersion=1.0.1 \
-DgroupId=s206.trabalho \
-DartifactId=s206_trabalho
```

## Executando os Testes

Para executar os testes, basta rodar a seguinte linha no terminal:

```
mvn test -Dtest=RMRunner
```
O arquivo RM.feature contem todos os testes a serem realizados.

## Relatórios de Teste

Após a execução dos testes, você pode encontrar os relatórios de teste no diretório `\target\karate-reports\testesAPI.RM.html`. Basta abrir este arquivo no navegador para visualizar o resultado dos testes.


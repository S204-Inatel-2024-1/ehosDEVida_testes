describe ('App teste',()=>{

it('Caso de teste: Verificando local host',()=>{
    cy.visit('http://localhost:3000/admin-page')

})

it('Caso de teste: Adicionar Equipe sem informações',()=>{
    cy.visit('http://localhost:3000/admin-page')
    cy.get('.ant-btn').click()
    cy.get('.ant-form-item-control-input-content > .ant-btn').click()
    cy.get('#teamNumber_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o número da equipe (até 3 caracteres)')
    cy.get('#projectName_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o nome do projeto (até 65 caracteres)')
    cy.get('#member1Name_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o nome do integrante 01 (até 50 caracteres)')
    cy.get('#member1Email_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o email do integrante 01 (até 30 caracteres)')
    cy.get('#advisorName_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o nome do orientador (até 50 caracteres)')
    cy.get('#advisorEmail_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o email do orientador (até 30 caracteres)')
    cy.get('#teamStatus_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o status da equipe (até 30 caracteres)')

})


it('Caso de teste: Adicionar Equipe',()=>{
    cy.visit('http://localhost:3000/admin-page')
    cy.get('.ant-btn').click()
    cy.get('#teamNumber').type('1')
    cy.get('#projectName').type('Rolezin')
    cy.get('#member1Name').type('Ana Luiza Taveira')
    cy.get('#member1Email').type('ana.taveira@ges.inatel.br')
    cy.get('#member2Name').type('Rafael Carolino')
    cy.get('#member2Email').type('rafael.rc@ges.inatel.br')
    cy.get('#member3Name').type('Henrique Chagas')
    cy.get('#member3Email').type('henrique.pereira@ges.inatel.br')
    cy.get('#member4Name').type('Pedro Hugo Coura')
    cy.get('#member4Email').type('pedro.hugo@ges.inatel.br')
    cy.get('#advisorName').type('Jonas')
    cy.get('#advisorEmail').type('jonas@inatel.br')
    cy.get('#teamStatus').type('Em Andamento')
    cy.get('#parallels').type('Intercâmbio')
    cy.get('.ant-form-item-control-input-content > .ant-btn').click()
    cy.get('[style="margin-bottom: 8px;"] > :nth-child(1)').should('contain.text','Equipe 1: Rolezin')

})

})
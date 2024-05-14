describe ('App teste',()=>{

it('Caso de teste: Verificando local host',()=>{
    cy.visit('http://localhost:3001')

})

it('Caso de teste: Realizando Login',()=>{
    cy.visit('http://localhost:3001')
    cy.get('#email').type('juri@gmail.com')
    cy.get('#password').type('Fetin@2024')
    cy.get('.ant-btn-primary').click()
    cy.get('.ant-card-head-title').should('contain.text','Cadastro de Equipe')

})

it('Caso de teste: Esqueceu senha',()=>{
    cy.visit('http://localhost:3001')
    cy.get(':nth-child(2) > span').click()
    cy.get('.ant-card-head-title').should('contain.text','Esqueci a Senha')
})


it('Caso de teste: Voltar ao menu',()=>{
    cy.visit('http://localhost:3001')
    cy.get(':nth-child(2) > span').click()
    cy.get('.ant-btn-link > span').click()
    cy.get('.ant-card-head-title').should('contain.text','Login')
})

it('Caso de teste: Redefinição de senha',()=>{
    cy.visit('http://localhost:3001')
    cy.get(':nth-child(2) > span').click()
    cy.get('#email').type('juria@gmail.com')
    cy.get('.ant-btn-primary').click()
    cy.get('.ant-notification-notice-message').should('contain.text','Email enviado com sucesso')    
    
})

it('Caso de teste: Realizando Login Inválido',()=>{
    cy.visit('http://localhost:3001')
    cy.get('#email').type('ana.taveira@gmail.com')
    cy.get('#password').type('Fetin@2024')
    cy.get('.ant-btn-primary').click()
    cy.get('.ant-card-head-title').should('contain.text','Login')
})

})
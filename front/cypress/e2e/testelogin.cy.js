describe ('App teste',()=>{

it('Caso de teste: Verificando local host',()=>{
    cy.visit('http://localhost:3000')

})

it('Caso de teste: Realizando Login',()=>{
    cy.visit('http://localhost:3000')
    cy.get('#username').type('ana.taveiira@ges.inatel.br')
    cy.get('#password').type('154042')
    cy.get('.ant-btn-primary').click()
    
})

it('Caso de teste: Esqueceu senha',()=>{
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(2) > span').click()
    cy.get('.ant-card-head-title').should('contain.text','Esqueci a Senha')
})


it('Caso de teste: Voltar ao menu',()=>{
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(2) > span').click()
    cy.get('.ant-btn-link > span').click()
    cy.get('.ant-card-head-title').should('contain.text','Login')
})

it('Caso de teste: Redefinição de senha',()=>{
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(2) > span').click()
    cy.get('#email').type('ana.taveira@ges.inatel.br')
    cy.get('.ant-btn-primary').click()
    cy.get('.ant-notification-notice-message').should('contain.text','Email enviado com sucesso')    

    
})

})
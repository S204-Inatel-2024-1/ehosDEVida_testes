describe ('App teste',()=>{

it('Caso de teste: Esqueceu senha',()=>{
    cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
    cy.get(':nth-child(2) > span').click()
    cy.get('.ant-card-head-title').should('contain.text','Esqueci a Senha')
    cy.get('#email').type('ana.taveira@ges.inatel.br')
    cy.get('.ant-btn-primary').click()
    cy.get('.ant-notification-notice-message').should('contain.text','Email enviado com sucesso')

})


it('Caso de teste: Voltar ao menu',()=>{
    cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
    cy.get(':nth-child(2) > span').click()
    cy.get('.ant-btn-link > span').click()
    cy.get('.ant-card-head-title').should('contain.text','Login')
})


it('Caso de teste: Realizando Login Inválido',()=>{
    cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
    cy.get('#email').type('ana.taveira@gmail.com')
    cy.get('#password').type('Fetin@2024')
    cy.get('.ant-btn-primary').click()
    cy.get('.ant-card-head-title').should('contain.text','Login')
})


it('Caso de teste: Realizando Login Válido como admin',()=>{
    cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
    cy.get('#email').type('admin@inatel.com')
    cy.get('#password').type('Fetin@2024')
    cy.get('.ant-btn-primary').click()
    for (let i = 0; i < 15; i++) {
        cy.get('.ant-btn-primary').click()
    }
    cy.wait(5000)
    cy.get('.ant-card-head-title').should('contain.text','Cadastro de Equipe')
})

it('Caso de teste: Realizando Login Válido como advisor',()=>{
    cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
    cy.get('#email').type('f@inatel.com')
    cy.get('#password').type('Fetin@2024')
    cy.get('.ant-btn-primary').click()
    for (let i = 0; i < 15; i++) {
        cy.get('.ant-btn-primary').click()
    }
    cy.wait(5000)
    cy.get('.ant-card-head-title').should('contain.text','Informações do Orientador')

})

})
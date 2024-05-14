describe ('App teste',()=>{

    it('Caso de teste: Verificando local host',()=>{
        cy.visit('http://localhost:3001')
    
    })


    it('Caso de teste: Menu Equipe',()=>{
        cy.visit('http://localhost:3001')
        cy.get('#email').type('amanda@gmail.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()  

        cy.get(':nth-child(1) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title').should('contain.text','Menu Equipe')
        cy.get('[style="margin-bottom: 5px;"] > span').should('contain.text','Projeto:')
        cy.get('.ant-list-item > :nth-child(2)').should('contain.text','Membros:')
        cy.get('[style="margin-top: 5px;"] > span').should('contain.text','Orientador:')
        cy.get(':nth-child(4) > span').should('contain.text','Status:')
        cy.get(':nth-child(5) > span').should('contain.text','Atividades Extras:')


        cy.get(':nth-child(2) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title').should('contain.text', 'Fase Atual da FETIN')
        cy.get(':nth-child(1) > strong').should('contain.text', 'Fase Atual:')
        cy.get(':nth-child(2) > strong').should('contain.text', 'Prazo:')
        cy.get(':nth-child(3) > strong').should('contain.text', 'Entregas:')
    })
    
})
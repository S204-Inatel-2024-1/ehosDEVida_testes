describe ('App teste',()=>{

    it('Caso de teste: Verificando local host',()=>{
        cy.visit('http://localhost:3000/menu')
    
    })


    it('Caso de teste: Menu Equipe',()=>{
        cy.visit('http://localhost:3000/menu')
        cy.get(':nth-child(1) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title').should('contain.text','Menu Equipe')
        cy.get(':nth-child(1) > span').should('contain.text','Número:')
        cy.get(':nth-child(2) > span').should('contain.text','Título:')
        cy.get(':nth-child(3) > [style="font-weight: bold;"]').should('contain.text','Membros da Equipe:')
        cy.get(':nth-child(4) > span').should('contain.text','Orientador:')
        cy.get(':nth-child(5) > span').should('contain.text','Status:')

    })
    
    it('Caso de teste: Menu Equipe',()=>{
        cy.visit('http://localhost:3000/menu')
        cy.get(':nth-child(2) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title').should('contain.text','Fase Atual da FETIN')
        cy.get(':nth-child(1) > strong').should('contain.text','Fase Atual:')
        cy.get(':nth-child(2) > strong').should('contain.text','Prazo:')
        cy.get(':nth-child(3) > strong').should('contain.text','Entregas:')
    })



})
describe ('App teste',()=>{

    it('Caso de teste: Acessando Manual',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('felipe@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[href="URL_DO_MANUAL"]').click()
        cy.url().should('include', '/URL_DO_MANUAL')
    })    

    it('Caso de teste: Acessando Formulários',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('felipe@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[href="URL_DO_FORMULARIO"]').click()
        cy.url().should('include', '/URL_DO_FORMULARIO')


    })    

    it('Caso de teste: Verificando Detalhes da Fase',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('felipe@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-bottom: 20px; text-align: center;"]').click()
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > :nth-child(1) > strong').should('contain.text','Fase:')
        cy.get('.ant-modal-body > :nth-child(1) > .ant-card > .ant-card-body > :nth-child(2) > strong').should('contain.text','Prazo:')
        cy.get('.ant-modal-body > :nth-child(1) > .ant-card > .ant-card-body > :nth-child(3) > strong').should('contain.text', 'Entregas')
        cy.get('.ant-modal-body > :nth-child(1) > .ant-card > .ant-card-body > :nth-child(4) > strong').should('contain.text', 'Nota:')
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
    
    })    

    /*
    it('Caso de teste: Editando Fase',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('felipe@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-right: 10px;"]').click()
        cy.get('.ant-modal-body > :nth-child(1)').should('contain.text','Nova Fase:')
        cy.get('[placeholder="Ex: Estudo de caso"]').type('Testes Unitários')
        cy.get('.ant-modal-body > :nth-child(3)').should('contain.text','Novo Prazo:')
        cy.get('[placeholder="Ex: 20/10/2025"]').type('26/05/2023')
        cy.get('.ant-modal-body > :nth-child(5)').should('contain.text','Novas Entregas:') 
        cy.get('[placeholder="Ex: entrega1,entrega2,entrega3,etc..."]').type('Entrega 1')  
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-bottom: 20px; text-align: center;"]').click()
        cy.get(':nth-child(4) >.ant-modal-root >.ant-modal-wrap >.ant-modal > [tabindex="-1"] >.ant-modal-content').should('include','Fase:Testes Unitários')
    })
    */


    it('Caso de teste: Editando Fase',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('felipe@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-row > :nth-child(4) > .ant-card > .ant-card-body > :nth-child(4)').click()
        cy.get('.ant-modal-body > strong').should('contain.text', 'Nota:')
        cy.get('.ant-input-number-input').type('10')
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get(':nth-child(4) > .ant-card > .ant-card-body > [style="margin-bottom: 50px;"] > :nth-child(4)').should('contain.text','Nota: 10')

    })

})


describe ('App teste',()=>{

    it('Caso de teste: Adicionando Equipe',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('admin@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[style="margin: 15px;"]').click()
        cy.get('#teamNumber').type('10')
        cy.get('#projectName').type('Smart House')
        cy.get('#member1Name').type('Ana Luiza')
        cy.get('#member1Email').type('a@inatel.com')
        cy.get(':nth-child(5) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #member2Name').type('Mateus Rodrigues')
        cy.get('#member2Email').type('a@inatel.com')
        cy.get('#member3Email').type('a@inatel.com')
        cy.get('#member4Name').type('Jessica Jones')
        cy.get('#member4Email').type('a@inatel.com')    
        cy.get('#advisorName').type('Jurandir')
        cy.get('#advisorEmail').type("admin@inatel.com")
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() 
        cy.get('.ant-card-body > :nth-child(2) > :nth-child(1)').should('contain.text','Equipe 10: Smart House')


    })    

    it('Caso de teste: Adicionando Equipe com informações faltando',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')    
        cy.get('#email').type('admin@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[style="margin: 15px;"]').click()
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.get('#teamNumber_help > .ant-form-item-explain-error').should('contain.text','Por favor, insira o número da equipe (até 3 caracteres)')
    })

    it('Caso de teste: Editanto Equipe',()=>{
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')    
        cy.get('#email').type('admin@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-btn-primary').click()
        cy.get(':nth-child(1) > .ant-space > :nth-child(1) > .ant-btn').click()
        cy.get('#teamNumber').type('245')
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1)').should('contain.text','Equipe 245: HPF')
    })


})
describe ('App teste',()=>{

    it('Caso de teste: Verificando Informações de Menu', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('a@inatel.com')
        cy.get('#password').type('Fetin@2024')
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }
        // Esperar um tempo suficiente para a página carregar completamente
        cy.wait(10000) // Espera de 10 segundos
    
        cy.get(':nth-child(3) > :nth-child(2)').should('contain.text','a@inatel.com')
    });
    

})
    

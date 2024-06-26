describe('App teste', () => {

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function generateRandomDate() {
        const start = new Date();
        const end = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    it('Caso de teste: Acessando Manual', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('f@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }
        
        cy.wait(5000)
        cy.get('[href="URL_DO_MANUAL"]').click()
        cy.url().should('include', '/URL_DO_MANUAL')
    })

    it('Caso de teste: Acessando Formulários', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('f@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()
        
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }
        
        cy.wait(5000)
        cy.get('[href="URL_DO_FORMULARIO"]').click()
        cy.url().should('include', '/URL_DO_FORMULARIO')
    })

    it('Caso de teste: Editando Fase', () => {
        const novaFase = generateRandomString(10);
        const novoPrazo = generateRandomDate();
        const novasEntregas = `Entrega ${Math.floor(Math.random() * 100)}`;

        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('f@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()

        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        cy.wait(10000)

        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-right: 10px;"]').click()
        cy.get('.ant-modal-body > :nth-child(1)').should('contain.text', 'Nova Fase:')
        cy.get('[placeholder="Ex: Estudo de caso"]').type(novaFase)
        cy.get('.ant-modal-body > :nth-child(3)').should('contain.text', 'Novo Prazo:')
        cy.get('[placeholder="Ex: 20/10/2025"]').type(novoPrazo)
        cy.get('.ant-modal-body > :nth-child(5)').should('contain.text', 'Novas Entregas:')
        cy.get('[placeholder="Ex: entrega1,entrega2,entrega3,etc..."]').type(novasEntregas)
        cy.get('.ant-modal-footer > .ant-btn-primary').click()

        cy.wait(10000)

        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-bottom: 50px;"] > :nth-child(1)').should('contain.text', `Fase Atual: ${novaFase}`);
        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-bottom: 50px;"] > :nth-child(2)').should('contain.text', `Prazo: ${novoPrazo}`);
        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-bottom: 50px;"] > :nth-child(3)').should('contain.text', `Entregas: ${novasEntregas}`);

        // Armazenar os valores no Cypress.env
        Cypress.env('novaFase', novaFase);
        Cypress.env('novoPrazo', novoPrazo);
        Cypress.env('novasEntregas', novasEntregas);

    })

    it('Caso de teste: Verificando Fase do Estudante', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('a@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()

        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        // Esperar um tempo suficiente para a página carregar completamente
        cy.wait(10000) // Espera de 10 segundos

        const novaFase = Cypress.env('novaFase');
        const novoPrazo = Cypress.env('novoPrazo');
        const novasEntregas = Cypress.env('novasEntregas');

        // Verificar se as informações estão corretas na página do estudante
        cy.get('.ant-card-body > div > :nth-child(1)').should('contain.text', `Fase Atual: ${novaFase}`);
        cy.get('.ant-card-body > div > :nth-child(2)').should('contain.text', `Prazo: ${novoPrazo}`);
        cy.get('ul > p').should('contain.text', `${novasEntregas}`);
    })

    function getRandomGrade(min, max) {
        return (Math.random() * (max - min) + min).toFixed(1);
    }

    it('Caso de teste: Editando Nota', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('f@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()

        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        cy.wait(5000)

        const randomGrade = getRandomGrade(0, 10);

        cy.get(':nth-child(2) > .ant-card > .ant-card-body > :nth-child(4)').should('be.visible').click()
        cy.get('.ant-input-number-input').clear().type(randomGrade)
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get(':nth-child(2) > .ant-card > .ant-card-body > [style="margin-bottom: 50px;"] > :nth-child(4)').should('contain.text', `Nota: ${randomGrade}`);
    
    
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('a@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()

        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        cy.wait(5000)
        cy.get('div > :nth-child(5)').should('contain.text', `Nota: ${randomGrade}`)
    
    })
})

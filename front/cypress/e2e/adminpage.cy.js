describe('App teste', () => {
    let teamNumber;
    let projectName;

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function generateRandomEmail() {
        const domain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
        const randomDomain = domain[Math.floor(Math.random() * domain.length)];
        const username = generateRandomString(8);
        return `${username}@${randomDomain}`;
    }

    it('Caso de teste: Adicionando Equipe com Informações Aleatórias', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('admin@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()

        // Realiza múltiplos cliques no botão para entrar
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        cy.wait(5000)

        cy.get('[style="margin: 15px;"]').click()

        teamNumber = Math.floor(Math.random() * 1000); // Número aleatório para o número da equipe
        projectName = generateRandomString(10); // Nome aleatório para o nome do projeto
        const advisorName = 'Felipe'; // Nome do orientador fixo
        const advisorEmail = 'f@inatel.com'; // Email do orientador fixo

        // Preenche os campos com informações aleatórias
        cy.get('#teamNumber').type(teamNumber)
        cy.get('#projectName').type(projectName)
        cy.get('#member1Name').type(generateRandomString(8)) // Nome aleatório para o membro 1
        cy.get('#member1Email').type(generateRandomEmail()) // Email aleatório para o membro 1
        cy.get(':nth-child(5) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #member2Name').type(generateRandomString(10)) // Nome aleatório para o membro 2
        cy.get('#member2Email').type(generateRandomEmail()) // Email aleatório para o membro 2
        cy.get('#member3Name').type(generateRandomString(8)) // Nome aleatório para o membro 3
        cy.get('#member3Email').type(generateRandomEmail()) // Email aleatório para o membro 3
        cy.get('#member4Name').type(generateRandomString(10)) // Nome aleatório para o membro 4
        cy.get('#member4Email').type(generateRandomEmail()) // Email aleatório para o membro 4
        cy.get('#advisorName').type(advisorName)
        cy.get('#advisorEmail').type(advisorEmail)

        // Submete o formulário
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()

        cy.wait(5000)

        // Verifica se as informações da equipe adicionada estão corretas
        cy.get('.ant-card-body').contains(`Equipe ${teamNumber}: ${projectName}`).should('exist');
    });


    it('Caso de teste: Adicionando Equipe com informações faltando', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('admin@inatel.com')
        cy.get('#password').type('Fetin@2024')
        // Realiza múltiplos cliques no botão para entrar
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        cy.wait(5000)

        cy.get('[style="margin: 15px;"]').click()
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.get('#teamNumber_help > .ant-form-item-explain-error').should('contain.text', 'Por favor, insira o número da equipe (até 3 caracteres)')
    })

    it('Caso de teste: Editando Equipe com Informações Aleatórias', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/')
        cy.get('#email').type('admin@inatel.com')
        cy.get('#password').type('Fetin@2024')
        cy.get('.ant-btn-primary').click()

        // Realiza múltiplos cliques no botão para entrar
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click()
        }

        cy.wait(5000)

        // Abre a primeira equipe para edição
        cy.get(':nth-child(1) > .ant-space > :nth-child(1) > .ant-btn').click();

        // Gera informações aleatórias para edição
        const newTeamNumber = Math.floor(Math.random() * 1000); // Novo número aleatório para a equipe
        const newProjectName = generateRandomString(8); // Novo nome aleatório para o projeto

        // Preenche os campos com as novas informações
        cy.get('#teamNumber').clear().type(newTeamNumber.toString())
        cy.get('#projectName').clear().type(newProjectName)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()

        // Verifica se as informações da equipe editada estão corretas
        cy.get('.ant-card-body').contains(`Equipe ${newTeamNumber}: ${newProjectName}`).should('exist');

    });

    it('Caso de teste: Excluir Equipe Criada Anteriormente', () => {
        cy.visit('https://ehos-dev-ida-frontend.vercel.app/');
        cy.get('#email').type('admin@inatel.com');
        cy.get('#password').type('Fetin@2024');
        cy.get('.ant-btn-primary').click();
    
        // Realiza múltiplos cliques no botão para entrar
        for (let i = 0; i < 15; i++) {
            cy.get('.ant-btn-primary').click();
        }
    
        // Aguarda um breve momento para garantir que a equipe seja criada antes de continuar
        cy.wait(5000);
    
         // Encontra a equipe recém-criada e a exclui
         cy.contains('.ant-card-body', `Equipe ${teamNumber}: ${projectName}`).parent().find(':nth-child(2) > .ant-btn').each(($el) => {
            cy.wrap($el).click();
            });
            
            cy.wait(2000);
            
            // Verifica se a equipe foi removida da lista
            cy.get('.ant-card-body').should('not.contain', `Equipe ${teamNumber}: ${projectName}`);
        });
    
    
});

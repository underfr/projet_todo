describe('Ajout avec un champ obligatoire vide', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')

        cy.get('input[placeholder="email"]').type('lucas.martin@example.com')
        cy.get('input[placeholder="mot de passe"]').type('L#casM2026!x')

        cy.get('input[type="submit"]').click()
    })

    it('Ajout avec un champ obligatoire vide', () => {
        cy.visit('http://localhost:8080/task/new')
        cy.fixture('task-invalid.json').then((tasks) => {

            tasks.invalidTask.forEach((task) => {
                cy.get('textarea[name="description"]').type(task.description)
                cy.get('input[name="finish_on"]').type(task.date_echeance)
                cy.get('select[name="repeat"]').select(task.repetition)
                cy.get('select[name="categories[]"]').select(task.categorie)
                cy.get('input[type="submit"][name="submit"]').click()

                cy.get('p')
                    .should('be.visible')
                    .and('contain.text', 'a été ajouté en BDD')
            })

        })
    })
})
describe('Ajout d\'une tache valide avec une catégorie', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')

        cy.get('input[placeholder="email"]').type('lucas.martin@example.com')
        cy.get('input[placeholder="mot de passe"]').type('L#casM2026!x')

        cy.get('input[type="submit"]').click()
    })

    it('Ajout d\'une tache valide avec une catégorie', () => {
        cy.visit('http://localhost:8080/task/new')
        cy.fixture('task-valid.json').then((tasks) => {

            tasks.validTask.forEach((task) => {
                cy.get('input[name="title"]').type(task.titre)
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
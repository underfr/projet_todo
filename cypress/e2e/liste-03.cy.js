describe('Taches d\'un autre compte ne s\'affichent pas', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')

        cy.get('input[placeholder="email"]').type('jean.dupont@example.com')
        cy.get('input[placeholder="mot de passe"]').type('Secret123!')

        cy.get('input[type="submit"]').click()
    })

    it('Verifie que les autres tache sne s\'affichent pas', () => {
        cy.visit('http://localhost:8080/task/activeall')

        const otherUserTaskTitle = 'Tri des emails';

        cy.get('article h3').should('not.contain.text', otherUserTaskTitle)
        cy.contains('article', otherUserTaskTitle).should('not.exist')
    })
})
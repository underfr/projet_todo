describe('Inscription avec un champ obligatoire vide', () => {
    it('Inscrit plusieurs nouveaux utilisateurs avec un champ vide et affiche le message d\'erreur', () => {
        cy.visit('http://localhost:8080/register')
        cy.fixture('user-invalid.json').then((users) => {

            users.invalidUser.forEach((user) => {
                cy.get('input[placeholder="Nom"]').type(user.nom)
                cy.get('input[placeholder="email"]').type(user.adresse_email)
                cy.get('input[placeholder="mot de passe"]').type(user.mot_de_passe)
                cy.get('input[placeholder="confirmer le mot de passe"]').type(user.confirmation_mot_de_passe)

                cy.get('input[type="submit"]').click()
                cy.get('p')
                    .should('be.visible')
                    .and('contain.text', 'Veuillez remplir tous les champs du formulaire')
            })

        })
    })
})
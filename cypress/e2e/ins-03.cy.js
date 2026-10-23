describe('Inscription avec deux mots de passe différent', () => {
    it('Inscrit plusieurs nouveaux utilisateurs avec mot de passe différents et affiche le message d\'erreur', () => {
        cy.visit('http://localhost:8080/register')
        cy.fixture('user-mismatch-password.json').then((users) => {

            users.invalidUsers.forEach((user) => {
                cy.get('input[placeholder="Prénom"]').type(user.prenom)
                cy.get('input[placeholder="Nom"]').type(user.nom)
                cy.get('input[placeholder="email"]').type(user.adresse_email)
                cy.get('input[placeholder="mot de passe"]').type(user.mot_de_passe)
                cy.get('input[placeholder="confirmer le mot de passe"]').type(user.confirmation_mot_de_passe)

                cy.get('input[type="submit"]').click()
                cy.get('p')
                    .should('be.visible')
                    .and('contain.text', 'Les 2 mots de passe ne sont pas identiques')
            })

        })
    })
})
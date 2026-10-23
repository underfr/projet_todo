describe('Inscription avec des données valides', () => {
  it('Inscrit plusieurs nouveaux utilisateurs et affiche le message de confirmation', () => {
    cy.fixture('user-valid.json').then((users) => {

      users.validUsers.forEach((user) => {
        cy.visit('http://localhost:8080/register')

        cy.get('input[placeholder="Prénom"]').type(user.prenom)
        cy.get('input[placeholder="Nom"]').type(user.nom)
        cy.get('input[placeholder="email"]').type(user.adresse_email)
        cy.get('input[placeholder="mot de passe"]').type(user.mot_de_passe)
        cy.get('input[placeholder="confirmer le mot de passe"]').type(user.confirmation_mot_de_passe)

        cy.get('input[type="submit"]').click()
        cy.get('p')
            .should('be.visible')
            .and('contain.text', 'a été ajouté en BDD')
      })

    })
  })
})
/// <reference types="Cypress" />

context('oidc', () => {
  it('works', () => {
    cy.visit('http://localhost:15000');

    cy.get('#session-status')
      .contains('success');
  });
});

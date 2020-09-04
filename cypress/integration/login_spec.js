describe('Login page', () => {
  it('should turn to register page', () => {
    cy.visit('/login');
    cy.contains('Register').click();
    cy.url().should('include', '/register');
  });

  it('should show error message when required message is empty', () => {
    cy.visit('/login');

    cy.get('button:contains("Login")').click();

    cy.contains('Username is required');
    cy.contains('Password is required');
  });
});

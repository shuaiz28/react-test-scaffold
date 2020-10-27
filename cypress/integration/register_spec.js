describe('Register page', () => {
  it('should turn to login page', () => {
    cy.visit('/register');
    cy.contains('Cancel').click();
    cy.url().should('include', '/login');
  });

  it('should show error message when required message is empty', () => {
    cy.visit('/register');

    cy.get('button:contains("Register")').click();

    cy.contains('First Name is required');
    cy.contains('Last Name is required');
    cy.contains('Username is required');
    cy.contains('Password is required');
  });

  it('should show error message when partial required message is empty', () => {
    cy.visit('/register');
    cy.get('input[name=firstName]').type('name');

    cy.get('button:contains("Register")').click();

    cy.contains('Last Name is required');
    cy.contains('Username is required');
    cy.contains('Password is required');
  });

  // it('should show register successfully', () => {
  //   cy.visit('/register');
  //   cy.get('input[name=firstName]').type('firstName');
  //   cy.get('input[name=lastName]').type('lastName');
  //   cy.get('input[name=username]').type('username');
  //   cy.get('input[name=password]').type('password');
  //
  //   cy.get('button:contains("Register")').click();
  //
  //   cy.url().should('include', '/login');
  //   cy.contains('Registration successful')
  // });
});

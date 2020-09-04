describe('Index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render App', () => {
    cy.screenshot('index');
  });
  it('should contain Hello World', () => {
    cy.contains('Login');
    cy.contains('Username');
    cy.contains('Password');
    cy.contains('Register');
  });
});

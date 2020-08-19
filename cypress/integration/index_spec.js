describe('Index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render App', () => {
    cy.screenshot('index');
  });
  it('should contain Hello World', () => {
    cy.contains('Hello World');
  });
});

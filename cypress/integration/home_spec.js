describe('homePage', () => {
  beforeEach(() => {
    window.localStorage.setItem('users',
      '[{"firstName":"a","lastName":"a","username":"aa","password":"123456","id":1},{"firstName":"b","lastName":"b","username":"bb","password":"123456","id":2}]')
    window.localStorage.setItem('user', '{"id":1,"username":"a","firstName":"a","lastName":"a","token":"fake-jwt-token"}');
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should remove user successfully', () => {
    cy.visit('/');
    cy.get('#bb').click();

    cy.contains('b b').should('not.exist');
  });

  it('should logout successfully', () => {
    cy.visit('/');

    cy.contains('Logout');

    cy.contains('Logout').click();

    cy.url().should('include', '/login');
  });
});

describe('Login page', () => {
  beforeEach(() => {
    window.localStorage.setItem('users', '[{"firstName":"a","lastName":"a","username":"aa","password":"123456","id":1}]')
  });

  afterEach(() => {
    window.localStorage.clear();
  });

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

  it('should login successfully', () => {
    cy.visit('/login');

    cy.get('input[name=username]').type('aa');
    cy.get('input[name=password]').type('123456');


    cy.get('button:contains("Login")').click();

    cy.contains('Hi a!');
  });
});


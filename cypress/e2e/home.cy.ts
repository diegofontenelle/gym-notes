beforeEach(() => {
  cy.visit('localhost:3000');
})

describe('Home page spec', () => {
  it('has description', () => {
    cy.contains('access your gym trains and notes anywhere, no app, no internet required *', {matchCase: false})   
  });

  it('has primary CTA', () => {
    cy.get('#cta-primary');
  });

  it('has secondary CTA', () => {
    cy.get('#cta-secondary');
  });

  it('navigates on primary CTA click', () => {
    cy.get('#cta-primary').click().url().should("contain", "create/session");
  });

  it('navigates on secondary CTA click', () => {
    cy.get('#cta-secondary').click().url().should("contain", "templates");
  });
})
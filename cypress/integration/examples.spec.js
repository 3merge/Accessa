context('Example pages (via', () => {
  it('Services', () => {
    cy.visit(
      '/iframe.html?id=accessa-service-pages--example-one',
    );

    cy.injectAxe();
    cy.checkA11y('#root');
  });
});

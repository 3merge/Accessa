context('Actions', () => {
  it('.type() - type into a DOM element', () => {
    cy.visit('/iframe.html?id=headers--ait');
    cy.injectAxe();

    cy.get('header').find('img').should('be.visible');
    cy.checkA11y('header');
  });
});

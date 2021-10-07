describe('spark: Spark component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pds-ps-button--configurable'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Label');
  });
});

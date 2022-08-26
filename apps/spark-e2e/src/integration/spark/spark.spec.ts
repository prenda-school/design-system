describe('spark: Spark component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ps-button--default'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Label');
  });
});

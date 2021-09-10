describe('spark: Spark component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=prenda-spark-dropdown'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Label');
  });
});

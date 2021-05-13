describe('spark: Spark component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=spark--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to spark!');
    });
});

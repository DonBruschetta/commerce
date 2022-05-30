describe('Home Page', () => {
  it('displays all 3 products on the home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Code Tshirt')
        cy.get('[data-test="product-price"]').should('contain', '€25.00 EUR')
      })

    cy.get('[data-test="product-tag"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          'contain',
          'Star wars Stack overflow'
        )
        cy.get('[data-test="product-price"]').should('contain', '€25.00 EUR')
      })

    cy.get('[data-test="product-tag"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'su do su')
        cy.get('[data-test="product-price"]').should('contain', '€25.00 EUR')
      })
  })
})

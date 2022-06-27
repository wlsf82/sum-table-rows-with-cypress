describe('Table', () => {
  it('finds an element based on a sub-group of elements', () => {
    cy.visit('./index.html')

    cy.get('tbody tr:contains(5)')
      .find('td:contains(Cappuccino)')
  })
})

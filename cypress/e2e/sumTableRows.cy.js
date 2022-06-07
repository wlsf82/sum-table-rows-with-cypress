describe('Sums table rows', () => {
  beforeEach(() => {
    cy.task('resetTotalPrice')
  })

  it('successfully', () => {
    cy.visit('./index.html')

    cy.get('[data-row="price"]').each((el, index) => {
      let price = el[0].innerText
      price = price.replace('R$', '').replace(',', '.')
      price = Number(price)
      cy.get('[data-row="quantity"]')
        .eq(index)
        .then(quantity => {
          let qty = quantity[0].innerText
          qty = Number(qty)
          cy.task('saveTotalPrice', [price, qty])
        })
    })
    cy.get('#total-price').then(totalPrice => {
      totalPrice = totalPrice[0].innerText
      totalPrice = totalPrice.replace('R$', '').replace(',', '.')
      totalPrice = Number(totalPrice)
      cy.task('getTotalPrice').then(sum => {
        expect(totalPrice).to.eq(sum)
      })
    })
  })
})

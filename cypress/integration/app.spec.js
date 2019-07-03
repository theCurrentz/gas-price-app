/* eslint-disable no-undef */
describe('App loads and displays nearest gas stations', () => {
  it ('Should load nearest gas stations when user clicks button', () => {
    // eslint-disable-next-line require-jsdoc
    cy.visit ('/', { onBeforeLoad(win) {
      // mock browsers geolocation api
      cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
          return cb({ coords: { latitude: 33.163608, longitude: -117.336287 } });
        })
      }});
    cy.focused()
    .click()
    .get('#root')
    .get('li img', { timeout: 25000 })
      .should('have.attr', 'src')
      .then(src => { expect(src).to.have.length.above(5) })
  });

})

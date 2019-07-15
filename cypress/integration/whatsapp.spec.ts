describe('WhatsApp', () => {
  it('login to whatsapp', () => {
    cy.visit('https://web.whatsapp.com/')
  })

  it('send message to contact', () => {
    cy.get('#side > div._3CPl4 > div > label > input').type('Monisha G')
    cy.wait(2000)

    cy.get('#pane-side > div > div > div > div:nth-child(1)').click()

    for (let i = 1; i <= 1000; i += 1) {
      cy.get(
        '#main > footer > div._3oju3 > div._2bXVy > div > div._2S1VP.copyable-text.selectable-text',
      ).type('Hey Moni, wt r u doing?')
      cy.get('#main > footer > div._3oju3 > button').click()
    }
  })
})

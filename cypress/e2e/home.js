describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it("displays footer", () => {
    cy.contains("Przystań Zielona Zatoka 11-500 Bogaczewo")
  })
})

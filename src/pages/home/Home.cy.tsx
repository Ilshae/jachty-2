import Home from "./Home.tsx"

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(<Home />)

    cy.contains("Czartery na mazurach")
    cy.contains("Komfortowe i szybkie jachty, życzliwa obsługa, fachowy serwis")
  })
})

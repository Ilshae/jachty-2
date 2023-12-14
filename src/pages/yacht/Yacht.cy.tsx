import Yacht from "./Yacht.tsx"

describe("<Yacht />", () => {
  it("renders yacht information", () => {
    const url = "twister-800n-harpia"
    const route = `/${url}`
    const path = "/:url"
    cy.routeWrappedMount(<Yacht />, route, path)

    cy.contains("Twister 800N Harpia")

    cy.contains("Dane techniczne")
    cy.contains("Rok produkcji")
    cy.contains("2019")

    cy.contains("Wyposażenie")
    cy.contains("lodówka")

    cy.contains("Galeria")
    cy.get('[alt="twister-800n-harpia/harpia1.jpg"]').should("have.length", 1)

    cy.contains("O czarterze")
    cy.contains("Dokumenty do pobrania")
  })
})

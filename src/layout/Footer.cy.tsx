import Footer from "./Footer"

describe("<Footer />", () => {
  it("renders", () => {
    cy.mount(<Footer />)

    cy.contains("Przystań Zielona Zatoka 11-500 Bogaczewo").should(
      "have.attr",
      "href",
      "https://www.google.com/maps/place/Jachty+Pruszy%C5%84ski/@53.9934756,21.7706802,12.75z/data=!4m5!3m4!1s0x0:0x846d550c071fa0d3!8m2!3d53.9727933!4d21.7622198"
    )
    cy.contains("info@jachtypruszynski.pl").should(
      "have.attr",
      "href",
      "mailto:info@jachtypruszynski.pl"
    )
    cy.contains("(+48) 578 361 175").should(
      "have.attr",
      "href",
      "tel:578361175"
    )
    cy.contains("fb.com/jachtypruszynski").should(
      "have.attr",
      "href",
      "https://www.fb.com/jachtypruszynski"
    )
    cy.contains("Jachty Pruszyński").should("have.attr", "href", "/")
    cy.contains("Ingrid Pruszyńska 2020").should(
      "have.attr",
      "href",
      "https://ilshae.github.io/"
    )
    cy.get('[alt="logo"]').should("be.visible")
  })
})

import Contact from "./Contact.tsx"

describe("<Contact />", () => {
  it("renders correctly", () => {
    cy.viewport(1000, 750)
    cy.mount(<Contact />)

    cy.contains("Możesz do nas napisać lub zadzwonić")
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

    cy.contains("Jesteśmy na Facebooku i Messengerze")
    cy.contains("fb.com/jachtypruszynski").should(
      "have.attr",
      "href",
      "https://www.fb.com/jachtypruszynski"
    )

    cy.contains("Gdzie ta keja, a przy nie jacht?")
    cy.contains("Przystań Zielona Zatoka 11-500 Bogaczewo").should(
      "have.attr",
      "href",
      "https://www.google.com/maps/place/Jachty+Pruszy%C5%84ski/@53.9934756,21.7706802,12.75z/data=!4m5!3m4!1s0x0:0x846d550c071fa0d3!8m2!3d53.9727933!4d21.7622198"
    )

    cy.get("iframe").should("be.visible")
  })
})

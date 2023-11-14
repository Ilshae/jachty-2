import Navbar from "./Navbar.tsx"

describe("<Navbar />", () => {
  it("renders correctly for desktop", () => {
    cy.viewport(1000, 750)
    cy.mount(<Navbar />)

    cy.contains("Jachty Pruszyński").should("have.attr", "href", "/")
    cy.contains("Cennik").should("have.attr", "href", "/cennik")
    cy.contains("Kontakt").should("have.attr", "href", "/kontakt")

    cy.contains("Jachty Żaglowe").trigger("hover")

    cy.contains("Jachty do 8 m")
    cy.contains("Twister 800N Harpia")
    cy.contains("Antila 24.4 Borneo")
    cy.contains("Aquatic 25T Morrigan")
    cy.contains("Phobos 25 Saskia")
    cy.contains("Twister 800N Strzyga")

    cy.contains("Jachty od 8 m")
    cy.contains("Antila 26CC Driada")
    cy.contains("Antila 26CC Solaris")
    cy.contains("Antila 27 Biały Wilk")
    cy.contains("Antila 27 Skellige")
    cy.contains("Antila 27 Aldonika")
    cy.contains("Antila 33.3 Przygoda")
    cy.contains("Antila 28.2 Galapagos")

    cy.contains("Rocznik 2022-2024")

    cy.contains("Jachty Pruszyński").trigger("hover")
    cy.contains("Jachty do 8 m").not()
  })

  it("renders correctly for mobile", () => {
    cy.viewport(400, 750)
    cy.mount(<Navbar />)

    cy.contains("Jachty Pruszyński").should("have.attr", "href", "/")

    cy.get('[data-cy="open-menu"]').click()
    cy.contains("Cennik").should("have.attr", "href", "/cennik")
    cy.contains("Kontakt").should("have.attr", "href", "/kontakt")

    cy.get('[data-cy="open-yacht-menu"]').click()

    cy.contains("Jachty do 8 m")
    cy.contains("Twister 800N Harpia")
    cy.contains("Antila 24.4 Borneo")
    cy.contains("Aquatic 25T Morrigan")
    cy.contains("Phobos 25 Saskia")
    cy.contains("Twister 800N Strzyga")

    cy.contains("Jachty od 8 m")
    cy.contains("Antila 26CC Driada")
    cy.contains("Antila 26CC Solaris")
    cy.contains("Antila 27 Biały Wilk")
    cy.contains("Antila 27 Skellige")
    cy.contains("Antila 27 Aldonika")
    cy.contains("Antila 33.3 Przygoda")
    cy.contains("Antila 28.2 Galapagos")

    cy.contains("Rocznik 2022-2024")

    cy.get('[data-cy="open-yacht-menu"]').click()
    cy.contains("Jachty od 8 m").not()

    cy.get('[data-cy="close-menu"]').click()
    cy.contains("Cennik").not()
  })
})

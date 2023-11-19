import Home from "./Home.tsx"

describe("<Home />", () => {
  it("renders hero", () => {
    cy.mount(<Home />)

    cy.contains("Czartery na mazurach")
    cy.contains("Komfortowe i szybkie jachty, życzliwa obsługa, fachowy serwis")
  })

  it("renders yacht list", () => {
    cy.mount(<Home />)

    cy.contains("Twister 800N Harpia")
    cy.contains("Antila 24.4 Borneo")
    cy.contains("Aquatic 25T Morrigan")
    cy.contains("Phobos 25 Saskia")
    cy.contains("Twister 800N Strzyga")
    cy.contains("Antila 26CC Driada")
    cy.contains("Antila 26CC Solaris")
    cy.contains("Antila 27 Biały Wilk")
    cy.contains("Antila 27 Skellige")
    cy.contains("Antila 27 Aldonika")
    cy.contains("Antila 33.3 Przygoda")
    cy.contains("Antila 28.2 Galapagos")

    cy.get('[alt="Twister 800N Harpia"]').should("have.length", 2)
    cy.get('[alt="Antila 24.4 Borneo"]').should("have.length", 2)
    cy.get('[alt="Aquatic 25T Morrigan"]').should("have.length", 2)
    cy.get('[alt="Phobos 25 Saskia"]').should("have.length", 2)
    cy.get('[alt="Antila 26CC Driada"]').should("have.length", 2)
    cy.get('[alt="Antila 26CC Solaris"]').should("have.length", 2)
    cy.get('[alt="Antila 27 Biały Wilk"]').should("have.length", 2)
    cy.get('[alt="Antila 27 Skellige"]').should("have.length", 2)
    cy.get('[alt="Antila 27 Aldonika"]').should("have.length", 2)
    cy.get('[alt="Antila 33.3 Przygoda"]').should("have.length", 2)
    cy.get('[alt="Antila 28.2 Galapagos"]').should("have.length", 2)
    cy.get('[alt="Twister 800N Strzyga"]').should("have.length", 1)
  })
})

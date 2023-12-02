import PriceList from "./PriceList.tsx"

describe("<PriceList />", () => {
  it("renders correctly", () => {
    cy.viewport(1000, 750)
    cy.mount(<PriceList />)
    cy.contains("Twister 800N Harpia")
    cy.contains("Antila 24.4 Borneo")
    cy.contains("Aquatic 25T Morrigan")
    cy.contains("Phobos 25 Saskia")
    cy.contains("Antila 26CC Driada")
    cy.contains("Antila 26CC Solaris")
    cy.contains("Antila 27 Biały Wilk")
    cy.contains("Antila 27 Skellige")
    cy.contains("Antila 27 Aldonika")
    cy.contains("Antila 33.3 Przygoda")
    cy.contains("Antila 28.2 Galapagos")
    // cy.contains("Twister 800N Strzyga")

    cy.contains("Armator zastrzega sobie prawo do zmian w cenniku.")
    cy.contains("5% dla stałych klientów.")
    cy.contains(
      "Po uzgodnieniu terminu i warunków czarteru, wysłana zostanie umowa na ustalony adres e-mail."
    )
    cy.contains(
      "Po zakończeniu najmu pobierana jest obowiązkowa opłata za sprzątanie końcowe jachtu w wysokości 100 zł (jacht do 8m długości) lub 120 zł (jacht powyżej 8m długości)."
    )
  })
})

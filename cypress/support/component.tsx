import "./commands"
import { mount } from "cypress/react18"
import { theme } from "../../src/theme"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { ReactNode } from "react"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add("mount", (component: ReactNode) => {
  return mount(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  )
})

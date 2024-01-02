import styled from "styled-components"

export const DcoumentsDescription = () => (
  <ul>
    <Li>
      <Link href={"/assets/pdf/umowa-najmu.pdf"} target="_blank">
        umowa-najmu.pdf
      </Link>
    </Li>
    <Li>
      <Link
        href={
          "/assets/pdf/klauzula-informacyjna-o-ochronie-danych-osobowych.pdf"
        }
        target="_blank"
      >
        klauzula-informacyjna-o-ochronie-danych-osobowych.pdf
      </Link>
    </Li>
  </ul>
)

export const GeneralDescription = () => (
  <ul>
    <Li>Armator zastrzega sobie prawo do zmian w cenniku.</Li>
    <Li>
      Czartery rozpoczynają się i kończą w Przystań Zielona Zatoka (11-500
      Bogaczewo).
    </Li>
    <Li>W trakcie czarteru cumowanie w ośrodku jest bezpłatne.</Li>
    <Li>
      Jachty wydawane są od godziny 15 – ej do 18 – ej pierwszego dnia czarteru,
      a zdawane od godziny 08 – ej do 10 – tej ostatniego dnia czarteru lub po
      uzgodnieniu w innych ramach czasowych.
    </Li>
    <li>
      Dokumenty niezbędne do zaokrętowania: minimum patent żeglarza jachtowego,
      dowód osobisty, umowa czarteru.
    </li>
  </ul>
)
export const DiscountDescription = () => (
  <ul>
    <Li>5% dla stałych klientów.</Li>
    <Li>5% czarter na 2 lub więcej tygodni.</Li>
    <Li>5% dla załóg rezerwujących 3 i więcej jachtów.</Li>
    <Li>Maksymalny łączny rabat nie może przekraczać 10%.</Li>
  </ul>
)

export const ReservationDescription = () => (
  <ul>
    <Li>
      Po uzgodnieniu terminu i warunków czarteru, wysłana zostanie umowa na
      ustalony adres e-mail.
    </Li>
    <Li>
      Zaliczkę w wysokości uzgodnionej w umowie czarteru należy wpłacić w czasie
      3 dni od daty zawarcia umowy.
    </Li>
    <Li>
      Resztę wpłaty należy uregulować najpóźniej w dniu rozpoczęcia czarteru.
    </Li>
  </ul>
)
export const AdditionalPricesDescription = () => (
  <ul>
    <Li>
      Przy wydaniu jachtu pobierana jest obligatoryjna opłata za sprzątanie w
      wysokości 150 zł za jachty do 9 metrów długości i 200 zł powyżej 9 metrów.
    </Li>
    <Li>
      W przypadku zabrania na pokład psa pobierana jest opłata dodatkowa w
      wysokości 150 zł.
    </Li>
    <Li>
      W przypadku stwierdzenia po okresie najmu zabrudzeń spowodowanych przez
      zwierzęta pobierana jest opłata dodatkowa w wysokości 150 zł, niezależnie
      od obowiązkowej opłaty za sprzątanie końcowe jachtu.
    </Li>
    <Li>Opróżnienie toalety chemicznej przez armatora 200 zł.</Li>
    <Li>Czarter na jedną dobę cena wzrasta o 100%.</Li>
    <Li>Czarter na dwie doby cena wzrasta o 70%.</Li>
    <Li>Czarter na trzy doby cena wzrasta o 30%.</Li>
  </ul>
)

const Link = styled.a`
  color: inherit;!important;
`
const Li = styled.li`
  background-color: ${({ theme }) => theme.color.light80};
`

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
      Jachty wydawane są od godziny 16 – ej do 19 – ej pierwszego dnia czarteru,
      a zdawane od godziny 08 – ej do 10 – tej ostatniego dnia czarteru lub po
      uzgodnieniu w innych ramach czasowych.
    </Li>
    <Li>
      Jachty są ubezpieczone w zakresie: CASCO, OC, NNW, silnik ubezpieczony od
      kradzieży, ubezpieczenie rzeczy osobistych załogi.
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
      7 dni od daty zawarcia umowy.
    </Li>
    <Li>
      Resztę wpłaty należy uregulować najpóźniej w dniu rozpoczęcia czarteru.
    </Li>
  </ul>
)
export const AdditionalPricesDescription = () => (
  <ul>
    <Li>
      Po zakończeniu najmu pobierana jest obowiązkowa opłata za sprzątanie
      końcowe jachtu w wysokości 100 zł (jacht do 8m długości) lub 120 zł (jacht
      powyżej 8m długości).
    </Li>
    <Li>
      Czarterujący jest zobowiązany zwrócić jacht czysty i sklarowany. Za opłatą
      200 zł Czarterujący nie musi sprzątać jachtu po zakończeniu najmu.
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

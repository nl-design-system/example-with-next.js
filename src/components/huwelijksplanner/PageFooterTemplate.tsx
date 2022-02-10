/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { useThemeContext } from "../../context/ThemeContext";
import { Button } from "../utrecht";

export const PageFooterTemplate = () => {
  const { theme } = useThemeContext();
  return theme?.className === "utrecht-theme" ? (
    <>
      <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
        <h2 className="utrecht-heading-2 utrecht-heading-2--reset-h2">Gemeente Utrecht</h2>
        <section>
          <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">Telefoon</h3>
          <p className="utrecht-paragraph utrecht-paragraph--distanced">
            <a href="tel:+31302860000" className="utrecht-link utrecht-link--telephone">
              14 030
            </a>
          </p>
        </section>
        <section>
          <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">Adres</h3>
          <p className="utrecht-paragraph utrecht-paragraph--distanced">
            <strong>Stadskantoor</strong>
            <br />
            Stadsplateau 1<br />
            3521AZ
          </p>
        </section>
      </address>
      <div className="utrecht-page-footer__navigation">
        <ul className="utrecht-link-list utrecht-link-list--chevron">
          <li className="utrecht-link-list__item">
            <a href="/contact/" className="utrecht-link">
              Meer contactinformatie
            </a>
          </li>
          <li className="utrecht-link-list__item">
            <a href="/over-deze-website" className="utrecht-link">
              Over deze website
            </a>
          </li>
        </ul>
      </div>
    </>
  ) : theme?.className === "denhaag-theme" ? (
    <div className="utrecht-page-footer__navigation">
      <div>
        <h3 className="utrecht-heading-4 utrecht-heading-4--reset-h4">Meld je aan voor de nieuwsbrief</h3>
        <p>
          Blijf gemakkelijk op de hoogte van ontwikkelingen an jouw stadsdeel & de belangrijkste zaken van Den Haag.
        </p>
        <Button>Aanmelden nieuwsbrief</Button>
      </div>
      <div>
        <h4 className="utrecht-heading-4 utrecht-heading-4--reset-h4">Volg ons op</h4>
        <p>💭 🗯 💬</p>
      </div>
      <div>
        <h4 className="utrecht-heading-4 utrecht-heading-4--reset-h4">Contact</h4>
        <p>
          <a href="#" className="utrecht-link">
            → Bel ons op 14070
          </a>
        </p>
        <p>
          <a href="#" className="utrecht-link">
            → Naar contactformulier
          </a>
        </p>
        <p>
          <a href="#" className="utrecht-link">
            → Start een chatgesprek
          </a>
        </p>
        <Button>Contactpagina</Button>
      </div>
    </div>
  ) : (
    <h2 className="utrecht-heading-2 utrecht-heading-2--reset-h2">{theme?.title}</h2>
  );
};

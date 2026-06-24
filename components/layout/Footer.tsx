import Link from "next/link";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div>
          <span className="footer-label">Navegação</span>
          <div className="footer-nav-links">
            <Link href="/#home">Home</Link>
            <Link href="/#suites">Suítes</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#reviews">Reviews</Link>
          </div>
        </div>

        <div>
          <div className="footer-col-group">
            <span className="footer-label">Redes Sociais</span>
            <div className="footer-nav-links">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <div className="footer-col-group">
            <span className="footer-label">Contato</span>
            <div className="footer-nav-links">
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
              <a href="mailto:contato@onemotel.com.br">contato@onemotel.com.br</a>
            </div>
          </div>
          <div className="footer-col-group">
            <span className="footer-label">Endereço</span>
            <div className="footer-nav-links">
              <span>
                Boa Vista,
                <br />
                Roraima — Brasil
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="opening-card">
            <span className="opening-card-title">Horário de Funcionamento</span>
            <div className="opening-row">
              <span className="opening-day">Segunda — Terça — Quarta</span>
              <span className="opening-leader" />
              <span className="opening-time">
                Aberto <em>24h</em>
              </span>
            </div>
            <div className="opening-row">
              <span className="opening-day">Quinta — Sexta</span>
              <span className="opening-leader" />
              <span className="opening-time">
                Aberto <em>24h</em>
              </span>
            </div>
            <div className="opening-row">
              <span className="opening-day">Sábado — Domingo</span>
              <span className="opening-leader" />
              <span className="opening-time">
                Aberto <em>24h</em>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-tagline-wrap">
        <span className="footer-tagline">
          Viva <em>One</em> Motel
        </span>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
        <span>© 2026 LANDING.Studio. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

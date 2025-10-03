import { Link } from 'react-router';

function InstitucionalMenu() {
  return (
    <div className="text-white flex flex-col gap-2">
      <h3 className="font-blackcrow text-center">Institucional</h3>
      <nav>
        <ul className="text-sm text-center flex flex-col gap-3">
          <li>
            <Link to="/sobre-nos">
              <p>Sobre Nós</p>
            </Link>
          </li>

          <li>
            <Link to="/atendimento">
              <p>Trabalhe Conosco</p>
            </Link>
          </li>

          <li>
            <Link to="/atendimento">
              <p>Faq</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InstitucionalMenu;

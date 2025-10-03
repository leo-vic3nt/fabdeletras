import { Link } from 'react-router';

function ServicosMenu() {
  return (
    <div className="text-white flex flex-col gap-2">
      <h3 className="font-blackcrow text-center">Serviços</h3>
      <nav>
        <ul className="text-sm text-center flex flex-col gap-3">
          <li>
            <Link to="/servicos/sinalizacao-iterna">
              <p>Sinalização Interna</p>
            </Link>
          </li>

          <li>
            <Link to="/servicos/fachadas-e-letreiros">
              <p>Fachadas e Letreiros</p>
            </Link>
          </li>

          <li>
            <Link to="servicos/totens">
              <p>Totens</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ServicosMenu;

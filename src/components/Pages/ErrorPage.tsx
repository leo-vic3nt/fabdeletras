import { Link } from 'react-router';
import BaseLayout from '../../BaseLayout';

const ErrorPage = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center p-8 text-center">
        <div className="border-2 p-10 flex flex-col items-center gap-4">
          <h1 className="font-blackcrow text-center text-3xl">404</h1>
          <p>Página não encontrada, você pode retornar apertando o botão abaixo</p>
          <Link to="/">
            <button className="px-4 py-2 border-2 cursor-pointer">Voltar</button>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ErrorPage;

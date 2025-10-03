import { Outlet } from 'react-router';
import BaseLayout from './BaseLayout';

function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default App;

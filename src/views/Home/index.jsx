import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/global.css';
import Header from './Header';
import Body from './Body';

function Home() {
  return (
    <div className="d-flex">
      <Header />
      <Body />
    </div>
  );
}

export default Home;

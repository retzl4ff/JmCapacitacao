import '../../styles/global.css';
import Header from './Header';
import Body from './Body';

function Home() {
  return (
    <div className="d-flex" style={{ overflowX: 'hidden' }}>
      <Header />
      <Body />
    </div>
  );
}

export default Home;

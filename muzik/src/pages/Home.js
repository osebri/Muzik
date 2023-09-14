import Latest from "../components/latest";
import '../App.css';
import Header from '../components/Header';
import Featured from '../components/Featured';

function Home() {
  return (  
    <div>
      <Header />
      <Featured />
      <h1 style={{ color: '#f6db78', fontSize: '64px', fontWeight: 'bold'
       , margin: "40px",  textShadow: '0 0 10px rgba(246, 219, 120, 0.5)' }}>New Products</h1>
      <Latest />
    </div>
    
  );
}

export default Home;
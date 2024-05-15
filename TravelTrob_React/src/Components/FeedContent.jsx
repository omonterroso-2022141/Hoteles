import { Navbar } from './Navbar.jsx';
import { Card } from './Card.jsx';
import '../Pages/Feed/Feed.css';

export const FeedContent = () => {

  


  return (
    <div>
      <Navbar />
      <div className='feed-content'>
        <h1>Explora Nuestros Hoteles</h1>
        <div className='hotel-cards'>
          <Card
          />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
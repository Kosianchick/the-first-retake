import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/horizontal">Горизонтальний ShapesLine</Link></li>
          <li><Link to="/vertical">Вертикальний ShapesLine</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
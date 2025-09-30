import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">📷 Photo Journal</Link>
    </header>
  );
}

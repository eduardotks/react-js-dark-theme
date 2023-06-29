import './Home.css';
import { Container } from 'reactstrap';
import { ThemeContext, themes } from '../../contexts/theme/ThemeContext';
import React from 'react';
import ToggleDark from '../../components/theme/toggleDark';

function Home() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="Home">
      <header className="Home-header">
        <h3 className="text-warning">...</h3>
      </header>

      <footer className="center footer">
        <Container>
          <a
            href="https://localhost:3000"
            target="_blank"
            rel="noreferrer"
            color="gray"
          >
            @Eduardo Inspiration
          </a>
        </Container>
      </footer>
    </div>
  );
}

export default Home;

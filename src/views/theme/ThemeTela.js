import './ThemeTela.css';
import { Container } from 'reactstrap';
import { ThemeContext, themes } from '../../contexts/theme/ThemeContext';
import React from 'react';
import ToggleDark from '../../components/theme/toggleDark';

function ThemeTela() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-warning">Dark/Light mode</h1>
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

      <footer className="center footer">
        <Container>
          <a
            href="https://dribbble.com/khatib"
            target="_blank"
            rel="noreferrer"
            color="gray"
          >
            Design Inspiration from Mo(@Khatib)
          </a>
        </Container>
      </footer>
    </div>
  );
}

export default ThemeTela;

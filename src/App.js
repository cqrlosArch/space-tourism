import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import Header from './components/Header';

import HomePage from './pages/Home';
import DestinationsPage from './pages/Destinations';
import CrewPage from './pages/Crew';
import TechnologiesPage from './pages/Technologies';

import Destination from './components/Destination';
import CrewTeam from './components/CrewTeam';
import Technology from './components/Technologies';
import GlobalStyle from './components/GlobalStyle';

import data from './data.json';

const { destinations, crew, technology } = data;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="destination" element={<DestinationsPage />}>
              <Route index element={<Destination dest={destinations[0]} />} />
              {destinations.map((dest) => (
                <Route
                  path={dest.name.toLowerCase()}
                  element={<Destination dest={dest} />}
                  key={dest.name}
                />
              ))}
            </Route>

            <Route path="crew" element={<CrewPage />}>
              <Route index element={<CrewTeam cr={crew[0]} />} />
              {crew.map((el) => (
                <Route
                  path={el.name.replace(/\s+/g, '').toLocaleLowerCase()}
                  element={<CrewTeam cr={el} />}
                  key={el.name}
                />
              ))}
            </Route>

            <Route path="technology" element={<TechnologiesPage />}>
              <Route index element={<Technology tech={technology[0]} />} />
              {technology.map((tech) => (
                <Route
                  path={tech.name.replace(/\s+/g, '').toLocaleLowerCase()}
                  element={<Technology tech={tech} />}
                  key={tech.name}
                />
              ))}
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </Wrapper>
    </Router>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { studentRoutes, adminRoutes, defaultRoutes, adminWorkspaceRoutes, facultyRoutes, facultyWorkspaceRoutes } from './reducers/Routes';

function App() {

  return (
    <div style={{
      minHeight: '100vh',
    }}
    >
      <BrowserRouter>
        <MenuBar />
        <br />
        <br />
        <br />
        <Routes>
          {[...defaultRoutes, ...studentRoutes, ...adminRoutes, ...adminWorkspaceRoutes, ...facultyRoutes, ...facultyWorkspaceRoutes]
            .map((item, index) => (
              <Route
                key={index}
                path={item.path}
                exact
                element={item.component}
              ></Route>
            ))}
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default App;

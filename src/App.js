import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultRoutes, adminWorkspaceRoutes, facultyWorkspaceRoutes, loginRoutes, studentWorkspaceRoutes } from './reducers/Routes';
import { AppState } from './reducers/AppContextProvider';

function App() {

  const { userRole } = AppState()

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
          {[...defaultRoutes, ...loginRoutes]
            .map((item, index) => (
              <Route
                key={index}
                path={item.path}
                exact
                element={item.component}
              ></Route>
            ))}
          {userRole === 'faculty' && [...facultyWorkspaceRoutes]
            .map((item, index) => {
              return <Route
                key={index}
                path={item.path}
                exact
                element={item.component}
              ></Route>
            })}
          {[...adminWorkspaceRoutes]
            .map((item, index) => {
              return <Route
                key={index}
                path={item.path}
                exact
                element={item.component}
              ></Route>
            })}
          {[...studentWorkspaceRoutes]
            .map((item, index) => {
              return <Route
                key={index}
                path={item.path}
                exact
                element={item.component}
              ></Route>
            })}

        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default App;

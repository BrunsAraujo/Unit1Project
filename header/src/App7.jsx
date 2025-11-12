//App7.jsx adds the about page
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import CollapsibleMenu2 from "./components/CollapsibleMenu2";
import CityList from "./components/CityList";
import CityItinerary3 from "./components/CityItinerary3";
import Search3 from "./components/Search3.jsx";
import LoginForm from "./components/LoginForm";
import TripSaver from "./components/TripSaver";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
        <header>
        <Header />
        </header>

        <nav>
        <CollapsibleMenu2 />
        </nav>
        <main div style={{ flex: 1 }}>
          <Routes>
          <Route path="/about" element={<About />} />

            <Route
              path="/login"
              element={
                !loggedInUser ? (
                  <LoginForm onLogin={handleLogin} />
                ) : (
                  <TripSaver user={loggedInUser} />
                )
              }
            />
            <Route
              path="/cities"
              element={
                <div className="app">
                  <h1>Cities:</h1>
                  {!selectedCity ? (
                    <CityList onSelectCity={setSelectedCity} />
                  ) : (
                    <CityItinerary3
                      city={selectedCity}
                      onBack={() => setSelectedCity(null)}
                    />
                  )}
                </div>
              }
            />
            <Route
              path="/search"
              element={<Search3 onSelectCity={setSelectedCity} />}
            />
            <Route path="/cities/:cityName" element={<CityItinerary3 />} />
          </Routes>
          </main>
        </div>
      <footer>
        <Footer />
        </footer>
      
    </Router>
  );
}

export default App;
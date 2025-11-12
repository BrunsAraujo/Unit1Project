//adds the Search and Footer
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CollapsibleMenu2 from "./components/CollapsibleMenu2";
import CityList from "./components/CityList";
import CityItinerary3 from "./components/CityItinerary3";
import Search2 from "./components/Search2.jsx";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleLogin = (username) => {
    alert(`Welcome, ${username}!`);
  };

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
        <Header />
        <CollapsibleMenu2 />

        {/* Main content area */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route
              path="/cities"
              element={
                <div className="app">
                  <h1>Cities to Choose</h1>
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
              element={<Search2 onSelectCity={setSelectedCity} />}
            />
            <Route path="/cities/:cityName" element={<CityItinerary3 />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
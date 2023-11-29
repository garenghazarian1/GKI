import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/navbar";
import Dashboard from "./navbar-pages/Dashboard";
import AboutUs from "./navbar-pages/AboutUs";
import Vehicles from "./navbar-pages/Vehicles";
import NotFound from "./navbar-pages/NotFound";
import SignInForm from "./navbar-pages/SignInForm";
import SignUpForm from "./navbar-pages/SignUpForm";
import Registered from "./navbar-pages/Registered";
import AuthContextProvider from "./context/AuthContext";
import ContactUs from "./navbar-pages/contactus";

function App() {
  return (
    <div className="bg-red-900 h-screen">
      <Router>
        <AuthContextProvider>
          <div className="App flex bg-red-900 w-full">
            <Sidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route
                  path="/"
                  element={<Navigate replace to="/dashboard" />}
                />
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/sign-up" element={<SignUpForm />} />
                <Route path="/registered" element={<Registered />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;

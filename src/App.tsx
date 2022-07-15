import React from "react";
import "./App.css";
import UsersTable from "./components/UsersTable/UsersTable";
import { AppContainer } from "./App.styles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AppContainer>
      <Header/>
      <UsersTable />
      <Footer/>
    </AppContainer>
  );
}

export default App;

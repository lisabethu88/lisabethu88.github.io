import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.tsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-[165px] mt-10">
        <section> Profile Section. </section>
        <section> Projects Section. </section>
        <section> Contacts Section. </section>
      </main>
      <footer> Do not forget me! </footer>
    </div>
  );
}

export default App;

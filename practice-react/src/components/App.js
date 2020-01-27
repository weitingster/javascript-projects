// This page will act as a table of contents page
// Every other page is then rendered onto this page via "components"

import React from "react"
import ReactDOM from "react-dom"
import Footer from "./Footer"
import MainContent from "./MainContent"
import Header from "./Header"

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App

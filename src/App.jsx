import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "@layout/Footer"
import { ToolKitContext } from "@shared/toolkit"
import routesConfig from "@shared/routeConfig"

import "./assets/stylesheet.scss"

const App = () => {
  return <ToolKitContext>
    <BrowserRouter>
      <Routes>
      {
        routesConfig.map(
        (props, index) => <Route key={index} {...props} />
        )
      }
      </Routes>
      <Footer />
    </BrowserRouter>
  </ToolKitContext>
}

export default App;
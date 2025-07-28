import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ToolKitContext } from "@shared/toolkit"
import routesConfig from "@shared/routeConfig"

import "./scss/stylesheet.scss"

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
    </BrowserRouter>
  </ToolKitContext>
}

export default App;
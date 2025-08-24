import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import { setupStore } from "@stores/store"
import Footer from "@layout/Footer"
import routesConfig from "@shared/routeConfig"

const store = setupStore()

const App = () => {
  return <Provider store={store}>
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
  </Provider>
}

export default App;
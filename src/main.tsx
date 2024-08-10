import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { persistor, store } from "./redux/store"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

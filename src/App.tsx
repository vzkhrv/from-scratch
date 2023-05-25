import { useState } from "react"
import { Input } from "./components/Input"
import { AddButton } from "./components/AddButton";
import { Notifier } from "./components/Notifier";

import { store } from './store/configureStore'
import { Provider } from 'react-redux'

import './styles.css'
import { NewTaskBar } from "./modules/NewTaskBar";

export const App = () => {
  const [notifierOpen, setNotifierOpen] = useState(false);
  

  const handleAddButtonClick = () => {
    console.log('Button was clicked!');
  }

  const handleNotifierClose = () => {
    setNotifierOpen(false);
  }

  return (
    <div className="root-container">
      {/* <Notifier
        open={notifierOpen}
        task="Любая задача"
        onClose={handleNotifierClose}
      />
       */}
    <Provider store={store}>
      <h3>Список задач</h3>
      <NewTaskBar />
    </Provider>
    </div>
  )
}

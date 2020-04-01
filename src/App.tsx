import React from 'react'
import Modal from 'react-modal'
import './App.css'
import TopPageContainer from './containers/TopPageContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCaretDown, faThumbsUp, faEdit, faTimes, faMoon } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#root')

library.add(fab, faPlus, faCaretDown, faThumbsUp, faEdit, faTimes, faMoon)

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TopPageContainer />
    </React.Fragment>
  )
}

export default App
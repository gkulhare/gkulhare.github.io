import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Sidebar} from './components/Sidebar'
import HomepageCards from './components/HomepageCards'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
      <Sidebar/>
      <HomepageCards/>
    </Fragment>
  )
}

export default App

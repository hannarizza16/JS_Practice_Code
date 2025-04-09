import { useState } from 'react'
import ParentComponent from './components/passingOfProps/ParentComponent'
import ParentOnClick from './components/EventsComponent/ParentOnClick'
import ParentOnChange from './components/OnChangeComponent/ParentOnChange'
import ParentOnSubmit from './components/OnSubmitEvent/ParentOnSubmit'
import ParentMouseOver from './components/MouseOverEvent/ParentMouseOver'
import ParentDataBinding from './components/DataBindingEcent/ParentDataBinding'
import Parent from './components/PropsHandling/Parent'
import ParentConditional from './components/ConditionalsEvent/ParentConditional'
import './components/PropsHandling/PropsHandling.module.css'

import './App.css'

const App = () => {
  return (
    <>
      <ParentComponent />
      <div className='onClickBorder'>
      <ParentOnClick/>
      </div>

      <div className='onChangeContainer'>
        <h2>onChange Event Handler</h2>
        <ParentOnChange />
      </div>

      <div className='onSubmitContainer'>
      <h2>onSubmit Event Handler</h2>
        <ParentOnSubmit />
      </div>

      <div className='mouseOverContainer'>
        <ParentMouseOver/>
      </div>

      <div>
        <ParentDataBinding/>
      </div>

      <div>
        <Parent/>
      </div>

      <div className='conditionalContainer'>
        <ParentConditional />
      </div>
    </>
  )
}

export default App

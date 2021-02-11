import React from 'react'

import { Button } from 'prenda-spark'

const App = () => {
  return (
    <>
      <div style={{margin: '5px'}}><Button size="large">I am a button</Button></div>
      <div style={{margin: '5px'}}><Button size="medium">I am a button</Button></div>
      <div style={{margin: '5px'}}><Button size="small">I am a button</Button></div>
      <div style={{margin: '5px'}}><Button disabled={true} size="large">I am a button</Button></div>
      <div style={{margin: '5px'}}><Button disabled={true} size="medium">I am a button</Button></div>
      <div style={{margin: '5px'}}><Button disabled={true} size="small">I am a button</Button></div>
    </>
  )
}

export default App

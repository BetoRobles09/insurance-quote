import React, { useState } from 'react'
import styled from '@emotion/styled'

import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App () {
  const [summary, getSummary] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const [loading, setLoading] = useState(false)

  const { quote, data } = summary

  return (
    <Container>
      <Header title='Insurance Quote' />
      <FormContainer>
        <Form getSummary={getSummary} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        <Summary data={data} />
        {!loading ? <Result quote={quote} /> : null}
      </FormContainer>
    </Container>
  )
}

export default App

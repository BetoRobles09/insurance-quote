import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`
const QuoteResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`

const Total = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Result = ({ quote }) => {
  return (
    (quote === 0)
      ? <Message>Choose brand, year and an insurance plan</Message>
      : (
        <QuoteResult>
          <TransitionGroup component='span' className='resultado'>
            <CSSTransition classNames='resultado' key={quote} timeout={{ enter: 500, exit: 500 }}>
              <Total>Your total is: $ <span>{quote}</span></Total>
            </CSSTransition>
          </TransitionGroup>
        </QuoteResult>
      )
  )
}

export default Result

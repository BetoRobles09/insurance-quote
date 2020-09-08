import React from 'react'
import styled from '@emotion/styled'
import { firstUpperCase } from '../Helper'

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Summary = ({ data }) => {
  const { brand, year, plan } = data

  if (brand === '' || year === '' || plan === '') return null
  return (
    <ContainerSummary>
      <h2>Quote Summary</h2>
      <ul>
        <li>Brand: {firstUpperCase(brand)} </li>
        <li>Year: {year} </li>
        <li>Plan: {firstUpperCase(plan)} </li>
      </ul>
    </ContainerSummary>
  )
}

export default Summary

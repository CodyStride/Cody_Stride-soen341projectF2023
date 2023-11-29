import React from 'react'
import { RequestCard } from './RequestCard'

describe('<RequestCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RequestCard />)
  })
})
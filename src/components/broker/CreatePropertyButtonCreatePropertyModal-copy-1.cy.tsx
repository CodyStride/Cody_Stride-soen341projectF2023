import React from 'react'
import { CreatePropertyModal } from './CreatePropertyButton'

describe('<CreatePropertyModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreatePropertyModal />)
  })
})
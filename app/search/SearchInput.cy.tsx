import React from 'react'
import { SearchInput } from './SearchInput'

describe('<SearchInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchInput />)
  })
})
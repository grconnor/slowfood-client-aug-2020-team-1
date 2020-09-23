import React from 'react'
import { shallow, mount } from 'enzyme'
import ProductList from '../ProductList'
import axios from 'axios'

describe('<ProductList/>', () => {

  it('should fetch products from api using Axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<ProductList />)
    expect(axiosSpy).toBeCalled()
  });


})
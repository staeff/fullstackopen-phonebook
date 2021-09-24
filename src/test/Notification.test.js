import React from 'react'
import ReactDOM from 'react-dom'
import Notification from '../components/Notification'

describe('Notification', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
  })

  const render = component =>
    ReactDOM.render(component, container)

  const msg = "This is a notification"
  const null_msg = null
  const type = "info"

  it('should render a div with the right css class', () => {
    render(<Notification msg={msg} type={type} />)
    expect(container.querySelectorAll('div.info')).toHaveLength(1)
  })

  it('should render the correct message text', () => {
    render(<Notification msg={msg} type={type} />)
    expect(container.textContent).toMatch('This is a notification')
  })

  it('should not render when msg payload is null', () => {
    render(<Notification msg={null_msg} type={type} />)
    expect(container.querySelectorAll('div')).toEqual(0)
  })

})

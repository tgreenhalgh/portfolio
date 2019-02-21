import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    &copy; 2019 by Thomas Greenhalgh. Design by{' '}
    <a href="https://www.lekoarts.de/en" target="_blank" rel="noopener noreferrer">
      LekoArts
    </a>
    .<br />
  </Content>
)

export default Footer

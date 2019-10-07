import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'

import theme from './utils/theme'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <div css={title}>monitizerizer</div>
        </nav>
        <main css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={() => (<div>Content for /another route</div>)} exact path='/another' />
        </main>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
`

const navStyle = css`
  grid-row: 1;
  background-color: ${theme.colors.primary};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`

const title = css`
  font-size: 2em;
  font-family: 'Lilita One', cursive;
  color: ${theme.colors.white};
  letter-spacing: 1px;
`

const contentStyle = css`
  grid-row: 2;
  padding: 8px;
`

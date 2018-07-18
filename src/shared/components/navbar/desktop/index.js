import React from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Link from 'shared/components/link'
import styles from './index.module.css'

const DesktopNavbar = ({ scrolled, localesBarHeight, intl: { messages } }) => {
  const navbarClasses = classNames(styles.container,
    {
      [styles.default]: !scrolled,
      [styles.scrolled]: scrolled
    })
  const currentTranslateYValue = scrolled ? localesBarHeight : 0

  return (
    <div className={ navbarClasses } style={ { transform: `translateY(-${currentTranslateYValue}px)` } }>
      <div className={ styles.navbarMenu }>
        <Helmet>
          <script async defer src="https://buttons.github.io/buttons.js" />
        </Helmet>
        <Link to="/"> { messages.navbar.item1 } </Link>
        <Link to="/"> { messages.navbar.item2 } </Link>
        <Link to="/"> { messages.navbar.item3 } </Link>
        <Link to="/"> { messages.navbar.item4 } </Link>
        <a className="github-button" href="https://github.com/ipfs/js-ipfs" data-show-count="true" aria-label="Star ipfs/js-ipfs on GitHub">
            Star
        </a>
      </div>
    </div>
  )
}

DesktopNavbar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  localesBarHeight: PropTypes.number
}

export default injectIntl(DesktopNavbar)
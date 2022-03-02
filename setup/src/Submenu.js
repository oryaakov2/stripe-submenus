import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useContext(AppContext)
  const [columns, setColumns] = useState('col-2')
  const submenuRef = useRef(null)

  useEffect(() => {
    const container = submenuRef.current
    const { center, bottom } = location

    container.style.left = `${center}px`
    container.style.top = `${bottom}px`

    setColumns(`col-${links.length}`)
  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={submenuRef}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu

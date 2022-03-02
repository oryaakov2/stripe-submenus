import React, { useState, createContext } from 'react'
import sublinks from './data'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (text, location) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setLocation(location)
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider value={{
            openSidebar,
            closeSidebar,
            isSidebarOpen,
            openSubmenu,
            closeSubmenu,
            isSubmenuOpen,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

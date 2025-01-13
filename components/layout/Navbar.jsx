import Link from 'next/link'
import { attributes, react as NavbarContent } from '../../content/navbar.md'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { List, X } from 'phosphor-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  let { logoDark, menus } = attributes
  const [isOpen, setIsOpen] = useState(false)

  const [scroll, setScroll] = useState(false)

  const handleStickyNavbar = () => {
    if (window.scrollY >= 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  }, [])

  return (
    <motion.header
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: 0.2 }}
      className={`fixed left-0 top-0 z-[1000] w-full ${
        scroll ? 'bg-primary/[0.7] shadow-lg backdrop-blur-2xl' : 'bg-transparent'
      }`}>
      <div className="max-md:container-fluid mx-auto md:container">
        <nav className={`navbar ${scroll ? 'py-3' : 'py-5'}`}>
          <div className="navbar-logo">
            <Link href="/">
              <Image src={logoDark} width={131} height={42} alt="logo" />
            </Link>
          </div>
          <div className="navbar-items flex justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? ' navbar-toggle opacity-0' : 'navbar-toggle'}>
              <List size={24} weight="bold" />
            </button>
            <div className={isOpen ? 'navbar-list open ' : 'navbar-list '}>
              <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle-close absolute right-6 top-5 ">
                <X size={24} weight="bold" />
              </button>
              <ul className="flex flex-col">
                {menus.map((item, index) => (
                  <li key={index} className="mb-5">
                    <Link href={item.url} className="text-lg uppercase">
                      {item.menu}
                    </Link>
                  </li>
                ))}
                <li className="mb-5">
                  <Link href="/conference" className="final-conference">
                    Final Confernece
                  </Link>
                </li>

                <li className="mt-auto">
                  <Link href="/contact" className="nav-btn btn-animate">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-items flex justify-end max-md:hidden">
            <ul className="flex items-center">
              {menus.map((item, index) => (
                <li key={index} className="md:px-4 lg:px-[25px]">
                  <Link href={item.url} className="nav-link">
                    {item.menu}
                  </Link>
                </li>
              ))}
              <li className="md:px-4 lg:px-[25px]">
                <Link href="/conference" className="final-conference">
                  Final Confernece
                </Link>
              </li>
              <li className="md:pl-4 lg:pl-[14px]">
                <Link href="/contact" className="nav-btn btn-animate">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar

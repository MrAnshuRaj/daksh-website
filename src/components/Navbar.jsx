import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  let { pathname } = useLocation()
  let subpage = pathname.split('/')?.[1]

  function Linkness(type = null) {
    if (subpage === '') subpage = 'home'
    let classes = 'text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full ';
    if (type === subpage) {
      classes += 'bg-lime-500/30 border-2 border-lime-400 backdrop-blur text-lime-200 shadow-md';
    } else {
      classes += 'text-white hover:text-lime-300 hover:bg-lime-400/10';
    }
    return classes
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Mobile Glassmorphic Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto 
                glassy-mobile pb-12 rounded-r-3xl shadow-2xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-lime-200"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 size={28} />
                  </button>
                </div>
                <div className="space-y-6 border-t border-lime-700/30 px-4 py-6">
                  <div className="flex flex-col w-full items-center space-y-7">
                    <Link to="/" className={Linkness('home')}>HOME</Link>
                    <Link to="/about" className={Linkness('about')}>ABOUT US</Link>
                    <Link to="/achivements" className={Linkness('achivements')}>ACHIEVEMENTS</Link>
                    <Link to="/gallery" className={Linkness('gallery')}>GALLERY</Link>
                    <Link to="/ourteam" className={Linkness('ourteam')}>OUR TEAM</Link>
                    <Link to="/sponser" className={Linkness('sponser')}>SPONSOR US</Link>
                    <Link to="/contact" className={Linkness('contact')}>CONTACT US</Link>
                  </div>
                  <div className="flex gap-6 items-center justify-center pt-8">
                    <a href="https://www.instagram.com/team.daksh/" target='_blank' rel="noopener noreferrer" className="hover:text-lime-400"><BsInstagram size={24} /></a>
                    <a href="https://www.facebook.com/teamdaksh.nitjsr/" target='_blank' rel="noopener noreferrer" className="hover:text-lime-400"><BsFacebook size={24} /></a>
                    <a href="https://in.linkedin.com/company/teamdaksh" target='_blank' rel="noopener noreferrer" className="hover:text-lime-400"><BsLinkedin size={24} /></a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Glassmorphic Navbar */}
      <motion.nav
        className="glass-navbar h-20 flex items-center justify-between px-4 sm:px-8 shadow-lg border-b border-lime-400/30 backdrop-blur-xl bg-white/15"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-white bg-lime-600/30"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Link to="/" className="flex items-center ml-2">
            <img src="/logo2.webp" alt="Daksh Logo" className="w-24 sm:w-32 drop-shadow-xl" />
            <span className="sr-only">Daksh Home</span>
          </Link>
        </div>
        <div className="hidden lg:flex gap-2 bg-transparent">
          <Link to="/" className={Linkness('home')}>HOME</Link>
          <Link to="/about" className={Linkness('about')}>ABOUT US</Link>
          <Link to="/achivements" className={Linkness('achivements')}>ACHIEVEMENTS</Link>
          <Link to="/gallery" className={Linkness('gallery')}>GALLERY</Link>
          <Link to="/ourteam" className={Linkness('ourteam')}>OUR TEAM</Link>
          <Link to="/sponser" className={Linkness('sponser')}>SPONSOR US</Link>
          <Link to="/contact" className={Linkness('contact')}>CONTACT US</Link>
        </div>
        <div className="hidden lg:flex gap-7 items-center ml-8">
          <a href="https://www.instagram.com/team.daksh/" target='_blank' rel="noopener noreferrer" className="hover:text-lime-400"><BsInstagram size={23} /></a>
          <a href="https://www.facebook.com/teamdaksh.nitjsr/" target='_blank' rel="noopener noreferrer" className="hover:text-lime-400"><BsFacebook size={23} /></a>
          <a href="https://in.linkedin.com/company/teamdaksh" target='_blank' rel="noopener noreferrer" className="hover:text-lime-400"><BsLinkedin size={23} /></a>
        </div>
      </motion.nav>
    </header>
  )
}

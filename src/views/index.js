import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       <Sidebar isOpen = {isOpen} setIsOpen={setIsOpen} />
       <Navbar setIsOpen = {setIsOpen} />
    </>
  )
}

export default Home
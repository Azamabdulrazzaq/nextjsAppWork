"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'

const Page = () => {

  const { theme, setTheme } = useTheme()

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    if (theme === "dark") {

      document.body.classList.add("dark-mode")
    }
    else {
      document.body.classList.remove("dark-mode");
    }

  }, [theme])

  const handleCheckboxChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='container'>
      <div>
        {theme === "dark" ? (
          <BsSun size={30} cursor={"pointer"} onClick={() => setTheme("light")} />
        ) : (

          <FiMoon size={30} cursor={"pointer"} onClick={() => setTheme("dark")} />
        )}
      </div>
      <div className='title'>
        <h1>DAY NIGHT</h1>
        <h1>/TOGGLER</h1>
      </div>
      <div className='btn'>
        <input type="checkbox" name="check" id='checkBox'
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <label>
          <div className='box'>
            <div className='ball'></div>
          </div>
        </label>
      </div>
      <div className='content'>

        the subject or ideas contained in something written, said, created, or
        represented: academic/educational content. Its easy to update the
        content of the Web site. art. Content is also the things represented or suggested in something
        written or created as art, or the ideas it communicates
      </div>
    </div>
  )
}

export default Page
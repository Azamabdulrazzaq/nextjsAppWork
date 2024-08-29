// dark and light theme with next js
// "use client"
// import React, { useEffect, useState } from 'react'
// import { useTheme } from 'next-themes'
// import { FiMoon } from 'react-icons/fi'
// import { BsSun } from 'react-icons/bs'
// import { MDBSwitch } from 'mdb-react-ui-kit';

// const Page = () => {

//   const { systemTheme, theme, setTheme } = useTheme()

//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {

//     if (theme === "dark") {

//       document.body.classList.add("dark-mode")
//     }
//     else {
//       document.body.classList.remove("dark-mode");
//     }

//   }, [theme])

//   const handleCheckboxChange = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className='container'>
//       <div>
//         {theme === "dark" ? (
//           <BsSun size={30} cursor={"pointer"} onClick={() => setTheme("light")} />
//         ) : (

//           <FiMoon size={30} cursor={"pointer"} onClick={() => setTheme("dark")} />
//         )}
//       </div>
//       <div className='title'>
//         <h1>DAY NIGHT</h1>
//         <h1>/TOGGLER</h1>
//       </div>
//       <div className='btn'>
//         <MDBSwitch defaultChecked
//           id='flexSwitchCheckChecked'
//           label='Checked switch checkbox input'
//           type="checkbox"
//           name="check"
//           checked={theme === "dark"}
//           onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//         />
//       </div>
//       <div className='content'>

//         the subject or ideas contained in something written, said, created, or
//         represented: academic/educational content. Its easy to update the
//         content of the Web site. art. Content is also the things represented or suggested in something
//         written or created as art, or the ideas it communicates
//       </div>
//     </div>
//   )
// }

// export default Page


import React from 'react'
import Base64Image from './Base64Image'

const page = () => {
  return (
    <>
      <Base64Image />
    </>
  )
}

export default page
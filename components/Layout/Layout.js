import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <footer>This is the footer</footer>
      <style jsx>
        {`
          div {
            background: green;
          }
        `}
      </style>
    </div>
  )
}

export default Layout;
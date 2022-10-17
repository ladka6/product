import React from 'react'

interface INavbarProps {
  productnum: number
}

function Navbar(props: INavbarProps) {
 
  return (
    <nav className="navbar navbar-expand-lg bg-light p-4">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Welcome to 'CompanyTitle'</span>
        <button className='ms-auto btn btn-primary rounded-pill shadow-lg'>Check Out {props.productnum}</button>
      </div>
    </nav>
  )
}

export default Navbar
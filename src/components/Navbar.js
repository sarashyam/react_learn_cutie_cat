// import React from 'react'
// import PropTypes from 'prop-types'


// export default function Navbar(props) {
//   return (
//     // <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">{props.title}</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">Features</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">{props.about}</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
//             </li>
//           </ul>
//         </div>
//         <div className="form-check form-switch">
//           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//           <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
//         </div>
//       </div>
//     </nav>
//   )
// }

// Navbar.defaultProps= {
//     title : " I'm a default title"
// };
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired
//   };


import React from 'react'
import PropTypes from 'prop-types'




export default function Navbar(props) {

  // const navbarStyle = {
  //   backgroundImage: `url('https://img.freepik.com/free-vector/adorable-paw-print-pattern-background-perfect-kids-animal-lover-vector_1017-47508.jpg?w=740&t=st=1716438914~exp=1716439514~hmac=9c597a317a0173415c8dd5c59af2946c00b644201ab93c15c68d030f89cd88ef')`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={navbarStyle}> */}
      {/* <nav className={`navbar navbar-expand-lg `} style={navbarStyle}>  */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          {/* <input className="form-check-input" onClick={handleToggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
          <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "I'm a default title",
  about: "About Us",
  mode: "light",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // about: PropTypes.string.isRequired,
  // mode: PropTypes.string.isRequired,
  // toggleMode: PropTypes.func.isRequired,
};

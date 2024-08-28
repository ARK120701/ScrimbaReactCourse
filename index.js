import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

// function Header() {
//   return (
//     <header>
//       <nav className="nav">
//         <img src="./reactlogo.png" width="40px"></img>
//         <ul className="nav-items">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

function MainComponent() {
  return (
    <div>
      <h1>
        Reasons I'm Excited to Learn React
        <ol>
          <li>To create meaningful Projects</li>
          <li>To style my websites</li>
          <li>To make money</li>
        </ol>
      </h1>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>"© 2024 Khan development. All rights reserved."</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));




// import React from "react"
//  import ReactDOM from "react-dom"

// renders what you want to show to the screen, first parameter is what you wanna display
//second parameter is where
//ReactDOM.render(<h1>Hello,Everyone!</h1>, document.getElementById("root"))

//Below is javascript way of adding content to a webpage, done in 4 lines whilst with react we can do it in one line
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
  return <p>I'm Learning React</p>;
}

// ReactDOM.render(
//   <div>
//       <Navbar />
//       <MainContent />
//   </div>,
//   document.getElementById("root")
// )

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now
// */

const navbar = (
  <nav>
    <h1>Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

// ReactDOM.render(
//   navbar,
//   document.getElementById("root")

// )

// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )

// ReactDOM.render(page,document.getElementById("root"))

//Challenge Creating Site

// const page =(
//   <div>
//     <img src="./reactlogo.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//   </div>
// )

// ReactDOM.render(page,document.getElementById("root"))

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

//have to rember to us Pascal Case>Captilaize the Variable Name
//when passing the function into the render> needa use <FunctionName/>
// function Page(){
//   return(
//     <div>
//       <header>
//       <nav>
//         <img src="./reactlogo.png" width="100px"></img>
//       </nav>
//       </header>

//       <h1>Reasons I'm Excited to Learn React
//         <ol>
//           <li>To create meaningful Projects</li>
//           <li>To style my websites</li>
//           <li>To make money</li>
//         </ol>
//       </h1>
//       <footer>
//         <small>"© 2024 Khan development. All rights reserved."</small>
//         </footer>
//     </div>

//   )
// }

// ReactDOM.render(<Page/> ,document.getElementById("root"))
//import Header from "./Header" 

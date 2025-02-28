import './navbar.css'
import logo from '../../assets/megamart.webp'
function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  return (
    <>
      <nav className="">
        <div className="welcome d-flex justify-content-between align-items-center py-2">
          <div className="">Welcome to worldwide Megamart!</div>
          <div className="d-flex">
            <a href="#" className="text-decoration-none mx-2 d-flex align-items-center">
              <svg className='mx-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8m0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" fill="#008ECC"/></svg>
              Deliver to 423651
            </a>
            <a href="#" className="line text-decoration-none px-2 d-flex align-items-center">
              <svg className='mx-1' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z"/><path d="M48 0H0v48h48z" fill="#fff" fillOpacity={0.01}/><path d="M12 39a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm23 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#008ECC" strokeWidth={4} strokeLinejoin="round"/><path d="M8 35H2V11h29v24H16m15 0V18h8.571L46 26.5V35h-6.189" stroke="#008ECC" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/> </svg>
              Track
            </a>
            <a href="#" className="text-decoration-none mx-2 d-flex align-items-center">
              <svg className='mx-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m6.448.436-1.13 1.129a.5.5 0 0 1-.344.143H3.196c-.822 0-1.488.666-1.488 1.488v1.778a.5.5 0 0 1-.143.345L.435 6.448a1.49 1.49 0 0 0 0 2.104l1.13 1.13a.5.5 0 0 1 .143.344v1.778c0 .822.666 1.488 1.488 1.488h1.778a.5.5 0 0 1 .345.143l1.129 1.13a1.49 1.49 0 0 0 2.104 0l1.13-1.13a.5.5 0 0 1 .344-.143h1.778c.822 0 1.488-.666 1.488-1.488v-1.778a.5.5 0 0 1 .143-.345l1.13-1.129a1.49 1.49 0 0 0 0-2.104l-1.13-1.13a.5.5 0 0 1-.143-.344V3.196c0-.822-.666-1.488-1.488-1.488h-1.778a.5.5 0 0 1-.345-.143L8.552.435a1.49 1.49 0 0 0-2.104 0m-1.802 9.21 5-5 .708.708-5 5zM5 5v1h1V5zm4 5h1V9H9z" fill="#008ECC"/></svg>
              All Offers
            </a>
          </div>
        </div>
        <div className="nav py-3 d-flex justify-content-between flex-nowrap">
          <div className="menu d-flex align-items-center">
            <span><button type="button" onClick={openNav} className="btn rounded-3"><svg fill="#008ECC" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" /></svg></button></span>
            <div className="logo d-flex ms-4"><img src={logo} alt="website logo" /></div>
          </div>
          <div className="search rounded-3 d-flex justify-content-center flex-nowrap">
            <button className="border-0 bg-transparent"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#008ECC" d="m15.7 14.3-4.2-4.2c-.2-.2-.5-.3-.8-.3.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.4 0 2.8-.5 3.8-1.4 0 .3 0 .6.3.8l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5"/></svg></button>
            <input type="text" className="border-0 py-3 ms-4 w-75" placeholder="Search essentials, groceries and more..." />
          </div>
          <div className="sign d-flex align-items-center ">
            <a className="open d-flex fw-bold pe-3 text-decoration-none" data-bs-toggle="modal" data-bs-target="#signModal">
              <svg fill="#008ECC" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" /></svg>
              Sign In/Sign Up
            </a>
            <a className="cart d-flex fw-bold ps-3 text-decoration-none" data-bs-toggle="modal" data-bs-target="#">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z" stroke="#008ECC" strokeWidth={2} strokeLinejoin="round" /> <path d="m5 7-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2" stroke="#008ECC" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
              Cart
            </a>
          </div>
        </div>
        <div className="dropdown-nav navbar-expand-lg btn-group-lg d-flex">
          <ul className="con collapse navbar-collapse py-3 px-0 justify-content-between m-0">
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Groceries <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">Bakery and Bread</a></li>
                <li><a href="#" className="dropdown-item py-3">Meat and Seafood</a></li>
                <li><a href="#" className="dropdown-item py-3">Pasta and Rice</a></li>
                <li><a href="#" className="dropdown-item py-3">Soups and Canned Goods</a></li>
                <li><a href="#" className="dropdown-item py-3">Frozen Foods</a></li>
                <li><a href="#" className="dropdown-item py-3">Dairy, Cheese, and Eggs</a></li>
                <li><a href="#" className="dropdown-item py-3">Snacks and Crackers</a></li>
              </ul>
            </li>
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Premium Fruits <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">apples and pears</a></li>
                <li><a href="#" className="dropdown-item py-3">Mango</a></li>
                <li><a href="#" className="dropdown-item py-3">Watrmelon</a></li>
                <li><a href="#" className="dropdown-item py-3">Lemon</a></li>
                <li><a href="#" className="dropdown-item py-3">Orange</a></li>
                <li><a href="#" className="dropdown-item py-3">Banana</a></li>
                <li><a href="#" className="dropdown-item py-3">Kiwi</a></li>
              </ul>
            </li>
              <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home & Kitchen<i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">Home Appliances</a></li>
                <li><a href="#" className="dropdown-item py-3">Large Appliances</a></li>
                <li><a href="#" className="dropdown-item py-3">Cookware</a></li>
                <li><a href="#" className="dropdown-item py-3">Drinkware</a></li>
                <li><a href="#" className="dropdown-item py-3">Bath & Bedding</a></li>
                <li><a href="#" className="dropdown-item py-3">Home Decor</a></li>
                <li><a href="#" className="dropdown-item py-3">Kitchen & Dining</a></li>
              </ul>
            </li>
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fashion <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">Men&apos;s Clothing</a></li>
                <li><a href="#" className="dropdown-item py-3">Women&apos;s Clothing</a></li>
                <li><a href="#" className="dropdown-item py-3">Kid&apos;s Fashion</a></li>
                <li><a href="#" className="dropdown-item py-3">Footwear</a></li>
                <li><a href="#" className="dropdown-item py-3">Eyewear</a></li>
                <li><a href="#" className="dropdown-item py-3">Bags & luggage</a></li>
                <li><a href="#" className="dropdown-item py-3">Watches</a></li>
                <li><a href="#" className="dropdown-item py-3">Jewellery</a></li>
              </ul>
            </li>
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Electronics <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">TVs, Satellites & Accessories</a></li>
                <li><a href="#" className="dropdown-item py-3">Laptops & Accessories</a></li>
                <li><a href="#" className="dropdown-item py-3">Audio & Home Entertainment</a></li>
                <li><a href="#" className="dropdown-item py-3">Video Games</a></li>
                <li><a href="#" className="dropdown-item py-3">Cameras & Accessories</a></li>
                <li><a href="#" className="dropdown-item py-3">Printers & Accessories</a></li>
                <li><a href="#" className="dropdown-item py-3">Networking Products</a></li>
                <li><a href="#" className="dropdown-item py-3">Data Storage</a></li>
                <li><a href="#" className="dropdown-item py-3">Computer Components</a></li>
                <li><a href="#" className="dropdown-item py-3">Computer Accessories</a></li>
              </ul>
            </li>
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Beauty <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">Fragrance</a></li>
                <li><a href="#" className="dropdown-item py-3">Makeup</a></li>
                <li><a href="#" className="dropdown-item py-3">Hair Care</a></li>
                <li><a href="#" className="dropdown-item py-3">Skin Care</a></li>
                <li><a href="#" className="dropdown-item py-3">Personal Care</a></li>
                <li><a href="#" className="dropdown-item py-3">Health & Nutrition</a></li>
              </ul>
            </li>
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home Improvement <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">Roof</a></li>
                <li><a href="#" className="dropdown-item py-3">Paint</a></li>
                <li><a href="#" className="dropdown-item py-3">Landscaping</a></li>
                <li><a href="#" className="dropdown-item py-3">Floor</a></li>
                <li><a href="#" className="dropdown-item py-3">Cleaners</a></li>
                <li><a href="#" className="dropdown-item py-3">Lighting</a></li>
              </ul>
            </li>
            <li className="dropdown nav-item btn-group">
              <a href="#" className="nav-link dropdown-toggle rounded-5 px-3 py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sports, Toys & Luggage <i className="fa-solid fa-chevron-down ms-2"></i></a>
              <ul className="dropdown-menu rounded-4 z-4 shadow">
                <li><a href="#" className="dropdown-item py-3">Fitness & Strength</a></li>
                <li><a href="#" className="dropdown-item py-3">Yoga</a></li>
                <li><a href="#" className="dropdown-item py-3">Cardio</a></li>
                <li><a href="#" className="dropdown-item py-3">Water Sports</a></li>
                <li><a href="#" className="dropdown-item py-3">Team Sports</a></li>
                <li><a href="#" className="dropdown-item py-3">Combat Sports</a></li>
                <li><a href="#" className="dropdown-item py-3">Hunting & Fishing</a></li>
                <li><a href="#" className="dropdown-item py-3">Skates & Scooters</a></li>
                <li><a href="#" className="dropdown-item py-3">Camping & Outdoor</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

const Sidebar = ({ selectedTab, setSelectedTAb }) => {


  return (<>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTAb("Home")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Home" && "active"}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTAb("Create Post")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Create Post" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Create Posts
          </a>
        </li>
      </ul>
      <hr />
    </div>
  </>)
}

export default Sidebar
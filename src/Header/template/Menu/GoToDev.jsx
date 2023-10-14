function onClick() {
    window.location.pathname = "/about"
}

function GoToAbout() {
    return <div 
      className="header-button" title="разработчик"
      onClick={onClick}
    >
        разработчик
    </div>
}

export default GoToAbout
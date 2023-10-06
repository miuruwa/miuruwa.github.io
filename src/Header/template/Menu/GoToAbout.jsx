function onClick() {
    window.location.pathname = "/about"
}

function GoToAbout() {
    return <div 
      className="header-button" title="Об авторе"
      onClick={onClick}
    >
        Об авторе
    </div>
}

export default GoToAbout
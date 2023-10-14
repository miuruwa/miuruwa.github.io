function onClick() {
    window.location.pathname = "/about"
}

function GoToAbout() {
    return <div 
      className="header-button" title="Об авторе"
      onClick={onClick}
    >
        ссылки
    </div>
}

export default GoToAbout
function onClick() {
    window.location.pathname = "/links"
}

function GoToLinks() {
    return <div 
      className="header-button" title="Ссылки"
      onClick={onClick}
    >
        Ссылки
    </div>
}

export default GoToLinks
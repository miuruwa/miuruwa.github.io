function onClick() {
    window.location.pathname = "/dev"
}

function GoToDev() {
    return <div 
      className="header-button" title="разработчик"
      onClick={onClick}
    >
        разработчик
    </div>
}

export default GoToDev
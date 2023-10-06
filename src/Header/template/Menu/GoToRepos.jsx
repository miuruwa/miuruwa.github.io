function onClick() {
    window.location.pathname = "/repos"
}

function GoToRepos() {
    return <div 
      className="header-button" title="Репозитории"
      onClick={onClick}
    >
        Репозитории
    </div>
}

export default GoToRepos
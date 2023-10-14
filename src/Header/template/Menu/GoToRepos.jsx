function onClick() {
    window.location.pathname = "/repos"
}

function GoToRepos() {
    return <div 
      className="header-button" title="Репозитории"
      onClick={onClick}
    >
        репозитории
    </div>
}

export default GoToRepos
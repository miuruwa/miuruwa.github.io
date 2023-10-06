import DevIcon from "@webx/icons/DevIcon"

function onClick() {
    window.location.pathname = "/"
}

function HomePageButton() {
    return <div 
      className="header-button" title="На главную"
      onClick={onClick}
    >
        <DevIcon />
    </div>
}

export default HomePageButton
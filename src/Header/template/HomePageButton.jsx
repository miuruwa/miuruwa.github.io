import DevIcon from "@webx/icons/DevIcon"

function onClick() {
    window.location.href = "https://kensoi.github.io/"
}

function HomePageButton() {
    return <div 
      className="header-button" title="На главную"
      onClick={onClick}
    >
        <DevIcon />
        kensoidev
    </div>
}

export default HomePageButton
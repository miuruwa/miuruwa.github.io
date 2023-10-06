import SettingsIcon from "@webx/icons/SettingsIcon"

function onClick() {
    window.location.href = "https://kensoi.github.io/settings"
}

function SettingsButton() {
    return <div 
      className="header-button second" title="Настройки"
      onClick={onClick}
    >
        <SettingsIcon />
    </div>
}

export default SettingsButton
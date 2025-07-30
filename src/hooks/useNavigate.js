export const useNavigate = () => {
    return {
        navigate: (path) => {
            window.location.pathname = path;
        },
        goTo: (link) => {
            window.location.href = link;
        }
    }
}
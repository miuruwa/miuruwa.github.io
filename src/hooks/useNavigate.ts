export const useNavigate = () => {
    return {
        navigate: (path: string) => {
            window.location.pathname = path;
        },
        goTo: (link: string) => {
            window.location.href = link;
        }
    }
}
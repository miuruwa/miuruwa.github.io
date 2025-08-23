import { useLanguage } from "./useLanguage";

export const useNavigate = () => {
    const language = useLanguage();
    return {
        navigate: (path: string) => {
            window.location.pathname = path.replace(":language", language);
        },
        goTo: (link: string) => {
            window.location.href = link;
        }
    }
}
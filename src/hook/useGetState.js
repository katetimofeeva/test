import { useSelector } from "react-redux"

function useGetState (name, theme, palitre){
    const nameTheme = useSelector((state) => state[name])
    const siteThemes = useSelector((state) => state[theme])
    return [nameTheme, siteThemes, ]
}
export default useGetState
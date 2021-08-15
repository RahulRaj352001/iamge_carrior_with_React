import React ,{ useState,useEffect}from 'react'

export default function useScroll() {
    const [scrollposition, setscrollposition] = useState(null)
    function handlescroll() {
        setscrollposition(window.scrollY);
    }
    useEffect(() => {
        document.addEventListener("scroll",handlescroll)
        return () => {
           document.removeEventListener("scroll",handlescroll)
        }
    }, [])
    return scrollposition;
    
}

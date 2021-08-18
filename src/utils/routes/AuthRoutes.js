import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import appContext from '../../store/AppContext'

export default function AuthRoutes(props) {
    const [isLoggedIn, user] = useContext(appContext)
    if (isLoggedIn) return <Route {...props} />
    return <Redirect to="/login"/>
}

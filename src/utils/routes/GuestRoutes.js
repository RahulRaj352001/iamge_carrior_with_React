import { motion } from 'framer-motion'
import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import appContext from '../../store/AppContext'
import AnimatedRoute from './AnimatedRoute'

export default function GuestRoute({children,...rest}) {
    const [isLoggedIn] = useContext(appContext)
    if (!isLoggedIn) return <AnimatedRoute {...rest} > { children}</AnimatedRoute>
   
    return <Redirect to="/"/>
}

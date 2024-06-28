import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Projects() {
    return (
        <>
            <Link to={'/#portfolio'}><h1>Back</h1></Link>

            <Outlet />
        </>
    )
}

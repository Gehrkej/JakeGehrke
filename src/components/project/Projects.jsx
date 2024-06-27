import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Projects() {
    return (
        <>
            <h1><a href={'/'}>Back</a></h1>

            <Outlet />
        </>
    )
}

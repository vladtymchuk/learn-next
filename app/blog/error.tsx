'use client'

export default function ErrorWraooer ({error}: {error: Error}){
    return <h1>Ooops! {error.message}</h1>
}
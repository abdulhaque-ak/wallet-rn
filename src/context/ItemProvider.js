import React, { createContext, useState } from 'react'

export default Context = createContext()


export function Provider(props) {
    const [data, setData] = useState({ signed: false })
    const handleSetData = data => setData(prev => ({ ...prev, ...data }))
    return (
        <Context.Provider value={[data, handleSetData]}>
            {props.children}
        </Context.Provider>
    )
}
import { useCallback, useState, useEffect } from "react"

export function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
    return useStorage<ValueType>(key, defaultValue, window.localStorage)
}
export function useSessionStorage<ValueType>(key: string, defaultValue: ValueType) {
    return useStorage<ValueType>(key, defaultValue, window.sessionStorage)
}
function useStorage<ValueType>(key: string, defaultValue: ValueType, storageObject: Storage) {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}
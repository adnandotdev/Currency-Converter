import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const con = "conversion_rates"
    useEffect(() => {
    
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://v6.exchangerate-api.com/v6/c40dbc574c80011185a2ae3a/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[con]))
        // .then((res) => setData(res[currency]))
    },[currency])

    return data;
}

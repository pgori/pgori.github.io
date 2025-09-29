import { useEffect, useState } from "react";
import { useGlobal } from "@/contexts/useGlobal";

export default function BlogPage() {
    const [data, setData] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);
    const { isDarkTheme } = useGlobal();

    useEffect(() => {
        fetch("http://localhost:8000/api/test")
            .then((res) => {
                if(!res.ok) {
                    throw new Error("Request error");
                }
                return res.json();
            })
            .then((json) => {
                setData(json);
            })
            .catch((err) => {
                console.error("Error on fetching data:", err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) return <p className={ isDarkTheme ? 'text-matrix' : ''}>Loading...</p>

    return <>
        <div className={ isDarkTheme ? 'text-matrix' : ''}>
            <h1>API data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    </>
}
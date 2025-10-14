import { useEffect, useState } from "react";
import { useGlobal } from "@/contexts/useGlobal";
import { API_URLS } from "@/config/api";
import PostsArquive from "@/components/PostsArquive";

type Data = {
    title: string;
    slug: string;
    excerpt: string;
    cover_image: string;
};

export default function BlogPage() {
    const [data, setData] = useState<Array<Data>>([]);
    const [loading, setLoading] = useState(true);
    const { isDarkTheme } = useGlobal();

    useEffect(() => {
        fetch(API_URLS.posts)
            .then((res) => {
                if(!res.ok) {
                    throw new Error("Request error");
                }
                return res.json();
            })
            .then((json) => {
                console.log(json);
                setData(json);
            })
            .catch((err) => {
                console.error("Error on fetching data:", err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) return <div className={"w-screen flex justify-center text-4xl " + (isDarkTheme ? 'text-matrix' : '')}>Loading...</div>

    return <>
        <div className={isDarkTheme ? 'text-matrix' : ''}>
            <PostsArquive menuItems={data}/>
        </div>
    </>
}
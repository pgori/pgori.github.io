import { useGlobal } from "@/contexts/useGlobal";
import { useState, useEffect } from "react";
import { API_URLS } from "@/config/api";
import Markdown from "react-markdown";

type post = {
    title: string;
    content: string;
    slug: string;
};

export default function PostPage() {
    const { isDarkTheme } = useGlobal();
    const [post, setPost] = useState<post | null>(null);
    const [loading, setLoading] = useState(true);

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
                setPost(json);
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
        <h1 className={ isDarkTheme ? 'text-matrix' : ''}>Test</h1>
        <Markdown>{post?.content}</Markdown>
    </>
}
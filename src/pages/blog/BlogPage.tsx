import { useEffect, useState } from "react";
import { useGlobal } from "@/contexts/useGlobal";
import { API_URLS } from "@/config/api";
import PostsArquive from "@/components/PostsArquive";
// import Markdown from "react-markdown";

type data = {
    title: string;
    content: string;
    slug: string;
    cover_image: string;
};

export default function BlogPage() {
    const [data, setData] = useState<Array<data>>([]);
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

    if (loading) return <p className={ isDarkTheme ? 'text-matrix' : ''}>Loading...</p>

    return <>
        <div className={isDarkTheme ? 'text-matrix' : ''}>
            <PostsArquive menuItems={data}/>
            {/* <ul className="space-y-2">
                {data?.map((item, index) => (
                    <li key={index}>
                        <a 
                            href={`${API_URLS.posts + item.slug} `}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          {item.title}  
                        </a>
                    </li>
                ))}
            </ul> */}
            {/* <Markdown>{data?.content}</Markdown> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    </>
}
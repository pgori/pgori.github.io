import { useGlobal } from "@/contexts/useGlobal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URLS } from "@/config/api";
import Markdown from "react-markdown";

type Post = {
    id: number | null;
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    cover_image: string | null;
    created_at: string;
    updated_at: string | null;
};

function PostPage() {
    const { slug } = useParams();
    const { isDarkTheme } = useGlobal();
    const [post, setPost] = useState<Post>(
        {
            id: null, 
            title: "", 
            content: "", 
            excerpt: "", 
            slug: "", 
            cover_image: "", 
            created_at: "", 
            updated_at: ""
        }
    );
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(post.id) return;

        async function fetchPost() {
            setLoading(true);
            const res = await fetch(API_URLS.posts + slug);
            const data = await res.json();
            setPost(data);
            console.log(post);
            setLoading(false);
        }

        fetchPost();
    }, [post, slug]);

    return <>
        <div className={"w-screen flex justify-center " + (isDarkTheme ? 'text-matrix' : '')}>
            {loading ? (
                    <div className="text-3xl">Loading...</div>
                ) : (
                <div className="bg-white border-2 my-10 p-10">
                    <div className="prose lg:prose-xl">
                        <Markdown>{post?.content}</Markdown>
                    </div>
                </div>
        )}
        </div>
    </>
}

export default PostPage;
import { useMatch } from "react-router-dom";

export default function TopNavBar() {
    const match = useMatch("/blog/*");
    return (
        <div className="inline-flex mx-3 text-xl md:text-3xl items-center gap-2 p-2">
            { !match ? (
                <a href="/blog" className="p-1">Blog</a>
            ) : (
                <a href="/" className="p-1">Home</a>
            )}
        </div>
    );
}


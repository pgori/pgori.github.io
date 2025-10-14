import { useMatch, Link } from "react-router-dom";

export default function TopNavBar() {
    const match = useMatch("/blog/*");
    return (
        <div className="inline-flex mx-3 text-xl md:text-3xl items-center gap-2 p-2">
            { !match ? (
                <Link to="/blog" className="p-1">Blog</Link>
            ) : (
                <>
                    <Link to="/" className="p-1">Home</Link>
                    <Link to="/blog" className="p-1">Blog</Link>
                </>
            )}
        </div>
    );
}


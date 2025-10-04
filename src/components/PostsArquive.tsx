import { API_URLS } from "@/config/api"

type data = {
    title: string;
    content: string;
    slug: string;
};

export default function PostsArquive({menuItems}: {menuItems: Array<data>}) {
    return <>
        <div className="relative col-start-1 row-span-full row-start-1 max-lg:hidden">
            <ul className="px-5 mt-4 space-y-2 text-lg md:text-3xl">
                {menuItems?.map((item, index) => (
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
            </ul>
        </div>
    </>
}
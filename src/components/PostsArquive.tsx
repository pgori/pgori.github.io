import { API_URLS } from "@/config/api"
import noImage from "@/assets/images/no_image.png"

type data = {
    title: string;
    content: string;
    slug: string;
    cover_image: string
};

export default function PostsArquive({menuItems}: {menuItems: Array<data>}) {
    return <>
        <div className="w-screen">
            {menuItems?.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row w-full max-w-3xl rounded-2xl mx-auto shadow-md overflow-hidden">
                    <div className="md:w-1/2 w-full">
                        <img 
                            src={item.cover_image || noImage}
                            alt="alguma coisa"
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col justify-between p-6">
                        <a 
                            href={`${API_URLS.posts + item.slug} `}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}  
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </>
}
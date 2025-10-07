import { useNavigate } from "react-router-dom";
import noImage from "@/assets/images/no_image.png"

type data = {
    title: string;
    slug: string;
    cover_image: string
};

export default function PostsArquive({menuItems}: {menuItems: Array<data>}) {
    const navigate = useNavigate();

    return <>
        <div className="w-screen ">
            {menuItems?.map((item, index) => (
                <a href="#" key={index}>
                    <div key={index} className="flex flex-col md:flex-row w-full max-h-[230px] max-w-3xl mx-auto shadow-md overflow-hidden mb-5 group-hover:stroke-white"
                        onClick={() => navigate(`/blog/post/${item.slug}`)}
                    >
                        <div className="md:w-1/2 w-full">
                            <img 
                                src={item.cover_image || noImage}
                                alt=""
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col justify-between px-4 py-1">
                            <div className="text-3xl">{item.title}</div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </>
}
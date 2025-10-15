import { Link } from "react-router-dom";
import noImage from "@/assets/images/no_image.png"

type Data = {
    title: string;
    slug: string;
    excerpt: string;
    cover_image: string
};

export default function PostsArquive({menuItems}: {menuItems: Array<Data>}) {

    return <>
        <div className="w-screen ">
            <div className="my-[85px] md:mt-0">
                {menuItems?.map((item, index) => (
                    <Link to={"/blog/post/" + item.slug} key={index}>
                        <div key={index} className="flex flex-col md:flex-row w-full md:max-h-[250px] mt-5 max-w-3xl mx-auto shadow-md overflow-auto md:mb-2 mb-0 group-hover:stroke-white border-2">
                            <div className="md:w-1/2 w-full">
                                <img 
                                    src={item.cover_image || noImage}
                                    alt=""
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <div className="md:w-1/2 w-full flex flex-col justify-between px-4 py-1 bg-white">
                                <div className="text-3xl">{item.title}</div>
                                <div className="text-2xl md:line-clamp-5">{item.excerpt}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
}
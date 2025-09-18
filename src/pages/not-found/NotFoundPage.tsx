import { useGlobal } from "@/contexts/useGlobal";

function NotFoundPage() {
    const { isDarkTheme } = useGlobal();

    return <h1 className={isDarkTheme ? 'text-matrix' : ''}>Page Not Found</h1>
}

export default NotFoundPage;
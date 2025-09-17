import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import { useGlobal } from "@/contexts/useGlobal";

function ThemeButton() {
    const {isDarkTheme, setIsDarkTheme} = useGlobal();
    return (
        <div className="rounded-3xl bg-gray-500 inline-flex items-center gap-2 p-2">            
            <button className={"rounded-full hover:bg-gray-400 p-1 " + (isDarkTheme ? 'bg-gray-400 text-white' : '')} onClick={() => setIsDarkTheme(true)}><FontAwesomeIcon icon={["far", "moon"]} /></button>
            <button className={"rounded-full hover:bg-gray-400 p-1 " + (!isDarkTheme ? 'bg-gray-400 text-white' : '')} onClick={() => setIsDarkTheme(false)}><FontAwesomeIcon icon={["far", "sun"]} /></button>
        </div>
    );
}

export default ThemeButton
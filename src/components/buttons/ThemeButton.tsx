import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

type ThemeButtonProps = {
    setTheme: (value:boolean) => void;
};

function ThemeButton({setTheme}: ThemeButtonProps) {
    return (
        <div className="rounded-3xl bg-gray-500 inline-flex items-center gap-2 p-2">            
            <button className="rounded-full hover:bg-gray-400 p-1" onClick={() => setTheme(true)}><FontAwesomeIcon icon={["fas", "moon"]} /></button>
            <button className="rounded-full hover:bg-gray-400 p-1" onClick={() => setTheme(false)}><FontAwesomeIcon icon={["fas", "sun"]} /></button>
        </div>
    );
}

export default ThemeButton
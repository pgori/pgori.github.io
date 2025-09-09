import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function ThemeButton() {
    return (
        <div className="rounded-3xl bg-gray-500 inline-flex items-center gap-2 p-2">            
            <button className="rounded-full hover:bg-gray-400 p-1"><FontAwesomeIcon icon={["fas", "moon"]} /></button>
            <button className="rounded-full hover:bg-gray-400 p-1"><FontAwesomeIcon icon={["fas", "sun"]} className="cursor-pointer" /></button>
        </div>
    );
}

export default ThemeButton
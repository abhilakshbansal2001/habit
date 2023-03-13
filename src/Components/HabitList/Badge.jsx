import { COMPLETE, FAILED, INCOMPLETE, SKIPPED } from "../../Helpers/constants/Global";

const Badge = ({ type }) => {

    let text = '' , color = ''

    switch(type){
        case COMPLETE:
            text = 'complete'
            color = 'bg-green-500'
            break;
        case INCOMPLETE:
            text = 'pending'
            color = 'bg-secondary'
            break;
        case FAILED:
            text = 'failed'
            color = 'bg-red-500'
            break;
        case SKIPPED:
            text = 'skipped'
            color = 'bg-yellow-500'
            break;
            
    }
    return <span className={`text-xs font-semibold text-white ${color} p-[2px] px-2 rounded-xl capitalize`}>{text}</span>

}

export default Badge;
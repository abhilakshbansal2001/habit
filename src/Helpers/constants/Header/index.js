import { AiFillCalendar, AiFillEdit, AiOutlineShareAlt } from 'react-icons/ai'
import { IoAddOutline } from "react-icons/io5";
import { BsSortUpAlt } from 'react-icons/bs'
import { BiMoveHorizontal } from 'react-icons/bi'
import { MdDriveFileMoveRtl } from 'react-icons/md'
export const habitListIcon = {
    today: {
        Icon: AiFillCalendar,
    },
    order: {
        Icon: BsSortUpAlt,
    },
    add: {
        Icon: IoAddOutline
    }
}

export const habitDetailIcon = {
    calender: {
        Icon: AiFillCalendar,
    },
    edit: {
        Icon: AiFillEdit,
    },
    share: {
        Icon: AiOutlineShareAlt,
    },
    move:{ 
        Icon: BiMoveHorizontal,
    }



}
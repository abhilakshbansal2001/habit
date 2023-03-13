import moment from "moment"
import { MONTHS } from "../Helpers/constants/Global";

export const dateConstructor = (date ) => {
    const momentDate = moment(date);
    return momentDate.get("date") + " " +MONTHS[momentDate.get("month") ]
}
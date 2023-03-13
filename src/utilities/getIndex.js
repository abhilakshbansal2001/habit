import moment from "moment";

export const getIndex = (initialDate , endDate) => {
    const start = moment(initialDate);
    const end = moment(endDate);


    return end.diff(start , "days")

}
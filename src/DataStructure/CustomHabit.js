import moment from "moment";
import { CustomArray } from "./CustomArray";
import { v4 as uuidv4 } from 'uuid'

export default class Habit{
    
    constructor(name , timeOfDay , startDate= moment(new Date()).format("DD-MM-YYYY") , description ){
        this.name = name;
        this.id = uuidv4();
        this.timeOfDay = timeOfDay
        this.startDate = startDate
        this.description = description
        this.prevStatus = new Array()
        this.prevStatus.push({
            status: 'incomplete',
            date: moment(this.startDate).get("D"),
            month: moment(this.startDate).get("M"),
            year: moment(this.startDate).get("Y"),
        })
    }
    getStatusForDate(date = new Date()){
        const idx = Math.round((this.startDate - date)/864e5)
        return this.prevStatus(idx).status
    }
    updateStatus(date , status){
        const days = Math.round((this.startDate - date)/864e5);
        if(this.prevStatus.size - 7 < days){
            const element = { ...this.prevStatus.getElement(days)};
            if(element == -1)return;

            element.status = status;
            
            this.prevStatus.update(days , element)
        }
    }
}
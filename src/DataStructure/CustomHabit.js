import { CustomArray } from "./CustomArray";

export default class Habit{
    constructor(name , timeOfDay , startDate= new Date() , description ){
        this.name = name;
        this.timeOfDay = timeOfDay
        this.startDate = startDate
        this.description = description
        this.prevStatus = new CustomArray()
        this.prevStatus.push({
            status: 'incomplete',
            date: this.startDate.getDate(),
            month: this.startDate.getMonth(),
            year: this.startDate.getFullYear(),
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
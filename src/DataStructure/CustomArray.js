export class CustomArray{
    constructor(){
        this.size = 0;
        this.arr = [];
    }

    push(element){
        this.arr.push(element)
        this.size++;
    }
    update(index , element){
        this.arr[index] = element;
    }
    getElement(index){
        if(index >= 0 && index < size)
            return this.arr[index];
        return -1;
    }

}
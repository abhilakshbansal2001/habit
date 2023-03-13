import { COMPLETE } from "../Helpers/constants/Global";

export const getLongestStreak = (arr) => {
    let highest = 0 , i = 0;
    let endIdx = -1 ; 
    

    arr.forEach((el , idx) => {
        if(el?.status === COMPLETE){
                i++;
                if(i >= highest){
                    endIdx = idx;
                    highest = i;
                }
        }else{
            i = 0;
        }
    });
    return {
        longestStreak : highest,
        endIdx,
    };
}

export const getCurrentStreak = (arr,lastIndex) => {
    if(!arr[lastIndex])return 0;
    let highest = 0;
    for(let i = lastIndex ; i>=0 ; i--){
        if(arr[i]?.status === COMPLETE){
            highest++;
        }else{
            return highest;
        }
    }
    return highest;
}
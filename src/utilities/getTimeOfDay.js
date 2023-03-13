const today = new Date()
const curHr = today.getHours()

let time;
if (curHr < 12) time = 'morning'
else if (curHr < 18) time = 'afternoon'
else time=  'evening'

export const timeOfDay = () => time;
const SECOND_IN_HOUR = 3600
const SECOND_IN_MINUTE = 60

export const parseTime = time => {
    const splitTime = time.split(':').map(num => parseInt(num, 10));
    
    return splitTime[0] * SECOND_IN_HOUR + splitTime[1] * SECOND_IN_MINUTE + splitTime[2]
}

const getHour = time => {
    return Math.floor(time / SECOND_IN_HOUR)
}

const getMinute = time => {
    const minuteLeft = time - (SECOND_IN_HOUR * getHour(time))
    return Math.floor(minuteLeft / SECOND_IN_MINUTE)
}

const getSecond = time => {
    const secondLeft = time - (SECOND_IN_HOUR * getHour(time)) - (SECOND_IN_MINUTE * getMinute(time))
    return Math.floor(secondLeft)
}

const getFormatTime = time => {
    const hour = getHour(time);
    const minute = getMinute(time);
    const second = getSecond(time);

    return `${hour}:${minute}:${second}`
}

export default getFormatTime
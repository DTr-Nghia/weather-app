export const timeFormat = (mili) => {
    const date = new Date(mili*1000)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >=12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let getTime = hours + ':' + minutes + ' ' + ampm
    return getTime
}
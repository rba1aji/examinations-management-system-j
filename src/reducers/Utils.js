export function formateDob(dob) {
    dob = new Date(dob);
    return ('0' + dob.getDate()).slice(-2) + "/" + ('0' + (dob.getMonth() + 1)).slice(-2) + "/" + dob.getFullYear();
}


export const inputFormateDateTime = (val) => {
    // 2020-12-13T12:30:00.000+00:00 to yyyy-mm-ddThh:mm
    let year = val.slice(0, 4);
    let month = val.slice(5, 7);
    let date = val.slice(8, 10);
    let hour = val.slice(11, 13);
    let minute = val.slice(14, 16);
    return year + "-" + month + "-" + date + "T" + hour + ":" + minute;
}

export const outputFormateDateTime = (val) => {
    // 2020-12-13T12:30:00.000+00:00 to 13-12-2020, 12:30 PM
    let year = val.slice(0, 4);
    let month = val.slice(5, 7);
    let date = val.slice(8, 10);
    let hour = val.slice(11, 13);
    let minute = val.slice(14, 16);
    // let second = val.slice(17, 19);
    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return date + "/" + month + "/" + year + ", " + hour + ":" + minute + " " + ampm;
}

export const outputFormateTime = (val) => {
    // 2020-12-13T12:30:00.000+00:00 to 12:30 PM
    let hour = val.slice(11, 13);
    let minute = val.slice(14, 16);
    // let second = val.slice(17, 19);
    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour + ":" + minute + " " + ampm;
}

export const outputFormateStartEndDateTime = (start, end) => {
    if (start.split('T')[0] === end.split('T')[0])
        return outputFormateDateTime(start) + " - " + outputFormateTime(end);
    else
        return outputFormateDateTime(start) + " - " + outputFormateDateTime(end);
}
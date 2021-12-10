const GetDateFormatter = (region, clockCycleTime) => {
    const timezone = clockCycleTime.toLocaleString('en-US', {
        timeZone: region,
    });
    const time = new Date(timezone);

    var current_day = time.getDay();
    var dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    current_day = dayArr[current_day];

    var current_month = time.getMonth();
    var monthArr = [ 'Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ];
    current_month = monthArr[current_month];

    return time.getDate() + ' ' + current_day + ' ' + current_month;
};

export default GetDateFormatter;

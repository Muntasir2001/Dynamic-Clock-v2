const GetDateFormatter = (clockCycleTime) => {
    var current_day = clockCycleTime.getDay();
    var dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    current_day = dayArr[current_day];

    var current_month = clockCycleTime.getMonth();
    var monthArr = [ 'Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ];
    current_month = monthArr[current_month];

    return clockCycleTime.getDate() + ' ' + current_day + ' ' + current_month;
};

export default GetDateFormatter;

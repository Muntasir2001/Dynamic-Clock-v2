const TimeFormatter = (clockCycleTime) => {
    let s = clockCycleTime.getSeconds();
    let h = clockCycleTime.getHours();
    let m = clockCycleTime.getMinutes();

    let am_pm = h < 12 ? 'AM' : 'PM';

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
    }

    return {
        time:
            (h < 10 ? '0' : '') +
            h +
            ':' +
            (m < 10 ? '0' : '') +
            m +
            ':' +
            (s < 10 ? '0' : '') +
            s,
        am_pm,
    };
};

export default TimeFormatter;

const IntlTimeFormatter = (region, clockCycleTime) => {
    const timezone = clockCycleTime.toLocaleString('en-US', {
        timeZone: region,
    });
    const intlTime = new Date(timezone);
    let s = intlTime.getSeconds();
    let h = intlTime.getHours();
    let m = intlTime.getMinutes();

    let am_pm = h < 12 ? 'AM' : 'PM';

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
    }

    return (
        (h < 10 ? '0' : '') +
        h +
        ':' +
        (m < 10 ? '0' : '') +
        m +
        ':' +
        (s < 10 ? '0' : '') +
        s +
        ' ' +
        am_pm
    );
};

export default IntlTimeFormatter;

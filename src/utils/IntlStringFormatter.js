const IntlStringFormatter = (region, clockCycleTime) => {
    const timezone = clockCycleTime.toLocaleString('en-US', {
        timeZone: region,
    });
    const intlHour = new Date(timezone).getHours();
    const hour = clockCycleTime.getHours();
    const intlMinutes = new Date(timezone).getMinutes();
    const minutes = clockCycleTime.getMinutes();

    if (intlHour - hour < 0) {
        if (intlMinutes - minutes !== 0) return `${hour - intlHour} hours ${Math.abs(minutes - intlMinutes)} minutes behind`
        return `${hour - intlHour} hours behind`;
    } else if (intlHour - hour > 0) {
        if (intlMinutes - minutes !== 0) return `${intlHour - hour} hours and ${Math.abs(intlMinutes - minutes)} minutes ahead`;
        return `${intlHour - hour} hours ahead`;
    } else {
        return 'Same Time';
    }
};

export default IntlStringFormatter;

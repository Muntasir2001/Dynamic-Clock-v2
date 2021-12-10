//* Styled

//* Components
import {
    StopwatchWrapper,
    StopwatchClock,
    StopwatchOGTime,
    StopwatchBtn,
    StopwatchBtnWrapper,
} from './styled.js';
//* React
import { useState, useEffect } from 'react';
//* Redux

const Stopwatch = ({ clockCycleTime }) => {
    const [status, setStatus] = useState(0); // stopped = 0, started = 1
    const [OGTimeStartedOn, setOGTimeStartedOn] = useState(0);
    const [timeStartedOn, setTimeStartedOn] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [stopwatchTime, setStopwatchTime] = useState('00:00:00');

    useEffect(() => {
        if (status === 1) {
            // Get the current time - since the time the previous working stopwatch time
            // this means ex: 4s - 1s = 3s and 5s - 2s = 3s
            // This is an important part as it allows you to essentially put the device to sleep
            // and after switching it on, it will keep track of how much time has passed
            // (this is possible as when asleep, code stops running, but state is still present)
            //? CON: stopwatch is no longer accurate
            let t = clockCycleTime.getTime() - timeStartedOn;
            // new 'previous working stopwatch time'
            setTimeStartedOn(Date.now());
            // add the current time of the stopwatch with t
            // ternary part is just there to increase stopwatch accuracy
            setElapsedTime((prev) => prev + (t < 1000 ? 1000 : t + 6));

            function updateStopwatch() {
                let tempTime = elapsedTime;
                tempTime = Math.floor(tempTime / 1000);
                let s = tempTime % 60;
                tempTime = Math.floor(tempTime / 60);
                let m = tempTime % 60;
                tempTime = Math.floor(tempTime / 60);
                let h = tempTime % 60;

                setStopwatchTime(`${checkTime(h)}:${checkTime(m)}:${checkTime(s)}`);
            }
            updateStopwatch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clockCycleTime]);
    // If status is enabled in the dependency array, everytime the user pressed start and stop, it will run the clock
    // This means that if the user spams the button, the stopwatch timer will go up 1 second (per start/stop interval)
    // }, [clockCycleTime, status]);

    // const updateStopwatch = () => {
    //     let tempTime = elapsedTime;
    //     tempTime = Math.floor(tempTime / 1000);
    //     let s = tempTime % 60;
    //     tempTime = Math.floor(tempTime / 60);
    //     let m = tempTime % 60;
    //     tempTime = Math.floor(tempTime / 60);
    //     let h = tempTime % 60;

    //     setStopwatchTime(`${checkTime(h)}:${checkTime(m)}:${checkTime(s)}`);
    // };

    // when the user clicks the start/stop button
    const startStop = () => {
        //if stopwatch is not running and user presses start, run() every 1 second
        if (status === 0) {
            if (OGTimeStartedOn === 0) getCurrentTime();
            setTimeStartedOn(clockCycleTime.getTime());

            setStatus(1);
        } else {
            setTimeStartedOn(clockCycleTime.getTime());

            setStatus(0);
        }
    };

    const reset = () => {
        setStatus(0);
        setElapsedTime(0);
        setTimeStartedOn(0);
        setStopwatchTime('00:00:00');

        if (OGTimeStartedOn.length > 0) setOGTimeStartedOn(0);
    };

    const getCurrentTime = () => {
        // if using clockCycleTime, it will sync with the main clock
        //? CON: When clicking start, it will essentially start the stopwatch only when clockCycleTime updates
        let s = clockCycleTime.getSeconds();
        let m = clockCycleTime.getMinutes();
        let h = clockCycleTime.getHours();

        let am_pm = h > 12 ? 'pm' : 'am';

        if (h === 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12;
        }

        setOGTimeStartedOn(`${checkTime(h)}:${checkTime(m)}:${checkTime(s)} ${am_pm}`);
    };

    function checkTime(i) {
        // Add a 0 before any single digit
        return i < 10 ? '0' + i : i;
    }

    return (
        <StopwatchWrapper>
            <StopwatchClock>
                {stopwatchTime}
                <StopwatchOGTime>{OGTimeStartedOn !== 0 && `Started at: ${OGTimeStartedOn}`}</StopwatchOGTime>
            </StopwatchClock>
            <StopwatchBtnWrapper>
                <StopwatchBtn color={status === 1 ? '#A10E0E' : '#2D942D'} id='start' onClick={startStop}>
                    {status === 1 ? 'Stop' : 'Start'}
                </StopwatchBtn>
                <StopwatchBtn color='#4169E1' onClick={reset}>
                    Reset
                </StopwatchBtn>
            </StopwatchBtnWrapper>
        </StopwatchWrapper>
    );
};

export default Stopwatch;

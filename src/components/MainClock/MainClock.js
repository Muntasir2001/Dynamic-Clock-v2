//* Styled
import {
    Container,
    ClockContainer,
    ClockWrapper,
    ClockDisplayWrapper,
    ClockAMPMContainer,
    ClockAMPMWrapper,
    ClockDateWrapper,
    StopwatchIconWrapper,
    StopwatchContainer,
} from './styled';
//* Components
import TimeFormatterFunc from '../../utils/TimeFormatter';
import DateFormatterFunc from '../../utils/GetDateFormatter';
import AlarmIcon from '../../svg/AlarmIcon';
import AlarmOffIcon from '../../svg/AlarmOffIcon';
//* React
import { useState } from 'react';
import Stopwatch from './Stopwatch';
//* Redux

const MainClock = ({ clockCycleTime, showNav }) => {
    const { time, am_pm } = TimeFormatterFunc(clockCycleTime);
    const date = DateFormatterFunc(clockCycleTime);

    const [showStopwatch, setShowStopwatch] = useState(false);

    const handleStopwatchDisplay = () => {
        setShowStopwatch((prev) => !prev);
    };

    return (
        <>
            <StopwatchIconWrapper
                showNav={showNav}
                onClick={handleStopwatchDisplay}
            >
                {showStopwatch ? <AlarmIcon /> : <AlarmOffIcon />}
            </StopwatchIconWrapper>
            
            <Container showStopwatch={showStopwatch}>
                <ClockContainer showStopwatch={showStopwatch}>
                    <ClockWrapper>
                        <ClockDisplayWrapper>{time}</ClockDisplayWrapper>
                        <ClockAMPMContainer>
                            <ClockAMPMWrapper transparent={am_pm === 'PM'}>
                                AM
                            </ClockAMPMWrapper>
                            <ClockAMPMWrapper transparent={am_pm === 'AM'}>
                                PM
                            </ClockAMPMWrapper>
                        </ClockAMPMContainer>
                    </ClockWrapper>
                    <ClockDateWrapper>{date}</ClockDateWrapper>
                </ClockContainer>
                <StopwatchContainer showStopwatch={showStopwatch}>
                    <Stopwatch clockCycleTime={clockCycleTime}/>
                </StopwatchContainer>
            </Container>
        </>
    );
};

export default MainClock;

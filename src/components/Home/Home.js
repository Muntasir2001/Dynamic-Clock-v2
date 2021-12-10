//* Styled
import { Container } from './styled';
//* Components
import MainClock from '../MainClock/MainClock';
import IntlClocks from '../IntlClocks/IntlClocks';
//* React
import { useState, useEffect } from 'react';
//* Redux

const Home = ({ showNav }) => {
    const [clockCycleTime, setClockCycleTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setClockCycleTime(new Date());
        }, 1000);

        return () => clearInterval(interval); //This is important
    }, [clockCycleTime]);

    return (
        <Container>
            <MainClock clockCycleTime={clockCycleTime} showNav={showNav} />
            <IntlClocks clockCycleTime={clockCycleTime} showNav={showNav} />
        </Container>
    );
};

export default Home;

//* Styled
import {
    ModalContainer,
    Container,
    CloseIconWrapper,
    PlusIconWrapper,
    IntlClockIconWrapper,
    ClockContainer,
} from './styled';
//* Components
import WorldIcon from '../../svg/WorldIcon';
import WorldOffIcon from '../../svg/WorldOffIcon';
import CloseIcon from '../../svg/CloseIcon';
import PlusIcon from '../../svg/PlusIcon';
import LoadingIcon from '../../svg/LoadingIcon';
import Form from './Form/Form';
import IntlClock from './IntlClock/IntlClock';
//* React
import { useState, useEffect } from 'react';
//* Redux
import { useDispatch, useSelector } from 'react-redux';
import { getClocks } from '../../redux/actions/clocks';

const IntlClocks = ({ clockCycleTime, showNav }) => {
    const [showIntlClocks, setShowIntlClocks] = useState(false);
    const [showAddClock, setShowAddClock] = useState(false);
    const [updateFormData, setUpdateFormData] = useState({
        id: '',
        title: '',
        region: '',
    });
    const user = JSON.parse(localStorage.getItem('dynamicClockUser'));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClocks());
    }, []);

    const intlClocksData = useSelector((state) => state.clocksReducer);

    const handleIntlClockDisplay = () => {
        setShowIntlClocks((prev) => !prev);
    };
    const handleAddClockDisplay = () => {
        setShowAddClock((prev) => !prev);
        setUpdateFormData({ id: '', title: '', region: '' });
    };

    const handleUpdate = (id, title, region) => {
        setUpdateFormData({ id, title, region });
        setShowAddClock(true);
    };

    return (
        <>
            <IntlClockIconWrapper showNav={showNav} onClick={handleIntlClockDisplay}>
                {showIntlClocks ? <WorldIcon /> : <WorldOffIcon />}
            </IntlClockIconWrapper>
            {showIntlClocks && (
                <ModalContainer>
                    <Container showAddClock={showAddClock}>
                        <CloseIconWrapper onClick={handleIntlClockDisplay}>
                            <CloseIcon />
                        </CloseIconWrapper>
                        {user && (
                            <PlusIconWrapper onClick={handleAddClockDisplay}>
                                <PlusIcon />
                            </PlusIconWrapper>
                        )}
                        {showAddClock && (
                            <Form
                                clockCycleTime={clockCycleTime}
                                setShowAddClock={setShowAddClock}
                                updateFormData={updateFormData}
                            />
                        )}
                        {user ? (
                            intlClocksData.isLoading ? (
                                <LoadingIcon className='rotate' />
                            ) : (
                                <ClockContainer showAddClock={showAddClock}>
                                    {intlClocksData.clocks?.map((clock) => (
                                        <IntlClock
                                            key={clock._id}
                                            id={clock._id}
                                            title={clock.title}
                                            region={clock.region}
                                            clockCycleTime={clockCycleTime}
                                            handleUpdate={handleUpdate}
                                        />
                                    ))}
                                </ClockContainer>
                            )
                        ) : (
                            <p style={{ textAlign: 'center' }}>Please login to add an international clock</p>
                        )}
                    </Container>
                </ModalContainer>
            )}
        </>
    );
};

export default IntlClocks;

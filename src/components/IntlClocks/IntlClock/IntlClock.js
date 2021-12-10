//* Styled
import {
    ClockContainer,
    ClockWrapper,
    DeleteWrapper,
    OptionsModal,
    BtnContainer,
    OptionsButton,
} from './styled';

//* Components
import IntlStringFormatter from '../../../utils/IntlStringFormatter';
import IntlTimeFormatter from '../../../utils/IntlTimeFormatter';
import GetIntlDateFormatter from '../../../utils/GetIntlDateFormatter';

//* React
import { useState } from 'react';
//* Redux
import { useDispatch } from 'react-redux';
import { deleteClock } from '../../../redux/actions/clocks';

const IntlClock = ({ id, title, region, clockCycleTime, handleUpdate }) => {
    const dispatch = useDispatch();
    const [optionsModal, setOptionsModal] = useState(false);
    const handleDelete = () => {
        dispatch(deleteClock(id));
    };

    const handleOptionsModal = () => {
        setOptionsModal((prev) => !prev);
    };

    return (
        <ClockContainer>
            <DeleteWrapper onClick={handleOptionsModal} />
            {optionsModal && (
                <OptionsModal>
                    <BtnContainer>
                        <OptionsButton
                            update
                            onClick={() => {
                                handleUpdate(id, title, region);
                                handleOptionsModal();
                            }}
                        >
                            Update
                        </OptionsButton>
                        <OptionsButton onClick={handleDelete}>Delete</OptionsButton>
                    </BtnContainer>
                </OptionsModal>
            )}
            <ClockWrapper>
                <p>{IntlStringFormatter(region, clockCycleTime)}</p>
                <span>
                    <h1>{IntlTimeFormatter(region, clockCycleTime)}</h1>
                    <p style={{ textAlign: 'center' }}>{GetIntlDateFormatter(region, clockCycleTime)}</p>
                </span>
                <p>{title ? title : region}</p>
            </ClockWrapper>
        </ClockContainer>
    );
};

export default IntlClock;

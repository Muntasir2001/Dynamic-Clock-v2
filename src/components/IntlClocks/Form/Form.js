//* Styled
import { Container, LeftWrapper, RightWrapper, ClockContainer, ClockWrapper, Button } from './styled';
//* Components
import TickIcon from '../../../svg/TickIcon';
import CustomSelect from './CustomSelect/CustomSelect';
import timezoneData from './timezoneData';
//* React
import { useState } from 'react';
import IntlTimeFormatter from '../../../utils/IntlTimeFormatter';
import GetIntlDateFormatter from '../../../utils/GetIntlDateFormatter';
import IntlStringFormatter from '../../../utils/IntlStringFormatter';
//* Redux
import { useDispatch } from 'react-redux';
import { addClock, updateClock } from '../../../redux/actions/clocks';
const Form = ({ clockCycleTime, setShowAddClock, updateFormData }) => {
    const [title, setTitle] = useState(updateFormData.title ? updateFormData.title : '');
    const [region, setRegion] = useState(updateFormData.region ? updateFormData.region : '');
    const user = JSON.parse(localStorage.getItem('dynamicClockUser'));

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const dispatch = useDispatch();
    const onSubmit = async (e) => {
        e.preventDefault();

        if (updateFormData.id) {
            dispatch( updateClock(updateFormData.id, { title: title ? title : region, region: region, name: user?.result?.name, }) );
        } else {
            dispatch(addClock({ title: title ? title : region, region: region, name: user?.result?.name }));
        }

        setShowAddClock(false);
    };

    return (
        <Container>
            <LeftWrapper>
                <form onSubmit={onSubmit}>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={handleTitle}
                        placeholder={region.length !== 0 ? region : 'Put your custom title here'}
                    />
                    <CustomSelect timezoneData={timezoneData} region={region} setRegion={setRegion} />
                    <Button disabled={region.length === 0} type='submit'>
                        <TickIcon /> {updateFormData.id ? 'Update Clock' : 'Add Clock'}
                    </Button>
                </form>
            </LeftWrapper>
            <RightWrapper>
                <ClockContainer>
                    {region.length !== 0 && (
                        <ClockWrapper>
                            <p>{IntlStringFormatter(region, clockCycleTime)}</p>
                            <span>
                                <h1>{IntlTimeFormatter(region, clockCycleTime)}</h1>
                                <p style={{ textAlign: 'center' }}>
                                    {GetIntlDateFormatter(region, clockCycleTime)}
                                </p>
                            </span>
                            <p>{title ? title : region}</p>
                        </ClockWrapper>
                    )}
                </ClockContainer>
            </RightWrapper>
        </Container>
    );
};

export default Form;

//* Styled
import { Container, IconContainer, InputWrapper, OptionsContainer, OptionsWrapper } from './styled';
//* Components
import ChevronDown from '../../../../svg/ChevronDown.js';
import CloseIcon from '../../../../svg/CloseIcon.js';
//* React
import { useState } from 'react';
//* Redux

const CustomSelect = ({ timezoneData, region, setRegion }) => {
    const [searchInput, setSearchInput] = useState(region ? region : '');
    const [focused, setFocused] = useState(false);

    const onFocus = () => setFocused(true);
    const onBlur = () =>
        setTimeout(() => {
            setFocused(false);
        }, 100);
    const handleChange = (e) => {
        setSearchInput(e.target.value);

        if (e.target.value.length === 0) setRegion('');
    };
    const handleRegion = (data) => {
        setRegion(data.value);
        setSearchInput(data.value);
    };

    const handleClear = () => {
        setRegion('');
        setSearchInput('');
    };

    const escapeRegExp = (str) => str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');

    const filterBy = (searchTerm) => {
        const re = new RegExp(escapeRegExp(searchTerm), 'i');
        return (timezoneData) => {
            for (let prop in timezoneData) {
                if (!timezoneData.hasOwnProperty(prop)) continue;
                if (re.test(timezoneData[prop])) return true;
            }
            return false;
        };
    };

    return (
        <Container>
            {searchInput ? (
                <IconContainer onClick={handleClear}>
                    <CloseIcon />
                </IconContainer>
            ) : (
                <IconContainer noHover>
                    <ChevronDown />
                </IconContainer>
            )}

            <InputWrapper>
                <label>Region</label>
                <input
                    id='regionId'
                    type='text'
                    name='region'
                    value={searchInput}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoComplete='off'
                    placeholder={'Put your desired region here'}
                />
            </InputWrapper>
            {focused && (
                <OptionsContainer>
                    {timezoneData.filter(filterBy(searchInput?.toLowerCase()))?.map((data) => (
                        <OptionsWrapper
                            key={data.value}
                            onClick={() => handleRegion(data)}
                            value={data.value}
                        >
                            {data.label}
                        </OptionsWrapper>
                    ))}
                </OptionsContainer>
            )}
        </Container>
    );
};

export default CustomSelect;

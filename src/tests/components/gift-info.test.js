import React from 'react';
import { shallow } from 'enzyme';

import GiftInfo from '../../components/gift-info';

describe('<GiftInfo />', () => {
    it('Renders without crashing', () => {
        shallow(<GiftInfo />);
    });
});
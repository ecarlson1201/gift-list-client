import React from 'react';
import { shallow } from 'enzyme';

import GiftListBoard from '../../components/gift-list-board';

describe('<GiftListBoard />', () => {
    it('Renders without crashing', () => {
        shallow(<GiftListBoard />);
    });
});
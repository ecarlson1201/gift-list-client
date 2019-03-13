import React from 'react';
import { shallow } from 'enzyme';

import GiftList from '../../components/gift-list';

describe('<GiftList />', () => {
    it('Renders without crashing', () => {
        shallow(<GiftList />);
    });
});
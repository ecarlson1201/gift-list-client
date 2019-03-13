import React from 'react';
import { shallow } from 'enzyme';

import PostGift from '../../components/post-gift';

describe('<PostGift />', () => {
    it('Renders without crashing', () => {
        shallow(<PostGift />);
    });
});
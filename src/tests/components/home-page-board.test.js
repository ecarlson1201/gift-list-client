import React from 'react';
import { shallow } from 'enzyme';

import HomePageBoard from '../../components/home-page-board';

describe('<HomePageBoard />', () => {
    it('Renders without crashing', () => {
        shallow(<HomePageBoard />);
    });
});
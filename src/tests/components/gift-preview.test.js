import React from 'react';
import { shallow } from 'enzyme';

import GiftPreview from '../../components/gift-preview';

describe('<GiftPreview />', () => {
    it('Renders without crashing', () => {
        shallow(<GiftPreview />);
    });
});
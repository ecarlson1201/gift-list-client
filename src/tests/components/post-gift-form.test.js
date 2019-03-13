import React from 'react';
import { shallow } from 'enzyme';

import PostGiftForm from '../../components/post-gift-form';

describe('<PostGiftForm />', () => {
    it('Renders without crashing', () => {
        shallow(<PostGiftForm />);
    });
});
import React from 'react';
import { shallow } from 'enzyme';

import GiftSaveForm from '../../components/gift-save-form';

describe('<GiftSaveForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GiftSaveForm />);
    });
});
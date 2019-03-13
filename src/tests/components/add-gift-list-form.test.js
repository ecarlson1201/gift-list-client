import React from 'react';
import { shallow } from 'enzyme';

import AddGiftListForm from '../../components/add-gift-list-form';

describe('<AddGiftListForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddGiftListForm />);
    });
});
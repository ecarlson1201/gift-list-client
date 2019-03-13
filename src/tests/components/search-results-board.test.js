import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsBoard from '../../components/search-results-board';

describe('<SearchResultsBoard />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchResultsBoard />);
    });
});
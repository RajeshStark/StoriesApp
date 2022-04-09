import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native';
import { inputTypes } from '../../src/Components/types';
import CustomSearchbar from '../../src/Components/CustomSearchbar';


afterEach(cleanup);

describe('<TextInput/> ', () => {
    it('search input', async () => {
        const mock = jest.fn()
        const props: inputTypes = {
            value: '',
            onChangeText: mock,
            placeholder: 'Enter Title, Url, Author',
            testID: "1"
        }
        const component = render(<CustomSearchbar {...props} />)
        
        fireEvent.changeText(await component.findByTestId('1'), 'india')
        expect(mock).toHaveBeenCalledWith('india')
    })

    it('another search input', async () => {
        const mock = jest.fn()
        const props: inputTypes = {
            value: '',
            onChangeText: mock,
            placeholder: 'Enter Title, Url, Author',
            testID: "2"
        }
        const component = render(<CustomSearchbar {...props} />)
        
        fireEvent.changeText(await component.findByTestId('2'), 'america')
        expect(mock).toHaveBeenCalledWith('america')
    })

})
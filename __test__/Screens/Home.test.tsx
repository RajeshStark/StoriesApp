import { render } from "@testing-library/react-native";
import axios, { AxiosResponse } from "axios";
import { getStories } from "../../src/Services";


jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('test suit for stories data', () => {
    test('testing api fetching for stories data', async () => {

        let dataValue = {};
        let count = 0
        const MockedResponse : AxiosResponse = {
            data: dataValue,
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {}
        }

        mockedAxios.get.mockResolvedValueOnce(MockedResponse);
        mockedAxios.get.mockRejectedValueOnce(new Error("Something Wrong"))

        const data = await getStories(count);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toMatchObject(dataValue)

    })
})
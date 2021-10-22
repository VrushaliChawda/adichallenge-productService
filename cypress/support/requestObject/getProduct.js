import * as config from '../../../cypress/fixtures/config.json'

export default class GetProductId {
    constructor() {
    }

    constructPayload = () => {
        const options = {
            method: 'GET',
            failOnStatusCode: false,
            url: config.url,
            headers: {
                'content-type': 'application/json'
            }
        }
        return options
    }
}

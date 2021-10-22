import * as config from '../../../cypress/fixtures/config.json'

export default class GetProductId {
    constructor() {
        this.productId = ''
    }

    constructPayload = () => {
        const options = {
            method: 'DELETE',
            failOnStatusCode: false,
            url: config.url + "/" +
                this.productId,
            headers: {
                'content-type': 'application/json'
            }
        }
        return options
    }
}

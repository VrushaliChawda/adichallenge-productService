import * as config from "../../../cypress/fixtures/config.json"


export default class PostProduct {
    constructor() {
        this.id ="";
        this.name="";
        this.description = "";
    }

    constructPayload =() =>{

        const options = {
            method: 'POST',
            failOnStatusCode: false,
            url: config.url,
            headers: {
                'content-type': 'application/json'
            },
            body: {
                "id": this.id,
                "name" : this.name,
                "description": this.description
            }
        }
        return options
    }

}
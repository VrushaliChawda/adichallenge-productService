import * as config from "../../../cypress/fixtures/config.json"


export default class PostProduct {
    constructor() {
        this.productId ="";
        this.id ="";
        this.name="";
        this.description = "";
    }

    constructPayload =() =>{

        const options = {
            method: 'PUT',
            failOnStatusCode: false,
            url: config.url + "/" +  this.productId ,
            body: {
                "id": this.id,
                "name" : this.name,
                "description": this.description
            }
        }
        return options
    }
}
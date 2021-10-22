import GetProductId from "../../../cypress/support/requestObject/getProductId"
import * as config from "../../../cypress/fixtures/config.json"
import PostProduct from "../../support/requestObject/postProduct";
describe('Get individual products details',() =>
{
    before('product shouls be available',() =>
    {

        const productObj = new PostProduct()
        productObj.id = "Get001"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Adidas Black sport shoes"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("Get001")
            expect(response.body.name).to.equal("Adidas sport shoes")
            expect(response.body.description).to.equal("Adidas Black sport shoes")

        })

    })

    it('User should be able to fetch all the products',() =>
    {
        const getProductIdObj = new GetProductId()
        getProductIdObj.productId ="Get001"
        const options = getProductIdObj.constructPayload()
        cy.request(options).then((response) => {
            expect(response.status).to.equal(200)
                expect(response.body.id).to.equal("Get001")
                expect(response.body.name).to.equal(config.products[0].name)
                expect(response.body.description).to.equal(config.products[0].description)

        })
    })

    it('User should get 404 error with product Id',() =>
    {
        const getProductIdObj = new GetProductId()
        const options = getProductIdObj.constructPayload()
        cy.request(options).then((response) => {
            expect(response.status).to.equal(404)
        })
    })

})
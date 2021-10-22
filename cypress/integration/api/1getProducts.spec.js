import GetProduct from "../../../cypress/support/requestObject/getProduct"
import * as config from "../../../cypress/fixtures/config.json"
import PostProduct from "../../support/requestObject/postProduct";
describe('Get products list',() =>
{

    before('At least 1 product should be available',() =>
    {

            const productObj = new PostProduct()
            productObj.id = "001"
            productObj.name = "Adidas sport shoes"
            productObj.description = "Adidas Black sport shoes"
            const options = productObj.constructPayload()

            cy.request(options).then((response) =>
            {
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal("001")
                expect(response.body.name).to.equal("Adidas sport shoes")
                expect(response.body.description).to.equal("Adidas Black sport shoes")

            })

    })

    it('User should be able to fetch all the products',() =>
    {
        const getProductObj = new GetProduct()
        const options = getProductObj.constructPayload()
        cy.request(options).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.length.greaterThan(0)

            let count = 0

            while(count< response.body.length){
                expect(response.body[count]).to.have.property('id').to.be.a('string').length.greaterThan(1)
                expect(response.body[count]).to.have.property('name').to.be.a('string').length.greaterThan(1)
                expect(response.body[count]).to.have.property('description').to.be.a('string').length.greaterThan(1)
                expect(response.body[count]).to.have.property('price').to.be.a('number').greaterThan(0)
                expect(response.body[count]).to.have.property('currency').to.equal("$")
                count++
            }
        })
    })
})
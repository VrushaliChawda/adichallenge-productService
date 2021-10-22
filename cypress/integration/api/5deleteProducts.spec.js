import DeleteProductId from "../../../cypress/support/requestObject/deleteProductId"
import PostProduct from "../../support/requestObject/postProduct";

describe('Delete individual products',() =>
{
    before('product shouls be available',() =>
    {

        const productObj = new PostProduct()
        productObj.id = "Delete001"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Adidas Black sport shoes"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("Delete001")
            expect(response.body.name).to.equal("Adidas sport shoes")
            expect(response.body.description).to.equal("Adidas Black sport shoes")

        })

    })

    it('User should be able to delete product successfully',() =>
    {
        const deleteProductId = new DeleteProductId()
        deleteProductId.productId ="Delete001"
        const options = deleteProductId.constructPayload()
        cy.request(options).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.ok).to.equal(1)

        })
    })

    it('User should be not able to delete same product again',() =>
    {
        const deleteProductId = new DeleteProductId()
        deleteProductId.productId ="Delete001"
        const options = deleteProductId.constructPayload()
        cy.request(options).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.ok).to.equal(0)

        })
    })

    it('User should get 404 error without providing product Id',() =>
    {
        const deleteProductId = new DeleteProductId()
        const options = deleteProductId.constructPayload()
        cy.request(options).then((response) => {
            expect(response.status).to.equal(404)
        })
    })

})
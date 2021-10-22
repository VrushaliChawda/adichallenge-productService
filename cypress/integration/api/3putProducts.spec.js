import PutProduct from "../../../cypress/support/requestObject/putProductId"
import PostProduct from "../../support/requestObject/postProduct";

describe('update product details',() =>
{
    before('product shouls be available',() =>
    {

        const productObj = new PostProduct()
        productObj.id = "Put001"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Adidas Black sport shoes"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("Put001")
            expect(response.body.name).to.equal("Adidas sport shoes")
            expect(response.body.description).to.equal("Adidas Black sport shoes")

        })

    })


    it('User should be able to successfully update product name',() => {
        const productObj = new PutProduct()
        productObj.productId ="Put001"
        productObj.id = "Put001"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Black sport shoes suitable for all sports"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("Put001")
            expect(response.body.name).to.equal("Adidas sport shoes")
            expect(response.body.description).to.equal("Black sport shoes suitable for all sports")

        })
    })

    it('User should be able to successfully update product description',() => {
        const productObj = new PutProduct()
        productObj.productId = "Put001"
        productObj.id = "Put001"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Adidas Black sport shoes"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("Put001")
            expect(response.body.name).to.equal("Adidas sport shoes")
            expect(response.body.description).to.equal("Adidas Black sport shoes")

        })
    })

    it('User should be able to make changes to product id',() => {
        const productObj = new PutProduct()
        productObj.productId="Put001"
        productObj.id = "Put002"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Adidas Black sport shoes"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("Put001")
            expect(response.body.name).to.equal("Adidas sport shoes")
            expect(response.body.description).to.equal("Adidas Black sport shoes")

        })
    })

    it('User should get 404 error if product id is not passed',() => {
        const productObj = new PutProduct()
        productObj.id = "Put001"
        productObj.name = "Adidas sport shoes"
        productObj.description = "Adidas Black sport shoes"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(404)
        })
    })

    it('User should not be able to update product details without id',() => {
        const productObj = new PutProduct()
        productObj.productId = "Put001"
        delete productObj.id
        productObj.name = "Sport shoes"
        productObj.description = "Black sport shoes suitable for all sports"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })
    })

    it('User should not be able to update product details without name',() => {
        const productObj = new PutProduct()
        productObj.productId = "Put001"
        delete productObj.name
        productObj.id = "Put001"
        productObj.description = "Red sport shoes suitable for all sports"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })
    })

    it('User should not be able to update product details without description',() => {
        const productObj = new PutProduct()
        productObj.productId = "Put001"
        delete productObj.description
        productObj.name = "Sport shoes"
        productObj.id = "Put001"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })
    })

    it('return 400 when id is empty string value',()=> {
        const productObj = new PutProduct()
        productObj.description = "Black sport shoes suitable for all sports"
        productObj.name = "Sport shoes"
        productObj.id = ""
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })

    })

    it('return 400 when name is empty string value',()=> {
        const productObj = new PutProduct()
        productObj.description = "Black sport shoes suitable for all sports"
        productObj.name = 12345
        productObj.id = ""
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })

    })

    it('return 400 when description is empty string value',()=> {
        const productObj = new PutProduct()
        productObj.description = ""
        productObj.name = "Sport shoes"
        productObj.id = "005"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })

    })

    it('return 400 when id is not string value',()=> {
        const productObj = new PutProduct()
        productObj.description = "Black sport shoes suitable for all sports"
        productObj.name = "Sport shoes"
        productObj.id = 123
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })

    })

    it('return 400 when name is not string value',()=> {
        const productObj = new PutProduct()
        productObj.description = "Black sport shoes suitable for all sports"
        productObj.name = 12345
        productObj.id = "004"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })

    })

    it('return 400 when description is not string value',()=> {
        const productObj = new PutProduct()
        productObj.description = 568298676
        productObj.name = "Sport shoes"
        productObj.id = "005"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })

    })

})
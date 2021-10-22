import PostProduct from "../../../cypress/support/requestObject/postProduct"

describe('Add products',() =>
{

    it('User should be able to successfully add product',() => {
        const productObj = new PostProduct()
        productObj.id = "001"
        productObj.name = "Sport shoes"
        productObj.description = "Black sport shoes suitable for all sports"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("001")
            expect(response.body.name).to.equal("Sport shoes")
            expect(response.body.description).to.equal("Black sport shoes suitable for all sports")

        })
    })

    it('User should not be able to add product without id',() => {
        const productObj = new PostProduct()
        delete productObj.id
        productObj.name = "Sport shoes"
        productObj.description = "Black sport shoes suitable for all sports"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })
    })

    it('User should not be able to add product without name',() => {
        const productObj = new PostProduct()
        delete productObj.name
        productObj.id = "002"
        productObj.description = "Red sport shoes suitable for all sports"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })
    })

    it('User should not be able to add product without description',() => {
        const productObj = new PostProduct()
        delete productObj.description
        productObj.name = "Sport shoes"
        productObj.id = "003"
        const options = productObj.constructPayload()

        cy.request(options).then((response) =>
        {
            expect(response.status).to.equal(400)
        })
    })

    it('return 400 when id is empty string value',()=> {
        const productObj = new PostProduct()
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
        const productObj = new PostProduct()
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
        const productObj = new PostProduct()
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
        const productObj = new PostProduct()
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
        const productObj = new PostProduct()
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
        const productObj = new PostProduct()
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
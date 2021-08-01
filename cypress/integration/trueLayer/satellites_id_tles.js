///<reference types = 'cypress' />

var satelliteId = 25544;
var satellite_id_tles = 'https://api.wheretheiss.at/v1/satellites/'+satelliteId+'/tles';

describe ('GET Satellites ID TLES Scenarios',()=>
{
    it('Validate 200 response code for Valid Request with https',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
    })
    })

    it('Validate 200 response code for Valid Request with http',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles.replace('https','http')
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
    })
    })


    it('Validate 404 response code for Invalid Satellite ID',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles.replace(satelliteId,'0'),
            failOnStatusCode: false
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(404)
    })
    })


    it('Validate 404 response code for Invalid URL',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles.replace('tles','unknown'),
            failOnStatusCode: false
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(404)
        })
    })

    it('Validate Satellite not found message',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles.replace(satelliteId,satelliteId+1),
            failOnStatusCode: false
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.body).to.have.property('error', 'satellite not found')
        })
    })   

    it('Validate all response fields are not null',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles,
            failOnStatusCode: false
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200),
            expect(response.body).to.not.be.null
        })
    })

    it('Validate Response values for the expected keys in Json',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_tles,
            failOnStatusCode: false
        })
        .should((response)=>{
            expect(response.status).to.eq(200)
            // expect(response.body).to.have.all.keys('requested_timestamp')
            expect(response.body).has.property('requested_timestamp')
            expect(response.body).has.property('id')
            expect(response.body).has.property('name')
            expect(response.body).has.property('tle_timestamp')
            expect(response.body).has.property('header')
            expect(response.body).has.property('line1')
            expect(response.body).has.property('line2')
        })
    })
});
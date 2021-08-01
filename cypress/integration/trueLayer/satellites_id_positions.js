///<reference types = 'cypress' />

var satelliteId = 25544;
var satellite_id_positions = 'https://api.wheretheiss.at/v1/satellites/'+satelliteId+'/positions?timestamps=1436029892,1436029902&units=miles';

describe ('GET Satellites ID Positions Scenarios',()=>
{

    it('Validate 200 response code for Valid Request with https',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_positions
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
            url: satellite_id_positions.replace('https','http')
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
            url: satellite_id_positions.replace(satelliteId,'0'),
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
            url: satellite_id_positions.replace('satellites','unknown'),
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
            url: satellite_id_positions.replace('25544','25546'),
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
            url: satellite_id_positions,
            failOnStatusCode: false
        })
        .should((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200),
            expect(response.body).to.not.be.null
        })
    })

    it('Validate Response values for name, id and Units',()=>
    {
        cy.request({
            method: 'GET',
            url: satellite_id_positions,
            failOnStatusCode: false
        })
        .then(function(response){

            expect(response.body,'response body').to.deep.equal([
                {
                    "name": "iss",
                    "id": satelliteId,
                    "latitude": -24.870147579366,
                    "longitude": 17.59950771856,
                    "altitude": 253.41149587602,
                    "velocity": 17148.554081346,
                    "visibility": "daylight",
                    "footprint": 2761.996386827,
                    "timestamp": 1436029892,
                    "daynum": 2457208.2163426,
                    "solar_lat": 22.85465108118,
                    "solar_lon": 283.22043315343,
                    "units": "miles"
                },
                {
                    "name": "iss",
                    "id": satelliteId,
                    "latitude": -25.344256596171,
                    "longitude": 18.04663730318,
                    "altitude": 253.53270332355,
                    "velocity": 17148.247302231,
                    "visibility": "daylight",
                    "footprint": 2762.6234978127,
                    "timestamp": 1436029902,
                    "daynum": 2457208.2164583,
                    "solar_lat": 22.854640837166,
                    "solar_lon": 283.17877169756,
                    "units": "miles"
                }
            ])
            expect(response.status).to.eq(200)
        })
    })
});
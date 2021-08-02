# Cypress API Automation

## Pre-requisite to Setup Cypress Automation

Step 1: Download & Install Node Js or NPM install
[NPM](https://nodejs.org/en/download/)

Step 2:
Verify NPM installed sucessfully using cmd prompt (window + run) or terminal (mac)
```bash
$ npm -version
```
Step 3:
Create project folder and navigate to project directory location
&
Install VS Code using [VS CODE](https://code.visualstudio.com/download/)
& Open the current project folder using VS Code

Step 4: Create a sample Node.js project from VS code Terminal
```bash
$ npm init
```

Step 5: Install Node.js packages
```bash
$ npm install
```
Step 6: Install Cypress
```bash
$ npm install cypress --save-dev
```
Step 7: This how the package.json will look:
``` json
{ 
   "name": "trueLayer",
   "version": "1.0.0",   
   "description": "true layer demo for satellites positions and tles",
   "main": "index.js",
   "author": "",
   "license": "ISC",
   "devDependencies": {
       "cypress": "^5.2.0"
   } 
}

## How to Open Cypress Runner
```
Open Cypress using npx to execute npm package binaries:
``` bash
$ npx cypress open 
or
$ ./node_modules/.bin/cypress open
```
## How to Run all the scripts
```
Open Cypress using npx to execute npm package binaries:
``` bash
$ npx cypress run 
or
$ ./node_modules/.bin/cypress run
```

## Results viewing after the run of above command

```
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    8.1.0                                                                              │
  │ Browser:    Electron 89 (headless)                                                             │
  │ Specs:      2 found (trueLayer/satellites_id_positions.js, trueLayer/satellites_id_tles.js)    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  trueLayer/satellites_id_positions.js                                            (1 of 2)


  GET Satellites ID Positions Scenarios
    ✓ Validate 200 response code for Valid Request with https (834ms)
    ✓ Validate 200 response code for Valid Request with http (899ms)
    ✓ Validate 404 response code for Invalid Satellite ID (150ms)
    ✓ Validate 404 response code for Invalid URL (145ms)
    ✓ Validate Satellite not found message (148ms)
    ✓ Validate all response fields are not null (337ms)
    ✓ Validate Response values for name, id and Units (153ms)


  7 passing (3s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        7                                                                                │
  │ Passing:      7                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     trueLayer/satellites_id_positions.js                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /Users/supritron/Desktop/TrueLayer_API_Automation/cypre    (0 seconds)
                          ss/videos/trueLayer/satellites_id_positions.js.mp4                        


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  trueLayer/satellites_id_tles.js                                                 (2 of 2)


  GET Satellites ID TLES Scenarios
    ✓ Validate 200 response code for Valid Request with https (171ms)
    ✓ Validate 200 response code for Valid Request with http (712ms)
    ✓ Validate 404 response code for Invalid Satellite ID (143ms)
    ✓ Validate 404 response code for Invalid URL (149ms)
    ✓ Validate Satellite not found message (380ms)
    ✓ Validate all response fields are not null (144ms)
    ✓ Validate Response values for the expected keys in Json (219ms)


  7 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        7                                                                                │
  │ Passing:      7                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     trueLayer/satellites_id_tles.js                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /Users/supritron/Desktop/TrueLayer_API_Automation/cypre    (0 seconds)
                          ss/videos/trueLayer/satellites_id_tles.js.mp4                             


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  trueLayer/satellites_id_positions.j      00:02        7        7        -        -        - │
  │    s                                                                                           │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  trueLayer/satellites_id_tles.js          00:01        7        7        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:04       14       14        -        -        -  


```

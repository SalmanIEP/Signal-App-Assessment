/// <reference types="cypress" />

import trafficLights from '../support/Pages/trafficLightPage.js'
import {Signals,COLORS} from '../fixtures/signals.js'

describe('User Acceptance Tests',()=>{

    const HAVE_COLOR ="eq"
    const trafficSignals = new trafficLights();
    const BE ="not.include"
    const NOT_BE = "include"
    const TURNED_ON = "Home_off"

    beforeEach(() => {
       cy.visit('/')
      })


it('Verify signals switching in case of red',()=>{
    cy.log('verifying red signal to be truned on by default')
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(BE,TURNED_ON)
    cy.log('Selecting switch button')
    trafficSignals.switchTheSignal();
    cy.log('verifying yellow and red signal to be turned on same time for 1 sec')
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(BE,TURNED_ON)
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(BE,TURNED_ON)
    cy.log('waiting for 1 seconds')
    trafficSignals.waitForOneSecond();
    cy.log('verifying green signal to be turned on after 1 sec')
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(BE,TURNED_ON)
    cy.log('verifying red and yellow signal to be turned off')
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(NOT_BE,TURNED_ON)
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(NOT_BE,TURNED_ON)
  })

  it('Verify signals switching in case of green',()=>{

    //Pre Req to Enable the Green Signal
    trafficSignals.switchTheSignal();
    trafficSignals.waitForOneSecond();
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(BE,TURNED_ON)
    //-------------------------------------------------------------------
    cy.log('selecting switch button to switch signal from green')
    trafficSignals.switchTheSignal();
    cy.log('verifying yellow signal to be turned on')
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(BE,TURNED_ON)
    cy.log('verifying green signal to be turned off')
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(NOT_BE,TURNED_ON)
    cy.log('waiting for 1 seconds for signal to be turned to red')
    trafficSignals.waitForOneSecond();
    cy.log('verifying red signal to be turned on after 1 sec after yellow signal')
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(BE,TURNED_ON)
    cy.log('verifying yellow and green signals to be turned off when red signal is turned on')
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(NOT_BE,TURNED_ON)
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(NOT_BE,TURNED_ON)
   
  })
   
})


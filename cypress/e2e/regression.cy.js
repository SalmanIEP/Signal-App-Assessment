/// <reference types="cypress" />

import trafficLights from '../support/Pages/trafficLightPage.js'
import {Signals} from '../fixtures/signals.js'

describe('Regression Tests',()=>{

    const BE ="not.include"
    const NOT_BE = "include"
    const TURNED_ON = "Home_off"
    const trafficSignals = new trafficLights();


    beforeEach(() => {
       cy.visit('/')
      })


  it('Verify the red signal must turned on when the Signal application is launched',()=>{
     trafficSignals.getSignal(Signals.RED_SIGNAL).should(BE,TURNED_ON)
     trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(NOT_BE,TURNED_ON)
     trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(NOT_BE,TURNED_ON)
  })

  it('Verify when user select the switch, in case of red signal, then yellow signal must be enabled along with red signal',()=>{

    trafficSignals.switchTheSignal();
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(BE,TURNED_ON)
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(BE,TURNED_ON)

  })

  it('Verify when user select the switch in case of red signal, then green signal must be turned on after 1 sec',()=>{

    trafficSignals.switchTheSignal();
    trafficSignals.waitForOneSecond();
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(BE,TURNED_ON)
  })

  it('Verify when user select the switch, in case of red signal, then both yellow and red signal turned off after 1 sec',()=>{

    trafficSignals.switchTheSignal();
    trafficSignals.waitForOneSecond();
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(NOT_BE,TURNED_ON)
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(NOT_BE,TURNED_ON)
    
  })

  it('Verify when user select the switch, in case of green signal, then green signal must turned off',()=>{

    //Pre Req to Enable the Green Signal
    trafficSignals.switchTheSignal();
    trafficSignals.waitForOneSecond();
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(BE,TURNED_ON)
    //-------------------------------------------------------------------
    
    trafficSignals.switchTheSignal();
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(NOT_BE,TURNED_ON)
    
  })

  it('Verify when user select the switch, in case of green signal, then only yellow signal must turned on for 1 sec',()=>{

    //Pre Req to Enable the Green Signal
    trafficSignals.switchTheSignal();
    trafficSignals.waitForOneSecond();
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(BE,TURNED_ON)
    //-------------------------------------------------------------------

    cy.log('Selecting Switch to chnage the signal from green')
    trafficSignals.switchTheSignal();
    cy.log('verifying yellow signal must be enabled for 1 sec')
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(BE,TURNED_ON)
    cy.log('Verifying Green Signal must be turned off')
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(NOT_BE,TURNED_ON)
    cy.log('Verifying RED Signal must be turned off')
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(NOT_BE,TURNED_ON)
    cy.log("Waiting for 1 sec for the yellow signal to be turned off")
    trafficSignals.waitForOneSecond();
    cy.log('Verifying the Yellow signal must be turned off')
    trafficSignals.getSignal(Signals.YELLOW_SIGNAL).should(NOT_BE,TURNED_ON)

    
  })

  it('Verify when user select the switch in case of green signal, then red signal must be enabled after 1 sec',()=>{

    //Pre Req to Enable the Green Signal
    trafficSignals.switchTheSignal();
    trafficSignals.waitForOneSecond();
    trafficSignals.getSignal(Signals.GREEN_SIGNAL).should(BE,TURNED_ON)
    //-------------------------------------------------------------------

    cy.log('Selecting Switch to chnage the signal from green')
    trafficSignals.switchTheSignal();
    cy.log("Waiting for 1 sec for the red signal to be turned on")
    trafficSignals.waitForOneSecond();
    cy.log("Verifying the red signal must be turned on after 1 sec")
    trafficSignals.getSignal(Signals.RED_SIGNAL).should(BE,TURNED_ON)

    
  })

   
})


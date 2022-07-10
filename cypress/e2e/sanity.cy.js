/// <reference types="cypress" />

import trafficLights from '../support/Pages/trafficLightPage.js'
import {Signals,COLORS} from '../fixtures/signals.js'

describe('Sanity Tests',()=>{

    const HAVE_COLOR ="eq"
    const trafficSignals = new trafficLights();


    beforeEach(() => {
       cy.visit('/')
      })


  it('Verify the red signal must be conist of red light',()=>{
     trafficSignals.getSignalColor(Signals.RED_SIGNAL).should(HAVE_COLOR,COLORS.RED)
  })

  it('Verify the yellow signal must be conist of yellow light',()=>{
    trafficSignals.switchTheSignal()
    trafficSignals.getSignalColor(Signals.YELLOW_SIGNAL).should(HAVE_COLOR,COLORS.YELLOW)
  })

  it('Verify the green signal must be conist of green light',()=>{
    trafficSignals.switchTheSignal()
    trafficSignals.waitForOneSecond()
    trafficSignals.getSignalColor(Signals.GREEN_SIGNAL).should(HAVE_COLOR,COLORS.GREEN)
  })

   
})


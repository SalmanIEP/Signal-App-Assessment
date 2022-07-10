class trafficLights{


    /**
     * This method will help in switching the signal by selecting switch button
     */
    switchTheSignal(){
        cy.get('button').contains('Switch').click()       
    }
    
    /**
     * This method will return the class applied on the signal
     */
    getSignal(signal){

        return cy.get('main > div div:nth-child('+signal+')').invoke('attr','class')
    }

    /**
     * This method will return the the color of the signal
     */
    getSignalColor(signal){

        return cy.get('main > div div:nth-child('+signal+')').invoke('css','background-color')
    }

    waitForOneSecond(){
        cy.wait(1000)
    }

}

export default trafficLights
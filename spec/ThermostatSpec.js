'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('starts the thermostat at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  
  it('increases the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode by default', function() {
   expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function( ){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

   describe('when power saving mode is on', function() {
     it('has a max temperature of 25 degrees', function() {
       for (var i = 0; i < 6; i++) {
         thermostat.up();
       }
       expect(thermostat.getCurrentTemperature()).toEqual(25);
     });
   });

   describe('when a power saving mode is off', function() {
     it('has a max temperature of 32 degrees', function() {
       thermostat.switchPowerSavingModeOff();
       for (var i = 0; i < 13; i++){
         thermostat.up();
       }
       expect(thermostat.getCurrentTemperature()).toEqual(32);
     });
   });



});
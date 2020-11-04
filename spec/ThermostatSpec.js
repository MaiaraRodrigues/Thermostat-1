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

  it('raises error if temperature is less than 10 degrees', function() {
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
  expect(thermostat.down()).toEqual('The minimum temperature is 10 degrees');
  });
});
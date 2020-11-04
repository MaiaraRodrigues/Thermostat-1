describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('starts the thermostat at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
  
  it('increases temperature with an up function', function() {
    thermostat.up(20)
    expect(thermostat.up(temperature)).toEqual(21);
  });


});
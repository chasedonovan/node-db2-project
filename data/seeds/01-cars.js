const cars = [
    {
      vin: '42454321GEFGDSGEG',
      make: 'lexus',
      model: 'ls400',
      mileage: 175000,
      title: 'clean',
      transmision: 'automatic'
    },
    {
      vin: 'GHH234324N34R2342',
      make: 'jeep',
      model: 'track hawk',
      mileage: 25000,
      title: 'clean',
      transmision: 'automatic'
    },
    {
      vin: 'WEGT42234GSG245W4',
      make: 'honda',
      model: 'accord',
      mileage: 250000,
      title: 'salvage',
      transmision: 'automatic'
    }
  ]

  exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
  } 
/* eslint-env jasmine */

'use strict'

const ParkingLot = require('../parkinglot')

describe('ParkingLot', () => {
  it('starts off with vacancies', () => {
    let parkingLot = new ParkingLot(7)
    expect(parkingLot.vacancies()).toEqual(7)

    parkingLot = new ParkingLot(12)
    expect(parkingLot.vacancies()).toEqual(12)
  })
  //
  // it('can print a summary of the parking lot', () => {
  //   let parkingLot = new ParkingLot(4)
  //
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: (empty)',
  //     'Position 2: (empty)',
  //     'Position 3: (empty)',
  //     'Position 4: (empty)'
  //   ])
  //
  //   parkingLot = new ParkingLot(3)
  //
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: (empty)',
  //     'Position 2: (empty)',
  //     'Position 3: (empty)'
  //   ])
  // })
  //
  // it('records that a car with the given license plate was parked and decreases vacancies', () => {
  //   let parkingLot = new ParkingLot(3)
  //
  //   parkingLot.park('aaa-123')
  //   expect(parkingLot.vacancies()).toEqual(2)
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: (empty)',
  //     'Position 3: (empty)'
  //   ])
  //
  //   parkingLot.park('bbb-456')
  //   expect(parkingLot.vacancies()).toEqual(1)
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: bbb-456',
  //     'Position 3: (empty)'
  //   ])
  // })
  //
  // it('fills in empty spaces first', () => {
  //   let parkingLot = new ParkingLot(5)
  //   parkingLot.park('aaa-123')
  //   parkingLot.park('bbb-456') // this one will leave
  //   parkingLot.park('ccc-789')
  //
  //   parkingLot.leave('bbb-456')
  //
  //   expect(parkingLot.vacancies()).toEqual(3)
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: (empty)',
  //     'Position 3: ccc-789',
  //     'Position 4: (empty)',
  //     'Position 5: (empty)'
  //   ])
  //
  //   parkingLot.park('ddd-321')
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: ddd-321',
  //     'Position 3: ccc-789',
  //     'Position 4: (empty)',
  //     'Position 5: (empty)'
  //   ])
  //
  //   parkingLot.park('eee-555')
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: ddd-321',
  //     'Position 3: ccc-789',
  //     'Position 4: eee-555',
  //     'Position 5: (empty)'
  //   ])
  // })
  //
  // it('can compact cars in the lot', () => {
  //   let parkingLot = new ParkingLot(8)
  //
  //   parkingLot.park('aaa-123')
  //   parkingLot.park('bbb-123')
  //   parkingLot.park('ccc-123')
  //   parkingLot.park('ddd-123')
  //   parkingLot.park('eee-123')
  //   parkingLot.park('fff-123')
  //   parkingLot.park('ggg-123')
  //   parkingLot.park('hhh-123')
  //
  //   parkingLot.leave('bbb-123')
  //   parkingLot.leave('ddd-123')
  //   parkingLot.leave('fff-123')
  //   parkingLot.leave('ggg-123')
  //
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: (empty)',
  //     'Position 3: ccc-123',
  //     'Position 4: (empty)',
  //     'Position 5: eee-123',
  //     'Position 6: (empty)',
  //     'Position 7: (empty)',
  //     'Position 8: hhh-123'
  //   ])
  //
  //   parkingLot.compact()
  //
  //   expect(parkingLot.summary()).toEqual([
  //     'Position 1: aaa-123',
  //     'Position 2: hhh-123',
  //     'Position 3: ccc-123',
  //     'Position 4: eee-123',
  //     'Position 5: (empty)',
  //     'Position 6: (empty)',
  //     'Position 7: (empty)',
  //     'Position 8: (empty)'
  //   ])
  // })
})

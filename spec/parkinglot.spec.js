/* eslint-env jasmine */

'use strict'

const ParkingLot = require('../parkinglot')

describe('ParkingLot', () => {
  it('defaults to 5 vacancies', () => {
    let parkingLot = new ParkingLot()
    expect(parkingLot.vacancies()).toEqual(5)
  })

  // it('starts off with vacancies', () => {
  //   let parkingLot = new ParkingLot(7)
  //   expect(parkingLot.vacancies()).toEqual(7)
  // })

  // it('starts off with vacancies', () => {
  //   let parkingLot = new ParkingLot(12)
  //   expect(parkingLot.vacancies()).toEqual(12)
  // })

  // it('can print a summary of the parking lot', () => {
  //   let parkingLot = new ParkingLot(4)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: (empty)',
  //     'Spot 2: (empty)',
  //     'Spot 3: (empty)',
  //     'Spot 4: (empty)'
  //   ])
  // })

  // it('can print a summary of the parking lot', () => {
  //   let parkingLot = new ParkingLot(4)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: (empty)',
  //     'Spot 2: (empty)',
  //     'Spot 3: (empty)',
  //     'Spot 4: (empty)'
  //   ])
  //   parkingLot = new ParkingLot(3)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: (empty)',
  //     'Spot 2: (empty)',
  //     'Spot 3: (empty)'
  //   ])
  // })

  // it('should decrement vacancies when a car is parked', () => {
  //   let parkingLot = new ParkingLot(3)
  //   expect(parkingLot.vacancies()).toEqual(3)
  //   parkingLot.park('Car1')
  //   expect(parkingLot.vacancies()).toEqual(2)
  // })

  // it('records that a car with the given license plate was parked and decreases vacancies', () => {
  //   let parkingLot = new ParkingLot(3)

  //   parkingLot.park('Car-1')
  //   expect(parkingLot.vacancies()).toEqual(2)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: (empty)',
  //     'Spot 3: (empty)'
  //   ])
  // })

  // it('records that a car with the given license plate was parked and decreases vacancies', () => {
  //   let parkingLot = new ParkingLot(3)
  //   parkingLot.park('Car-1')
  //   parkingLot.park('Car-2')
  //   expect(parkingLot.vacancies()).toEqual(1)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: Car-2',
  //     'Spot 3: (empty)'
  //   ])
  // })

  // it('fills in empty spaces first', () => {
  //   let parkingLot = new ParkingLot(5)
  //   parkingLot.park('Car-1')
  //   parkingLot.park('Car-2') // this one will leave
  //   parkingLot.park('ccc-789')

  //   parkingLot.leave('Car-2')

  //   expect(parkingLot.vacancies()).toEqual(3)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: (empty)',
  //     'Spot 3: ccc-789',
  //     'Spot 4: (empty)',
  //     'Spot 5: (empty)'
  //   ])

  //   parkingLot.park('ddd-321')
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: ddd-321',
  //     'Spot 3: ccc-789',
  //     'Spot 4: (empty)',
  //     'Spot 5: (empty)'
  //   ])

  //   parkingLot.park('eee-555')
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: ddd-321',
  //     'Spot 3: ccc-789',
  //     'Spot 4: eee-555',
  //     'Spot 5: (empty)'
  //   ])
  // })

  // it('can compact cars in the lot', () => {
  //   let parkingLot = new ParkingLot(8)

  //   parkingLot.park('Car-1')
  //   parkingLot.park('bbb-123')
  //   parkingLot.park('ccc-123')
  //   parkingLot.park('ddd-123')
  //   parkingLot.park('eee-123')
  //   parkingLot.park('fff-123')
  //   parkingLot.park('ggg-123')
  //   parkingLot.park('hhh-123')

  //   parkingLot.leave('bbb-123')
  //   parkingLot.leave('ddd-123')
  //   parkingLot.leave('fff-123')
  //   parkingLot.leave('ggg-123')

  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: (empty)',
  //     'Spot 3: ccc-123',
  //     'Spot 4: (empty)',
  //     'Spot 5: eee-123',
  //     'Spot 6: (empty)',
  //     'Spot 7: (empty)',
  //     'Spot 8: hhh-123'
  //   ])

  //   parkingLot.compact()

  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: Car-1',
  //     'Spot 2: hhh-123',
  //     'Spot 3: ccc-123',
  //     'Spot 4: eee-123',
  //     'Spot 5: (empty)',
  //     'Spot 6: (empty)',
  //     'Spot 7: (empty)',
  //     'Spot 8: (empty)'
  //   ])
  // })
})

/* eslint-env jasmine */

'use strict'

const ParkingLot = require('../parkinglot')

describe('ParkingLot', () => {
  // it('defaults to 5 vacancies', () => {
  //   let parkingLot = new ParkingLot()
  //   expect(parkingLot.vacancies()).toEqual(5)
  // })
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
  //   parkingLot.park('AAA-111')
  //   expect(parkingLot.vacancies()).toEqual(2)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: (empty)',
  //     'Spot 3: (empty)'
  //   ])
  // })
  // it('records that a car with the given license plate was parked and decreases vacancies', () => {
  //   let parkingLot = new ParkingLot(3)
  //   parkingLot.park('AAA-111')
  //   parkingLot.park('BBB-222')
  //   expect(parkingLot.vacancies()).toEqual(1)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: BBB-222',
  //     'Spot 3: (empty)'
  //   ])
  // })
  // it('fills in empty spaces first', () => {
  //   let parkingLot = new ParkingLot(5)
  //   parkingLot.park('AAA-111')
  //   parkingLot.park('BBB-222') // this one will leave
  //   parkingLot.park('CCC-333')
  //   parkingLot.leave('BBB-222')
  //   expect(parkingLot.vacancies()).toEqual(3)
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: (empty)',
  //     'Spot 3: CCC-333',
  //     'Spot 4: (empty)',
  //     'Spot 5: (empty)'
  //   ])
  //   parkingLot.park('DDD-444')
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: DDD-444',
  //     'Spot 3: CCC-333',
  //     'Spot 4: (empty)',
  //     'Spot 5: (empty)'
  //   ])
  //   parkingLot.park('EEE-555')
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: DDD-444',
  //     'Spot 3: CCC-333',
  //     'Spot 4: EEE-555',
  //     'Spot 5: (empty)'
  //   ])
  // })
  // it('can compact cars in the lot', () => {
  //   let parkingLot = new ParkingLot(8)
  //   parkingLot.park('AAA-111')
  //   parkingLot.park('BBB-222')
  //   parkingLot.park('CCC-333')
  //   parkingLot.park('DDD-444')
  //   parkingLot.park('EEE-555')
  //   parkingLot.park('FFF-666')
  //   parkingLot.park('GGG-777')
  //   parkingLot.park('HHH-123')
  //   parkingLot.leave('BBB-222')
  //   parkingLot.leave('DDD-444')
  //   parkingLot.leave('FFF-666')
  //   parkingLot.leave('GGG-777')
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: (empty)',
  //     'Spot 3: CCC-333',
  //     'Spot 4: (empty)',
  //     'Spot 5: EEE-555',
  //     'Spot 6: (empty)',
  //     'Spot 7: (empty)',
  //     'Spot 8: HHH-123'
  //   ])
  //   parkingLot.compact()
  //   expect(parkingLot.summary()).toEqual([
  //     'Spot 1: AAA-111',
  //     'Spot 2: HHH-123',
  //     'Spot 3: CCC-333',
  //     'Spot 4: EEE-555',
  //     'Spot 5: (empty)',
  //     'Spot 6: (empty)',
  //     'Spot 7: (empty)',
  //     'Spot 8: (empty)'
  //   ])
  // })
})

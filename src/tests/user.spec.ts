import { users, getUsers } from './../controllers/user.controller'

// * User Testing
describe('User Test', () => {
  // TODO: Test getUsers Case
  it('Check user', () => {
    expect(users.length).toEqual(0)
  })

})

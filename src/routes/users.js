module.exports = app => {

  const Users = app.controllers.UserController
  const middelware = app.libs.authorization

  app.route('/users')
    .get(middelware.auth, Users.getUsers)
    .post(middelware.auth, Users.createUser)

  app.route('/users/:id')
    .get(middelware.auth, Users.getOneUser)
    .put(middelware.auth, Users.updateUser)
    .delete(middelware.auth, Users.deleteUser)
    .patch()

  app.route('/users/login')
    .post(Users.authorization)
}
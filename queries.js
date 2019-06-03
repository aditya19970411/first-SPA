const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
})

const getFriend = (request, response) => {
  const id = String(request.params.id)

  pool.query('SELECT users1.* from users1 INNER JOIN friend ON users1.id = friend.friend_id WHERE friend.user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    var list = results.rows
    response.status(200).json(list);
  })
}

const getUsers = (request, response) => {
	const limit = parseInt(request.params.size)
	const offset = (parseInt(request.params.pageno) - 1)*limit

  pool.query('SELECT * FROM users1 ORDER BY id ASC LIMIT $1 OFFSET $2', [limit, offset], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFriendOfFriend = (request, response) => {
	const idf = parseInt(request.params.id)

  pool.query(' SELECT u.* FROM users1 u INNER JOIN friend f ON u.id = f.friend_id INNER JOIN friend ff ON f.user_id = ff.friend_id WHERE ff.user_id = $1 AND f.friend_id NOT IN (SELECT friend_id FROM friend WHERE user_id = $1)', [idf], (error, results) => {
	if (error) {
		throw error
	}
  var list = results.rows
	response.status(200).json(list)
  })
} 


const createUser = (request, response) => {
  const { firstName, lastName, avatar } = request.body

  pool.query('INSERT INTO users1 (firstName, lastName, avatar) VALUES ($1, $2, $3)', [firstName, lastName, avatar], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertid}.`)
  })
}


module.exports = {
  getUsers,
  getFriend,
  getFriendOfFriend,
  createUser
  }
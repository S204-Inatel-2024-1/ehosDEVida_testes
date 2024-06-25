Feature: Testando API Fetin

Background:
  * url 'https://ehosdevida-backend.onrender.com/'

Scenario: Login e captura do token
  Given path 'auth/login'
  And request { email: 'felipe@inatel.com', password: 'Fetin@2024' }
  When method post
  Then status 201
  And def token = response.acess_Token

Scenario: POST do USER (admin ou student)
        * def randomItem = function(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
        * def criarUsuario = 
        """
        function() {
        let horas = java.lang.System.currentTimeMillis() / 3600000 % 24
        let minutos = java.lang.System.currentTimeMillis() / 60000 % 60
        let segundos = java.lang.System.currentTimeMillis() / 1000 % 60
        let user = horas + minutos + segundos + '@inatel.com'
        let senha = 'Fetin@2024'        
        let papel = randomItem(['student', 'admin','advisor'])
        let teamNumber = Math.floor(Math.random() * 20) + 1 // generate a random team number between 1 and 20        
        return { username: user, password: senha, role: papel, teamNumber: teamNumber}
        }
        """
        * def usuarioInfo = criarUsuario()

        Given path 'users'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
        And request usuarioInfo
        When method post
        Then status 201
    
    
Scenario: GET do usuário por e-mail
        Given url 'https://ehosdevida-backend.onrender.com'
        And path 'users/a@inatel.com'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
        When method GET
        Then status 200
        
Scenario: Get list of all teams
        Given path 'teams'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
        When method get
        Then status 200


Scenario: Get team details
        Given path 'teams', 'HPF'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
        When method get
        Then status 200

Scenario: Deletando time pelo ID
        Given path 'teams', ''
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
        When method delete
        Then status 200

Scenario: Get teams for a specific advisor
        Given path 'teams', 'advisor', 'felipe@inatel.com'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
        When method get
        Then status 200


Scenario: Get teams for a specific student
Given path 'teams', 'student', 'a@inatel.com'
And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZkZWU3MGVlNWEyOGE2ODBjZGM5ZWUiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGluYXRlbC5jb20iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwic3ViIjoiNjY2ZGVlNzBlZTVhMjhhNjgwY2RjOWVlIiwiaWF0IjoxNzE5MzM1ODQ2LCJleHAiOjE3MTk1OTUwNDZ9.cumqCDekaUWJxT4QWOgjRsTJSuw2heaMxfv20EUp21o'
When method get
Then status 200
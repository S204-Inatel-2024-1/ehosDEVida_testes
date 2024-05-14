Feature: Testando API Fetin

Background:
  * url 'http://localhost:3000/'

Scenario: Login e captura do token
  Given path 'auth/login'
  And request { email: 'amanda@ges.inatel.br', password: 'Fetin@2024' }
  When method post
  Then status 201
  And def token = response.acess_token


Scenario: POST do USER (admin ou student)
        * def randomFirstName = function() { return karate.random('Ana', 'Julia', 'Amanda', 'Karol') }
        * def randomLastName = function() { return karate.random('Smith', 'Jones', 'Taylor', 'Brown') }
        * def randomRole = function() { return karate.randomItem(['student', 'admin']) }
        * def randomTeamNumber = function() { return '' + karate.random(1, 20) }
        * def randomEmail = function(f, l) { return f.toLowerCase() + '.' + l.toLowerCase() + '@example.com' }
    
        * def User =
        """
        {
            name: '#(randomFirstName())',
            email: '#(randomEmail(randomFirstName(),randomlastName()))',
            role: '#(randomRole())',
            teamNumber: '#(randomTeamNumber())'
        }
        """
    
        Given path 'users'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c'
        And request User
        When method post
        Then status 201
    
    
Scenario: GET do usuário por e-mail
        Given path 'users/juri%40gmail.com'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c' 
        When method get
        Then status 200
        
Scenario: Get list of all teams
        Given path 'teams'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c' 
        When method get
        Then status 200


Scenario: Get team details
        Given path 'teams', '12'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c' 
        When method get
        Then status 200

Scenario: Deletando time pelo ID
        Given path 'teams', '12'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c' 
        When method delete
        Then status 200

Scenario: Get teams for a specific advisor
        Given path 'teams', 'advisor', 'giovanni@rocket.com'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c' 
        When method get
        Then status 200


Scenario: Remove a member by email
        Given path 'teams', 'team123', 'members'
        And request 'james@rocket.com'
        And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwMDg4M2FjZmQ2ZDJlN2FlOGMyMzMiLCJuYW1lIjoiSnVyYW5kaSIsImVtYWlsIjoianVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvU2JDc3NNRlhaaEo0SExQc1N6YXR1azVvWXZEc3RRT3EzYkFOTzBPWi9QVDV3ZTM2SzVUYSIsInJvbGUiOiJhZG1pbiIsIl9fdiI6MCwic3ViIjoiNjY0MDA4ODNhY2ZkNmQyZTdhZThjMjMzIiwiaWF0IjoxNzE1NzIxMzQyLCJleHAiOjE3MTU5ODA1NDJ9.QCvO_QEjiMcHFUOv259J-2AeUTkTr6dvwjzbutTTn1c' 
        When method delete 
        Then status 200

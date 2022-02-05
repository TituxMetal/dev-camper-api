# Dev Camper Api

## Resources

- 1. Bootacamps

  Get All Bootcamps

  ```
    curl --location --request GET 'http://localhost:5000/api/bootcamps'
  ```

  Get All Courses For a Bootcamp

  ```
    curl --location --request GET 'http://localhost:5000/api/bootcamps/61f8ad266b0dbd37e4fcde58/courses'
  ```

  Get a Single Bootcamp

  ```
    curl --location --request GET 'http://localhost:5000/api/bootcamps/61f8ad266b0dbd37e4fcde58'
  ```

  Create a New Bootcamp

  ```
    curl --location --request POST 'http://localhost:5000/api/bootcamps' --header 'Content-Type: application/json' --data-raw '{
      "name": "Codemasterss",
      "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in full stack web development and data science",
      "website": "https://codemasters.com",
      "phone": "(333) 333-3333",
      "address": "85 South Prospect Street Burlington VT 05405",
      "careers": ["Web Development", "Data Science", "Business"],
      "housing": false,
      "jobAssistance": false,
      "jobGuarantee": false,
      "acceptGi": false
    }'
  ```

  Create a New Course For a Bootcamp

  ```
    curl --location --request POST 'http://localhost:5000/api/bootcamps/61f8ad266b0dbd37e4fcde58/courses' --header 'Content-Type: application/json' --data-raw '{
      "title": "Full Stack Web Development azertyez",
      "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
      "weeks": 12,
      "tuition": 10000,
      "minimumSkill": "intermediate",
      "scholarshipAvailable": true,
      "bootcamp": "61fb46b802d0a3317a730a42"
    }'
  ```

  Edit a Bootcamp

  ```
    curl --location --request PUT 'http://localhost:5000/api/bootcamps/61fb46b802d0a3317a730a42' --header 'Content-Type: application/json' --data-raw '{
      "website": "https://lgdweb.fr"
    }'
  ```

  Edit a Course For a Bootcamp

  ```
    curl --location --request PUT 'http://localhost:5000/api/bootcamps/61f8ad266b0dbd37e4fcde58/courses/61fc9df6be3c925db3d5ac8b' --header 'Content-Type: application/json' --data-raw '{
      "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
      "weeks": 320,
      "tuition": 1800,
      "minimumSkill": "beginner",
      "scholarshipAvailable": false
    }'
  ```

  Delete a Bootcamp

  ```
    curl --location --request DELETE 'http://localhost:5000/api/bootcamps/61fb4532b7d718cf63113ce' --header 'Content-Type: application/json'
  ```

- 2. Courses

  Get All Courses

  ```
    curl --location --request GET 'http://localhost:5000/api/courses'
  ```

  Get a Single Course

  ```
    curl --location --request GET 'http://localhost:5000/api/courses/61fc9df6be3c925db3d5ac8b'
  ```

  Create a New Course

  ```
    curl --location --request POST 'http://localhost:5000/api/courses' --header 'Content-Type: application/json' --data-raw '{
      "title": "Full Stack Web Development azertyez",
      "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
      "weeks": 12,
      "tuition": 10000,
      "minimumSkill": "intermediate",
      "scholarshipAvailable": true,
      "bootcamp": "61fb46b802d0a3317a730a42"
    }'
  ```

  Edit a Course

  ```
    curl --location --request PUT 'http://localhost:5000/api/courses/61fc9df6be3c925db3d5ac8b' --header 'Content-Type: application/json' --data-raw '{
      "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
      "weeks": 32,
      "tuition": 800,
      "minimumSkill": "intermediate",
      "scholarshipAvailable": false,
      "bootcamp": "61f8ad266b0dbd37e4fcde58"
    }'
  ```

  Delete a Course

  ```
    curl --location --request DELETE 'http://localhost:5000/api/courses/61fe46cc9bf525718fea0ab8' --header 'Content-Type: application/json'
  ```

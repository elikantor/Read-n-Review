<h2>Read-n-Review</h2>

> A light-weight book review app.

<h3> This project has been deployed <a href="https://read-n-review-frontend.herokuapp.com/">here</a>.  The <a href="https://github.com/elikantor/Read-n-Review/tree/master/project-frontend">frontend</a> and <a href="https://github.com/elikantor/Read-n-Review/tree/master/project-backend-API">backend</a> code are accessible in seperate repos. <h3>

<h3>Usage and Features</h3>

<p>Read-n-Review is a SPA where users can search for, create, and comment on books that they would either like to review or see the reviews of.</P>
<li>Create a book showing the cover title, author, image, abstract, and genre through a POST request</li>
<li>Create a review of a book showing both text content and a 1-5 rating represented through star icons</li>
<li>Filter for books by title, author, or genre</li>
<li>Update the number of times the book has been read</li>

<h3>Prerequisites</h3>
<p>Backend</p>
<li>Rails 5</li>
<li>Fast JSON API</li>
<br></br>
<p>Frontend</p>
<li>Vanilla Javascript</li>

<h3>Installing</h3>
<h5>Backend</h5>
<h7>Clone the backend repo and run the rails server by:</h7>

```
$git clone git@github.com:elikantor/read-n-review-api.git
$cd read-n-review-api
$bundle install
$rails db:migrate
$rails db:seed
$rails s
```

<h5>Frontend</h5>
<h7>Clone the frontend repo and open the home html file</h7>

```
$git clone git@github.com:elikantor/read-n-review-frontend.git
$cd read-n-review-frontend
$open home.html
```

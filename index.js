<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Accessible rating example</title>
  <link rel="stylesheet" type="text/css" href="basic.css"/>
</head>
<body>
  <h1>Starability.css example</h1>
  <h2>Rating example</h2>
  <form>
    <fieldset class="starability-basic">
      <legend>Basic star rating:</legend>
      <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />

      <input type="radio" id="rate1" name="rating" value="1" />
      <label for="rate1">1 star.</label>

      <input type="radio" id="rate2" name="rating" value="2" />
      <label for="rate2">2 stars.</label>

      <input type="radio" id="rate3" name="rating" value="3" />
      <label for="rate3">3 stars.</label>

      <input type="radio" id="rate4" name="rating" value="4" />
      <label for="rate4">4 stars.</label>

      <input type="radio" id="rate5" name="rating" value="5" />
      <label for="rate5">5 stars.</label>

      <span class="starability-focus-ring"></span>
    </fieldset>
  </form>

  <h2>Static result example</h2>
  <h3>Movie name</h3>
  <p class="starability-result" data-rating="3">
    Rated: 3 stars
  </p>
</body>
</html>

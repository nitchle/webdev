<!DOCTYPE html>
<html>
<head>
	<title>My Projects</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel="stylesheet" type="text/css" href="css/jscalculator.css">
</head>
<body>
	<header class="header-portfolio">
		<div class="container">
		<?php
			include 'header.php';
		?>
			<div class="header-contents">
				<h1>My Projects</h1>
			</div>
		</div>
	</header>
	<div class="container">
		<div class="row">
			<div class="sidebar">
				<h4>My Web-Projects</h4>
				<ul>
					<li><a class="active" href="portfolio.php">My JS-Calculator</a></li>
					<li><a href="#">Another Project</a></li>
					<li><a href="#">A great Project</a></li>
					<li><a href="#">My fourth Project</a></li>
				</ul>
			</div>
			<div class="main-content">
				<h3>My JS-Calculator</h3>
				<p>Responsive JavaScript-Calcualtor which supports basic operations,
				for demonstration and design testing.</p>

				<div id="jscalculator">
	  			  <input type="textbox" id="calc_textbox" readonly>
				  <div id="calc_buttons">
				    <button id="calc_button" value="AC">AC</button>
				    <button id="calc_button" value="CE">CE</button>
				    <button id="calc_button" value="%">%</button>
				    <button id="calc_button" value="/">/</button>
				    <button id="calc_button" value="7">7</button>
				    <button id="calc_button" value="8">8</button>
				    <button id="calc_button" value="9">9</button>
				    <button id="calc_button" value="*">*</button>
				    <button id="calc_button" value="4">4</button>
				    <button id="calc_button" value="5">5</button>
				    <button id="calc_button" value="6">6</button>
				    <button id="calc_button" value="-">-</button>
				    <button id="calc_button" value="1">1</button>
				    <button id="calc_button" value="2">2</button>
				    <button id="calc_button" value="3">3</button>
				    <button id="calc_button" value="+">+</button>
				    <button id="calc_button" value=".">.</button>
				    <button id="calc_button" value="0">0</button>
				    <button id="calc_button" value="And">Ans</button>
				    <button id="calc_button" value="=">=</button>
				  </div>
				</div>

			</div>
		</div>
	</div>


<?php
	include 'footer.php';
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="js/jscalculator.js"></script>
</body>
</html>

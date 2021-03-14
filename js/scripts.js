$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});
// form function  
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//ODER FUNCTIONS
//business interface
function Pizza(toppings,size,crust) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  }
  Pizza.prototype.totalToppings = function() {
    if(this.toppings.length != 0) {
      var toppingPrice = this.toppings.length * 50;
      return toppingPrice;
    }else
    alert("kindly choose your toppings!")
  }
  Pizza.prototype.pizzaSize = function () {
    if(this.size === "Small"){
      return 500;
    }else if(this.size === "Medium"){
      return 600;
    }else if (this.size === "Large") {
      return 700;
    }else
    alert("Whats the Pizza size!");
  }
  Pizza.prototype.crustType = function () {
    if(this.crust === "Crispy") {
      return 50
    } else if (this.crust === "Stuffed") {
      return 100
    }else if (this.crust === "Gluten free") {
      return 150
    }else
    alert("kindly choose a crust type")
    }
  let finalCost;
  Pizza.prototype.totalCost = function(totalToppings, pizzaSize, crustType) {
     finalCost = totalToppings + pizzaSize + crustType;
    $("#displayTotalCost").html(finalCost);
    ;
  }
  //user interface
  //total price calculation 
  var pizza, pizzaQuantity;
  $(document).ready(function() {
    $("#form").submit(function(event){
      event.preventDefault();
      $("#show-Bill").show();
      var pizzaName = $("#pizza option:selected").val();
      var checkedSize = $("input:radio[name=sizePizza]:checked").val();
      var checkedCrust = $("input:radio[name=crustPizza]:checked").val();
      var checkedToppings = [];
      $("input:checkbox[name=toppings]:checked").each(function() {
        checkedToppings.push($(this).val());
      });
      pizzaQuantity = parseInt($("#quantity").val());
      var totalPizzaQuantity = finalCost * pizzaQuantity;
   $("#displaySize").text(checkedSize);
      $("#displayCrust").text(checkedCrust);
      $("#displayName").text(pizzaName);
      $("#displayToppings").text(checkedToppings);
      $("#displayQuantity").text(totalPizzaQuantity);
      pizza = new Pizza(checkedToppings,checkedSize,checkedCrust);
      var totalToppings = pizza.totalToppings();
      var pizzaSize = pizza.pizzaSize();
      var crustType = pizza.crustType();
      pizza.totalCost(pizzaSize,totalToppings,crustType);
      console.log(pizza);
    });
  });
    
  // navigation transition
  $(window).scroll(function(){
    $('.navbar-default').toggleClass('scrolled', $(this).scrollTop() > 50);
  });


            
           
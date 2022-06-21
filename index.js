function home() 
{
    fetch('https://deliciousfood-app.herokuapp.com/Home').then
    (response => response.json()).then
    (json => json.Home.forEach(element => {
        
      var h1 = document.createElement('h1');
      h1.style.marginTop = "100px"
      h1.innerHTML = element.B;
      var h2 = document.createElement('h2');
      h2.innerHTML = element.C;
      var img = document.createElement('img');
      img.src = element.A;
      img.width = 300;
      img.height = 300;

      var homediv = document.getElementById('homeDiv');
      var imgdiv = document.getElementById('imgDiv');
      homediv.innerHTML = "";
      imgdiv.innerHTML = "";
      homediv.appendChild(h1);
      homediv.appendChild(h2);
      imgdiv.appendChild(img);
    }))
}

function about() 
{
    fetch('https://deliciousfood-app.herokuapp.com/About').then
    (response => response.json()).then
    (json => json.About.forEach(element => {
        
      var h1 = document.createElement('h1');
      h1.innerHTML = element.A;
      h1.style.marginBottom = "200px";

      var aboutdiv = document.getElementById('aboutdiv');
      aboutdiv.innerHTML = "";
      aboutdiv.appendChild(h1);
      // var imgdiv = document.getElementById('imgDiv');
      // homediv.innerHTML = "";
      // imgdiv.innerHTML = "";
      // homediv.appendChild(h1);
      // homediv.appendChild(h2);
      // imgdiv.appendChild(img);
    }))
}

function menu() 
{   
    var fooddiv = document.getElementById('fooddiv'); 
    fooddiv.innerHTML = "";
    fooddiv.style.height = "auto";


    fetch('https://deliciousfood-app.herokuapp.com/Menu').then
    (response => response.json()).then
    (json => json.Menu.forEach(element => {

      var childdiv = document.createElement('div');
      childdiv.className = "col-lg-6 menu-item filter-starters";
      fooddiv.appendChild(childdiv);

      var img = document.createElement('img');
      img.className = "menu-img";
      img.src = element.B;

      childdiv.appendChild(img);
  
      var sondiv = document.createElement('div');
      sondiv.className = "menu-content";
      var span_food = document.createElement('span');
      var span_price = document.createElement('span');
      span_food.innerHTML = element.A;
      span_price.innerHTML = element.C;

      sondiv.appendChild(span_food);
      sondiv.appendChild(span_price);

      childdiv.appendChild(sondiv);

      // foodmenu.push(element);
      
        
      //  var img = document.createElement('img');
      //  img1.src = element.B;

      //  var food = document.createElement('span');
      //  food1.innerHTML = element.A;

      //  var price1 = document.createElement('span');
      //  price1.innerHTML = element.C;
    }))
    // console.log(foodmenu)
}

 function send()
{
   var email = document.getElementById('email').value;
   var subject = document.getElementById('subject').value;
   var message = document.getElementById('message').value;

   fetch("https://deliciousfood-app.herokuapp.com/Contact",
{
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   method: "POST",
   body: JSON.stringify({ 
       "email": email,
       "subject" : subject,
       "Text": message,
   }
   )
})

}
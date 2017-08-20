$(document).ready(function(){
  $('#content').append(
    '<div class="header">Ristorante Italiano d\'Oregon</div>',
    '<div class="navbar"><button id="menu">Menu</button><button id="about">About</button><button id="contact">Contact</button>',
    '<div id="focal"><img src="https://s-media-cache-ak0.pinimg.com/736x/20/34/23/203423425648284822a65d7860728bea--smoke-grill-menu-design.jpg"></div>',
    '<footer id="footer">This is a footer</footer>'
    );

  $('#menu').click(function(){
    $('#focal').empty().append(
      '<img src="https://s-media-cache-ak0.pinimg.com/736x/20/34/23/203423425648284822a65d7860728bea--smoke-grill-menu-design.jpg">'
    );
  });

  $('#about').click(function(){
    $('#focal').empty().append(
      '<h1>Oregon\'s finest Italian eatery</h1>',
      '<p>Text, text, text....</p>'
    );
  });

  $('#contact').click(function(){
    $('#focal').empty().append(
      '<h1>Contact us today!</h1>',
      '<h3>Phone: (503) 650-0000</h3>',
      '<h3>Address: 555 SE Milwaukie Ave</h3>',
      '<h3>Email: ristorante@italiano.com</h3>',
      '<h3>Hours: M-F 10am - 10pm, Sat & Sun 8am - 10pm</h3>'
    );
  });
});

// menu image https://s-media-cache-ak0.pinimg.com/736x/20/34/23/203423425648284822a65d7860728bea--smoke-grill-menu-design.jpg
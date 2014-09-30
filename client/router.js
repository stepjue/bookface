Router.configure({
   layoutTemplate: 'layout'
});

Router.map(function() {
   this.route('splash', {
      path: '/'
   })
})

Router.map(function() {
   this.route('home');
});
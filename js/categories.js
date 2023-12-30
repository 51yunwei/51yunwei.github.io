document.addEventListener('DOMContentLoaded', function() {
    var categories = document.getElementById('categories');
    hexo.render.render('{% for category in site.categories %}{{ category | first }}: {{ category | last | size }}{% endfor %}', function(err, result) {
      categories.innerHTML = result;
    });
  });
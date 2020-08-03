onmessage = function (e) {
  const rows = e.data;
  var template = '';
  for (var i = 0; i < rows.length; i++) {
    template = template + '<ul>';
    var cells = rows[i].split(',');
    if (cells.length > 1) {
      for (var j = 0; j < cells.length - 1; j++) {
        template = template + '<li>' + cells[j] + '</li>';
      }
    }
    template = template + '</ul>';
  }
  postMessage(template);
};

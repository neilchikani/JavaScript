const worker = new Worker('worker.js');
const loader = document.getElementsByClassName('loader')[0];
const loaderContent = document.getElementsByTagName('h2')[0];
function Upload() {
  var fileUpload = document.getElementById('file');
  var reader = new FileReader();
  reader.onload = function (e) {
    var dvCSV = document.getElementById('dvCSV');
    var rows = e.target.result.split('\n');
    loaderContent.innerHTML =
      'Please wait..We are processing ' + rows.length + ' records';
    loader.style.display = 'flex';
    worker.postMessage(rows);
    worker.addEventListener('message', (event) => {
      dvCSV.innerHTML = event.data;
      loader.style.display = 'none';
    });
  };
  reader.readAsText(fileUpload.files[0]);
}

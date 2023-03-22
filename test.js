// Selecționăm elementul necesar
const testDiv = document.getElementById('test');

// Adăugăm un event listener pentru click pe div-ul cu id-ul "test"
testDiv.addEventListener('click', function() {
  // Obținem textul butonului cu clasa "dropdown-btn"
  const btnText = dropdownBtn.textContent;
  
  // Creăm un obiect de tip Blob pentru a genera un fișier CSV
  const csvBlob = new Blob([btnText], { type: 'text/csv;charset=utf-8;' });
  
  // Creăm un element de tip a pentru a descărca fișierul CSV
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(csvBlob);
  downloadLink.download = "my-dropdown.csv";
  
  // Adăugăm elementul de tip a în document și declanșăm click-ul
  document.body.appendChild(downloadLink);
  downloadLink.click();
  
  // Ștergem elementul de tip a din document
  document.body.removeChild(downloadLink);
});

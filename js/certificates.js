const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const certificatesDictionary = getCertificatesDictionary();
let index1 = 0;
let index2 = 0;
let rowString = "";

// Windows Onload
window.onload = function () {
  blockViewSource();
  parseCertificatesOnload();
};

// Parse Certificate Images  
function parseCertificatesOnload() {
  var finalResult = "";
  var index1 = 0;
  // Loop through the certificatesDictionary
  for (const category in certificatesDictionary) {
    rowString = "";
    if (certificatesDictionary.hasOwnProperty(category)) {
      index1 += 1;
      var certificates = certificatesDictionary[category];
      // console.log(`Category: ${category}`);
      certificates.forEach((certificate, index2) => {
        if (certificate != "") {
          // console.log(`- ${certificate}`);
          rowString += `
                        <div class="col-2 card-row">
                          <div class="card h-100" data-bs-theme="dark" style="width: 10rem;">
                            <div class="card-body">
                              <p class="card-text" id="certificateTitleSection${index1}${index2}">${certificate}</p>
                            </div>
                            <img src="./images/certificates/${certificate}.jpg" class="card-img-top" alt="${certificate}.jpg" id="certificateImageSection${index1}${index2}"
                              onclick="imageViewModal(this)">
                          </div>
                        </div>
                      `;
        }
      });
      finalResult += `<div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button bg-default collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse${index1}" aria-expanded="true" aria-controls="collapse${index1}">
                ${category}
              </button>
            </h2>
            <div id="collapse${index1}" class="accordion-collapse collapse" data-bs-parent="#certificateAccordionView">
            <div class="accordion-body">
            <div class="row">
            ${rowString}
            </div>
            </div>
            </div>
            </div>`;
    }
  }
  document.getElementById("certificateAccordionView").innerHTML = finalResult;
}


// Get the image and insert it inside the modal - use its "alt" text as a caption
function imageViewModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Get the <span> element that closes the modal

// Close modal function
function closeImageModal() {
  modal.style.display = "none";
}

// Reading Keyboard formations + Extras

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

function blockViewSource() {
  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
    },
    false
  );

  document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.key === "Escape") {
      closeImageModal();
    }
    if (
      e.keyCode === 123 ||
      ctrlShiftKey(e, "I") ||
      ctrlShiftKey(e, "J") ||
      ctrlShiftKey(e, "C") ||
      (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) ||
      (e.ctrlKey && e.keyCode >= 112)
    ) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
}

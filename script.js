function showDetails(internshipId) {
    
    var detailsContainer = document.getElementById(internshipId);
    var modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    var closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.innerHTML = "Close";
    closeButton.onclick = function () {
        modalOverlay.style.display = "none";
    };

    modalContent.appendChild(closeButton);

    
    modalContent.appendChild(detailsContainer);

  
    modalOverlay.appendChild(modalContent);


    document.body.appendChild(modalOverlay);
    modalOverlay.style.display = "block";
}

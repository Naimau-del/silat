// Show cookie-like pop-up
const popup = document.createElement('div');
popup.id = 'popup';
popup.innerHTML = `
    <div id="popup-content">
        <p>Ces vidéos ont été faites par des professionnels. Veuillez ne pas reproduire les vidéos chez vous.</p>
        <button id="popup-close">J'ai compris</button>
    </div>
`;
document.body.appendChild(popup);

const popupClose = document.getElementById('popup-close');
popupClose.addEventListener('click', function() {
    popup.style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
});

// Style the pop-up
const style = document.createElement('style');
style.innerHTML = `
    #popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
    #popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    #popup-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #popup-close {
        background-color: #f44336;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
    }
    #popup-close:hover {
        background-color: #d32f2f;
    }
`;
document.head.appendChild(style);

// Add overlay
const overlay = document.createElement('div');
overlay.id = 'popup-overlay';
document.body.appendChild(overlay);
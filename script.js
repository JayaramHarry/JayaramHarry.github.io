
function showPopup(popupId) {
    var popups = document.querySelectorAll('.popup');
    for (var i = 0; i < popups.length; i++) {
        popups[i].classList.remove('show');
    }

    var popup = document.getElementById(popupId + '-popup');
    popup.classList.add('show');
}
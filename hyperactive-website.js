window.onload = function () {
    window.scrollTo(0, 0);
};

let careersFormContactButton = document.getElementById("careers-form-contact-button");
let footerFormContactButton = document.getElementById("footer-form-contact-button");
let welcomeModalFormContactButton = document.getElementById("first-entrance-modal-form-contact-button");

let careersFormNameField = document.getElementById("careers-form-name-field");
let careersFormPhoneField = document.getElementById("careers-form-phone-field");
let careersFormEmailField = document.getElementById("careers-form-email-field");

let footerFormNameField = document.getElementById("footer-form-name-field");
let footerFormPhoneField = document.getElementById("footer-form-phone-field");
let footerFormEmailField = document.getElementById("footer-form-email-field");

let welcomeModalNameField = document.getElementById("first-entrance-modal-name-field");
let welcomeModalPhoneField = document.getElementById("first-entrance-modal-phone-field");
let welcomeModalEmailField = document.getElementById("first-entrance-modal-email-field");

let formSubmittedModalContainer = document.getElementById("form-submitted-modal-container");
let welcomeModalContainer = document.getElementById("first-entrance-modal-container");

let formSubmittedModalcloseSign = document.querySelector(".form-submitted-modal .fa-xmark");
let welcomeModalcloseSign = document.querySelector(".first-entrance-modal .fa-xmark");

let consultSign = document.querySelector(".consult-color .card-sign");
let trainSign = document.querySelector(".train-map-color .card-sign");
let careerSign = document.querySelector(".new-career-color .card-sign");
let assignmentSign = document.querySelector(".assignment-color .card-sign");

let consultContent = document.querySelector(".consult-color .how-it-works-card-content");
let trainContent = document.querySelector(".train-map-color .how-it-works-card-content");
let careerContent = document.querySelector(".new-career-color .how-it-works-card-content");
let assignmentContent = document.querySelector(".assignment-color .how-it-works-card-content");

let hamburgerSign = document.getElementById("hamburger-sign");
let hamburgerFirstLine = document.getElementById("hamburger-first-line");
let hamburgerMiddleLine = document.getElementById("hamburger-middle-line");
let hamburgerLastLine = document.getElementById("hamburger-last-line");
let linksItemsBoxes = document.getElementsByClassName("link-item-box");
let advertiseBox = document.getElementById("advertise-box");

welcomeModalContainer.classList.add("show-entrance-modal");

checkInputFieldsValidation(footerFormContactButton, footerFormNameField, footerFormPhoneField, footerFormEmailField);
checkInputFieldsValidation(careersFormContactButton, careersFormNameField, careersFormPhoneField, careersFormEmailField);
checkInputFieldsValidation(welcomeModalFormContactButton, welcomeModalNameField, welcomeModalPhoneField, welcomeModalEmailField);

addHeaderModalListeners();
addQuestionsIconListener();

addHowWorksSignListeners(consultSign, consultContent);
addHowWorksSignListeners(trainSign, trainContent);
addHowWorksSignListeners(careerSign, careerContent);
addHowWorksSignListeners(assignmentSign, assignmentContent);

addHamburgerSignListener();

formSubmittedModalcloseSign.addEventListener("click", () => {
    formSubmittedModalContainer.classList.add("none");
})

welcomeModalcloseSign.addEventListener("click", () => {
    welcomeModalContainer.classList.remove("show-entrance-modal");
})

function addQuestionsIconListener() {
    let questionsItems = document.getElementsByClassName("question-item");

    for (let questionItem of questionsItems) {
        let icon = questionItem.firstElementChild.lastElementChild;
        let answer = questionItem.lastElementChild;

        icon.addEventListener("click", () => {
            if (icon.classList.contains("fa-arrow-circle-down")) {
                answer.classList.add("show");
                icon.classList.remove("fa-arrow-circle-down");
                icon.classList.add("fa-arrow-circle-up");
            }
            else {
                answer.classList.remove("show");
                icon.classList.add("fa-arrow-circle-down");
                icon.classList.remove("fa-arrow-circle-up");
            }
        })
    }
}
function addHeaderModalListeners() {
    let careersLink = document.getElementById("careers-link");
    let careersLinkModal = document.getElementById("careers-link-modal");

    careersLink.addEventListener("mouseenter", () => {
        if (!hamburgerSign.classList.contains("hamburger-closing-sign"))
            careersLinkModal.classList.remove("none");
    })

    careersLink.addEventListener("mouseleave", () => {
        if (!hamburgerSign.classList.contains("hamburger-closing-sign"))
            careersLinkModal.classList.add("none");
    })

    careersLinkModal.addEventListener("mouseenter", () => {
        if (!hamburgerSign.classList.contains("hamburger-closing-sign"))
            careersLinkModal.classList.remove("none");
    })

    careersLinkModal.addEventListener("mouseleave", () => {
        if (!hamburgerSign.classList.contains("hamburger-closing-sign"))
            careersLinkModal.classList.add("none");
    })

    careersLink.addEventListener("click", () => {
        if (hamburgerSign.classList.contains("hamburger-closing-sign")) {
            if (careersLinkModal.classList.contains("none"))
                careersLinkModal.classList.remove("none");

            else careersLinkModal.classList.add("none");
        }
    })
}
function checkInputFieldsValidation(submitButton, name, phone, email) {
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (name.value.length === 0) {
            name.value = "";
            name.placeholder = "*נא להזין שם תקין";

            name.classList.add("invalid-input");
            name.classList.remove("valid-input");
        }

        if (!(phone.value.length === 10 && phone.value[0] === '0')) {
            phone.value = "";
            phone.placeholder = "*נא להזין מספר טלפון";

            phone.classList.add("invalid-input");
            phone.classList.remove("valid-input");
        }

        if (!(email.value.includes("@") &&
            email.value.slice(email.value.indexOf("@")).includes("."))) {
            email.value = "";
            email.placeholder = "*נא להזין כתובת מייל";

            email.classList.add("invalid-input");
            email.classList.remove("valid-input");
        }
        if (name.value.length !== 0 && phone.value.length !== 0
            && email.value.length !== 0) {
            formSubmittedModalContainer.classList.remove("none");
        }
    })
}
function addHowWorksSignListeners(sign, content) {
    sign.addEventListener("click", () => {
        if (!content.classList.contains("show-card-content")) {
            content.classList.add("show-card-content");
            sign.classList.add("closing");
        }
        else {
            content.classList.remove("show-card-content");
            sign.classList.remove("closing");
        }
    })
}
function addHamburgerSignListener() {
    hamburgerSign.addEventListener("click", () => {
        if (hamburgerSign.classList.contains("hamburger-closing-sign")) {
            hamburgerSign.classList.remove("hamburger-closing-sign");
            hamburgerMiddleLine.classList.remove("hamburger-middle-line");
            hamburgerFirstLine.classList.remove("rotate-left", "hamburger-first-line");
            hamburgerLastLine.classList.remove("rotate-right", "hamburger-last-line");
            advertiseBox.classList.remove("advertise-margin");

            for (let linkItemBox of linksItemsBoxes)
                linkItemBox.classList.remove("flex-link");
        }
        else {
            hamburgerSign.classList.add("hamburger-closing-sign");
            hamburgerMiddleLine.classList.add("hamburger-middle-line");
            hamburgerFirstLine.classList.add("rotate-left", "hamburger-first-line");
            hamburgerLastLine.classList.add("rotate-right", "hamburger-last-line");
            advertiseBox.classList.add("advertise-margin");

            for (let linkItemBox of linksItemsBoxes)
                linkItemBox.classList.add("flex-link");
        }
    })
}

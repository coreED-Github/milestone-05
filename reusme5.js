var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var resumeOutput = "<h2>Resume></h2>\n       <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, " </span></p>\n        <p><strong>Name:</strong> <span id=\"edit-edit\" class=\"editable\">").concat(email, " </span></p>\n        <p><strong>Name:</strong> <span  id=\"edit-phone\" class=\"editable\">").concat(phone, " </span></p>\n       \n       <h3>Education</h3>\n       <p id=\"edit-education\" class=\"editable\"> ").concat(education, "</p>\n    \n       <h3>Experience</h3>\n       <p  id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n   \n       <h3>Skills</h3>\n       <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n       \n   ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charse=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'download your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
        makeEditable2();
    }
    else {
        console.error('Output are missing again');
    }
});
function makeEditable2() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

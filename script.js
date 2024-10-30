let currentFieldIndex = 0;
const fields = document.querySelectorAll('.field-card');
function nextProject() {
        if (currentProjectIndex < projects.length - 1) {
            currentProjectIndex++;
        } else {
            currentProjectIndex = 0; // Loop back to the first project if at the end
        }
        showProject(currentProjectIndex);
    }

    function prevProject() {
        if (currentProjectIndex > 0) {
            currentProjectIndex--;
        } else {
            currentProjectIndex = projects.length - 1; // Loop back to the last project if at the beginning
        }
        showProject(currentProjectIndex);
    }

function showField(index) {
    fields.forEach((field, i) => {
        field.classList.toggle('active', i === index);
    });
}

function nextField() {
    if (currentFieldIndex < fields.length - 1) {
        currentFieldIndex++;
    } else {
        currentFieldIndex = 0; // Loop back to the first field if at the end
    }
    showField(currentFieldIndex);
}

function prevField() {
    if (currentFieldIndex > 0) {
        currentFieldIndex--;
    } else {
        currentFieldIndex = fields.length - 1; // Loop back to the last field if at the beginning
    }
    showField(currentFieldIndex);
}
function showSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block';
    }

    

// Initialize with the first field displayed
showField(currentFieldIndex);
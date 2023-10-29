document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  coursesData = collectCourseData();

  

  const name = document.getElementById("name").value;
  const mascot = document.getElementById("mascot").value;
  const imageInput = document.getElementById("image");
  const image = imageInput.files[0]; // Get the selected image file
  const caption = document.getElementById("caption").value;
  const personal = document.getElementById("personal-bg").value;
  const professional = document.getElementById("professional-bg").value;
  const academic = document.getElementById("academic-bg").value;
  const webdev = document.getElementById("webdev").value;
  const pcPlatform = document.getElementById("pcPlatform").value;


  const reader = new FileReader();

  // Handle the image file
  reader.onload = function(e) {
    const imageSrc = e.target.result;

    const resultsHTML = `
      <div id="results">
        <h2>Your Introduction</h2>
        <p style ="text-align: center;"><strong>${name} || ${mascot}</strong></p>
        <img src="${imageSrc}" alt="Image" style="max-width: 100%; height: auto;">
        <p style="font-style: italic; text-align: center; font-size: 14px;">${caption}</p>
        <p style ="text-align: left;"><strong>Personal Background:</strong> ${personal}</p>
        <p style ="text-align: left;"><strong>Professional Background:</strong> ${professional}</p>
        <p style ="text-align: left;"><strong>Academic Background:</strong> ${academic}</p>
        <p style ="text-align: left;"><strong>Background in Web Development:</strong> ${webdev}</p>
        <p style ="text-align: left;"><strong>Primary Computer Platform:</strong> ${pcPlatform}</p>
        <p><strong>Courses currently taking:</strong> ${coursesData.join('<br>')}</p>
      </div>
    `;

    document.getElementById("content").innerHTML = resultsHTML;
  };

  // Read the image file as a data URL
  reader.readAsDataURL(image);
});

let coursesData = [];

function collectCourseData() {
  const courseNameElements = document.querySelectorAll('.course-input');
  const courseData = [];

  courseNameElements.forEach((element) => {
    const courseName = element.value;
    if (courseName.trim() !== '') {
      const courseExplanation = element.nextElementSibling.value;
      courseData.push(`${courseName}: "${courseExplanation}"`);
    }
  });

  return courseData;
}
// Add course button
function addCourse() {
  const coursesContainer = document.getElementById('courses-container');
  const newCourseInput = document.createElement('div');
  newCourseInput.classList.add('input-element');

  newCourseInput.innerHTML = `
    <label for="courses">Course Name:</label>
    <input type="text" placeholder="Course" class="course-input" required>
    <label for="courseExplanation">Explanation:</label>
    <input type="text" placeholder="Explanation" required>
  `;

  coursesContainer.appendChild(newCourseInput);
}

function removeCourse() {
  const coursesContainer = document.getElementById('courses-container');
  const courseInputs = coursesContainer.querySelectorAll('.input-element');

  // Ensure at least one course input remains
  if (courseInputs.length > 1) {
    coursesContainer.removeChild(courseInputs[courseInputs.length - 1]);
  }
}
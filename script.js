const workoutForm = document.getElementById('workoutForm');
const workoutLog = document.getElementById('workoutLog');

workoutForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;

    if (date && exercise && duration) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${exercise}</td>
            <td>${duration}</td>
        `;
        workoutLog.appendChild(newRow);

        // Clear the form
        workoutForm.reset();
    }
});
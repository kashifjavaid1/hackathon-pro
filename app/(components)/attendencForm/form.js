
import './form.css'
export default function Form() {
    return (
        <>
            <div class="attendance-form">
                <h1>Student Attendance Form</h1>
                <form id="attendanceForm">
                    <div class="form-group">
                        <label for="studentName">Student Name:</label>
                        <input type="text" id="studentName" required/>
                    </div>

                    <div class="form-group">
                        <label for="attendanceDate">Date:</label>
                        <input type="date" id="attendanceDate" required/>
                    </div>

                    <div class="form-group">
                        <label>Class Periods:</label>
                        <div class="class-periods">
                            <label><input type="checkbox" name="period" value="Period 1"/> Period 1</label>
                            <label><input type="checkbox" name="period" value="Period 2"/> Period 2</label>
                            <label><input type="checkbox" name="period" value="Period 3"/> Period 3</label>
                           
                        </div>
                    </div>

                    <button type="submit" class="submit-btn">Submit Attendance</button>
                </form>
            </div>
   </>
  )
}

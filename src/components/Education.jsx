import React from "react";
import Myself from "./myself";

function Education() {
    return (
        <div>

        <Myself />
            <h2> Education </h2>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Institute</th>
                        <th>Passing Year</th>
                        <th>Result</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>B. TECH</td>
                        <td>Indian Institute of Technology, Jammu</td>
                        <td>2024</td>
                        <td>8.7 CGPA</td>
                    </tr>

                    <tr>
                        <td>Class 12th</td>
                        <td>RNS WORLD SCHOOL </td>
                        <td>2019</td>
                        <td>93.6 %</td>
                    </tr>

                    <tr>
                        <td>Class 10th</td>
                        <td>CHRIST THE KING COLLEGE</td>
                        <td>2017</td>
                        <td>91.8 %</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Education;
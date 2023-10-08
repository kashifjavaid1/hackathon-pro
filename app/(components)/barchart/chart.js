'use client'
import { Bar } from "react-chartjs-2";
    import Chart from "chart.js/auto";
    const BarChart = () => {
      return (
        <div>
          <Bar
            data={{
              labels: [
                "USER",
                "COURSE",
                "ATTENDENCE",
                
              ],
              datasets: [
                {
                  label: "#Crud",
                  data: [15, 12, 6],
                  backgroundColor: ["red", "yellow", "blue", "black", "green"],
                  borderColor: "orange",
                  borderWidth: 5
                },
                {
                  label: "Student Management",
                  data: [20, 13, 6, 8, 9],
                  backgroundColor: "purple",
                  borderColor: "red",
                  borderWidth: 5
                }
              ]
            }}
            height={300}
            width={200}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      );
    };
    export default BarChart;

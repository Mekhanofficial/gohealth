document.getElementById("calculateBtn").addEventListener("click", function() {
      const personName = document.getElementById("name").value || "Anonymous";
      const weightKg = parseFloat(document.getElementById("weight").value);
      const heightM = parseFloat(document.getElementById("height").value);

      if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0) {
        alert("Please enter valid weight and height values.");
        return;
      }

      const heightSquared = heightM * heightM;
      const bmi = weightKg / heightSquared;

      const isUnderweight = bmi < 18.5;
      const isNormalWeight = bmi >= 18.5 && bmi < 25;
      const isOverweight = bmi >= 25;

      const isHighRisk = isOverweight || weightKg > 90;

      console.log("Name:", personName);
      console.log("Weight (kg):", weightKg);
      console.log("Height (m):", heightM);
      console.log("BMI:", bmi.toFixed(2));
      console.log("Underweight:", isUnderweight);
      console.log("Normal Weight:", isNormalWeight);
      console.log("Overweight:", isOverweight);
      console.log("High Risk Alert:", isHighRisk);

      document.getElementById("resultName").textContent = personName;
      document.getElementById("bmiValue").textContent = bmi.toFixed(2);
      document.getElementById("weightValue").textContent = weightKg;
      document.getElementById("heightValue").textContent = heightM;
      
      let category = "";
      let categoryColor = "";
      let indicatorWidth = 0;
      
      if (isUnderweight) {
        category = "Underweight";
        categoryColor = "#4cc9f0";
        indicatorWidth = 15;
      } else if (isNormalWeight) {
        category = "Normal Weight";
        categoryColor = "#4361ee";
        indicatorWidth = 40;
      } else {
        category = "Overweight";
        categoryColor = "#f72585";
        indicatorWidth = 65;
      }
      
      document.getElementById("bmiCategory").textContent = category;
      document.getElementById("bmiCategory").style.background = categoryColor;
      document.getElementById("bmiCategory").style.color = "white";
      
      document.getElementById("bmiIndicator").style.width = `${indicatorWidth}%`;
      document.getElementById("bmiIndicator").style.background = categoryColor;
      
      const riskIndicator = document.getElementById("riskIndicator");
      const riskText = document.getElementById("riskText");
      
      if (isHighRisk) {
        riskIndicator.className = "risk-indicator risk-high";
        riskText.innerHTML = "<strong>High Risk Alert:</strong> Consider consulting a healthcare provider";
      } else {
        riskIndicator.className = "risk-indicator risk-low";
        riskText.innerHTML = "<strong>Low Risk:</strong> Your health metrics look good";
      }
      
      document.getElementById("results").style.display = "block";
    });
document.getElementById("calculateBtn").addEventListener("click", function() {
      // Get user input
      const personName = document.getElementById("name").value || "Anonymous";
      const weightKg = parseFloat(document.getElementById("weight").value);
      const heightM = parseFloat(document.getElementById("height").value);

      // Validate input
      if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0) {
        alert("Please enter valid weight and height values.");
        return;
      }

      // Perform arithmetic operations
      const heightSquared = heightM * heightM;
      const bmi = weightKg / heightSquared;

      // Perform comparison operations
      const isUnderweight = bmi < 18.5;
      const isNormalWeight = bmi >= 18.5 && bmi < 25;
      const isOverweight = bmi >= 25;

      // Perform logical operations
      const isHighRisk = isOverweight || weightKg > 90;

      // Display in console
      console.log("Name:", personName);
      console.log("Weight (kg):", weightKg);
      console.log("Height (m):", heightM);
      console.log("BMI:", bmi.toFixed(2));
      console.log("Underweight:", isUnderweight);
      console.log("Normal Weight:", isNormalWeight);
      console.log("Overweight:", isOverweight);
      console.log("High Risk Alert:", isHighRisk);

      // Update UI with results
      document.getElementById("resultName").textContent = personName;
      document.getElementById("bmiValue").textContent = bmi.toFixed(2);
      document.getElementById("weightValue").textContent = weightKg;
      document.getElementById("heightValue").textContent = heightM;
      
      // Set BMI category and color
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
      
      // Set BMI indicator position
      document.getElementById("bmiIndicator").style.width = `${indicatorWidth}%`;
      document.getElementById("bmiIndicator").style.background = categoryColor;
      
      // Set risk indicator
      const riskIndicator = document.getElementById("riskIndicator");
      const riskText = document.getElementById("riskText");
      
      if (isHighRisk) {
        riskIndicator.className = "risk-indicator risk-high";
        riskText.innerHTML = "<strong>High Risk Alert:</strong> Consider consulting a healthcare provider";
      } else {
        riskIndicator.className = "risk-indicator risk-low";
        riskText.innerHTML = "<strong>Low Risk:</strong> Your health metrics look good";
      }
      
      // Show results container
      document.getElementById("results").style.display = "block";
    });
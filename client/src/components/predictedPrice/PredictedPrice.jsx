import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";

function PredictedPrice({ postData }) {
  const [predictedPrice, setPredictedPrice] = useState(postData.price);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (postData) => {
    const query = `type=${postData.type}&city=${postData.city}&property=&minPrice=0&maxPrice=${postData.price}`;
    try {
      const postPromise = await apiRequest("/posts?" + query);
      return postPromise;
    } catch (error) {
      console.log("error", error);
      return [];
    }
  };

  const calculateLinearRegression = (dataSet) => {
    console.log("dataSet",dataSet)
    const x = dataSet.map((d) => d.bedroom);
    const y = dataSet.map((d) => d.price);
    const n = x.length;

    const meanX = x.reduce((acc, val) => acc + val, 0) / n;
    const meanY = y.reduce((acc, val) => acc + val, 0) / n;
    let numerator = 0;
    let denominator = 0;

    for (let i = 0; i < n; i++) {
      numerator += (x[i] - meanX) * (y[i] - meanY);
      denominator += (x[i] - meanX) ** 2;
    }

    if (denominator === 0) {
      return { m: 0, b: meanY }; // Handle case with no variation in x
    }

    const m = numerator / denominator;
    const b = meanY - m * meanX;
    return { m, b };
  };

  const predictPrice = (coefficients, testData) => {
    const { m, b } = coefficients;
    return m * testData[1] + b;
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      try {
        const dataSet = await getData(postData);
        const dataSetForUse = dataSet.data;
        if (dataSetForUse && dataSetForUse.length > 0) {
          const coefficients = calculateLinearRegression(dataSetForUse);

          const priceToSet = predictPrice(coefficients, [
            postData.price,
            postData.bedroom,
          ]);
          setPredictedPrice(priceToSet.toFixed(2));
        } else {
          console.log("No data available for linear regression.");
        }
      } catch (error) {
        console.log("Error during fetch and calculation:", error);
      } finally {
        setIsLoading(false); // Update isLoading regardless of success or failure
      }
    };

    fetchAndCalculate();
  }, [postData]);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div>
      Suggested price - ₹
      {predictedPrice >= 1_00_00_000
        ? `${(predictedPrice / 1_00_00_000).toFixed(1)} crore`
        : predictedPrice >= 1_00_000
        ? `${(predictedPrice / 1_00_000).toFixed(1)} lakh`
        : predictedPrice >= 1_000
        ? `${(predictedPrice / 1_000).toFixed(1)} thousand`
        : predictedPrice}
    </div>
  );
}

export default PredictedPrice;

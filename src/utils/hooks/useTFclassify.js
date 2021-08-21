import React, { useState } from "react";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

export default function useTFclassify() {
  const [isLoading, setIsLoading] = useState(false);

  const [prediction, setPrediction] = useState([]);
  function predict(img) {
    // const img = imageRef.current;
    setIsLoading(true);
    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        console.log("Predictions: ");
        console.log(predictions);
        setIsLoading(false);
        setPrediction(predictions);
      });
    });
  }
  return [predict,prediction,setPrediction,isLoading];
}

import FeedbackTable from "./feedbacktable";
import { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "./StarRatings";

const DriversFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/feedbacks")
      .then((response) => {
        setFeedbacks(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  }, [feedbacks]);

  return (
    <div>
      <StarRatings />
      <FeedbackTable rows={feedbacks} />
    </div>
  );
};
export default DriversFeedback;

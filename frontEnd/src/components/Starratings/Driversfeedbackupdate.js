import FeedbackTable from "./feedbacktable";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateStarRatings from "./UpdateStarRatings";
import { useParams } from "react-router-dom";

const Driversfeedbackupdate = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { id } = useParams();
  console.log("id is" + id);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/feedbacks")
      .then((response) => {
        setFeedbacks(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  }, []);

  return (
    <div>
      <UpdateStarRatings id={id} />

      <FeedbackTable rows={feedbacks} />
    </div>
  );
};
export default Driversfeedbackupdate;

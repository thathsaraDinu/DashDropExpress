import FeedbackTable from "./feedbacktable";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateStarRatings from "./UpdateStarRatings";
import { useParams } from "react-router-dom";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

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

    <div style={{
      
      backgroundImage: "url('/starratings2.jpg')",
      backgroundSize: "cover",
    }}
    className="backgroundimage  ">
      <MainMenu></MainMenu>
      <UpdateStarRatings id={id} />

      <FeedbackTable rows={feedbacks} />
      <FooterMain></FooterMain>
    </div>
  );
};
export default Driversfeedbackupdate;

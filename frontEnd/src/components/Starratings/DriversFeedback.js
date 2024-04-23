import FeedbackTable from "./feedbacktable";
import { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "./StarRatings";
import FooterMain from '../../FooterMain';
import MainMenu from '../../MainMenu';

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
    <div style={{
      
      backgroundImage: "url('/starratings2.jpg')",
      backgroundSize: "cover",
    }}
    className="backgroundimage  ">

      <MainMenu></MainMenu>
   <StarRatings/> 
   <FeedbackTable rows={feedbacks}  />
   <FooterMain></FooterMain>
   </div>

  )
}

export default DriversFeedback;

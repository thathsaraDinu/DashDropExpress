const Feedback = require("./model");

const getfeedbacks = (req, res, next) => {
  
    Feedback.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const getfeedbackById = (req, res) => {
  const id = req.params.id;
  
  Feedback.findById({ _id: id })
    .then((feedback) => res.json(feedback))
    .catch((err) => res.json(err));
};

const addfeedbacks = async (req, res) => {
  try {
   
    const {
      name,
      drivernumber,
      currentValue,
      description,
    }=req.body;

    const newFeedback =  new Feedback({
      name,
      drivernumber,
      currentValue,
      description,
    });
    
     const savedfeedback = await newFeedback.save()
      
       return res.json({ feedback: savedfeedback });
        
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
 
};

const updatefeedbacks = (req, res) => {
  const id = req.params.id;
  Feedback.findByIdAndUpdate(
    id,
    {
      name,
      drivernumber,
      currentValue,
      description,
    }=req.body
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const deletefeedbacks = (req, res, next) => {
  const id = req.params.id;

  Feedback.findByIdAndDelete(id)
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

exports.getfeedbacks = getfeedbacks;
exports.addfeedbacks = addfeedbacks;
exports.updatefeedbacks = updatefeedbacks;
exports.deletefeedbacks = deletefeedbacks;
exports.getfeedbackById = getfeedbackById;
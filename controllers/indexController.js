const Feedback = require("../models/feedback");

exports.responses = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const data = new Feedback({
      name: name,
      email: email,
      message: message,
    });

    await data.save((err) => {
      if (err) throw err;
      else {
        console.log(data);
        console.log("Response added successfully.");
        res.status(200).json({
          msg: "Response added successfully.",
          data: data,
        });
      }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

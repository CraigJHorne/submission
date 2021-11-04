import axios from "axios";

export const ApplicationAction =
  (name, email, date, about, reason, pavers, file) => () => {
    const dateFormatted = date.toJSON();

    const application = {
      applicantName: name,
      applicantEmail: email,
      dateOfApplication: dateFormatted,
      aboutYou: about,
      reasonForApplying: reason,
      whatYouKnowAboutPavers: pavers,
      file: file,
    };

    axios
      .post("https://staging.interview-api.paversdev.co.uk/upload", application)
      .then(function (response) {
        console.log(response);

        if (response.status === 200) {
          alert("Your application has been submitted");
        } else if (response.status === 400) {
          alert(
            "There was a problem submitting your application, please resubmit your answers and try again"
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

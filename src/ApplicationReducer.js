const ApplicationReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_APPLICANT":
      return { Applicant: action.payload };

    default:
      return state;
  }
};

export default ApplicationReducer;

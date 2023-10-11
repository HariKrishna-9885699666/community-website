import * as Yup from "yup";

const nameValidationSchema = (field) => {
  return Yup.string()
  .test(
    "no-leading-trailing-spaces",
    `${field} should not have leading or trailing spaces`,
    (value) => {
      const cleanedValue = value.trim(); // Trim leading and trailing spaces
      return cleanedValue === value; // Check if the cleaned value is the same as the original value
    }
  )
  .test(
    "no-multiple-spaces",
    `${field} should not contain multiple spaces`,
    (value) => {
      // Replace multiple spaces with a single space
      const cleanedValue = value.replace(/\s+/g, " ");
      // Check if the cleaned value is the same as the original value
      return cleanedValue === value;
    }
  )
  .matches(
    /^[A-Za-z]+( [A-Za-z]+)*$/,
    `${field} can contain alphabets with a single space in between words`
  )
  .required(`${field} is required`);
}

const familyMemberSchema = Yup.object().shape({
  name: nameValidationSchema("Name"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
  relation: Yup.string().required("Relation is required"),
});

export const registrationValidationSchema = Yup.object().shape({
  name: nameValidationSchema("Name"),
  fatherName: nameValidationSchema("Father`s name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces"
    )
    .min(6, "Must be at least 6 characters long")
    .max(12, "Must not exceed 12 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  address: Yup.string()
    .max(1000, "Address must not exceed 1000 characters")
    .required("Address is required"),
  natureOfWork: Yup.string()
    .max(100, "Nature of work must not exceed 100 characters")
    .required("Nature of work is required"),
  cellNumber: Yup.string()
    .matches(/^\d{10}$/, "Cell Number must contain exactly 10 digits")
    .required("Cell Number is required"),
  education: Yup.string()
    .max(100, "Education must not exceed 100 characters")
    .required("Education is required"),
  dateOfBirth: Yup.date()
    .nullable() // Allow empty value
    .required("Date of Birth is required")
    .test(
      "valid-date-format",
      "Invalid date format. Please use dd-mm-yyyy format",
      (value) => {
        if (!value) return true; // Empty value is already handled by required
        const formattedDate = value
          ? `${value.getDate().toString().padStart(2, "0")}-${(
              value.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}-${value.getFullYear()}`
          : null;
        // Check if the date matches the dd-mm-yyyy format
        const dateParts = formattedDate.split("-");
        if (dateParts.length !== 3) return false; // Incorrect format

        const [day, month, year] = dateParts;
        const isValidDate = !isNaN(new Date(year, month - 1, day).getTime());

        return isValidDate;
      }
    )
    .test("date-in-past", "Date of Birth must be in the past", (value) => {
      if (!value) return true; // Empty value is already handled by required
      // Parse the date in "dd-mm-yyyy" format
      const formattedDate = value
        ? `${value.getDate().toString().padStart(2, "0")}-${(
            value.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${value.getFullYear()}`
        : null;
      const [day, month, year] = formattedDate.split("-").map(Number);
      const selectedDate = new Date(year, month - 1, day); // Month is 0-based
      const currentDate = new Date();
      return selectedDate < currentDate;
    }),
  placeOfBirth: Yup.string().max(
    30,
    "Place of birth should not exceed 30 characters"
  ),
  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhar number should be exactly 12 digits")
    .nullable(),
  bloodGroup: Yup.string().max(
    10,
    "Blood group should not exceed 10 characters"
  ),
  profilePic: Yup.mixed()
    .required("Profile pic is required")
    .test(
      "file-type",
      "Invalid file format. Only jpg, jpeg, and png are allowed.",
      (value) => {
        if (!value) return true; // Allow empty value
        const supportedFormats = ["image/jpeg", "image/jpg", "image/png"];
        return supportedFormats.includes(value.type);
      }
    )
    .test(
      "file-size",
      "File size is too large. Maximum allowed size is 5MB.",
      (value) => {
        if (!value) return true; // Allow empty value
        return value.size <= 5 * 1024 * 1024; // 5MB in bytes
      }
    ),
  digitalSignature: Yup.mixed()
    .test(
      "file-type",
      "Invalid file format. Only jpg, jpeg, and png are allowed.",
      (value) => {
        if (!value) return true; // Allow empty value
        const supportedFormats = ["image/jpeg", "image/jpg", "image/png"];
        return supportedFormats.includes(value.type);
      }
    )
    .test(
      "file-size",
      "File size is too large. Maximum allowed size is 5MB.",
      (value) => {
        if (!value) return true; // Allow empty value
        return value.size <= 5 * 1024 * 1024; // 5MB in bytes
      }
    ),
  noFamily: Yup.boolean(),
  familyMembers: Yup.array().when("noFamily", (noFamily, schema) => {
    if(!noFamily[0]) {
      return Yup.array()
        .of(familyMemberSchema)
        .min(1, "At least one family member is required");
    }
  })
});

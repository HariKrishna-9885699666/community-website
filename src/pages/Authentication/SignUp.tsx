import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { registrationValidationSchema } from '../../validationSchema/registrationValidationSchema';
import './styles/SignUp.css';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      fatherName: '',
      address: '',
      natureOfWork: '',
      cellNumber: '',
      education: '',
      dateOfBirth: null,
      placeOfBirth: '',
      aadharNumber: '',
      bloodGroup: '',
      profilePic: '',
      digitalSignature: '',
      familyMembers: [],
      noFamily: false,
      isChecked: false,
    },
    validationSchema: registrationValidationSchema,
    onSubmit: (values) => {
      // Check if the checkbox is checked before submitting
      if (values.isChecked) {
        // Handle form submission here
        console.log('Form data:', values);
      } else {
        // Open the modal if terms are not agreed
        Swal.fire('Please agree to the terms and conditions.');
      }
    },
  });
  const addFamilyMember = () => {
    if (formik.values.familyMembers.length < 5) {
      const newMember = { name: '', age: '', relation: '' };
      const updatedFamilyMembers = [...formik.values.familyMembers, newMember];

      formik.setFieldValue('familyMembers', updatedFamilyMembers);
    }
  };

  const removeFamilyMember = (index) => {
    const updatedFamilyMembers = [...formik.values.familyMembers];
    updatedFamilyMembers.splice(index, 1);
    formik.setFieldValue('familyMembers', updatedFamilyMembers);
  };
  return (
    <>
      <div class="page-container">
        <div className="container mx-auto px-4 h-screen flex flex-col">
          {/* <div className="flex justify-center items-center h-screen"> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="w-full p-6 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to Welfarehub
              </h2>

              <form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-2 gap-4"
              >
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your full name"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.name && formik.errors.name
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.name}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.email && formik.errors.email
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.email}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.password && formik.errors.password
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.password}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                            fill=""
                          />
                          <path
                            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your Confirm Password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <div className="error-message">
                          <p className="text-danger font-medium text-xs mt-1">
                            {formik.errors.confirmPassword}
                          </p>
                        </div>
                      )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                            fill=""
                          />
                          <path
                            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Father's Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fatherName"
                      value={formik.values.fatherName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your father's name"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.fatherName && formik.errors.fatherName
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.fatherName && formik.errors.fatherName && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.fatherName}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Address
                  </label>
                  <div className="relative">
                    <textarea
                      type="text"
                      rows="4"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your address"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.address && formik.errors.address
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.address}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z"
                            fill=""
                          />
                          <path
                            d="M12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Nature of work
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="natureOfWork"
                      value={formik.values.natureOfWork}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your nature of work"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.natureOfWork &&
                        formik.errors.natureOfWork
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.natureOfWork &&
                      formik.errors.natureOfWork && (
                        <div className="error-message">
                          <p className="text-danger font-medium text-xs mt-1">
                            {formik.errors.natureOfWork}
                          </p>
                        </div>
                      )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M18 6H6C4.9 6 4 6.9 4 8V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V8C20 6.9 19.1 6 18 6ZM18 18H6V9.2L10.5 13C11.1 13.4 12 13.6 13 13.5C16 13.5 18 11.5 18 8V18Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Cell Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cellNumber"
                      value={formik.values.cellNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your cell number"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.cellNumber && formik.errors.cellNumber
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.cellNumber && formik.errors.cellNumber && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.cellNumber}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 20H7V4H17V20Z" />
                          <path d="M12 18C11.4 18 11 17.6 11 17C11 16.4 11.4 16 12 16C12.6 16 13 16.4 13 17C13 17.6 12.6 18 12 18Z" />
                          <path d="M9.7 14.7C9.4 14.4 9.1 14.2 8.7 14.1C8.4 14 8.1 14 7.7 14C7.1 14 6.6 14.3 6.3 14.7L5.2 16.7C5 16.9 4.8 17.2 4.8 17.5C4.8 17.8 5 18 5.2 18.2C5.5 18.5 5.7 18.7 6 19.1C6.3 19.4 6.6 19.8 7 20.2C7.4 20.5 7.5 20.8 7.7 21.1C7.9 21.4 8 21.7 8.1 22H15.8C16 21.7 16.1 21.4 16.3 21.1C16.5 20.8 16.6 20.5 17 20.2C17.3 19.8 17.7 19.4 18 19.1C18.2 18.7 18.5 18.5 18.8 18.2C19 18 19.2 17.8 19.2 17.5C19.2 17.2 19 17 18.8 16.7L17.7 14.7C17.4 14.3 16.9 14 16.3 14C15.9 14 15.6 14 15.3 14.1C15 14.2 14.6 14.4 14.3 14.7C13.7 15.2 13.4 15.8 13.4 16.5C13.4 17.1 13.7 17.7 14.3 18.2L15.3 19.3C15.7 19.7 16.3 20 16.9 20C17.5 20 18 19.7 18.4 19.3L19.4 18.2C20 17.7 20.4 17.1 20.4 16.5C20.4 15.8 20.1 15.2 19.5 14.7C19.2 14.4 18.9 14.2 18.5 14.1C18.2 14 17.9 14 17.3 14C16.9 14 16.4 14.3 16.1 14.7L15 15.8L13.9 14.7C13.6 14.3 13.1 14 12.7 14C12.3 14 12 14 11.7 14.1C11.4 14.2 11.1 14.4 10.8 14.7C10.2 15.2 9.9 15.8 9.9 16.5C9.9 17.1 10.2 17.7 10.8 18.2L11.8 19.3C12.2 19.7 12.8 20 13.4 20C14 20 14.6 19.7 15 19.3L16 18.2C16.5 17.7 16.9 17.1 16.9 16.5C16.9 15.8 16.6 15.2 16 14.7C15.7 14.4 15.4 14.2 15 14.1C14.7 14 14.4 14 14 14C13.6 14 13.1 14.3 12.8 14.7L11.8 15.8L9.7 14.7Z" />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Education
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="education"
                      value={formik.values.education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your education"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.education && formik.errors.education
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.education && formik.errors.education && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.education}
                        </p>
                      </div>
                    )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L22 10L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <DatePicker
                      name="dateOfBirth"
                      selected={formik.values.dateOfBirth}
                      onChange={(date) => {
                        formik.setFieldValue('dateOfBirth', date);
                      }}
                      dateFormat="dd-MM-yyyy" // Set the desired date format
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.dateOfBirth && formik.errors.dateOfBirth
                          ? 'border-danger'
                          : ''
                      }`}
                      placeholderText="Select Date"
                    />
                    {formik.touched.dateOfBirth &&
                      formik.errors.dateOfBirth && (
                        <div className="error-message">
                          <p className="text-danger font-medium text-xs mt-1">
                            {formik.errors.dateOfBirth}
                          </p>
                        </div>
                      )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" />
                          <path d="M7 11H12V16H7V11Z" />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Place of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="placeOfBirth"
                      value={formik.values.placeOfBirth}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your place of birth"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.placeOfBirth &&
                        formik.errors.placeOfBirth
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.placeOfBirth &&
                      formik.errors.placeOfBirth && (
                        <div className="error-message">
                          <p className="text-danger font-medium text-xs mt-1">
                            {formik.errors.placeOfBirth}
                          </p>
                        </div>
                      )}

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z"
                            fill=""
                          />
                          <path
                            d="M12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Aadhar Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="aadharNumber"
                      value={formik.values.aadharNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your aadhar number"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.aadharNumber &&
                        formik.errors.aadharNumber
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.aadharNumber &&
                      formik.errors.aadharNumber && (
                        <div className="error-message">
                          <p className="text-danger font-medium text-xs mt-1">
                            {formik.errors.aadharNumber}
                          </p>
                        </div>
                      )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Blood Group
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="bloodGroup"
                      value={formik.values.bloodGroup}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your blood group"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.bloodGroup && formik.errors.bloodGroup
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.bloodGroup && formik.errors.bloodGroup && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.bloodGroup}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Profile Pic
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      name="profilePic"
                      onChange={(event) => {
                        formik.setFieldValue(
                          'profilePic',
                          event.currentTarget.files[0],
                        );
                      }}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.profilePic && formik.errors.profilePic
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.profilePic && formik.errors.profilePic && (
                      <div className="error-message">
                        <p className="text-danger font-medium text-xs mt-1">
                          {formik.errors.profilePic}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Digital Signature
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      name="digitalSignature"
                      onChange={(event) => {
                        formik.setFieldValue(
                          'digitalSignature',
                          event.currentTarget.files[0],
                        );
                      }}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        formik.touched.digitalSignature &&
                        formik.errors.digitalSignature
                          ? 'border-danger'
                          : ''
                      }`}
                    />
                    {formik.touched.digitalSignature &&
                      formik.errors.digitalSignature && (
                        <div className="error-message">
                          <p className="text-danger font-medium text-xs mt-1">
                            {formik.errors.digitalSignature}
                          </p>
                        </div>
                      )}
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <div className="mt-6 text-center">
                <p>
                  Already have an account?{' '}
                  <Link to="/" className="text-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default SignUp;

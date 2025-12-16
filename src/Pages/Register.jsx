import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const { register, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch districts
    axios
      .get("/districts.json")
      .then((res) => {
        if (res.data && Array.isArray(res.data[2]?.data)) {
          setDistricts(res.data[2].data);
        } else {
          setDistricts([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load districts:", err);
        setDistricts([]);
      });

    // Fetch upazilas
    axios
      .get("/upazilas.json")
      .then((res) => {
        if (res.data && Array.isArray(res.data[2]?.data)) {
          setUpazilas(res.data[2].data);
        } else {
          setUpazilas([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load upazilas:", err);
        setUpazilas([]);
      });
  }, []);

  // Handle register
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const confirmPassword = form.confirm_password.value;
    const file = form.photo.files[0];

    // Password validation
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters");
    if (!/[A-Z]/.test(password))
      return toast.error("Password must contain an uppercase letter");
    if (!/[a-z]/.test(password))
      return toast.error("Password must contain a lowercase letter");
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Image upload
    const formData = new FormData();
    formData.append("image", file);

    try {
      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=5addb8e01c6601c6138cb541824975b6`,
        formData
      );

      const photoURL = imgRes.data.data.display_url;

      const userInfo = {
        name,
        email,
        photoURL,
        bloodGroup,
        district,
        upazila,
      };

      console.log(userInfo);

      // Register with email and password
      register(email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL,
          })
            .then(() => {
              setUser(userCredential.user);
              axios
                .post("http://localhost:3000/users", userInfo)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });

          toast.success("Registration successful");
          form.reset();
          setPassword("");
          navigate("/login");
        })
        .catch((err) => toast.error(err.message));
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <input
              name="name"
              placeholder="Name"
              className="input w-full mb-2"
              required
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input w-full mb-2"
              required
            />

            {/* Avatar */}
            <input
              name="photo"
              type="file"
              className="input w-full mb-2"
              required
            />

            {/* Blood Group */}
            <select name="bloodGroup" className="input w-full mb-2" required>
              <option value="">Select Blood Group</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                <option key={bg}>{bg}</option>
              ))}
            </select>

            {/* District */}
            <select name="district" className="input w-full mb-2" required>
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>

            {/* Upazila */}
            <select name="upazila" className="input w-full mb-2" required>
              <option value="">Select Upazila</option>
              {upazilas.map((u) => (
                <option key={u.id} value={u.name}>
                  {u.name}
                </option>
              ))}
            </select>

            {/* Password */}
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative mb-2">
              <input
                name="confirm_password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input w-full"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {passwordError && (
              <p className="text-red-500 text-sm mb-2">{passwordError}</p>
            )}

            <button className="btn btn-neutral w-full">Register</button>
          </form>

          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

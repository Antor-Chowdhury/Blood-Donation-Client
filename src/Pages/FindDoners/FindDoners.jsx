import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import useAxios from "../../hooks/useAxios";

const FindDoners = () => {
  const axiosSecure = useAxios();

  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    bloodGroup: "",
    district: "",
    upazila: "",
  });

  // Fetch all donors on page load
  useEffect(() => {
    const fetchDonors = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get("/donors");
        setDonors(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get("/donors", {
        params: filters,
      });
      setDonors(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black">Find a Donor</h1>
        <p className="text-gray-500">
          Search blood donors by location and blood group
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <select
          className="select select-bordered"
          onChange={(e) =>
            setFilters({ ...filters, bloodGroup: e.target.value })
          }
        >
          <option value="">Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="District"
          className="input input-bordered"
          onChange={(e) => setFilters({ ...filters, district: e.target.value })}
        />

        <input
          type="text"
          placeholder="Upazila"
          className="input input-bordered"
          onChange={(e) => setFilters({ ...filters, upazila: e.target.value })}
        />

        <button onClick={handleSearch} className="btn btn-primary flex gap-2">
          <BiSearch size={20} />
          Search
        </button>
      </div>

      {/* Results */}
      <h3 className="text-lg font-semibold mb-4">
        Showing {donors.length} results
      </h3>

      {loading && <p>Loading donors...</p>}

      {!loading && donors.length === 0 && (
        <p className="text-gray-500 text-center">
          No donors found for selected filters
        </p>
      )}

      {/* Donor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map((donor) => (
          <div
            key={donor._id}
            className="bg-gray-400 rounded-xl shadow-md p-4 text-center"
          >
            <img
              src={donor.photoURL}
              alt={donor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />

            <h4 className="text-lg font-bold text-gray-700">{donor.name}</h4>

            <div className="flex items-center justify-center gap-1 text-sm text-gray-700 mb-2">
              <CiLocationOn />
              <span>
                {donor.district}, {donor.upazila}
              </span>
            </div>

            <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
              {donor.bloodGroup}
            </span>

            <button className="btn btn-outline btn-primary w-full">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoners;

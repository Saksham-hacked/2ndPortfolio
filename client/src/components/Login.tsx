import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaEnvelope, FaLock } from "react-icons/fa";

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch("https://twondportfolio.onrender.com/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensures JSON format
        },
        body: JSON.stringify(credentials), // Convert object to JSON string
        credentials: "include", // Allows cookies to be sent with request
      });
  
      // console.log("response", );
  
      const data = await response.json();
      // console.log("data", data);
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // console.log("Login Successful:", data);
      if (data.token) navigate("/admin");
      else navigate("/login");
  
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <Card className="w-96 bg-transparent bg-opacity-10 backdrop-blur-md p-6 rounded-lg text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-600 py-2">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                className="bg-transparent border-none focus:ring-0 text-white w-full outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-2 border-b border-gray-600 py-2">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="bg-transparent border-none focus:ring-0 text-white w-full outline-none"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <Button onClick={() => navigate("/")} className="w-full mt-4 bg-gray-600 hover:bg-gray-700">
            Go to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;

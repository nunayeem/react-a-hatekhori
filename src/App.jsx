import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setTeachers(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.loading}>Loading teachers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.center}>
        <p style={styles.error}>⚠️ Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍🏫 Teacher Directory</h1>
      {teachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <ul style={styles.list}>
          {teachers.map((teacher) => (
            <li key={teacher.id} style={styles.listItem}>
              <h3 style={styles.name}>{teacher.name}</h3>
              <p style={styles.details}>
                <strong>Username:</strong> {teacher.username} <br />
                <strong>Email:</strong> {teacher.email}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#1E40AF",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#F3F4F6",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  name: {
    margin: "0 0 5px 0",
    color: "#111827",
  },
  details: {
    margin: 0,
    color: "#374151",
  },
  center: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  loading: {
    fontSize: "18px",
    color: "#2563EB",
  },
  error: {
    color: "#DC2626",
    fontWeight: "bold",
  },
};

export default App;

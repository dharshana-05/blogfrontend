import '../../globals.css'; 
import Link from 'next/link';
const AdminHomePage = () => {
  return (
    <div className="admin-home-container">
      <h1 className="admin-title">Administrator Dashboard</h1>
      <div className="admin-buttons">
        <Link href="/createblog">
          <button className="admin-btn">Create Blog</button>
        </Link>
        <Link href="/updateblog">
          <button className="admin-btn">Update Blog</button>
        </Link>
        <Link href="/deleteblog">
          <button className="admin-btn">List Blog</button>
        </Link>
      </div>
    </div>
  );
};
export default AdminHomePage;

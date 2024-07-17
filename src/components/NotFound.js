import notFound from "../images/notfound.svg"
export default function NotFound() {
  return (
    <div className="container">
      <h3>ไม่พบหน้าเว็บ (404 Page Not Found)</h3>
      <img src={notFound} alt="notFound" />
    </div>
  );
}

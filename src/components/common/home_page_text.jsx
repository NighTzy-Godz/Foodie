const HomePageText = ({ miniText, title, desc }) => {
  return (
    <div className="text">
      <p className="title">{miniText}</p>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default HomePageText;

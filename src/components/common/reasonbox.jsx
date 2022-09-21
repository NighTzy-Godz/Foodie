const ReasonBox = ({ img, title, desc }) => {
  return (
    <div className="box">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ReasonBox;

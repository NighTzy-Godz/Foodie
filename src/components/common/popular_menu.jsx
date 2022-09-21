const PopularMenu = ({ img, name, price, creator }) => {
  return (
    <div className="menu_box">
      <img src={img} alt="" />

      <div className="content">
        <h3>{name}</h3>
        <div className="d-flex menu_box_content">
          <p className="price">&#8369; {price}</p>
          <p className="created_by">By: {creator}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;

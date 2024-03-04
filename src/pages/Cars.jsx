import ListCar from "../Content/ListCar/ListCar";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

const Cars = () => {
  return (
    <div className="flex">
      <NavigationBar />
      <SideBarMenu menu={"Cars"} />
      <ListCar />
    </div>
  );
};

export default Cars;

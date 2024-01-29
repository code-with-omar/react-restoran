import About from "../Shared/About/About";
import BookTable from "../Shared/BookTable/BookTable";
import Menu from "../Shared/Menu/Menu";
import Service from "../Shared/Service/Service";


const Main = () => {
    return (
        <div className="">
            <Service></Service>
            <About></About>
            <Menu></Menu>
            <BookTable></BookTable>
        </div>
    );
};

export default Main;
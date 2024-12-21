import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
function AddCabins() {
  return (
    <>
      <CabinTable />
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddCabins;

// function AddCabins() {
//   const [isOpenModal, setIsOpenModel] = useState(false);
//   useEffect(function () {
//     getCabins().then((data) => console.log(data));
//   }, []);
//   return (
//     <div>
//       <CabinTable />
//       <Button onClick={() => setIsOpenModel((show) => !show)}>
//         Add new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

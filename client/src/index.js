import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import PolicyForm from "./components/PolicyForm";
import PolicyList from "./components/PolicyList";
import "./css/style.css";

const modal = new Modal();
const policyForm = new PolicyForm();
const policyList = new PolicyList();

policyForm.render();

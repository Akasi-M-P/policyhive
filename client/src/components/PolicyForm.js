import PoliciesApi from "../services/PoliciesApi";
import PolicyList from "./PolicyList";

class PolicyForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this._policyList = new PolicyList();
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (
      !this._form.elements.sector.value ||
      !this._form.elements.username.value
    ) {
      alert("Please enter all fields");
      return;
    }

    const policy = {
      text: this._form.elements.text.value,
      sector: this._form.elements.sector.value,
      username: this._form.elements.username.value,
    };

    // Save Username to local storage
    localStorage.setItem("username", this._form.elements.username.value);

    // Add new policy to server
    const newPolicy = await PoliciesApi.createPolicy(policy);

    // Add new policy to DOM/List
    this._policyList.addNewPolicyToList(newPolicy.data.data);

    // Clear al fields
    // this._form.elements.text.value = "";
    // this._form.elements.sector.value = "";
    // this._form.elements.username.value = "";
    this._form.reset();

    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this._formModal.innerHTML = `
    <form id="policy-form">
          <div class="form-control"> 
            <label for="policy-text">Enter a Username</label>
            <input type="text" name="username" id="username"  value="${
              "username" ? localStorage.getItem("username") : ""
            }"/>
          </div>
          <div class="form-control">
            <label for="policy-text">What's Your policy?</label>
            <textarea name="text" id="policy-text"></textarea>
          </div>
          <div class="form-control">
            <label for="sector">Sector</label>
            <input type="text" name="sector" id="sector" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>
    `;
    this._form = document.querySelector("#policy-form");
    this.addEventListeners();
  }
}

export default PolicyForm;

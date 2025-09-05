class PolicyForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    const policy = {
      text: this._form.elements.text.value,
      sector: this._form.elements.sector.value,
      username: this._form.elements.username.value,
    };

    console.log(policy);

    // Clear al fields
    this._form.elements.text.value = "";
    this._form.elements.sector.value = "";
    this._form.elements.username.value = "";

    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this._formModal.innerHTML = `
    <form id="policy-form">
          <div class="form-control"> 
            <label for="policy-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
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

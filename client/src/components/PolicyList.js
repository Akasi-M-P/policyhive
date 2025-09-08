import PoliciesApi from "../services/PoliciesApi";

class PolicyList {
  constructor() {
    this._policyListEl = document.querySelector("#policy-list");
    this._policies = [];
    this._validSectors = new Set();
    this._validSectors.add("technology");
    this._validSectors.add("software");
    this._validSectors.add("education");
    this._validSectors.add("inventions");
    this._validSectors.add("business");
    this._validSectors.add("health");
  }

  async getPolicies() {
    try {
      const res = await PoliciesApi.getPolicies();
      this._policies = res.data.data;
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  async addNewPolicyToList() {
    try {
      const res = await PoliciesApi.getPolicies();
      this._policies = res.data.data;
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  getSectorClass(sector) {
    sector = sector.toLowerCase();
    let sectorClass = "";

    if (this._validSectors.has(sector)) {
      sectorClass = `sector-${sector}`;
    }

    return sectorClass;
  }

  render() {
    this._policyListEl.innerHTML = this._policies
      .map((policy) => {
        const sectorClass = this.getSectorClass(policy.sector);
        return `
      <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${policy.text}
          </h3>
          <p class="sector ${sectorClass}">${policy.sector.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${policy.date}</span> by
            <span class="author">${policy.username}</span>
          </p>
        </div>
      `;
      })
      .join("");
  }
}

export default PolicyList;

// Example usage (move async call outside constructor)
const policyList = new PolicyList();
policyList.getPolicies();

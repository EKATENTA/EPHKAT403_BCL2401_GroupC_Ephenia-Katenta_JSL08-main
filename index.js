//// Define the BankBranch class
class BankBranch {
  constructor(branchInfo) {
    if (!BankBranch.bankBranchInstance) {
      this.branchInfo = branchInfo;
      BankBranch.bankBranchInstance = this;
    }
    return BankBranch.bankBranchInstance;
  }

  // Method to retrieve branch information
  getBranchInfo() {
    return this.branchInfo;
  }
}


// Set singleton instance variable 
BankBranch.bankBranchInstance = null;


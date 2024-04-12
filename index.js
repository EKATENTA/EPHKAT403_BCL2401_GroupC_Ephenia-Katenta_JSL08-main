//// Define the BankBranch class
class BankBranch {
  constructor(branchInfo) {
    if (!BankBranch.bankBranchInstance) {
      this.branchInfo = branchInfo;
      BankBranch.bankBranchInstance = this;
    }
    return BankBranch.bankBranchInstance;
  }

  // Method to retrieve branch details
  getBranchInfo() {
    return this.branchInfo;
  }
}


// Set singleton instance variable 
BankBranch.bankBranchInstance = null;

// Creating instances and Usage of BankBranch class 
const branchA = new BankBranch("Branch A Information");
const branchB = new BankBranch("Branch B Information");

// Retrieving branch information
const branchAInfo = branchA.getBranchInfo();
const branchBInfo = branchB.getBranchInfo();

// Verifying both branches point to the same instance
console.log(branchA === branchB); // true

// Verifying branch details
console.log(branchAInfo); 
console.log(branchBInfo); 



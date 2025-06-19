// Centralized PAY ID validation for all transactions
export const VALID_PAY_ID = "PAG-2833AVXNLMPAYOG"

export function validatePayIdCode(code: string): boolean {
  return code === VALID_PAY_ID
}

export function getPayIdValidationMessage(): string {
  return "Invalid PAY ID code. Please buy a valid PAY ID to continue with transactions."
}

"use client"

import { AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PayIdErrorProps {
  isOpen: boolean
  onClose: () => void
  message?: string
}

export function PayIdError({ isOpen, onClose, message }: PayIdErrorProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h3 className="text-lg font-bold text-red-600">PAY ID Required</h3>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-gray-700">{message || "You need a valid PAY ID to complete this transaction."}</p>
          <p className="text-sm text-gray-500">
            If you don't have a PAY ID, you can purchase one from the app to unlock all features.
          </p>
        </div>

        <div className="flex gap-3">
          <Button onClick={onClose} variant="outline" className="flex-1">
            Cancel
          </Button>
          <Link href="/buy-pay-id" className="flex-1">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Buy PAY ID</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

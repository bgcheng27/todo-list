import React, { useState } from "react";

export default function Footer() {
  const [date, setDate] = useState(() => {
    let date = new Date()
    return date.getFullYear()
  })

  return (
    <footer>
      <p className="text-center py-3">Copyright © {date} | Brian Cheng </p>
    </footer>
  )
}

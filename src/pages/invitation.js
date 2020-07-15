import React from "react"

const Invitation = () => (
  <div className="h-screen relative">
    <div className="h-mobile-invitation bg-yellow-400 uppercase flex justify-center items-center font-invitation text-6xl bg-invitation-stage bg-no-repeat text-white relative">
      <div>It's my birthday</div>
      <div className="absolute bg-wave top-0 left-0 right-0 z-10"></div>
    </div>
    <div>
      Ich lade dich ganz herzlich zu meinem kleinen Geburtstags Picknick ein
      29|8|2020 Bei gutem Wetter im Innenhof oder bei schlechtem Wetter im
      Mildestieg 2. Ich freue mich auf dich. Partner können gerne mitgebracht
      werden
    </div>
    <div className="h-mobile-invitation w-screen bg-abstract transform-abstract absolute bottom-0 left-0 bg-no-repeat"></div>
    <div className="bg-fruit h-16 w-16"></div>
  </div>
)

export default Invitation

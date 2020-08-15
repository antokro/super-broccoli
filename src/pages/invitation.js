import React from "react"
import "../css/global.css"

const Invitation = () => (
  <div className="h-screen w-screen">
    <div className="relative h-mobile-invitation">
      <div className="uppercase h-full font-invitation text-6xl bg-invitation-stage text-center pt-24 bg-cover text-white">
        It's my birthday
      </div>
      <div className="absolute bg-wave bottom-0 left-0 right-0 z-10 h-24 bg-cover"></div>
    </div>
    <div className="bg-beer bg-no-repeat pr-10 pl-10 pb-10 font-invitation text-center">
      <div className="text-lg pb-3 leading-tight">
        Ich lade dich ganz herzlich zu meinem kleinen Geburtstags
        Weißwurstfrühstück ein.
      </div>
      <div className="text-2xl pb-3">29|8|2020 - 12Uhr - Mildestieg2</div>
      <div className="text-lg pb-3 leading-tight">
        Bei gutem Wetter im Innenhof oder bei schlechtem Wetter drinnen.
      </div>
      <div className="text-lg leading-tight">Ich freue mich auf dich 💁</div>
    </div>
  </div>
)

export default Invitation

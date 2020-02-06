import React from "react"

function EmailSendTo() {
    return(
      <div>
      <h2>Whose email do you want to send the receipt to?</h2>
        <select>
          <option value="Choose the tenant(s)">Choose the tenant(s) email(s)</option>
          <option value="weitingxus@gmail.com">LANDLORD: Weiting Xu</option>
          <option value="adrian_martin@rogers.com">Adrian Martin</option>
          <option value="carras@smh.ca">Ashley Carr</option>
          <option value="hadeer.Tarik@live.com">Hadeer Ali Tarik</option>
          <option value="eranpolyakova@gmail.com ">Irina Polyakova</option>
          <option value="lspezzano1@hotmail.ca">Lucy Spezzano & John Spezzano</option>
          <option value="Merc.masuma@gmail.com, minhal.datoo@gmail.com">Masuma Merchant & Minhal Datoo</option>
          <option value="sharlonabrahim@gmail.com, eabrahim@gmail.com">Sharlon Abrahim & Ehsaan Abrahim</option>
          <option value="wrockqulee.edwards@gmail.com">Wrockulee Edwards & Dominique McLaughlin</option>
        </select>
      </div>
    )
}

export default EmailSendTo

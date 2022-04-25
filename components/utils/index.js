export function findDebitCardType(cardNumber) {
  const regexPattern = {
    MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
    VISA: /^4[0-9]{2,}$/,
    RUPAY: /^6(?!011)(?:0[0-9]{14}|52[12][0-9]{12})$/,
    AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
    DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
    // DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
    // JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
  };
  for (const card in regexPattern) {
    if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) return card;
  }
  return "";
}

// export const stripeCardExpirValidation = (value) => {
//   if (value) {
//     if (/^(0[1-9]|1[0-2])\/[0-9]{2}$/i.test(value.trim())) {
//       let today = new Date();
//       let CurrentDate = moment(
//         new Date(
//           today.getFullYear() +
//             "-" +
//             (today.getMonth() + 1) +
//             "-" +
//             new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
//         )
//       );
//       let visaValue = value.split("/");
//       let visaDate = new Date(`20${visaValue[1]}`, visaValue[0], 0);
//       return CurrentDate < moment(visaDate)
//         ? undefined
//         : "Please enter valid date";
//     } else {
//       return "Invalid date format";
//     }
//   }
// };

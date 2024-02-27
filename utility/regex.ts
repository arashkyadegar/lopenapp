export const rgx_insecure = '[$()<>""\'#%{}~!"^|]'; //unsecure chars
export const rgx_date = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
export const rgx_frNo = /^[۰-۹]+$/;
export class dic {
  _en: string = "";
  _fa: string = "";
  constructor(en: string, fa: string) {
    this._en = en;
    this._fa = fa;
  }
}

export const turnToFa = (number: string) => {
  const persian = [
    new dic("0", "۰"),
    new dic("1", "۱"),
    new dic("2", "۲"),
    new dic("3", "۳"),
    new dic("4", "۴"),
    new dic("5", "۵"),
    new dic("6", "۶"),
    new dic("7", "۷"),
    new dic("8", "۸"),
    new dic("9", "۹"),
  ];
  //   const persian =dic {
  //     0: "۰",
  //     1: "۱",
  //     2: "۲",
  //     3: "۳",
  //     4: "۴",
  //     5: "۵",
  //     6: "۶",
  //     7: "۷",
  //     8: "۸",
  //     9: "۹",
  //   };
  let rslt = "";
  if (number != undefined) {
  const tmp_number = number.toString().split("");
    for (let i = 0; i < tmp_number.length; i++) {
      let x: any;
      if (tmp_number[i] != ".") {
        x = parseInt(tmp_number[i]);
        rslt = rslt + persian[x]._fa;
      } else {
        rslt = rslt + ".";
      }
    }
  }
  //   for (let i = 0; i < number.length; i++) {
  //     persianNumber += number[i];
  //   }
  return rslt;
};

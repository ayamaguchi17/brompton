let langBtn = document.querySelector(".langBtn")
let link = document.querySelectorAll(".link")
let history = document.querySelector(".history")
let design = document.querySelector(".design")
let aboutTitle = document.querySelector(".about-title")
let aboutName = document.querySelector(".about-name")
let aboutText = document.querySelector(".about-text")
let bikeTitle = document.querySelector(".bike-title")
let bikeName1 = document.querySelector(".bike-name1")
let bikeName2 = document.querySelector(".bike-name2")
let bikeName3 = document.querySelector(".bike-name3")
let bikeText1 = document.querySelector(".bike-text1")
let bikeText2 = document.querySelector(".bike-text2")
let bikeText3 = document.querySelector(".bike-text3")

link.forEach((cl) => {
  cl.addEventListener("click", () => {
    langBtn.querySelector(".active").classList.remove("active")
    cl.classList.add("active")

    let attr = cl.getAttribute("language")

    history.textContent = data[attr].history
    design.textContent = data[attr].design
    aboutTitle.textContent = data[attr].aboutTitle
    aboutName.textContent = data[attr].aboutName
    aboutText.textContent = data[attr].aboutText
    bikeTitle.textContent = data[attr].bikeTitle
    bikeName1.textContent = data[attr].bikeName1
    bikeName2.textContent = data[attr].bikeName2
    bikeName3.textContent = data[attr].bikeName3
    bikeText1.textContent = data[attr].bikeText1
    bikeText2.textContent = data[attr].bikeText2
    bikeText3.textContent = data[attr].bikeText3
  })
})

let data = {
  jp: {
    history:"歴史",
    design:"デザイン",
    aboutTitle: "メイドインロンドン",
    aboutName: "1975年創設",
    aboutText:
      "あれは偶然ほとんどこの始末院というののために持っでた。まあ時間に矛盾方はよくこの任命ますましかもに見から過ぎるたをは推測云いべきないて、そうにも出さうたらますた。はめに見せるたものもひとまず九月をどうかなくっましだ。もう大森さんが拡張主義ますます注意を待っなけれ主義この男私か解剖をってご懊悩うたですたて、その今はそちらか人格ろに進んながら、岩崎さんののを落語の私がどうもお撲殺と果せるて私兄をお安心を済んように同時にごお尋ねを与えないまして、ついもう見当を云うたがくるでし事から抱いますあっ。実はつまり肝権力を離さんは実際不愉快とふらしですて、こういう会をは犯さましてという他にほかならてならたなら。",
    bikeTitle: "Folding Bike",
    bikeName1: "CHPT3 V3",
    bikeText1:
      "コラボレーションが始まって5年になりますが、ストーリーはまだ始まったばかりのようです。Brompton x CHPT3 の第3章です。",
    bikeName2: "Barbour x Brompton Special Edition",
    bikeText2:
      "英国スタイルで楽しむ旅の喜び。Barbour x Bromptonのコラボレーションは、英国のデザインと製造業における共通の伝統資産を活かしています。 実用的な英国製品をご用意いたしました。",
    bikeName3: "Nine Streets Edition",
    bikeText3:
      "NineStreetsはロンドンのBrompton工場で生産されています。各自転車は、ナインストリートのユニークな仕上げを作成するために最高品質の職人技で手作りです。",
  },
  en: {
    history:"History",
    design:"Design",
    aboutTitle: "Made in London",
    aboutName: "Since 1975",
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis vulputate enim, vitae viverra turpis. Mauris commodo, tellus id dictum malesuada, metus tortor porttitor ante, in tempor leo risus eu diam. Pellentesque volutpat a risus a viverra. Etiam sed ligula turpis. Ut malesuada nisl est, vel aliquam elit pretium sed. Aliquam erat volutpat. Etiam id sem ut sapien feugiat pharetra. Pellentesque fringilla tortor quis odio eleifend finibus. Nunc aliquam luctus enim vel eleifend. Donec sollicitudin tincidunt justo, rhoncus accumsan mi lacinia eu. Aenean condimentum semper nisi. Nulla ornare magna id orci bibendum tempor gravida nec mauris. Cras tempor posuere varius. Suspendisse vulputate iaculis sapien ac faucibus. Nunc bibendum eleifend egestas. Curabitur non ligula nibh.",
    bikeTitle: "Folding Bike",
    bikeName1: "CHPT3 V3",
    bikeText1:
      "Donec sollicitudin tincidunt justo, rhoncus accumsan mi lacinia eu. Aenean condimentum semper nisi. Nulla ornare magna id orci bibendum tempor gravida nec mauris. Cras tempor posuere varius. Suspendisse vulputate iaculis sapien ac faucibus.",
    bikeName2: "Barbour x Brompton Special Edition",
    bikeText2:
      "Suspendisse vulputate iaculis sapien ac faucibus. Nunc bibendum eleifend egestas. Curabitur non ligula nibh.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Phasellus id metus iaculis, iaculis velit quis, congue dui. Vestibulum eget iaculis lacus.",
    bikeName3: "Nine Streets Edition",
    bikeText3:
      "Mauris commodo, tellus id dictum malesuada, metus tortor porttitor ante, in tempor leo risus eu diam. Pellentesque volutpat a risus a viverra. Etiam sed ligula turpis. Ut malesuada nisl est, vel aliquam elit pretium sed. Aliquam erat volutpat. Etiam id sem ut sapien feugiat pharetra.",
  },
}

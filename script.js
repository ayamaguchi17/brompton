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
      "BROMPTON（ブロンプトン）は、1975年に発明された折りたたみ自転車で、２０秒以内にホイールよりも少し大きいロック式に容易に折りたためるよう巧みに設計されています。他に類をみない折りたたみ自転車です。1975年、ブロンプトンオラトリーを見下ろすアパートの寝室で、彼は独創的な3つの部分からなる折り畳み式自転車を発明しました。小さなパッケージに変身し、彼と一緒にどこにでも行ける乗り物です。街の「魔法のじゅうたん」。2005年に発売されたBROMPTONスーパーライトモデルは、軽量のチタン製リアフレームとフォークで設計されており、自転車と企業の両方にとっての進化を表しています。その後まもなく、プロジェクトのリードエンジニアの1人であるウィル・バトラーアダムスが最高経営責任者の役割を引き継ぎました。現在、テクニカルディレクターとして、アンドリューはエンジニアリングをもっぱら担当しています。2016年に辞任する前に、彼の元の特許で概説されている未来のアイデア、つまり「電気モーター」を備えたBROMPTON自転車が実現しました",
    bikeTitle: "折りたたみ自転車",
    bikeName1: "仲間",
    bikeText1:
      "長さ585mm、高さ565mm、奥行き270mm。しっかり固定された状態の小型でコンパクトなパッケージに変形するように巧みに設計されています。汚れた部分はいずれも中に封じ込められています。折りたたまれたBROMPTONは、けん引、収納、滑走そして転がすことができます。",
    bikeName2: "自由",
    bikeText2:
      "BROMPTONは折りたたまれて小さなコンパクトなパッケージになり、全体がしっかり固定された状態になります。20秒未満で。BROMPTON自転車はラッシュアワーの電車でも大歓迎です-予約する必要はありません。小型車のトランクの中。タクシー、ボート、フェリー、路面電車、バス。自転車を会議、カフェ、図書館、スーパーマーケットに持って行ってください。機能的な設計はあなたの調子に適応し、あなたと一緒にどこでも移動します。",
    bikeName3: "高性能",
    bikeText3:
      "BROMPTON（ブロンプトン）バイクは製造工程が他のバイクとは異なります。弊社のバイクは、街中やその先へ移動するために適し、効率的で快適なライドが楽しめるよう設計されています。 機能性だけでなく、それ以上のパフォーマンスを発揮するバイクであり、今までに体験したことのない「BROMPTONを手にするまで得られない、BROMPTONだけのバイクライド」をお楽しみいただけます。",
  },
  en: {
    history:"History",
    design:"Design",
    aboutTitle: "Made in London",
    aboutName: "Since 1975",
    aboutText:
      "BROMPTON is a folding bicycle invented in 1975, cleverly designed to fold easily into a locking mechanism slightly larger than the wheels in less than 20 seconds. It is a folding bicycle like no other: in 1975, in the bedroom of his apartment overlooking the BROMPTON Oratory, he invented an ingenious three-part folding bicycle. It transforms into a small package, a vehicle that can go anywhere with him. The city's magic carpet, the BROMPTON Superlight model launched in 2005, designed with a lightweight titanium rear frame and fork, represented an evolution for both the bike and the company. Shortly thereafter, Will Butler-Adams, one of the lead engineers on the project, took over the role of CEO. Now, as technical director, Andrew is solely responsible for engineering, and before he resigned in 2016, the future idea outlined in his original patent - a BROMPTON with an electric motor bicycle became a reality.",
    bikeTitle: "Folding Bike",
    bikeName1: "Companionship",
    bikeText1:
      "585 mm length, 565 mm tall, 270 mm depth, cleverly designed to transform into a small, compact package that always stays firmly in place. Grease or dirt can be prevented as they are sealed within the fold. The folded BROMPTON can be towed, stowed, glided and rolled!",
    bikeName2: "Freedom",
    bikeText2:
      "Experience freedom  traveling with our BROMPTON bicycles. You can store them in the trunk of a small car, cabs, ferries, trams, buses, you name it. Take your bike to meetings, cafes, libraries, or to the groceries. The functional design adapts to your tune and travels everywhere with you.",
    bikeName3: "High Performance",
    bikeText3:
      "Our bikes are designed to be suitable for moving around town and beyond, and to enjoy an efficient and comfortable ride. They are bikes that perform above and beyond their functionality, and offer you a BROMPTON-only bike ride like you've never experienced before, one that you won't get until you get your hands on a BROMPTON!",
  },
}

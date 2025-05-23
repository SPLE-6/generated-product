const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"Profile",


"KatalogKost",


"SewaKost",


"Riwayat",


"Payment",


"MyProperti",


"Payment",
"PaymentKredit",


"Home",
]))

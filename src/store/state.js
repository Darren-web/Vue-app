let defaultCity = "杭州"
try {
    if (localStorage.city) {
    defaultCity = localStorage.city
    }
} catch (e) {
  //empty
}
export default  {
    city: defaultCity
}
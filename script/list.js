const boxType = document.getElementById("box-type")
const selectList = document.getElementById("select-list")
const button = document.getElementById('addTask')

button.addEventListener("click", () => {
  const ulitem = document.createElement('li')
  ulitem.innerHTML = addTask.value
  list.append(ulitem)
  input.value = ''
})